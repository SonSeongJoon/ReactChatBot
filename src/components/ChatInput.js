import React, { useState , memo} from 'react';
import images from './images';

function ChatInput({ onSendMessage }) {
    const [userInput, setUserInput] = useState('');

    const sendMessage = () => {
        console.log("sendMessage called with:", userInput); // 로깅 추가
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
        <div className="flex items-center justify-between w-full mx-auto bg-gray-300 rounded-full px-5 mb-10">
            <div className="flex w-full">
                <img src={images.searchIcon} alt="Search Icon" className="w-[40px] h-[40px]" />
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyUp={handleInputKeyUp}
                    className="w-full bg-transparent outline-none"
                />
            </div>
            <button onClick={sendMessage}>
                <img src={images.sendIcon} alt="Send Icon" className='mt-1' />
            </button>
        </div>
    );
}

export default memo(ChatInput);
