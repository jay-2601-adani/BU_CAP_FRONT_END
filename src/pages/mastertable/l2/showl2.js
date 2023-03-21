import { useEffect,useState } from "react";
import axios from "axios";

import { Button } from "@mui/material";
import { useParams } from "react-router-dom";



const Showl2=(props)=>{
    const {l1id,l1name}=useParams()
    console.log(l1name,l1id)
    const [l2data,setl2data]=useState([])

    useEffect(() => {
        // console.log("called")
        (async()=>{
            setl2data(l2data.splice(0))
            const l2datais=await axios.get(`http://localhost:3001/getl2byl1/${l1id}`)
            console.log(l2datais.data)
            for(let i of l2datais.data){
                setl2data(l2data.push(i))
            }
            setl2data([...l2data])
        })();
    }, []);

    const changel1id=(l1id)=>{
        console.log(l1id)
    }

    return (
      <div>
        <h3>L1-{l1name}</h3>
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
            {l2data.map((x) => {
              return (
                <tr key={x.l2id}>
                  <td><a className="a" href={`/showl3/${l1name}/${x.l2name}/${x.l2id}`} title="click here to see all l2">{x.l2name}</a></td>
                  <td>{x.ctype}</td>
                  <td><Button variant="outlined" onClick={()=>{
                    changel1id(x.l2id)
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

export default Showl2