import { Message } from "../models/message";
import * as chat from "../actions/chat";

export interface IState {
  messages: Message[];
};

const initialState: IState = {
  messages: []
};

export function reducer(state: IState = initialState, action: chat.Actions): IState {
  switch (action.type) {
    case chat.ADD_MESSAGE: {
      return {...state, messages: [...state.messages, action.payload]};
    }

    default: {
      return state;
    }
  }
}

export const getMessages = (state: IState) => state.messages;