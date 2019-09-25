# uw-languages-rcl
A React Component Library for Rendering Language Information

At first, this library will only a single component which will show
the information about a language. The source information will be
from a JSON file `langnames.json`. This is an array of JSON snippets,
one per language. Here is an example of a language snippet:

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

It will be displayed as a *property* table, with two columns: 
- Property Name
- Property Value

For example, using above:

|Attribute|Value|
|---------|:----|
|Language ID|zzj|
|Language Name|Zhuang, Zuojiang|
|Region|Asia|
|Is Gateway?|false|
|Country|CN|
|Localized|\u5de6\u6c5f|
|Direction|ltr|
|Aliases|Ken Tho, Longyin, Longzhou, Pho Thai, Southern Zhuang, Zhuangyu nanbu fangyan Zuojiang tuyu, Nung Chao|
|Countries|CN|


**In some cases the value will be a list, such as the countries that a
in which a language is spoken.**