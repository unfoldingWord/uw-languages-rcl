# [uw-languages-rcl](https://unfoldingWord-box3.github.io/uw-languages-rcl/)

A React Component Library for Languages

The source information will be from a JSON file `langnames.json` [here](https://td.unfoldingword.org/exports/langnames.json). 
This is an array of objects, one per language. 

Here is an example:

```json
{
"pk": 7501,
"ang": "Zhuang, Zuojiang",
"lr": "Asia",
"gw": false,
"hc": "CN",
"ln": "\u5de6\u6c5f",
"lc": "zzj",
"ld": "ltr",
"alt": [
    "Ken Tho",
    "Longyin",
    "Longzhou",
    "Pho Thai",
    "Pu Tho",
    "Southern Zhuang",
    "Zhuangyu nanbu fangyan Zuojiang tuyu",
    "Nung Chao"
],
"cc": ["CN"]
}
```

The package essentially provide a custom React Hook which returns
state and actions (a small set of functions to use for language data).

The code in the `demos` folder are examples of using the custom hook.