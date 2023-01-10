// 1. Créez un contexte nommé "AppContext" avec "React.createContext()", et exportez-le par défaut
import React, { createContext } from 'react';

const AppContext = createContext();

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;
