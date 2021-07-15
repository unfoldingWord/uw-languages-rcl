import { useState, useEffect, useCallback } from "react";

/* The languages JSON is an array of objects. Sample:
{
  "pk": 6,
  "ang": "Afar",
  "lr": "Africa",
  "gw": false,
  "hc": "ET",
  "ln": "Afaraf",
  "lc": "aa",
  "ld": "ltr",
  "alt": [
    "Afaraf",
    "Danakil",
    "Denkel",
    "Adal",
    "Afar Af",
    "Qafar",
    "Baadu (Ba'adu)"
  ],
  "cc": ["DJ", "ER", "ET", "US", "CA"]
},
*/

const useLanguages = () => {
  const [languages, setLanguages] = useState([]);

  useEffect( () => {
    async function getLanguages() {
      const langs = (await fetch('https://td.unfoldingword.org/exports/langnames.json'))
      const _langs = await langs.json()
      setLanguages(_langs);
    }

    if (languages.length === 0) {
      console.log("languages is empty... fetching")
      getLanguages();
      console.log("languages:",languages)
    }
  }, [languages]
  );

  const allLanguages = () => {
    return languages;
  };

  const language = useCallback((languageId) => {
    const _language = languages && languages.filter(lang => lang.lc === languageId)[0];
    if (_language) {
      return _language;
    }
    return {};  
  }, [languages]);
  
  const languageFormatted = (languageId) => {
    // pattern for uw format: (am) Amharic – አማርኛ (Africa Gateway)
    const lg = language(languageId);
    console.log("languageFormatted() languageId, lg:", languageId, lg)
    const lc = lg.lc ? lg.lc : 'UNK';
    const ang = lg.ang ? lg.ang : 'UNK';
    const ln = lg.ln ? lg.ln : 'UNK';
    const lr = lg.lr ? lg.lr : 'UNK';
    return `(${lc}) ${ang} - ${ln} (${lr})`
  };
  
  const languagesByOrg = (org) => {
    // tbd
  }

  const actions = {
    allLanguages,
    language,
    languageFormatted,
    languagesByOrg,
  };


  // We return these computed values for the passed date prop to our hook
  return { 
    state: languages,
    actions,
 };
};

export default useLanguages;