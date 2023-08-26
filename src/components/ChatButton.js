import React from 'react';

function ChatButton({ keyword, onButtonClick }) {
    return (
        <button
            className="w-1/3 text-white py-2 px-4 rounded mr-2 bg-[#02B394] hover:bg-white hover:text-black hover:border-2 hover:border-[#02B394]"
            onClick={() => onButtonClick(keyword)}
        >
            {keyword}
        </button>
    );
}

export default ChatButton;
