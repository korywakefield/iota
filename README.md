[![Iota](http://korywakefield.com/iota/img/og.png)](http://korywakefield.com/iota/)

# [Iota](http://korywakefield.com/iota/)

A responsive micro-framework for the **grid spec** powered by **CSS custom properties.**

## Overview

- **1 class** &ndash; That's right, **one little class** is all you need to get up and running. A few additional modifiers are available to unlock further layout possibilities.
- **584 bytes gzipped** &ndash; Iota is *tiny.* Like, **really tiny.** Depending on how you set it up, Iota's filesize can be reduced even further. Because, you know…every byte counts. #jkbutseriously
- **Endlessly flexible** &ndash; The secret sauce comes from merging CSS grid and all its power with **custom properties,** unlocking true layout freedom without a boatload of unused classes weighing you down.

## Basic Walkthrough

The `$iota_grid` Sass map sets up the grid defaults, which are output as fallback values using the CSS `var()` function. These defaults can be overwritten as needed at each breakpoint specified in `$iota_grid`, allowing you unlimited layout access with a minimal static footprint. This makes it perfect for **rapid prototyping** and experimenting with new layouts as any inline overwrites you add are only used in that instance.

For example, let's say that for the `lg` and `xl` breakpoints you wish to use three columns instead of the default values of **4.** To do this you would use the `--cols-@` custom property for each breakpoint (`@` represents the slug for each breakpoint set):

```html
<div class="grid" style="--cols-lg: 3; --cols-xl: 3;">
  <!-- grid items -->
</div>
```

Taking our example one step further, let's say that you have decided the three column layout from above is one you wish to use on a few different pages throughout your site. Since custom properties are just that&mdash;properties&mdash;those custom properties can be abstracted into a class and utilized wherever desired:

```html
<style>
  .custom {
    --cols-lg: 3;
    --cols-xl: 3;
  }
</style>

<div class="grid custom">
  <!-- grid items -->
</div>
```

Remember that Iota's custom properties are meant to augment&mdash;not replace&mdash;standard grid properties by providing some sensible defaults along with a responsive wrapper for properties that you need to change at different breakpoints.

In situations where you don't need the responsiveness, feel free to utilize standard CSS properties instead to save on having to rewrite the same declaration over and over. For example, if you know that you'd like to have a grid with no spacing between cells all the time, using `grid-gap` instead of `--gap-@` at each breakpoint will work perfectly:

```html
<style>
  .custom {
    grid-gap: 0;
    --cols-lg: 3;
    --cols-xl: 3;
  }
</style>

<div class="grid custom">
  <!-- grid items -->
</div>
```

## Examples

Make sure to check out the [project homepage](http://korywakefield.com/iota/#overview) **Overview** section to see some live examples.

## Documentation

All of Iota's documentation is found on its [project homepage](http://korywakefield.com/iota/#reference) under the **Reference** section.