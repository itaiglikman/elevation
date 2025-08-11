import { Contact } from "../Contact/Contact";
import "./List.css";

interface ListProps {
    contacts: string[];
    contactToDisplay: (cName: string) => void;
}

export function List({ contacts, contactToDisplay }: ListProps) {

    return (
        <div className="List">
            <ol>
                {contacts.map((c, i) =>
                    <li key={i}><Contact cName={c} contactToDisplay={contactToDisplay} /></li>
                )}
            </ol>

        </div>
    );
}
