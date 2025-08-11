import { useState } from "react";
import "./App.css";
import { Conversation } from "./Components/Conversation/Conversation";
import { List } from "./Components/List/List";

const data = {
    displayConversation: null,
    conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
}


function App() {

    const [displayConversation, setDisplayConversation] = useState<null | string>(data.displayConversation)
    const [conversations, setConversations] = useState(data.conversations)

    function displayConvo(cName: string) {
        setDisplayConversation(cName);
        const conversation = conversations.filter(c => c.with === cName)
        console.log(conversation);
    }

    if (displayConversation)
        return <Conversation
            contactName={displayConversation}
            convo={conversations.filter(c => c.with === displayConversation)[0].convo}
            resetConversations={()=>setDisplayConversation(null)}
        />

    return (
        <List contacts={conversations.map(c => c.with)} contactToDisplay={displayConvo} />
    )
}
export default App;
