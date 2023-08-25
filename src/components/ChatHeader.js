import React from 'react';
import images from "./images";

function ChatHeader({talk}) {
    return (
        <div className='flex items-center mt-10'>
            <div
                className='w-1/2'>
                <img src={images.menuIcon} alt="Menu Icon"/>
            </div>

            {talk ? (
                <div className='text-black text-17 font-bold'>
                <p className="relative text-center">대화중<img src={images.dotIcon} alt="Dot Icon"
                className="inline-block"/></p>
                </div>
            ) : (
                <></>
            )}

        </div>


    );
}

export default ChatHeader;
