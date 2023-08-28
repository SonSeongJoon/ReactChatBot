import React, { useReducer } from 'react';
import ChatHeader from './ChatHeader';
import ChatIntro from './ChatIntro';
import ChatScreen from './ChatScreen';
import ChatInput from './ChatInput';
import { replies, keywordsAnswers } from './replies';
import { lang } from "../api/langchain";
import { chatReducer } from "../reducer/chatReducer";

function getMessageType(keywordAnswer) {
    const imageFormats = ['.png', '.jpg', '.jpeg'];
    const videoFormats = ['.mp4', '.webm'];
    const startsWithStatic = keywordAnswer.startsWith('/static/media/');

    if (startsWithStatic && imageFormats.some(format => keywordAnswer.endsWith(format))) {
        return 'image';
    } else if (startsWithStatic && videoFormats.some(format => keywordAnswer.endsWith(format))) {
        return 'video';
    }
    return 'text';
}

function ChatContainer() {
    const [state, dispatch] = useReducer(chatReducer, {
        showIntro: true,
        messages: [{ text: "안녕하세요! GPT 역사투어입니다!", isUser: false }]
    });

    const lastUserMessage = state.messages.filter(msg => msg.isUser).slice(-1)[0];
    const lastReply = replies.find(r => r.question === lastUserMessage?.text);

    const handleSendMessage = async (inputText) => {
        if (!inputText) return;

        dispatch({ type: 'SEND_MESSAGE', userinput: inputText });

        const reply = replies.find(r => r.question === inputText);

        if (!reply?.answer?.fromButton) {
            const response = await lang(inputText);
            let data = response.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z\s]/g, '');
            dispatch({ type: 'ADD_MESSAGE', userinput: { text: data, isUser: false } });
        }
    };

    const onKeywordClick = (keyword) => {
        const keywordAnswer = keywordsAnswers[keyword];
        if (!keywordAnswer) return;

        const messageType = getMessageType(keywordAnswer);
        const newMessage = {
            [messageType]: keywordAnswer,
            isUser: false
        };
        dispatch({ type: 'ADD_MESSAGE', userinput: newMessage });
    };

    return (
        <div className="flex flex-col h-[95vh] max-w-screen-md mx-auto justify-center">
            <div className='flex-none mt-10'>
                <ChatHeader talk={!state.showIntro} />
            </div>
            <div className={`grow overflow-auto flex ${state.showIntro ? 'justify-center items-center' : ''}`}>
                {state.showIntro ? <ChatIntro /> : <ChatScreen messages={state.messages} onKeywordClick={onKeywordClick} lastReply={lastReply} />}
            </div>
            <div className='flex-none p-1'>
                <ChatInput onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}

export default ChatContainer;