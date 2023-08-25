import React from 'react';

function MessageCard({message, isUser, image, video}) {
    return (
        <div className={`message flex w-full ${isUser ? 'justify-end self-end' : 'justify-start self-start'}`}>
            {isUser ? (
                <div className="bot-card chat-bubble bg-green-300 rounded-lg py-2 px-4">
                    <div dangerouslySetInnerHTML={{__html: message}}></div>
                    {video && (
                        <video width="320" height="240" controls>
                            <source src={video} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    )}
                    {image && (
                        <div className="mt-2">
                            <img src={image} alt="Bot message image" className="w-full max-w-xs rounded"/>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    {message &&
                        <div className="bot-card chat-bubble rounded-lg py-2 px-4" style={{backgroundColor: '#E9FFFF'}}>
                            {<div dangerouslySetInnerHTML={{__html: message}}></div>}

                        </div>}
                    {image && <div className='rounded-lg py-2 px-4 mt-4' style={{
                        backgroundColor: '#E9FFFF',
                        width: 'auto',
                        height: 'auto',
                        display: 'inline-block'
                    }}>
                        {
                            <div className="mt-2">
                                <img src={image} alt="Bot message image" className="w-full max-w-xs rounded"/>
                            </div>
                        }
                    </div>}
                    {video && (
                        <div className='rounded-lg py-2 px-4 mt-4' style={{backgroundColor: '#E9FFFF'}}>
                            <video width="320" height="240" controls>
                                <source src={video} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    )}
                </div>

            )}
        </div>
    );
}

export default MessageCard;
