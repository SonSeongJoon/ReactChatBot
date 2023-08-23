import React, { useReducer, memo } from 'react';
import ChatHeader from './ChatHeader';
import ChatIntro from './ChatIntro';
import ChatScreen from './ChatScreen';
import ChatInput from './ChatInput';

const chatReducer = (state, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, { text: action.payload, isUser: true }],
                showIntro: false
            };
        default:
            return state;
    }
};

function ChatContainer() {
    const [state, dispatch] = useReducer(chatReducer, {
        showIntro: true,
        messages: [{ text: "Hello! How can I help you?", isUser: false }]
    });

    const handleSendMessage = (inputText) => {
        if (inputText.trim()) {
            dispatch({ type: 'SEND_MESSAGE', payload: inputText });
        }
    };

    return (
        <html className="flex flex-col w-full max-w-screen-md mx-auto">
        <ChatHeader />
        <body className='flex items-center justify-center'>
        {state.showIntro ? <ChatIntro /> : <ChatScreen messages={state.messages} />}
        </body>
        <ChatInput onSendMessage={handleSendMessage} />
        </html>
    );
}

export default memo(ChatContainer);
