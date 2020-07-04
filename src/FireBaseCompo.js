import axios from 'axios';
import React from 'react';




//Firebase.firestore().collection('People').add({ "Name": "Chikalla" });


const FireBaseCompo = () => {

    //const payload = {'Name':'chikalla','Designation':'software engg',Age:25}
    //axios.post('https://localhost:44352/api/PeopleApi/Post', payload).then((response) => {
    //    console.log(response)
    //})
    axios.get('https://localhost:44352/api/PeopleApi').then(response => {
        console.log(response.data)
    })
   // firestore().collection('/People').add({ Name: "paul",Designation:"SE",Age:20 });
    
    
    return (
        <h1>FireBase Data Inserted</h1>
    );
        
          
          
        

    
}

export default FireBaseCompo;
