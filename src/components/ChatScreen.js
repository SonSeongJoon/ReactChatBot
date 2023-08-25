import React, { useRef, useEffect, memo } from 'react';
import MessageCard from './MessageCard';

function ChatScreen({ messages }) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <div className="w-full overflow-auto">
            <div className="flex flex-col gap-2 p-4">
                {messages.map((message, index) => (
                    <MessageCard
                        key={index}
                        message={message.text}
                        image={message.image}  // Pass the image to MessageCard
                        isUser={message.isUser}
                    />
                ))}
                <div ref={messagesEndRef}></div>
            </div>
        </div>
    );
}

export default memo(ChatScreen);
