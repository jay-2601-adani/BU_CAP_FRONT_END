import { useEffect,useState } from "react";
import axios from "axios";
import '../master.css'
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";



const Showl2=(props)=>{
    const {l1id,bunameis}=useParams()
   
    const [l2data,setl2data]=useState([])

    useEffect(() => {
        // console.log("called")
        (async()=>{
            setl2data(l2data.splice(0))
            const l2datais = await axios.get(`http://${process.env.REACT_APP_LOCALHOSTIP_NAME}:3001/getl2byl1/${l1id}`)
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
      <div style={{marginLeft:"10px",marginTop:"20px"}}>
      <div style={{ display: "flex" }}>
        <h3 className="l1text">BU - {bunameis}</h3>
        {/* <h3 className="l2text"> L1 - {l1name} </h3> */}
      </div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>L2_LIST</th>
              <th>Type</th>
              <th>Edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {l2data.map((x) => {
              return (
                <tr key={x.l2id}>
                  <td><a className="a" href={`/showl3/${l1id}/${x.l2id}/${bunameis}`} title="click here to see all l2">{x.l2name}</a></td>
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