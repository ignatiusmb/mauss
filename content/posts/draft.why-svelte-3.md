---
title: Svelte 3 - Why I Use It
tags: tech, svelte, javascript, framework
description: Why I use Svelte 3 and what's so great about it
---

Web development, in the front-end especially, is a chaotic mess that I might've avoid if I knew it from the beginning. Even after several years, I would probably still advice those whose going to dive into the front-end rabbit hole to stop and turn back right now... that is if it weren't for Svelte.

JavaScript is easy, HTML and CSS especially, why do they need to make it complicated and over-engineer everything to the point it got too complex and become tedious to work on.

> Should it really be *that* complicated?

That's the question you should ask yourself before you dive into any new tools or technologies out there. You should really do your best to avoid tools that doesn't make the dev experience one of their top priorities.

## How did I found out about Svelte

I started my journey with just plain HTML, CSS, and vanilla JS for around 2 months. Yes, it was easy, clean, fast, and nice to work with. But, as it becomes bigger and more complex, I keep repeating myself and ended up creating some helper functions and modules for me to reuse. Little did I know, I was creating my own UI framework / library.

Although, not everything was in vain, I learned a lot about npm, how modules work and how I can use or even create my own packages and publish it. But, it was still a lot of work just to get everything working correctly together, and I haven't even written the actual application.

Some time later, I joined a team to work on a website, and that's when I learned about React I've immersed myself and tried React for almost a year, but I just couldn't continue working with it. It doesn't feel like JavaScript and everything seemed like a complicated mess of spaghetti code, even after all the efforts to organize it as components within folders. I was dissatisfied and couldn't imagine working with it anymore, it doesn't seem to align with how I manage and write my code.

By the end of 2018 till early 2019, I found out about Vue and immediately fell in love with it. It feels like it has everything I dreamt of, with its template syntax, writing HTML, JS, and CSS in one file and being able to reuse that file (component) multiple times. It feels so good because that's what I thought web components should be.

But, alas, after a couple of months using it, I was still unsatisfied. It felt like I need to learn a lot more about Vue and how it handles stuff rather than develop and use my existing JS knowledge. The usage of `this` keyword really over-complicates stuff that shouldn't have to be. Even though I said that it feels like everything I dreamt of, it's still incomplete and hasn't checked all of the list, and as I use it more and more, the unchecked list seems to get bigger and longer.

