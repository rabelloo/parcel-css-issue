# Parcel CSS modules issue

`main` branch shows the issue

1. `.postcssrc.json` enables CSS modules for all files with `modules: true`
2. `index.html` references stylesheet `index.scss`
3. `index.scss` imports/uses `global.scss` only mixin inside `:global`
4. `app.tsx` imports `app.scss`, uses `styles.red` as CSS module class name and `green` as global class name

In order to fix the issue, either:

- `ts-import` branch imports `index.scss` in `index.tsx` rather than referencing stylesheet in `index.html`
- `no-postcssrc` branch disables CSS modules for all files in `.postcssrc.json`, and renames `app.module.scss`
