import { useEffect ,useState} from "react";
import axios from "axios";

import './master.css'
import Tables from './tables'



const Master=()=>{
  const [budata,setbudata]=useState([])
  const [buid,setbuid]=useState("")
  const [buname,setbuname]=useState("")

  useEffect(() => {
   (async()=>{
    const data=await axios.get("http://localhost:3001/getbulist")
    for(let i of data.data){
      setbudata(budata.push(i))
    }
    setbudata([...budata])
   })();
  
   console.log(budata) 
  },[]);

  useEffect(() => {
    for(let i of budata){
      if(buid==i.buid){
        setbuname(i.buname)
      }
    }
  }, [buid]);
  


  return (
    <div>
      <select className="select" name="bunameis" onChange={(event)=>{
        setbuid(event.target.value)
      }}>
        <option value="none" selected disabled hidden>
          Select an Business
        </option>
        {budata.map((x) => {
          return (
            <option className="option" value={x.buid} key={x.buid}>
              {x.buname}
            </option>
          );
        })}
      </select>
      {/* <div className="buname">
        <h1>
          {buname}
        </h1>
      </div> */}
      <div style={{marginLeft:"10px",marginTop:"20px"}}>
      <Tables buid={buid}></Tables>
      </div>
     
    </div>
  );
}

export default Master