---
title: lu-ka.me
description: The website that you're currently on, and the numerous changes it went through in the past, present and most likely, the future.
---

# lu-ka.me

## A personal website built from scratch by what was a complete noob

This site you're on, **lu-ka.me**, has gone through quite the number of changes despite its relatively simple looks, the large majority of them being on the hidden, codebase side of things. It's actually quite the journey, that started off with me as a complete beginner to the whole web development world, to (as some friends of mine would remark) *finally* being finished nearly 2 (maybe even 3?) years after me having bought the domain.

## The humble beginning

I started working on the site shortly after I moved back to Bali from the Netherlands. I was pursuing a Computer Science degree but felt like the academics and the things that we were taught in the course just weren't up my alley, with there being far too much theory being taught and very nearly zero practical software development of any kind being taught. So, I decided to change things up a bit and do things more in-line with how I'd like them to be done, meaning a lot more time spent actually creating things instead of learning about how to, in theory, create things.

I started off just googling for free online development courses where I found a big number of resources online, to the point where it was overwhelming! I decided that the easiest and best thing to do was to just close my eyes, throw a methaphorical dart at my screen and stick with the first reliable-looking resource I landed on. And so, my webdev journey began with [The Odin Project](https://www.theodinproject.com/).

It was a slow but steady rise from there. I did the Projects as they came along, and about halfway through decided to put my webdev skills to the test. What better way than creating my own online portfolio!

## Early Versions & Struggles

Since the very beginning, I really liked the idea of having the homepage that I have currently, with the 4 rectangles, 4 letters and 4 links. It's awfully convenient that my first name is 4 letters long so that this cool looking chessboard layout could actually work somewhat decently well! Now, the problem was, I wasn't exactly a CSS (or even HTML) pro by that point, having only meddled with webdev stuff for a few short weeks with the Odin Project. I had no idea how to even begin, since the only website layouts I even made by that point were simple, classic, linear pages that go from top to bottom. After some hours of digging I found out about some beautiful new (at the time) CSS features called Flexboxes and Grids! The syntax at first was kind of confusing, but I really grew to like CSS grids a lot and proceeded to use them literally *everywhere*.

The only problem was, I was still overcomplicating things immensely. My grids were absolute monstrosities of complexity, with grids built on top of grids on top of grids on top of grids...

I don't have the original source code since I migrated the repo a few times since then and wiped git histories, but it looked something like this. Don't forget that I wasn't aware `SCSS/LESS` even existed back then, either!

```css
.wrapper-div {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-template-areas: 
        "box-top-left box-top-right"
        "box-bottom-left box-bottom-right";
}

.box-top-left {
    display: grid;
    grid-area: box-top-left;
    grid-template: repeat(12, 1fr) / repeat(12, 1fr);
    /* This is where things got REALLY fun...*/
    grid-template-areas: 
        ". . . . . . . . . . . ."
        ". . . . . . . . . . . ."
        ". . . . . . . . . . . ."
        ". . . . . . . . . . . ."
        ". . . . . . . . . . . ."
        ". . . . . . . . . . . ."
        ". . . . . . . . . . . ."
        ". . . . . . . . . . . ."
        ". . . . . . . . . tl-le-b tl-le-b ."
        ". . . . . . . . . tl-le-b tl-le-b ."
        ". . . . . . . . . . . tl-li-w"
        ". . . . . . . . . . . tl-li-w";
}

.top-left-letter-black { grid-area: tl-le-b }
.top-left-link-white { grid-area: tl-li-w }
```

That mess of a pattern would repeat for each of the 4 boxes, not to mention that I didn't even bother giving the buttons or letters a joint, combined class of any kind, I would just give them all their own unique class definitions. Even looking at it makes me laugh with how ridiculously I did things at first. Why did I make a 12x12 grid if I'm only going to populate the corners? Why are all my `grid-area` declarations so vaguely named? Why am I doing 8 separate classes for what are functionally identical elements?

But, when all was said and done, I actually did it. I finished the index page! Maybe a few hundred lines of CSS too many, but hey, you can't argue with the results! So, I happily saved my work so far and decided to setup my hosting somewhere the very next day.

Amazingly, being as new to development as I was, I found the whole "getting your website to show up somewhere" task pretty easy. I just went onto [Firebase](https://firebase.google.com/) and followed their docs to get my site set up. After some fiddling around with `CNAME` records and Cloudflare DNS shenanigans, voila! The site was up for the world to see in all its bloated, unminified glory! After finishing the index page though, I hit a bit of a slump in terms of work on the site. I didn't really have any projects of any kind to show off, and it was still early into my development career, both professionally and casually. It didn't help that I didn't really know what I wanted out of the site beyond the index page at first, so I decided to just leave it as it was for the time being.

## Le Wagon

Some time passed, with me spending as much time as I could dedicated to doing the Odin Project challenges. While self learning is great and it was going great for me, I got a bit bored of simple HTML/CSS/Javascript projects that had no real scope or depth to them, and getting to a stage where anything bigger than that would be possible seemed to be oceans away still with the progress made so far. That's when I decided to look around for some sort of guided resources, something a bit more intensive and hands-on. And thus, I found the excellent [Le Wagon](https://www.lewagon.com/) bootcamp.

As Le Wagon advertise themselves, they're an intensive 9-week course where they barrage you with a sea of knowledge regarding fullstack web development, with their primary focus being Ruby & Rails. The bootcamp really was taking the previous weeks of me self-learning web dev concepts and accelerating that to breakneck speeds. I learned a *lot* during the bootcamp, and so decided to take what I've learned and apply it to my own personal site.

## The First Rework

When I first started adding things onto the website, I very quickly realized how horrifically bad I did things the first time around. Changing a single CSS class or even the values would break absolutely everything, and thanks to my incredibly vague class names and poor planning of the layout, it was basically an attempt at tiptoeing around a minefield. It didn't take me particularly long to reach the decision of scrapping everything and starting from scratch. The results were *much* better.

The new setup was still fairly simple, with me just using [Gulp](https://gulpjs.com/) to compile and minify some CSS together, combine JS files and mini+uglyfying them, copy images and enable some HTML templates to be used. It was nothing fancy, but it worked great for my purposes at the time and it was fairly easy to adapt any kinds of changes. I wanted to avoid Webpack for this site, since I felt like a tool like Webpack would've been major overkill since I wasn't really going to be using many scripts on the site.

An immediate imporvement I made was majorly simplifying the markup for my Index page grid. It went from the monstrosity above to this:

```css
.body-wrapper {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
}

.body-box {
    display: grid;
}

.body-box.top-left {
    grid-template: 2fr 1fr minmax(100px, 120px) / 1fr 1fr 0.5fr minmax(100px, 120px);
    grid-template-areas: 
        ". . . ."
        ". . letterL ."
        ". . . aboutBtn";
}
```

As you can see, this code is *massively* simpler and clearer. It's still a tiny bit confusing and could definitely be simplified further, but that's a caveat with the kind of layout that I was going for. Manually adjusting each grid in order to position things properly is simply unavoidable. My goal of smaller, more thought out and probably most importantly, easier to edit files was achieved and I was really happy about that! The entire site was much leaner in every way, getting it production ready was a simple case of me telling `Gulp` to compile everything and running the Firebase CLI tool to deploy my new build. It definitely wasn't optimal though, there was a clunkiness to the entire setup that was painfully ever-present in the back of my mind, it all felt like I was doing things a bit too manually.
 
 Unfortunately the past trend of me not making any real progress with the website continued on once I finished the looks of my About and Contact pages. Maybe it was laziness, but maybe also it was me knowing that the remaining 2 pages, the Projects and Rambles pages, were going to be the most complex and especially painful to do in plain-old HTML/CSS/Javascript.
 
 ## Introducing... Vue!
 
 With my site sitting in a limbo state for a while, I finally decided to finish the damn thing once and for all, and having seen the pitfalls and drawbacks of my previous attempts, I decided to use this as a perfect opportunity to learn how to make things using [Vue](https://vuejs.org/). I have another project I'm currently working on that I'm doing in React, so Vue was a perfect choice in every way.
 
 Straight from the start, getting Vue setup is amazingly easy. You just run the appropriate `vue-cli` commands and you get a fully functional Vue app ready to be toyed with. One feature of Vue that I was excited for was the modular CSS support it offers, where each component actually has its own stylings declared right in the file! I quickly fell in love with the way Vue does things. I got my Vue Router setup with my 5 main pages, and the entire process of getting the pages to show was smooth as butter. Just some simple templates with some helper JS functions thrown about (for example, the header is conditionally shown based on the route) and you've got a smooth site that's a genuine joy as a developer to work on.
 
 To go back to the Index page once more, utilizing the power of `SCSS` made a dramatic difference in terms of simplicity and conciseness. The markup for my index page grid went from OK to amazing very quickly:
 
 ```scss
.index-wrapper {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
} 

.index-box {
    display: grid;
    
    &.top-left { 
        grid-template: 3fr 1fr 110px / 1fr 1fr 110px;
    }

    &.top-right { 
        grid-template: 110px 1fr 3fr / 1fr 1fr 110px;
     }
}
```

Being able to simply nest the selectors made the code a lot more readable and workable and even makes CSS fun to make since it behaves more like an actual language rather than a simple styling document. I've also moved the entire website from the Firebase + Cloudflare combo that I had going before to a Netlify setup, where I implement the powerful features Netlify has to offer such as automatic branch deploys, the Netlify serverless form functionality, their easy custom domain and SSL setup. At the end of it all, a somewhat daunting task that I never looked forward to (production deployments) turned into something that I use regularly as a testground for changes, especially using their split branch deploy capabilities. Having an experimental feature branch that Netlify automatically deploys changes from in less than a minute overall is a joy to work with because finding production bugs and fixing them takes an impressively small amount of time.

To keep an already long Ramble short, I've split it in two. You can read the next part, where I go a bit more into the nitty-gritty technical side of things [here](/luka-stack).
