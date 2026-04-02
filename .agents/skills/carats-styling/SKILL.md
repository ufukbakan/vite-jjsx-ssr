---
name: carats-styling
description: Use this skill when prompter asks you to apply carats recommended styling
---

- Carats prefers using scoped SASS over Tailwind CSS.
- Carats prefers using semantic html with as less classes as possible.
- Carats prefers defining design tokens & style resets in base.sass file.
- base.sass is the global stylesheet which should include top level design token variables. other pages should define their own SASS files while using `@use base as *` to access same design tokens.
- Colors, spacings, typography, breakpoints and other design tokens should be defined in base.sass file.
- Design token variables must be top level and not nested.
Well formatted design token samples:
```sass
$color-primary: #000
$spacing-xs: 4px
$font-size-base: 16px
$breakpoint-md: 768px
```