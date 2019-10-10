import { createContext } from 'react';

const VoteContext = createContext();

export const VoteProvider = VoteContext.Provider;
export const VoteConsumer = VoteContext.Consumer;

export default VoteContext;
