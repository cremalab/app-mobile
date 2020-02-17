# `./src/stories`

This directory is needed to gather all of the storybook stories that exist somewhere in `./src/components/*` into one spot. The storybook configuration located at `./storybook/index.ts` then loads them into the storybook UI.

## Usage

1. Add a new `stories.tsx` file somewhere in `./src/components`
2. Import that file into `./src/stories/index.tsx`
Example:
```ts
import "../../src/components/Counter/stories"
```
3. Reload the storybook UI and it should show up