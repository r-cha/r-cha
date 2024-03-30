---
title: Managing Dotfiles with ChezMoi
description: Migrating to a dotfiles manager from just plain git
pubDate: "Mar 29 2024"
---

I've been accumulating dotfiles for some time now, and keeping them in a [GitHub repository](https://github.com/r-cha/dotfiles) with submodules.
The big pain of that is that submodules aren't updated automatically, so my dotfiles repo gets out of sync from, say, my nvim repo.
Even as I type this, I realize that I haven't added my kitty config to my dotfiles repo!

So it's time to grow up and use a more formal dotfiles manager.

## Conditions

I don't ask for much here:
- Keep my dotfiles usable with or without the tool
- Make it easy to update from one machine and pull updates to another
- Account for slight machine-to-machine variation (e.g. work vs personal)

## Contenders

As you can see from the title, [chezmoi](https://github.com/twpayne/chezmoi) is the only contender.

I saw it on github who-knows-how-long ago and starred it for that special day, which, as it turns out, is today.

At it's core, it offers dotfile management via git, which is most of what I ask!
In addition, it boasts a handfule of features that I;m looking forward to trying out.
> templates (to handle small differences between machines),
> password manager support (to store your secrets securely),
> importing files from archives (great for shell and editor plugins), 
> full file encryption (using gpg or age),
> and running scripts (to handle everything else)

With that said, lets dive in together and see what happens!

## Getting Started

After a quick `brew install chezmoi`, we're off to [the races](https://www.chezmoi.io/quick-start/):

```sh
chezmoi add ~/.zshrc
chezmoi add ~/.config/kitty
chezmoi add ~/.config/nvim
```

`nvim/` definitely has some git-ignored stuff going on, so I'm even more curious to see how chezmoi handles it.

Since I already have a dotfiles repo, I make sure to `git pull` and branch to maintain a clean git history.

`git commit` immediately shows the error of my ways:

```
create mode 100644 dot_config/nvim/dot_git/objects/01/readonly_8c12b639fd1a4f91a70b64d1cc2f73b4adf2f8
create mode 100644 dot_config/nvim/dot_git/objects/04/readonly_b14f6f3b0870b426ef74d73abd2e30eeb0d4d9
create mode 100644 dot_config/nvim/dot_git/objects/0c/readonly_70b6eb17546f0752c31517a91bde7863988b85
create mode 100644 dot_config/nvim/dot_git/objects/14/readonly_525cb1fe5b7b2525961575b9311cade6c43e7f
create mode 100644 dot_config/nvim/dot_git/objects/1d/readonly_55659d71d77406ebf9ff8f5a50ffce17c7faab
create mode 100644 dot_config/nvim/dot_git/objects/1f/readonly_1d1d54681e59d7c08b6e6697bb377ff68c85a3
create mode 100644 dot_config/nvim/dot_git/objects/23/readonly_1a15863319f858fb15c9af6472032f155b426b
create mode 100644 dot_config/nvim/dot_git/objects/27/readonly_75c290176674a6ebea792f1867ced44e912816
create mode 100644 dot_config/nvim/dot_git/objects/2c/readonly_4f9d60114dd7d223b76dbf0924e028f2911e56
create mode 100644 dot_config/nvim/dot_git/objects/2e/readonly_cd719e9583d4e3adfa77ae9ef4e15711315bb0
etc...
```

which confirms that I should not have maintained nvim and kitty as submodules.

With that all cleaned up, I scroll a bit further in the guide to find that I could have just done

```sh
chezmoi init https://github.com/$GITHUB_USERNAME/dotfiles.git
```

which

> will check out the repo and any submodules and optionally create a chezmoi config file for you

but since my submodules weren't up to date anyway, I'm not too bothered.

## A Second Machine

Let's try to pull this over to my work machine!
Theoretically, I just need to install chezmoi and `chezmoi init --apply $GITHUB_USERNAME`.

Sure enough, that did it!
It's worth noting, I was not notified that it was completely overwriting my existing files.
One important overwrite needs to be amended, and it gives us a chance to try out some more advanced feature of chezmoi:
my .gitconfig, which needs to use my work email rather than my personal one.

## Templates

I made my .gitconfig into a simple [template](https://www.chezmoi.io/user-guide/manage-machine-to-machine-differences/) to handle the discrepancies:

```
{{- if eq .chezmoi.hostname "work" }}
email = me@work.com
{{- else }}
email = myself@home.com
{{- end }}
```

To test how all the syncing works, I made those changes on my personal machine, then ran `chezmoi update` on my work machine to pull the changes and apply them.
It worked flawlessly, confirmed by a `cat ~/.gitconfig`.

## Next Steps

That's all I really wanted to do today (before my configs diverged too far)!

That said, I look forward to using chezmoi to [install packages declaratively](https://www.chezmoi.io/user-guide/advanced/install-packages-declaratively/) and will update this guide accordingly when I do so.

Also, I have a Windows desktop that could benefit from the time I have put into configuring my tools on MacOS!
I will definitely try out chezmoi's cross-platform templating in the future.

I can't imagine why I would need to [sync secrets](https://www.chezmoi.io/user-guide/password-managers/) across my machines, but I'm happy to know it's possible.

## Conclusion

chezmoi is mostly what I was looking for.
It works differently than I expected (e.g. "dot_" prefixes), but the outcome is exactly what I wanted.

I'm certain it will easily handle my occasional updates to kitty or nvim configs and grow with me as I use it to automate more of my cross-machine life.
