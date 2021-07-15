import React from 'react';
import useLanguage from '../core/useLanguages'

function LanguageDisplay({ lc }) {
  const {state, actions} = useLanguage()

  return (
    <>
    <div>Total number of languages is: {state.length}</div>
    <div>{actions.languageFormatted(lc)}</div>
    </>
  )
};

export default LanguageDisplay;
