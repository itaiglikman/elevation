import "./Contact.css";

interface ContactProps {
    cName: string;
    contactToDisplay: (cName: string) => void;
}

export function Contact({ cName, contactToDisplay }: ContactProps) {



    return (
        <div className="Contact">
            <div onClick={()=>contactToDisplay(cName)}>{cName}</div>
        </div>
    );
}
