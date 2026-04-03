---
name: carats-styling
description: Use this skill when coding frontend classes or stylesheets and if user didnt specify a ruleset for sytling, this will be the default styling guide.
---

- Carats prefers using scoped SASS over Tailwind CSS. This needs sass peer dependency.
- Carats prefers using semantic html with as less classes as possible.
- Carats prefers defining design tokens & style resets at exact location: src/client/base.sass file
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