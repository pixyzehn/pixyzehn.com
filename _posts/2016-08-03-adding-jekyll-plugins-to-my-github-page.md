---
layout: post
title: "Adding Jekyll plugins to my Github page"
date: 2016-08-03 07:40:00 +0900
tags: jekyll
comments: false
---

I thought I cannot use Jekyll plugins as long as I use Github hosting. Since Jekyll 3.0 version, we were able to use some Jekyll plugins. I didn't know that, so I'll share about that.

[Adding Jekyll plugins to a GitHub Pages site](https://help.github.com/articles/adding-jekyll-plugins-to-a-github-pages-site/){:target="_blank"}

> GitHub Pages officially supports the Jekyll plugins found in the GitHub Pages gem. For the exact versions of the Jekyll plugins that GitHub Pages supports, see this list of GitHub Pages dependencies. Other plugins are not supported, so the only way to incorporate them in your site is to generate your site locally and then push your site's static files to your GitHub Pages site.

According to that, we can officially use the following plugins.

- jemoji
- jekyll-mentions
- jekyll-redirect-from
- jekyll-sitemap
- jekyll-feed

### How to install

What you have to do is only to configure your `_config.yml` file by adding these plugins.

```ruby
gems:
  - jekyll-sitemap
  - jekyll-paginate
  - jekyll-seo-tag
  - jekyll-feed
  - jekyll-mentions
  - jemoji
```

In my case, I decided to manage them by using bundler like this.

```ruby
group :jekyll_plugins do
  gem 'jekyll-sitemap'
  gem 'jekyll-paginate'
  gem 'jekyll-seo-tag'
  gem 'jekyll-feed'
  gem 'jekyll-mentions'
  gem 'jemoji'
end
```

Now I got emoji :+1: by jemoji. Also I can use mention. Thanks for @parkr :) The mention doesn't send notifications.
`jekyll-sitemap` automatically create your sitemap like [this](http://pixyzehn.com/sitemap.xml){:target="_blank"}.

In conclusion, these plugins enable us to manage site more easily, simply. Happy coding in jekyll 3.0 :+1:
