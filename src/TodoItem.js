import React from 'react';
import AppContext from './appContext';
import React, { useContext } from 'react';
// 4. Importez ici le contexte créé dans "appContext.js"

export default function TodoItem() {
  // 5. Récupérez la valeur du contexte avec le hook "useContext"
  const data = useContext(AppContext);
  return (
    <div>
      {/* 6. Affichez ici la valeur */}
      <p>MY_VALUE = {data}</p>
    </div>
  );
}
