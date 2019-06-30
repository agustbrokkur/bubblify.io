import React from 'react';

const BubblesContext = React.createContext({});

export const BubblesProvider = BubblesContext.Provider;
export const BubblesConsumer = BubblesContext.Consumer;
