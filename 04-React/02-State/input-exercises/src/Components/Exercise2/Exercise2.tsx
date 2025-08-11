import React, { useState } from "react";

const Exercise2 = () => {
    const [name, setName] = useState("");
    const [fruit, setFruit] = useState("");

    function handleFormUpdate(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedFruit = event.target.value;
        setFruit(selectedFruit);
        console.log(`${name} selected ${selectedFruit}`);
    }

    return (
        <div>
            <input
                id="name-input"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <select
                id="select-input"
                onChange={handleFormUpdate}
                value={fruit}
            >
                <option value="" disabled>Select a fruit</option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="grape">Grape</option>
                <option value="mango">Mango</option>
            </select>
            <div></div>
        </div>
        
    );
};
export default Exercise2;
