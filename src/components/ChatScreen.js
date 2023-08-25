import React, { useRef, useEffect, memo } from 'react';
import MessageCard from './MessageCard';
import ChatButton from './ChatButton';

function ChatScreen({ messages, onKeywordClick, lastReply }) {
    const messagesEndRef = useRef(null);
    const keywords = lastReply?.answer.keywords || [];

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className="w-full overflow-auto max-h-[calc(100vh-100px)]">
            <div className="flex flex-col gap-2 p-4">
                {messages.map((message, index) => (
                    <MessageCard
                        key={index}
                        message={message.text}
                        image={message.image}  // Pass the image to MessageCard
                        isUser={message.isUser}
                    />
                ))}

                {/* 2. Display the ChatButton component */}
                <div className='flex'>
                    {keywords.map(keyword => (
                        <ChatButton
                            key={keyword}
                            keyword={keyword}
                            onButtonClick={() => onKeywordClick(keyword)}
                        />
                    ))}
                </div>


                <div ref={messagesEndRef}></div>
            </div>
        </div>
    );
}

export default memo(ChatScreen);
