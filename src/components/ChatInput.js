import React, { useState , memo} from 'react';
import images from './images';

function ChatInput({ onSendMessage }) {
    const [userInput, setUserInput] = useState('');

    const sendMessage = () => {
        console.log("sendMessage called with:", userInput);
        if (userInput.trim() === '') return;
        onSendMessage(userInput);
        setUserInput('');
    };

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleInputKeyUp = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="flex items-center justify-between w-full mx-auto  rounded-full px-3 mb-3 shadow-top-xl">
            <div className="flex w-full">
                <img src={images.searchIcon} alt="Search Icon" className="mt-2 w-[40px] h-[40px]" />
                <input
                    type="text"
                    placeholder="질문을 입력하세요!"
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyUp={handleInputKeyUp}
                    className="w-full bg-transparent outline-none"
                />
            </div>
            <button onClick={sendMessage}>
                <img src={images.sendIcon} alt="Send Icon" className="w-[50px] h-[50px]"/>
            </button>
        </div>
    );
}
export default memo(ChatInput);
