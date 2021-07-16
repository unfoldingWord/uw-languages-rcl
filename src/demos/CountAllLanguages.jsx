import React from 'react';
import useLanguages from '../core/useLanguages'

function CountAllLanguages() {
  const {state, actions} = useLanguages()

  return (
    <>
    <div>Total number of languages from state: {state.length}</div>
    <div>Total number of languages from getAllLanguages() function: {actions.getAllLanguages().length}</div>
    </>
  )
};

export default CountAllLanguages;
