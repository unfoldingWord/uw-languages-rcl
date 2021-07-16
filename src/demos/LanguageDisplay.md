This is a component that displays the language in the standard format.

*NOTE: there is code that checks for an undefined language code, which returns the string "unk" for all attribute values, except for the input language code.*

```js
import useLanguages from '../core/useLanguages.js';
const { state } = useLanguages();
<div>
<p>Total Number of Languages is: {state.length}</p>
<LanguageDisplay lc='vi' />
</div>
```
