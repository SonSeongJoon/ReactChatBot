import React from 'react';
import images from "./images";

function ChatIntro() {
    return (
        <div className="w-full">
            <div
                className="flex text-rgba(37, 39, 48, 1) font-neo text-60px text-center flex justify-center items-center">
                <img src={images.mainIcon} alt="Main Icon" className="w-85px h-85px"/>
                <p className='font-bold text-5xl'>;Hㅣ</p>
            </div>
            <div
                className="flex w-[300px] bg-teal-500  rounded-2xl text-white font-medium opacity-1 my-20px mx-auto whitespace-normal flex items-center max-w-full justify-center">
                <img src={images.messageIcon} alt="Message Icon" className='mt-1'/>
                <p>
                    GPT 역사투어에 물어보세요.
                </p>
            </div>
        </div>
    );
}

export default ChatIntro;
