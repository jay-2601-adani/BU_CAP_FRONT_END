import { useEffect,useState } from "react";
import axios from "axios";

import { Button } from "@mui/material";



const Tables=(props)=>{
    const [l1data,setl1data]=useState([])

    useEffect(() => {
        (async()=>{
            setl1data(l1data.splice(0))
            const l1datais=await axios.get(`http://localhost:3001/getl1/${props.buid}`)
            for(let i of l1datais.data){
                setl1data(l1data.push(i))
            }
            setl1data([...l1data])
        })();
    }, [props.buid]);

    const changel1id=(l1id)=>{
        console.log(l1id)
    }

    return (
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Points</th>
              <th>Edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {l1data.map((x) => {
              return (
                <tr key={x.l1name}>
                  <td><a className="a" href={`/showl2/${x.l1id}/${x.l1name}`} title="click here to see all l2">{x.l1name}</a></td>
                  <td>{x.ctype}</td>
                  <td><Button variant="outlined" onClick={()=>{
                    changel1id(x.l1id)
                  }}>Edit</Button></td>
                  <td><Button variant="outlined" color="error">Delete</Button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
      </div>
    );
}

export default Tables