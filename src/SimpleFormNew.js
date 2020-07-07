import React from "react";

import { useForm } from "react-hook-form";

export default function App() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div className="App">
            <h1>Hello welcome to CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                username: <input type="text" placeholder="username" name="username" ref={register} />
                <b />
        password: <input type="text" placeholder="password" name="password" ref={register} />
                <br />
                <input type="Submit" />
            </form>
        </div>
    );
}
