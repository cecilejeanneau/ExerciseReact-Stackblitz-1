import React from 'react';
import Todolist from './Todolist';
import './style.css';
import { AppProvider } from './appContext';
// 2. Importez ici le contexte créé dans "appContext.js"

export default function App() {
  const MY_VALUE = 'Cristaline';

  // 3. Enrobez la <div> par le Provider du contexte créé, et passez-lui comme 'value' la valeur "Cristaline"
  return (
    <AppProvider value={MY_VALUE}>
      <div>
        <p>
          <strong>
            Hola malheureux! Doucement avec la {MY_VALUE}! Elle est si bonne!
          </strong>
        </p>
        <Todolist />
      </div>
    </AppProvider>
  );
}
