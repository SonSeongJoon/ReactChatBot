import React from 'react';

function MessageCard({ message, isUser }) {
    return (
        <div className={`message flex w-full ${isUser ? 'justify-end self-end' : 'justify-start self-start'}`}>
            {isUser ? (
                <div className="user-card chat-bubble bg-green-300 rounded-lg py-2 px-4">
                    <p className="text-black">{message}</p>
                </div>
            ) : (
                <div className="bot-card chat-bubble bg-gray-300 rounded-lg py-2 px-4">
                    <p className="text-black">{message}</p>
                </div>
            )}
        </div>
    );
}

export default MessageCard;
