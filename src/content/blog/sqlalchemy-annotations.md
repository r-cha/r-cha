---
title: "SqlAlchemy Annotations"
description: "Reduce, Reuse, Recycle"
pubDate: "Oct 10 2024"
---

One of the great joys of python is [SqlAlchemy ORM](https://docs.sqlalchemy.org/en/20/orm/), specifically Mapped Classes.
If you map enough columns, though, you'll very quickly find yourself wanting to reuse a mapped type across different tables, or on different columns in the same table.
I often reach for composition in this situation, e.g. to centralize logic for primary keys.

```python
class PrimaryKeyMixin:
    id: Mapped[int] = mapped_column(
        BigInteger.with_variant(Integer, "sqlite"),
        primary_key=True,
        autoincrement=True,
    )

class MyModel(PrimaryKeyMixin, Base):
    ...
```

<aside>
This example deals with differing functionality of dbapis (sqlite doesn't support autoincrement for BigInteger), but I've also used this pattern for audit logging, polymorphic association, etc.
</aside>

However, today that was NOT the solution I needed, and it took me way too long to find the actual syntax for my need: [Annotations](https://docs.sqlalchemy.org/en/20/orm/declarative_tables.html#mapping-whole-column-declarations-to-python-types).
In my case, what prompted my need for Annotations was the presenve of many differently-named columns that all needed an appropriate numeric type.
Annotations are a useful way to reuse `mapped_column`s in a way that encourages best practices and avoids silly mistakes.
Why write this

```python
class MoneyTable(Base):
    amount: Mapped[Decimal] = mapped_column(Numeric(10,2))
    quantity: Mapped[Decimal] = mapped_column(Numeric(10,2))
    cash: Mapped[Decimal] = mapped_column(Numeric(10,2))
```

when it is prone to forgetfulness (falling back to the default Decimal parameters), higher in maintenance costs (changes in my places if we want to change its configuration), and otherwise very repetitive?

Instead, use Annotations to share this type everyhwere it's needed.

```python
MoneyDecimal = Annotation[Decimal, mapped_column(Numeric(10,2))]

class MoneyTable:
    amount: Mapped[MoneyDecimal]
    quantity: Mapped[MoneyDecimal]
    cash: Mapped[MoneyDecimal]
```

This is obviously a contrived example, but you can imagine reusing this across your codebase as needed.

Let me know what applications you find for Mapped Column Annotations in your python app, and make sure you bookmark [the documentation](https://docs.sqlalchemy.org/en/20/orm/declarative_tables.html#mapping-whole-column-declarations-to-python-types)!
