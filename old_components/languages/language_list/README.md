
### Simple example

This is a component that shows a listing of matching languages.
- `format` determines how the languages are displayed. Two formats are available: 
    - "uw" (default) which displays like this: `(am) Amharic – አማርኛ (Africa Gateway)`
    - "lc-ang" which displays like this: `am-Amharic`
- `filter` is a search string and defaults to no filters
- `limit` indicates how many results to return; the default is 10

**Note! due conflicts with JSX processing, the `limit` integer provided below, interactively, must be enclosed with braces as shown**

```js
<LanguageList format='uw' filter='' limit={10} />
```
