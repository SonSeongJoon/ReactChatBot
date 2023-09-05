import React from 'react';

function ImageDisplay({src}) {
    return (
        <div className='rounded-lg py-2 px-4 mt-4' style={{
            backgroundColor: '#F7F7FA',
            display: 'inline-block'
        }}>
            <div className="mt-2">
                <img src={src} alt="Bot" className="w-full max-w-xs rounded"/>
            </div>
        </div>
    )
}

function VideoDisplay({src}) {
    return (
        <div className='rounded-lg py-2 px-4 mt-4' style={{backgroundColor: '#F7F7FA'}}>
            <video width="320" height="240" controls>
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

function MessageCard({message, isUser, image, video}) {
    const justify = isUser ? 'justify-end self-end' : 'justify-start self-start';
    const textColor = isUser ? 'text-white' : 'text-black';
    return (
        <div className={`message flex w-full ${justify}`}>
            {isUser ? (
                <div className={`bot-card chat-bubble rounded-lg py-2 px-4 text-md shadow-lg ${textColor}`}
                     style={{backgroundColor: '#02B394'}}>
                    <div dangerouslySetInnerHTML={{__html: message}}></div>
                    {image && <ImageDisplay src={image}/>}
                    {video && <VideoDisplay src={video}/>}
                </div>
            ) : (
                <div>
                    {message &&
                        <div className="bot-card chat-bubble rounded-lg py-2 px-4 shadow-lg"
                             style={{backgroundColor: '#F7F7FA'}}>
                            <div dangerouslySetInnerHTML={{__html: message}}></div>
                        </div>}
                    {image && <ImageDisplay src={image}/>}
                    {video && <VideoDisplay src={video}/>}
                </div>

            )}
        </div>
    );
}

export default MessageCard;