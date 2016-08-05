---
layout: post
title:  "Rules of Software"
short_description: "How to make software - Carson style"
description: |
  How to make software the Carson way.  Petty rules and when to break
  them to make software that is easy to deploy and easy to test. I'm
  just going to need a pint or two of your blood and probably your
  first born.
img: /img/posts/software_rules.jpg
---

## 1. Use a modern and popular VCS

I feel like this shouldn't have to be on the list, but seriously,
follow the pack on this one. I'm normally all about that underground
software choice that is technically superior but lesser know, but when
it comes to something like VCS, just take what everyone else is
currently developing tools against.  More people can collaborate,
deployment and testing integrations are easier, and shared knowledge
on this boring but essential piece of software are going to help you
make cool software that much easier.  Right now that is git.

### When to Ignore

Never.  Interview with someone and they are using CVS, just walk away
as they can't be saved 😜.

## 2. 1 Branch, 1 Commit, 1 Change, Past Tense.

Release notes suck to make, code reviews on diffs as they go over 100
lines quickly slide to worthless, simple explicit changes are easier
to verify through the deployment pipeline, and bug triage through
blame, history, and bisect go ten times faster with fewer commits.
Either fixup or squash on the branch your on, or squash on merge.
However you do it, avoid the bisect of "added a period" commit
messages that are murder on bug fixers.

The commit you make is the last thing you do, make the message past
tense to describe what happened leading up to the commit.  Bonus
points since your release master can just pipe `git log >
release_notes.md` with something like
[git-release-notes](https://www.npmjs.com/package/git-release-notes).

### When to Ignore

Ok, you have a branch going, it hasn't been reviewed, and you just
have to fix something to make it go. You get one, possibly two extra
commits/logical changes on your branch. i.e. Fixed config to not suck
for this change to work.

## 3. Two long living branches

One where developers merge to after code review/squash/tests that gets
deployed automatically on every commit/merge.  Developers are happy
because they get to see their changes immediately, product is happy
because they get to validate the change is what they want, and ops is
happy because they get a sneak preview of what breaks on release
deployment.

Branch Two where the development branch gets merged to when you want
customers to see the change. That branch kicks of the Continuous
Deployment pipeline (approvals, QA, etc).

### When to Ignore

You like to fly dangerously! Or you have super forgiving customers
(like yourself on a personal project, though I'm rarely that forgiving
myself).

## 4. Lint, Line Coverage, and Tests on every branch

Let your test infrastructure be annoying so your senior devs aren't.
Prevent everyone hating your expensive and generally awesome veteran
coders by keeping the hatred on the build bot that screams when there
is too much white space, lines are too long, a class doesn't have
enough methods to be useful, etc.

### When to Ignore

Lint, never, there are linters for everything, they teach you things
you never knew about and worth the educational value alone, let alone
security issues, and making code readable to yourself 6 months down
the road.  Tests and coverage, sometimes these don't make sense, like
a documentation project or something with so few moving parts you can
test every code conditional in a few seconds once every few months,
but that simplicity usually doesn't last long.

## 5. Pick two colors, any two colors, and forward safe migrations

This is more specific to server development than things like mobile,
embedded, or desktop applicaion projects, but to prevent three
branches, or some other process that slows things down, have the
release branch deploy to alternating environments for production.  In
addition to this giving you a release stack to QA before final
customer release it also gives you a fast fallback stance to a
previous release if it all catches on fire.

The catch for this is that backend storage models have to be forward
safe for at least one step. i.e. to rename a DB field you have to copy
to a field with the new name, deploy, be happy, then deploy the delete
of that field in the next release.

### When to Ignore

Budget starved, really fast deployment and rollback strategy (a good
PaaS like Heroku), and/or no backend.

## 6. Review, Review, Review

All code should be reviewed, even if the only reviewer is yourself
looking at your own GitHub PR and signing off.  Commiting directly to the
main branch without at least a cursory look at the diff, even if it is
a one character change, is worth every extra second this could
possibly take.

### When to Ignore

You feel like having a commit history like, and never being able to
track down when a bug got added:

![1296](https://imgs.xkcd.com/comics/git_commit.png)

