import React, { useEffect,useState } from 'react';
import axios from 'axios';

const Corona = () => {
    const [arr, setData] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:44352/api/PeopleApi").then(response => {
            console.log(response.data);
            setData(response.data);
        });
    }, []);
    return (
        <div className="App">
            <h1>Hello welcome to CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <div>
                <table>
                    <td>Name</td>
                    <td>age</td>
                    <td>Designation</td>
                    {arr.map(a => {
                        return [<tr>{a.name}</tr>,
                        <tr>{a.name}</tr>,]
                    })}
                </table>
            </div>
        </div>
    );
}
export default Corona;