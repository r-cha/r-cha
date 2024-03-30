---
title: Dotfiles with ChezMoi
description: Migrating to a dotfiles manager from just plain git
pubDate: "Mar 29 2024"
---

I've been accumulating dotfiles for some time now, and keeping them in a [GitHub repository](https://github.com/r-cha/dotfiles) with submodules.
Unfortunately, submodules aren't updated automatically, so my dotfiles repo gets out of sync from, say, my nvim repo.
Even as I began this, I realized that I hadn't added my kitty config to my dotfiles repo at all!

So it was time to grow up and use a more formal dotfile manager.

## Conditions

I didn't ask for much here:
- Keep my dotfiles usable with or without the tool
- Make it easy to update from one machine and pull updates to another
- Account for slight machine-to-machine variation (e.g. work vs personal)

## Contenders

As you can see from the title, [chezmoi](https://github.com/twpayne/chezmoi) was the only contender.

I saw it on github who-knows-how-long ago and starred it for that special day.

At it's core, chezmoi offers dotfile management via git, which is ultimately all I ask.
In addition, it boasts a handful of features that I'm looking forward to trying out.
> templates (to handle small differences between machines),
> password manager support (to store your secrets securely),
> importing files from archives (great for shell and editor plugins), 
> full file encryption (using gpg or age),
> and running scripts (to handle everything else)

With that said, lets dive in together and see what happens!

## Getting Started

After a quick `brew install chezmoi`, I was off to [the races](https://www.chezmoi.io/quick-start/):

```sh
chezmoi add ~/.zshrc
chezmoi add ~/.config/kitty
chezmoi add ~/.config/nvim
```

`nvim/` definitely had some git-ignored stuff going on, so I was curious to see how chezmoi handled it.

Since I already had a dotfiles repo, I made sure to `git pull` and branch to maintain a clean git history.

`git commit` immediately showed the error of my ways:

```
create mode 100644 dot_config/nvim/dot_git/objects/01/readonly_8c12b639fd1a4f91a70b64d1cc2f73b4adf2f8
create mode 100644 dot_config/nvim/dot_git/objects/04/readonly_b14f6f3b0870b426ef74d73abd2e30eeb0d4d9
create mode 100644 dot_config/nvim/dot_git/objects/0c/readonly_70b6eb17546f0752c31517a91bde7863988b85
create mode 100644 dot_config/nvim/dot_git/objects/14/readonly_525cb1fe5b7b2525961575b9311cade6c43e7f
create mode 100644 dot_config/nvim/dot_git/objects/1d/readonly_55659d71d77406ebf9ff8f5a50ffce17c7faab
etc...
```

which confirmed that I should not have maintained nvim and kitty as submodules.

After fixing that up, I pushed my changes and merged my chezmoi branch to main.

## A Second Machine

It was time to try to pull this over to my work machine!
Theoretically, I just needed to install chezmoi and `chezmoi init --apply $GITHUB_USERNAME`.

Sure enough, that did it!

It's worth noting, I was not notified that it was overwriting my existing files.
However, all chezmoi commands implement verbose and dry-run flags, so starting there likely would have brought that to my attention.
The only important file that was overwritten was my .gitconfig, which needed a different email at work.
this gave me the option to try a slightly more advanced feature of chezmoi:

## Templates

I made my .gitconfig into a simple [template](https://www.chezmoi.io/user-guide/manage-machine-to-machine-differences/) to handle the discrepancies:

```
{{- if eq .chezmoi.hostname "work-laptop" }}
email = me@work.com
{{- else }}
email = myself@home.com
{{- end }}
```

To test how all the syncing works, I made those changes on my personal machine, then ran `chezmoi update` on my work machine to pull the changes and apply them.
It worked flawlessly, confirmed by a `cat ~/.gitconfig`.

## Next Steps

That's all I really wanted to do with chezmoi (before my configs diverged too far)!

That said, I look forward to using chezmoi to [install packages declaratively](https://www.chezmoi.io/user-guide/advanced/install-packages-declaratively/) and will update this guide accordingly when I do so.

Also, I have a Windows desktop that could benefit from the time I have put into configuring my tools on MacOS!
I will definitely try out chezmoi's cross-platform templating in the future.

I can't imagine why I would need to [sync secrets](https://www.chezmoi.io/user-guide/password-managers/) across my machines, but I'm happy to know it's possible.

## Conclusion

Lets review my conditions:

> Normal dotfiles

Technically both yes and no.
The repo itself renames things, changing the prefix from "." to "dot_",
but after a `chezmoi apply`, the populated files have the right names.
Plus, there are multiple [export options](https://www.chezmoi.io/user-guide/advanced/migrate-away-from-chezmoi/), so I'll call this a win.

"Normal" is also a bit of a stretch for template files, but they're a necessity for per-machine tweaks.
And again, there are export options, so 🤷🏼‍♂️

> Easy syncing

Easy as git ✅

> Per-machine tweaks

Templates, covered above ✅


Overall, chezmoi is what I was looking for.
It works differently than I expected (e.g. "dot_" prefixes), but the outcome is exactly what I wanted.

I'm certain it will easily handle my occasional updates to kitty or nvim configs
and grow with me as I use it to automate more of my cross-machine life.
