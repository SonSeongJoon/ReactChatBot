import React, { memo } from 'react';
import MessageCard from './MessageCard';

function ChatScreen({ messages }) {  // Use messages prop instead of userInput
    return (
        <div className="w-full">
            <div className="flex flex-col gap-2 p-4 overflow-y-auto max-h-400">
                {messages.map((message, index) => (
                    <MessageCard
                        key={index}
                        message={message.text}
                        isUser={message.isUser}
                    />
                ))}
            </div>
        </div>
    );
}

export default memo(ChatScreen);
