import React from 'react';
import useLanguages from '../core/useLanguages'

function LanguageDisplay({ lc }) {
  const {state, actions} = useLanguages()

  return (
    <>
    <div>Total number of languages is: {state.length}</div>
    <div>{actions.formatLanguage(actions.getLanguage(lc))}</div>
    </>
  )
};

export default LanguageDisplay;
