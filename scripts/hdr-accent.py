"""Generate src/assets/hdr-accent.png: a tiny HDR swatch of the dark-theme accent.

CSS colors cannot exceed SDR white yet, but browsers do render HDR images, so
links in dark mode paint their text with this swatch (background-clip: text)
on displays that report `dynamic-range: high`. The PNG is 16-bit and tagged
with a cICP chunk as BT.2020 primaries + PQ transfer, which Chromium and
WebKit read as HDR.

    python3 scripts/hdr-accent.py

Tune HDR_GAIN to taste: 1.0 matches the SDR color exactly, higher glows more.
"""

import struct
import zlib
from pathlib import Path

ACCENT = "ADCED7"  # Birren light blue, --color-accent in dark mode
HDR_GAIN = 1.8  # linear multiplier over the SDR rendering of ACCENT
SDR_WHITE_NITS = 203  # ITU-R BT.2408 reference white
SIZE = 4
OUT = Path(__file__).resolve().parent.parent / "src/assets/hdr-accent.png"

# Linear BT.709 (sRGB) to linear BT.2020.
BT709_TO_BT2020 = (
    (0.6274, 0.3293, 0.0433),
    (0.0691, 0.9195, 0.0114),
    (0.0164, 0.0880, 0.8956),
)


def srgb_to_linear(c: float) -> float:
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def pq_encode(nits: float) -> float:
    m1, m2 = 2610 / 16384, 2523 / 4096 * 128
    c1, c2, c3 = 3424 / 4096, 2413 / 4096 * 32, 2392 / 4096 * 32
    y = max(nits, 0) / 10000
    return ((c1 + c2 * y**m1) / (1 + c3 * y**m1)) ** m2


def chunk(kind: bytes, data: bytes) -> bytes:
    body = kind + data
    return struct.pack(">I", len(data)) + body + struct.pack(">I", zlib.crc32(body))


srgb = [int(ACCENT[i : i + 2], 16) / 255 for i in (0, 2, 4)]
linear = [srgb_to_linear(c) for c in srgb]
bt2020 = [sum(m * c for m, c in zip(row, linear)) for row in BT709_TO_BT2020]
pixel = [round(pq_encode(c * SDR_WHITE_NITS * HDR_GAIN) * 65535) for c in bt2020]

row = b"\x00" + struct.pack(">3H", *pixel) * SIZE
png = (
    b"\x89PNG\r\n\x1a\n"
    + chunk(b"IHDR", struct.pack(">IIBBBBB", SIZE, SIZE, 16, 2, 0, 0, 0))
    # BT.2020 primaries, PQ transfer, RGB (no matrix), full range.
    + chunk(b"cICP", bytes([9, 16, 0, 1]))
    + chunk(b"IDAT", zlib.compress(row * SIZE, 9))
    + chunk(b"IEND", b"")
)
OUT.write_bytes(png)
print(f"{OUT.name}: {len(png)} bytes, PQ code values {pixel}")
