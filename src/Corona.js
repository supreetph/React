import React, { useEffect } from 'react';
import axios from 'axios';

const Corona = () => {
    const [Data, setData] = useEffect({ CovidCount: [] });
    axios.get("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada",

        {
            'headers': {
                'x-rapidapi-key': '1bb5dc829fmsh29f8f249d1f16f1p17b980jsnf8ee1cb39407'
            }
        }).then(respose => {
            const info = respose.data;
            console.log(info.data.covid19Stats[0].confirmed);
            setData(info.data.covid19Stats[0].confirmed);
        })
   
   // const { Data } = this.state;
    return (
      
        <div>
            <h1> Covid-19 Data </h1>
           
        </div>
    )
}
export default Corona;