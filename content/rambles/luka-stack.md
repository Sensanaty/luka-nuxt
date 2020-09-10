---
title: The lu-ka Stack
description: This is the luka stack blah blah blah
---

# The lu-ka Stack

The first part of this article can be found [here](/luka). In that part, I quickly went over some basics regarding the changes made to the site over time. This part is going to be going more into the details about the stack that I chose for the latest version of the site, alongside any sort of challenges that I faced while making it.

## Considerations

Going into the project, I didn't want to make the same mistakes that I had made previously, with things being sort of spontaneously thought up on the spot as I was making things. I went into the project thinking about every page by itself and what it would require, then ultimately taking a much wider look at the entire project and how everything flows together. 

Early into my mental mapping of the site, especially since I was also fiddling with React at the time, I thought that a SPA would actually make perfect sense. After all, my pages are sparse in terms of content as a stylistic choice, and the entire experience is sort of ruined when you get those flashes of white followed by page loads for what are pretty simple pages. So, having a SPA router where page transitions are instantaneous was a big factor in my decision of utilizing Vue.

## Handling the Routes

So, I set out and got `@vue/cli` installed and bootstrapped a project with Vue Router and the Prettier linter as a base to start off with. After playing around a bit with some components - since the way it's done in Vue and the way it's done in React is a bit different - I started working on the pages themselves.

The way my router is setup, I have a `src/views` directory that houses the 5 main pages I have on the site (About, Contact, Projects etc.) as Vue components. Vue Router will simply take these components, and whenever someone is on the appropriate route, display the relevant component! It's very simple and intuitive, and works great. One thing that I wasn't sure how to handle were 404s, which isn't really a consideration usually for SPAs. The Router has a way of handling this though, with this short snippet:

```javascript
routes = [
    {
        path: "*",
        component: "404Page"
    }
];
const router = new.VueRouter({
    mode: "history",
    routes
})
```

The `history` option will have the Vue Router use the browser's History API to handle the user navigating to different routes, while the `path: "*"` bit simply means that any route that doesn't match any of the defined routes will point to the `404Page` component. It's not a true 404, of course, since the browser will never actually receive the proper 404 status code, but for a user it's a close enough experience.

Another thing I had to keep in consideration were the Rambles. Since these are basically blog posts, I needed a way to be able to create some text files (well, markdown in my specific case) and have the router automatically pick them up and create routes for them to the proper components.

This bit of code does exactly that:

```javascript
import RamblePosts from "@/assets/rambles/rambles.json";
routes = [
    {
        ...RamblePosts.map(entry => ({
            path: `/${entry}`,
            name: entry,
            component: () => import(`@/assets/rambles/${entry}.md`)
    }))
    }
]
```

By just adding a new entry in the JSON file, I can have a new Ramble component created from a markdown file. The route is the name of the file, so all I have to do is reference, for example for this particular ramble, `/luka-stack` in a `<router-link>` and there you go, navigated to the correct article! I also have some logic in my base `App` component for certain things. You might have noticed that I don't have my navbar visible on every page. My navbar is actually a component that gets conditionally rendered based on the route the user is currently on

```html
<NavBar v-if="renderNav" />
```
```javascript
export default {
  computed: {
    renderNav() {
        return !(
            this.$route.name === "Index" ||
            this.$route.name === "About" ||
            !this.$route.name
      );
    }
  }
}
```

It's a simple computed property that checks whether the route is the Index or About route and if you refer back to the way I handled the 404 you'll see I didn't give the `404Component` a name. So, if the route returns `undefined`, which it will, it also doesn't display the navbar. 

## Markdown to Vue Component

Once I figured out how to get my markdown files down as named Components with proper routes, the next step was actually getting the markdown *contents* to show up. At first I tried simply using `raw-loader`, but that made markdown kind of useless, since it would just load in Raw text, including all the special markdown characters. After some more digging, I found `vue-markdown-loader`. [This](https://www.npmjs.com/package/vue-markdown-loader) little package is wonderful, and does exactly what I needed. I actually didn't need to add anything anywhere in my code, my Router code handled the importing of those markdown files already! Now when you navigate to the Ramble route, it would actually display whatever was in the markdown, headers, subheaders, code tags and everything else included.

One small problem with the markdown components, however, was that you couldn't actually manipulate them directly and change anything about them other than whatever you can do in Markdown. Since these components were generated dynamically from some files, the entire component was basically premade and you couldn't just add in a Vue component anywhere you'd like. It wasn't a huge issue, since these are just simple articles anyways, but the method does have its drawbacks when it comes to making something more interactive or complex.

Oh, another caveat is that you can't have anchor tags to navigate to different parts of the markdown! The Vue router doesn't register the user clicking on a relative link like `#Considerations` to be a route change, so it does nothing. If I wanted this functionality, I would have to make my own logic that would manually trigger the Vue Router and handle it navigating to the proper relative URL location.

## Get in Touch... But How?

The next thing I had to figure out was the Form I have on my Contact page. Since this is a static site with no server backing it, I had to figure out a way to handle people sending me questions via my form somehow, and I didn't want to resort to things like TypeForm.

Since it's 2020, this problem was pretty simple as far as problems go considering the boom of Serverless architectures. I'm already using Netlify to serve my site, and Netlify has Form support! It's pretty much not more complex than just plugging in some Netlify keywords into the form, and just like that it gets picked up by Netlify and handles the form smoothly!

One small problem is that you do have to adapt your form a bit considering the site is rendered client-side, so the Netlify bots can't actually recognize your form at first. All you have to do is include a hidden form which has the same fields as your form in your `public/index.html` and you should be good to go.

As for the actual sending of the form, it's a very simple AJAX call.

```javascript
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                number: "",
                message: ""
            }
        };
    },
    methods: {
        encode(data) {
            return Object.keys(data)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
                .join("&");
        },
        handleSubmit() {
            const formWrapper = document.querySelector("form");
            formWrapper.innerHTML = "Sending";
             fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: this.encode({ "form-name": "contact-form", ...this.form })
            })
                .then(() => {
                    formWrapper.innerHTML = `Thanks! I'll get in touch with you soon at ${this.form.email}!`;
                })
                .catch(error => alert(error));
        }
    }
};
```

My form button has `@click.prevent="handleSubmit"` on it and my fields are bound with `v-model`. Simple, lean and it works great!

The other pages were all pretty simple. The index page is just a grid with some `router-links`. About is the same. The projects page consists of ProjectCard components, but these are fairly simple as well, they just have 4 simple props that I define in the main `Projects` component and that's it. 

If you want to take a look at the source code for `lu-ka.me`, open up the browser console for a neat easter egg, or go [here](https://github.com/sensanaty/lu-ka-vue).
