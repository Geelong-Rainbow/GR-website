# GR-website
The Geelong Rainbow Website Repository
## Acknowledgements
We acknowledge that this project was developed on the stolen land of the Wadawurrung people of the Kulin nations and we pay our respects to elders past, present and emerging.
We acknowledge their continuing connection to land, water and culture and that sovereignty has never been ceded.
## Kaye's Draft V1
![Kaye's Draft V1](https://github.com/Geelong-Rainbow/GR-website/raw/main/Kaye's%20Draft%20v1.png "Kaye's Draft V1")
## Contributors
[About Us](https://geelongrainbow.org.au/home/about-us-2/#page-header-325055962 "About Us")

| Member                                                                  | Contribution            |
| ----------------------------------------------------------------------- | ----------------------- |
| [Circe](https://www.github.com/friedslick6 "Circe")                             | HTML, CSS, JS           |
| [Kaye](https://www.instagram.com/snewok.draws "Kaye")                          | Art Direction           |
| [Parker](https://geelongrainbow.org.au/home/about-us-2/#col-1980259847 "Parker") | Old Website Maintenance |
| [Poturtle](https://www.github.com/JackMarisKnight "Poturtle")                      | Management              |
## Principles
- [Designing for Web Accessibility](https://www.w3.org/WAI/tips/designing "Designing for Web Accessibility")
Checklist of web accessibility guidelines with visual guides
- [Why Front-End Developers Should Switch to OKLCH](https://scribe.rip/@chamika-karunarathna/oklch-the-future-of-color-in-web-development-93f0c21ed8fc#4898 "Why Front-End Developers Should Switch to OKLCH")
OKLCH is a modern colour model that aligns with human vision, accessibility needs, and modern high-resolution screens.
- [You Don't Need Javascript](https://github.com/you-dont-need/You-Dont-Need-JavaScript#you-dont-need-javascript "You Don't Need Javascript") (Usually)
  Also see: [CSS Tricks](https://css-tricks.com "CSS Tricks"), [Kevin Powell's CodePen Projects](https://codepen.io/kevinpowell "Kevin Powell's CodePen Projects"), [Theo Soti's Blog](https://theosoti.com/blog "Theo Soti's Blog")
- We use CSS variables to define content so that our HTML is more concise.
- Use SVG or gradients whenever possible.
- If you must consult your favourite LLM overlord for advice, please vet its answers for assumptions/hallucinations.

## Inspiration
- [Shiny Happy Digital's Works](https://www.shinyhappy.digital/work "Shiny Happy Digital's Works")
- [The Whimsical Web](https://whimsical.club "The Whimsical Web")
- [Neocities](https://neocities.org/browse "Neocities")

## Code Snippets / Useful Tools

### Layouts
- [OKLCH Colour Picker](https://oklch.com "OKLCH Colour Picker")
- [Accessibility-Friendly Off-Canvas Navigation Menu](https://codepen.io/vmitsaras/pen/gwGwJE "Accessibility-Friendly Off-Canvas Navigation Menu")
- [Expanding Card Page Transition Effect](https://codepen.io/rachsmith/pen/PWxoLN "Expanding Card Page Transition Effect")
- [Responsive Animated Accordion-Style Menu](https://codepen.io/chriswrightdesign/pen/AVENwb "Responsive Animated Accordion-Style Menu")
- [Aspect Ratio Calculator](https://andrew.hedges.name/experiments/aspect_ratio "Aspect Ratio Calculator")
- [Text Clipping Methods](https://codepen.io/restlesshead/pen/LEVKpJP "Text Clipping Methods")
- [Centring Methods](https://codepen.io/alvaromontoro/pen/dPGbPmJ "Centring Methods")
- [Text Shadow Methods](https://codepen.io/HighFlyer/pen/qEOpVxL "Text Shadow Methods")
- [Grid Layout Editor](https://grid.layoutit.com "Grid Layout Editor")
- [border-image Generator](https://mdn.github.io/css-examples/tools/border-image-generator "border-image Generator")
- [HDR Gradient Generator](https://gradient.style "HDR Gradient Generator")
- [calc Playground](https://rapidtoolset.com/en/tool/css-calc-playground "CSS calc Playground")
- [Free SVG Generators](https://www.fffuel.co "Free SVG Generators")

### Backgrounds
- [Perlin Noise Waves Background](https://codepen.io/pimskie/pen/xbwjybe "Perlin Noise Waves Background")
- [Memphis SVG Repeating Pattern Background](https://codepen.io/saltymouse/pen/abbZOEN "Memphis SVG Repeating Pattern Background")
- [Umbrellas Background](https://codepen.io/pawelqcm/pen/jMLrvd "Umbrellas Background")
- [mesh-gradient Generator](https://www.mshr.app "mesh-gradient Generator")

### Buttons and Text
- [Accessible Rainbow Button](https://codepen.io/mark_sottek/pen/PwoLdRP "Accessible Rainbow Button")
- [Text Animation Snippet Generator](https://codepen.io/HighFlyer910/pen/myJJLaL "Text Animation Snippet Generator")
- [✨Sparkly Text✨](https://codepen.io/Nayakv46/pen/eYQBWQP "✨Sparkly Text✨")

### Miscellaneous
- [Custom Cursors](https://codepen.io/netsi1964/pen/AjGvXE "Custom Cursors")
- [Pride Rainbow Animation](https://codepen.io/ALMcinnis/pen/gOmeJRq "Pride Rainbow Animation")
- [Interactive Umbrella](https://codepen.io/wodniack/pen/GREWWvo "Interactive Umbrella")

## Planned Features/Layout To-Do
Striked Features are implemented or cancelled

### Webpage
- ~~Outer rainbow border w/ rounded corners~~
- ~~Border allowance for mobile screen notches~~
- ~~Make borders draggable?~~ (cancelled, unavoidable accessibility issues)
- ~~Fluid Style typeface sizes that meet the WCAG success criterion 1.4.4 and remain consistent at all sizes up to 500% (painful, needs magic numbers atm)~~
- ~~Scrollbar:~~
  - ~~Light mode: Coal, 70% opaque bar on Off-White track~~
  - ~~Dark mode: Off-White, 70% opaque bar on Coal track~~
  - ~~Opacity can't be used directly, use `color-mix()` CSS function to determine colour~~

### Header
- ~~Infinite horizontal photo slideshow carousel~~
  - Pick out 8-12 photos
  - ~~Make photos fit 1/4th of carousel width and 100% of carousel height~~
  - ~~Blend transitions between slideshow photo edges~~
- Navigation Bar
  - ~~Absolute positioned logo, centred on top margin~~
  - ~~Vertical hard-stop trans flag gradient top Border~~
  - gradient is aligned with vertical centre of logo
  - gradient has same width as the outer trans flag circle on logo
- Use isolation to prevent z-index issues
- 6 Links on Navigation Bar, from left to right:
  - [Newsletters](https://geelongrainbow.org.au/newsletters "Newsletters"), [Merch](https://geelongrainbow.org.au/merch "Merch"), [Events](https://geelongrainbow.org.au/events "Events"), [About Us](https://geelongrainbow.org.au/about-us "About Us"), [Contact Us](https://geelongrainbow.org.au/contact-us "Contact Us"), [Join Us](https://geelongrainbow.org.au/join-us "Join Us")
- Links give adequate clearance around logo at all zoom levels
- Rainbow block navigation link backgrounds on hover

### Sidebar (Left)
- ~~\~1/4th of viewport width~~
- Has sticky position, always on-screen on wide viewports
- Tucked into negative left margin with a menu button on narrow viewports
- Accessibility
  - Quick exit, dark mode toggle and accessibility
  - Accessibility Menu Button
    - [Gooey drop-down menu (flower pattern)](https://codepen.io/lbebber/pen/RNgBPP "Gooey drop-down menu (flower pattern)")
    - High Contrast Switch
    - Low Contrast Switch
    - Motion Toggle
    - Close
  - Buttons at top of sidebar on wide viewports
  - Buttons listed below menu button on narrow viewports
- Calendar widget
- Separate, filtered version of our private calendar to only include public calendar events
- Quick links
  - Link to index of queer terms

### Footer
- ~~Acknowledgement of Country~~
- Aboriginal and Torres Strait Islander flags
- ~~ABN~~

### Home Page
- Container for article previews
  - Appropriate padding
  - ~~90ch flow direction breakpoint~~
- Articles use a simple 3-cell grid layout for the article author/title/description
- Instagram posts embedded as articles
  - Seamless with regular articles if possible
- Pop-out scrollable modals for articles
  - Expansion animation
- Photo Reel (additional to Instagram)
- RSS feed link including Instagram posts

### Newsletters Page

### Merch Page
- Merchandise storefront embed

### Events Page

### About Us Page
- Comic-style chat bubbles (e.g. [Personle](https://www.personle.app/freeplay "Personle"))
- Circle-clipped profile art
- Frequently Asked Questions
  - Info sorted in [accordion-style drop-down](https://codepen.io/chriswrightdesign/pen/AVENwb "accordion-style drop-down")

### Contact Us Page

### Join Us Page

### Extra
- ~~Pride Progress Cursors w/ 1 pixel-wide dark/light mode border~~
- Reduce size of official Instagram logo while keeping sunset gradient
- [A drawstring lightbulb for the dark mode toggle](https://codepen.io/jh3y/full/VwjgdLj "A drawstring lightbulb for the dark mode toggle")
  - Users should still be able to click the lightbulb itself to toggle dark mode if they prefer, then we'll just bounce the drawstring
- [Stickers!](https://codepen.io/jh3y/full/OPJyVGb "Stickers!")
  - We want to have a drawer filled with stickers that the user can open from a slim bar inside the right-hand border of the page and peel and drag around wherever they want to decorate the website their way. We can use them ourselves too! (wide viewports only)
