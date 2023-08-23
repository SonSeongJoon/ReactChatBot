import React from 'react';
import images from "./images";

function ChatIntro() {
    return (
        <div className="w-full mb-40">
            <div
                className="text-rgba(37, 39, 48, 1) font-neo text-60px opacity-1 text-center relative mb-15px mx-auto flex justify-center items-center">
                <img src={images.mainIcon} alt="Main Icon" className="w-85px h-85px"/>
                <p className='font-semibold text-5xl'>Hㅣ</p>
            </div>
            <div
                className="flex w-1/3 h-44px bg-teal-500 opacity-1  rounded-2xl text-white font-mycustomfont font-Regular text-22px opacity-1 my-20px mx-auto whitespace-normal flex items-center max-w-full justify-center">
                <img src={images.messageIcon} alt="Message Icon"/>
                <p>
                    GPT 역사투어
                </p>
            </div>
        </div>
    );
}

export default ChatIntro;
