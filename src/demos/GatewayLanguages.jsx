import React from 'react';
import useLanguages from '../core/useLanguages'

function GatewayLanguages({ lc }) {
  const {state, actions} = useLanguages()

  return (
    <>
    <div>Total number of languages is: {state.length}</div>
    <div>{
      actions.getGatewayLanguages().map( 
        (lang) => {
          return <pre key={lang}>{lang}</pre>
        }
      )
      }
    </div>
    </>
  )
};

export default GatewayLanguages;
