import React, { useState } from 'react';
const SimpleForm = () => {
    const [name, setName] = useState("");
    const [fname, Display] = useState();

    const DisplayName = () => {
        Display(name);
    }
    const InputEvent = (event) => {
        setName(event.target.value);
    }
    return(
        <>
            <h1>Hi {fname}</h1><br />
            <input type="text" value={name} placeholder="Enter your Name" onChange={InputEvent} /> <br />
            <button onClick={DisplayName}>Submit</button>

            </>

    );
}
export default SimpleForm;