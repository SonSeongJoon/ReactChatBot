import {replies} from "../components/replies";
import {produce} from "immer";

export const chatReducer = produce((draft, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            const userMessage = {text: action.userinput, isUser: true};

            const reply = replies.find(r => r.question === action.userinput);
            draft.messages.push(userMessage)

            if (reply) {
                draft.messages.push({text: reply.answer.text, image: reply.answer.image, isUser: false});
            }
            draft.showIntro = false;
            break;

        case 'ADD_MESSAGE':
            draft.messages.push(action.userinput);
            break;
        default:
            break;
    }
});