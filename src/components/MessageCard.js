import React from 'react';

function MessageCard({ message, isUser, image }) {
    return (
        <div className={`message flex w-full ${isUser ? 'justify-end self-end' : 'justify-start self-start'}`}>
            {isUser ? (
                <div className="user-card chat-bubble bg-green-300 rounded-lg py-2 px-4">
                    <p className="text-black">{message}</p>
                    {image && <img src={image} alt="User message image" className="mt-2 w-full max-w-xxs rounded" />}
                </div>
            ) : (
                <div className="bot-card chat-bubble bg-gray-300 rounded-lg py-2 px-4">
                    <p className="text-black">{message}</p>
                    {image && <img src={image} alt="Bot message image" className="mt-2 w-full max-w-xxs rounded" />}
                </div>
            )}
        </div>
    );
}

export default MessageCard;
