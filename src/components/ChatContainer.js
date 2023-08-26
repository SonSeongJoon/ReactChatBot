import React, { useReducer } from 'react';
import ChatHeader from './ChatHeader';
import ChatIntro from './ChatIntro';
import ChatScreen from './ChatScreen';
import ChatInput from './ChatInput';
import { replies, keywordsAnswers } from './replies';
import {lang} from "../api/langchain";
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
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, action.payload]
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
    const lastUserMessage = state.messages.filter(msg => msg.isUser).slice(-1)[0];
    const lastReply = replies.find(r => r.question === lastUserMessage?.text);

    const handleSendMessage = async (inputText) => {
        if (inputText) {
            dispatch({ type: 'SEND_MESSAGE', payload: inputText });


            // LangChain API를 호출하여 응답을 가져옵니다.
            const response = await lang(inputText);
            const data = JSON.stringify(response)

            // 응답을 메시지로 추가합니다.
            const botMessage = {
                text: data,
                isUser: false
            };
            console.log(botMessage)
            dispatch({ type: 'ADD_MESSAGE', payload: botMessage });
        }
    };



    // ChatContainer.js

    const onKeywordClick = (keyword) => {
        const keywordAnswer = keywordsAnswers[keyword];
        let newMessage;

        if (!keywordAnswer) {
            return; // keywordAnswer가 없으면 빠르게 함수를 종료
        }

        // 이미지 경로로 간주
        if (keywordAnswer.startsWith('/static/media/') && (keywordAnswer.endsWith('.png') || keywordAnswer.endsWith('.jpg') || keywordAnswer.endsWith('.jpeg'))) {
            newMessage = {
                image: keywordAnswer,
                isUser: false
            };
        }
        // 영상 경로로 간주
        else if (keywordAnswer.startsWith('/static/media/') && (keywordAnswer.endsWith('.mp4') || keywordAnswer.endsWith('.webm'))) {
            newMessage = {
                video: keywordAnswer,
                isUser: false
            };
        }
        // 텍스트로 간주
        else {
            newMessage = {
                text: keywordAnswer,
                isUser: false
            };
        }

        dispatch({ type: 'ADD_MESSAGE', payload: newMessage });
    };

    return (
        <html className="flex flex-col w-full max-w-screen-md mx-auto bg-gray-50">
        {state.showIntro ? <ChatHeader talk={false}/> : <ChatHeader talk={true}/>}
        <body className='flex items-center justify-center '>
        {state.showIntro ? <ChatIntro /> : <ChatScreen messages={state.messages} onKeywordClick={onKeywordClick} lastReply={lastReply}/>}
        </body>
        <ChatInput onSendMessage={handleSendMessage} />
        </html>
    );
}

export default ChatContainer;

