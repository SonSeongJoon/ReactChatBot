// ChatButton.js
import React from 'react';

function ChatButton({ keyword, onButtonClick }) {
    return (
        <button
            className="w-1/3 bg-gray-600 text-white py-1 px-4 rounded mr-2"
            onClick={() => onButtonClick(keyword)}
        >
            {keyword}
        </button>
    );
}

export default ChatButton;
