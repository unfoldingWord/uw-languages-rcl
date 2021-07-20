This is a component that displays the language in the standard format.

*NOTE 1: there is code that checks for an undefined language code, which returns the string "unk" for all attribute values, except for the input language code.*

*NOTE 2: All Javascript statements must be terminated with a semicolon (at least the last statement). After that, the HTML and components are placed. This allows you to use import or require and other Javascript code in the demo.*

```js
// JS Code goes here before the final semicolon
// imports can only be added in the markdown itself, not online.
// since this demo has the import, this demo can be used as a playground
import useLanguages from '../core/useLanguages.js';
function Component() {
  const { state, actions } = useLanguages();
  return (
    <div>
    <p>Total Number of Languages is: {state.length}</p>
    <p>{actions.formatLanguage(actions.getLanguage('vi'))}</p>
    <LanguageDisplay lc='zzj' />
    </div>
  );
};
<Component />
```
