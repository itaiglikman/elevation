import "./Conversation.css";

interface ConversationProps {
    convo: { text: string, sender: string }[];
    contactName: string;
    resetConversations: ()=>void;

}

export function Conversation({ convo, contactName, resetConversations }: ConversationProps) {
    return (
        <div className="Conversation">
            {convo.map(c =>
                <div>{c.sender === 'self' ? 'me' : contactName}: {c.text}</div>
            )}
            <button onClick={resetConversations}>Back</button>
        </div>
    );
}
