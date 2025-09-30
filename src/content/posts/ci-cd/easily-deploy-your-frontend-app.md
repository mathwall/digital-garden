---
title: How to easily deploy your app to the internet
slug: easily-deploy-your-app
publishDate: 26 Sept 2025
description: Some feedback on my experience deploying this blog
---

![Illustration of woman using a meditation app](/assets/blog/casual-life-3d-meditation-crystal.webp)

I wanted to test several ways to deploy a simple app and train myself a bit on CI/CD.

## Buy a domain name on a DNS provider

I bought my domain name on Porkbun. Once you know which tool you will use for deployment, it will be super easy to configure the DNS records.

## Deploy to your domain name

### Vercel is fire

Super fast with no code.
vercel.com/new will allow you to:

1. create an account
2. import your git repo : very few information is necessary about the repo
3. Vercel deploys the website on the vercel domain as "production". You can already share your project.
4. Vercel watches for changes on the repo and updates the website whenever you push to `main`
5. when you create a new branch, Vercel automatically creates a "preview" version of your app with the branch content. This is absolute fire. It's so easy to share your work and test before merging to `main`. When you create a Pull request in Github, the Vercel bot writes a comment with your preview link for this branch. And this, with absolutely no configuration. I decided to keep Vercel for my development workflow.
6. you can easily add a specific domain name for a specific environment
   ... but I rather chose to try Github Pages and connect my domain name to this deployment
   Vercel is super cool to deploy as fast as lightspeed, but I wanted to train on tools that I had already had to use in production environment at big scale. So I wrote some GitHub Actions and chose to deploy to Github Pages.

### GitHub Actions gives you more options to customize the deployment

Several ways to deploy to GitHub Pages :

- either you set up your GitHub Pages with no code from the GitHub interface. It sets up a deployment automatically from a specific branch. Careful, Github says it can take up to 10 minutes to deploy after pushing to the branch. I did not try this option so don't know which visibility on the deployment process you can have.
- or you use GitHub Actions and you will be able to customize a bit more the build and deployment process. I chose this option.

For the Astro app deployment setup, I followed the Astro documentation instructions. The instructions are clear and easy to follow.

There is one issue that seems not very clean to me : Github Pages deploys by default to `[your_username].github.io/[your_repo_name]`. For the internal links of you app to work, you need to tweek them all so that their base URL corresponds to your repo name. This needs to be done in the Astro config and whereever there is an internal link inside the repo.

This is not an issue if you use your custom domain name.
And it's very easy :

1. add your domain name in the GitHub Pages Settings. It will show a red alert saying that the DNS is not configured correctly.
2. configure the DNS records in the DNS provider. On Porkbun, it's super easy becaure there are some "quick DNS configs" for popular services : I only had to click on "GitHub" and it created all the records for me. Then, I ran a new DNS check on the GitHub Pages configuration interface and once it was successful, I could enforce HTTPS on my website.

I don't have any preview of my branches with Github Pages. But the advantage of using this solution is that I made my hands a bit more dirty on the GitHub Actions. It gives me a bit more control on what happens when I push to `main`, and if I ever want to switch my deployment environment, I know that I will just have to update the `deploy` job of my deployment workflow.
