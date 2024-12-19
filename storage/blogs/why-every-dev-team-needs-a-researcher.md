---
title: "Why Every Dev Team Needs a Researcher"
date: "2024-12-19"
updated: "2024-12-19"
collections:
  - "thoughts"
  - "devlog"
coverWidth: 16
coverHeight: 9
status: "published"
excerpt: Why having a dedicated researcher can improve your product
---

For a wide variety of products, maintenance is the key to success. Products don't get the best results just after releasing them. Giving them time to grow and flourish is one of the key factors in making your product better.

## What is a Researcher?

 Dev teams have a lot of roles, front End, Back End, DevOps, UX UI and to keep all of them in update is a job that no one does. And my thoughts for this come from a very different place. It was while reading a story on Warhammer 40k. Briefly, in Warhammer 40k there's an army of 20 legions, and in that army, the first legion is given a very specific role.

- They research new tactics, weapons, and strategies
- They have ample resources to fund their work
- They actively participate in warfare, deploying their new findings
- They push and distribute their findings throughout the legions

The 4 points I mentioned above are important because this translates into the dev team. Dev teams in general should have a researcher,

- A person who is actively finding places to refactor and new technology for the product
- A person who has ample time and interest for doing research
- A person who actively participates in the codebase of the product
- A person who is good at distributing that knowledge throughout the team

This role is needed because of many reasons. Developers in general are focused on developing a given feature. And they probably don't want to spend more time doing research on doing it. And the task of doing that can't really fall into the hands of an entity who actively doesn't participate in the said codebase (i.e., Product Manager), because you need to know the product in and out before trying to improve it. A person with a clear mind and ample time can use their interest to refactor and improve the product in many ways.

## A Researcher in Practice

Now this is all talk, but we need results, right?

So a few months ago, my Team Lead (the researcher in our team) wanted me (a measly developer) to rewrite a very niche part of our codebase in `Rust`. Now this part of the codebase works fine and it's one of the core parts of our product; it does not give any errors and it has been like that for a few years. Now engineers in general have the saying "Don't try to fix something that's not broken", but as an engineer, my job is to optimize. And as such, I rewrote the thing in Rust.

With a ton of testing, the thing was released. And the results were phenomenal - before, it could process 100 jobs in 10 seconds. Now in the rewritten Rust version, it does 300,000 in 10 seconds.

Not only does something like this cut costs, but it also makes the code a lot cleaner and efficient.

And that's why every dev team needs a `Researcher`.
