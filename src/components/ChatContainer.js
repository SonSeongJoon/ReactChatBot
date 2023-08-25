import React, { useReducer } from 'react';
import ChatHeader from './ChatHeader';
import ChatIntro from './ChatIntro';
import ChatScreen from './ChatScreen';
import ChatInput from './ChatInput';
import replies from './replies';  // replies 파일 불러오기


const chatReducer = (state, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            const userMessage = { text: action.payload, isUser: true };
            // replies 배열에서 일치하는 질문을 찾습니다.
            const reply = replies.find(r => r.question === action.payload);

            // 일치하는 답변이 있으면 해당 답변의 텍스트를 사용하고, 없으면 null을 반환합니다.
            const botMessage = reply ? { text: reply.answer.text, image: reply.answer.image, isUser: false } : null;

            return {
                ...state,
                messages: botMessage ? [...state.messages, userMessage, botMessage] : [...state.messages, userMessage],
                showIntro: false
            };
        default:
            return state;
    }
};

function ChatContainer() {
    const [state, dispatch] = useReducer(chatReducer, {
        showIntro: true,
        messages: [{ text: "안녕하세요! GPT 역사투어입니다!", isUser: false }]
    });

    const handleSendMessage = (inputText) => {
        if (inputText.trim()) {
            dispatch({ type: 'SEND_MESSAGE', payload: inputText });
        }
    };

    return (
        <html className="flex flex-col w-full max-w-screen-md mx-auto">
        {state.showIntro ? <ChatHeader talk={false}/> : <ChatHeader talk={true}/>}
        <body className='flex items-center justify-center overflow-auto'>
        {state.showIntro ? <ChatIntro /> : <ChatScreen messages={state.messages} />}
        </body>
        <ChatInput onSendMessage={handleSendMessage} />
        </html>
    );
}

export default ChatContainer;
