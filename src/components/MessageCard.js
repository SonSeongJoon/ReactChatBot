import React from 'react';

function MessageCard({ message, isUser, image, video}) {
    return (
        <div className={`message flex w-full ${isUser ? 'justify-end self-end' : 'justify-start self-start'}`}>
            {isUser ? (
                <div className="bot-card chat-bubble bg-gray-300 rounded-lg py-2 px-4">
                    <div dangerouslySetInnerHTML={{ __html: message }}></div>
                    {image && <img src={image} alt="Bot message image" className="mt-2 w-full max-w-xs rounded" />}
                    {video && (
                        <video width="320" height="240" controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            ) : (
                <div className="bot-card chat-bubble bg-gray-300 rounded-lg py-2 px-4">
                    <div dangerouslySetInnerHTML={{ __html: message }}></div>
                    {image && <img src={image} alt="Bot message image" className="mt-2 w-full max-w-xs rounded" />}
                    {video && (
                        <video width="320" height="240" controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            )}
        </div>
    );
}
export default MessageCard;