That was mid-2019, around 2-3 months after Svelte 3 was released, I was just surfing through the web and stumbled upon [freeCodeCamp 2019 RealWorld Comparison](https://www.freecodecamp.org/news/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075/). At that moment, I immediately fell in love with Svelte. This was my first encounter with Svelte.

## What is Svelte and the philosophy behind it

Continuing from the previous section, [2019 RealWorld Comparison](https://www.freecodecamp.org/news/a-realworld-comparison-of-front-end-frameworks-with-benchmarks-2019-update-4be0d3c78075/) by freeCodeCamp really piqued my interest in all those frameworks, especially Svelte with its minimal transfer size and LOC written.

We knew from our past trends that React or Vue are libraries that gets bundled with your application and served to your users, and Angular or Ember are frameworks that might or might not get bundled with your apps too.

> [Svelte is a language.](https://gist.github.com/Rich-Harris/0f910048478c2a6505d1c32185b61934)

It was first introduced as a UI framework and unlike others, it shifts work out of the client into the compiler, but it's still a framework nonetheless. Taken straight from the creator's words itself, **Svelte is actually a language**. It's an attempt to answer a question that many people have asked, and a few have answered: what would it look like if we had a language for describing reactive user interfaces?

It's different because it was made by thinking inside the box. Designed specifically so that all those years of experience using HTML, CSS, and JS doesn't need to be discarded and instead you can build on top of those because it extended those languages.

- It would extend HTML by adding JavaScript expressions in markup, directives for controlling behaviour and reacting to input, syntax for using conditions, loops and asynchronous values
- It would extend CSS by adding a scoping mechanism that kept styles from clobbering each other
- It would extend JavaScript by making reactivity a language primitive

![Transfer size comparison in KB#f](https://cdn-media-1.freecodecamp.org/images/DRmH8Fz15DLxXguz9d8NR0eVanX0U9xW9jom "Transfer size in KB — fewer is better")

I read through the docs and it just connects immediately, everything was so much simpler, and the best part is that we're just writing with the knowledge we already knew, just HTML + CSS + JS with just a few markup addition from the Svelte syntax that just make sense.

A couple of months later, I stumbled upon this talk by Rich Harris. This might be the turning point in my web dev career, as I watch his talk, I was both surprised and amazed by his talk. It was eye-opening, I felt like my eyes were blindfolded this whole time because of everyone around me only talking about React and nothing else. I really can't explain it to you better in any words, you really need to watch and listen to it by yourself.

![!YouTube#hb](AdNJ3fydeao "Rich Harris - Rethinking reactivity")

This was released in the same time as the announcement of Svelte 3 stable release After hearing his talk, I wanted more, I needed to know more from Rich, and immediately after it YouTube suggested his other talk a couple months later, it explained another side of Svelte where it tries to bring back the golden age of web development, back when everyone relied on jQuery to unite and normalize both the developer experience and the website itself.

> Frameworks are not tools for organizing your code, they are tools for organizing your mind

This was one of the quote Rich showed us in his talk and it's important for all of us to know this. There will absolutely be no one that will force you to use a certain framework or dialect to build your apps with (except your employer/company), but for personal projects it's really up to you. Myself including, again, this is just an article of why **I** chose to use Svelte, and why you **should consider** using it.

> You can use any framework or libraries you prefer, but good ones will guide you to organize your mind better and build your basics correctly so you can use any tools later on with no problem.

![!YouTube#hb](BzX4aTRPzno "The Return of 'Write Less, Do More' by Rich Harris | JSCAMP 2019")

## All the good things

Let's start by saying that Svelte is by far the easiest and most intuitive one to learn from my experience, it has almost zero learning curve. If you know basic HTML, CSS, and JS, you can definitely write a Svelte app.

Svelte homepage also explained everything well, feel free to skip to the next section if you've seen it, but in case you haven't, here's a quick summary and links for you to look at:

- [[Write less code](https://svelte.dev/blog/write-less-code)] Build boilerplate-free components using languages you already know — HTML, CSS and JavaScript
- [[No virtual DOM](https://svelte.dev/blog/virtual-dom-is-pure-overhead)] Svelte compiles your code to tiny, framework-less vanilla JS — your app starts fast and stays fast
- [[Truly reactive](https://svelte.dev/blog/svelte-3-rethinking-reactivity)] No more complex state management libraries — Svelte brings reactivity to JavaScript itself

The last article is also their introductory blog post, but you can probably skip it if you've seen Rich's first talk about rethinking reactivity above.

### Supercharged batteries included

I know most of you probably hates CSS or just doesn't like writing them and uses some sort library, but as a Front-end developer you're bound to know CSS anyway. Rich really said it best in his post closing statement.

> [Love it or loathe it, you must at least learn it](https://svelte.dev/blog/the-zen-of-just-writing-css)

A proper Front-end framework should come with a built-in styling solution, and Svelte provides that by letting you freely style your components with just plain CSS.

- Styles (`<style>`) are statically scoped to each components &mdash; and "it's real CSS rather than some camelCased quotes-everywhere impostor", we can take advantage of emmet, existing DevTools, and all the good stuff writing plain CSS has.
- Built-in transitions and animations with `transition:fn/in:fn/out:fn` and `animate:fn`
- Easy head management with `<svelte:head>`
- Easy class toggling on specific elements with `class:name`
- Built-in and easy to use state management with `svelte/store`
- and probably a lot more that's useful or important to some of you

### Truly reactive, easy mutability, no complex state management

Something I've always despise and hated using in React is its `useState`, but you can throw all of that in Svelte, write plain JavaScript and everything will work for you. You don't need to know or think about a certain variable's state. If you need it to be mutable use `let`, else assign it as a `const`. It's plain and simple, everything you know about vanilla JS will work.

```svelte
<script>
  let i = 0;
</script>

<span>Counter: {i}</span>
<button on:click={() => (i += 1)}>Increment</button>
```

### Easy two-way binding

Need to make a form, capture and prevent it's default submit event, while also binding the input value? Easy.

```svelte
<script>
  let username, password;
  function submit() {}
</script>

<form on:submit|preventDefault={submit}>
  <input type="text" bind:value={username} placeholder="Username">
  <input type="password" bind:value={password} placeholder="Password">
</form>
```

### Stores - built-in state management for sibling or nested components

Need a variable to be accessible across the whole app or between components? Super easy.

```javascript
~stores.js
import { writable } from 'svelte/store';
export const counter = writable(0);
```

We'll have a file called `stores.js` that will export our writable/readable stores. We can then use it in our `.svelte` files. There are 2 ways to access these stores, there's the generic JS way of calling `.subscribe` and `.set` methods. But, I highly suggest you to always use the syntactic sugar Svelte has provided for us whenever possible, especially if you're using it inside a `.svelte` file.

```svelte
<script>
  import { counter } from './store.js';
  const increment = () => ($counter += 1);
</script>

<span>Counter is at {$counter}</span>
<button on:click={increment}>Increment</button>
```

The most important reason to use `$` to access your stores is so that you don't need to manually unsubscribe the store, potentially causing memory leak. The Svelte compiler is highly optimized if it comes to their special dollar sign `$` syntax and will handle everything for you. The only reason for you to use the store methods is when you're accessing it in a JS file.

### Hand-carry and no baggages

You know the struggle and pain of having to carry a huge baggage when you're traveling, it's an even more pain when you have to wait for you baggage in the conveyor belt. Compare that to when you're just bringing your essentials in a hand-carry.

Now, imagine that but with Svelte app as your essentials in your hand-carry. It compiles and prepares everything for you, packed in an extremely small and lightweight bundle for you to carry and go to your destination quickly.

### No virtual DOM

Is real DOM actually better than virtual DOM (vDOM)? **Yes**.

**TL;DR**: Your application starts faster because it builds itself beforehand in the compile step rather than building it in the client-side. Read on to learn more about the supporting theories and researches.

Let's take a look at the question "[Does it scale?](https://github.com/sveltejs/svelte/issues/2546)". Here's another summary from the original comment

- Theoretically, yes there is an inflection point. But, you're unlikely to hit that inflection point on any given page of your app
- The incremental cost of Svelte components isn't that high
- The initial bundle size is the one that really matters
- Compiler-centric means we can vary the target output
- Bundle size is only one facet of the Svelte experience

Immediately, for the first point is taken down, [halfnelson](https://github.com/halfnelson) (creator of [Svelte Native](https://svelte-native.technology/)) has [made his research](https://github.com/halfnelson/svelte-it-will-scale) and his [conclusion in this comment](https://github.com/sveltejs/svelte/issues/2546#issuecomment-678845774) describes it best

> You would need to bundle 3x the amount of components currently in the svelte website (no code splitting) to meet the size of similar amount of React component source + Libs

Another one from the Discord channel, which is also compiled and written well in his repository at <https://github.com/halfnelson/svelte-it-will-scale>

- [[1](https://discordapp.com/channels/457912077277855764/479653552869081089/747062733970866248)] "The crossover point that Rich mentioned looks to be about 120Kb of component source",
- [[2](https://discordapp.com/channels/457912077277855764/479653552869081089/747062979807281232)] "for context, to get my 70 components for regression, I had to combine 3 different svelte projects (svelte website, svelte realworld, and svelte hn)",
- [[3](https://discordapp.com/channels/457912077277855764/479653552869081089/747063019443453982)] "and they only got me to 74KB combined",
- [[4](https://discordapp.com/channels/457912077277855764/479653552869081089/747063418078494720)] "react got me over the 120KB mark by combining the components from react-realworld, react-native-website, and builderbook"

Another take on real DOM vs vDOM: <https://blog.bitsrc.io/react-vs-sveltejs-the-war-between-virtual-and-real-dom-59cbebbab9e9>

### Amazing performance and rapid-application development

I started writing all my new websites in Svelte, and slowly converts my old ones too. The developer experience is super nice and our bundle isn't compromised by its size nor performance either. This is taken from my personal experience, so it may vary between others, but I've been able to (actually) finish more projects and I'm able to do it quicker than previously.

I could also easily write a single component and reuse it everywhere in my projects, so much so that I made my own [Elements](https://github.com/ignatiusmb/elements) package filled with all of my handmade elements. Now, I can quickly initiate a new project in seconds and have an app in a matter of hours.

Both points above was really the biggest selling point for me to choose Svelte over others. If you skipped to this part, you might want to read about the philosophy behind Svelte to get the context of what I'm referring to here.

### Et cetera

There are some other things such as nice developer experience, good documentation, a11y linting, and other fun and useful stuffs. But, I do think that all of this is a crucial part of every framework, especially good documentation. It's a must and I might not move if it turns out that the documentation is sparse or it doesn't have a nice developer experience. But sure, Svelte has all of this.

## Potential drawbacks

It seems too good to be true, doesn't it? Because it actually is! Well, at least for me, but it still has a lot of room for improvements and some of them you can even take part in!

### A compiler with its own language

Its advantage is probably is a drawback to some of you. Svelte is to its core a compiler, and you can't just write some HTML, import the library and expect it to run in the browser. You can prototype in the [REPL](https://svelte.dev/repl/), but you'll always need a build step if you're developing locally.

As previously mentioned, even though I said that if you know HTML, CSS, and JS you can start writing Svelte apps, [Svelte itself is actually a language](https://gist.github.com/Rich-Harris/0f910048478c2a6505d1c32185b61934), a superset just like TypeScript is to JavaScript. So there will be some new things introduced that you need to learn like `$:` for reactive statements, and maybe some other caveats like you usually encounter when learning a new language.

### No official way to pass styling

There's [a comment from one of the maintainer](https://github.com/sveltejs/rfcs/pull/22#issuecomment-664047806) explaining why there's no official way to style a child component. It basically comes down to two main problems, CSS encapsulation is important and components are their own boss.

There are multiple escape hatches available for us to use, one of the easiest and cleanest way it to wrap the component in another element and target it with the `:global()` selector, which will still apply some encapsulation by only exposing the style as a descendant of that scope.

```svelte
<script>
  import Child from './Child.svelte';
</script>

<div>
  <Child />
</div>

<style>
  div > :global(p) {
    text-align: center;
  }
</style>
```

Some other ways is to pass a class name or an inline style to the component itself, but that means we can only use it on a single element inside the component.

***
Other reason(s):

- <https://www.swyx.io/svelte-why/>
- <https://github.com/feltcoop/why-svelte>
