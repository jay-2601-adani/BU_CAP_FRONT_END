import { useEffect,useState } from "react";
import axios from "axios";

import { Button } from "@mui/material";
import { useParams } from "react-router-dom";



const Showl3=(props)=>{
    const {l1name,l2name,l2id}=useParams()
    console.log(l1name,l2name,l2id)
    const [l3data,setl3data]=useState([])

    useEffect(() => {
        // console.log("called")
        (async()=>{
            setl3data(l3data.splice(0))
            const l3datais=await axios.get(`http://localhost:3001/getl3byl2/${l2id}`)
            console.log(l3datais.data)
            for(let i of l3datais.data){
                setl3data(l3data.push(i))
            }
            setl3data([...l3data])
        })();
    }, []);

    const changel1id=(l1id)=>{
        console.log(l1id)
    }

    return (
      <div>
        <h3>L1-{l1name}</h3>
        <h3>L2-{l2name}</h3>
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
            {l3data.map((x) => {
              return (
                <tr key={x.l3id}>
                  <td><a className="a" href={`/showl3/${x.l3id}`} title="click here to see all l2">{x.l3name}</a></td>
                  <td>{x.ctype}</td>
                  <td><Button variant="outlined" onClick={()=>{
                    changel1id(x.l3id)
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

export default Showl3