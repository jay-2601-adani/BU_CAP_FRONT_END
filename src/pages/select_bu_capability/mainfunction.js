import axios from "axios";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";
// import './main.css'
import { Button } from "@mui/material";

const Mainfunction = (props) => {
  
  const buttonstyle={
    margin:"5px",
  }
  const [data, setdata] = useState([]);
  const [cubu,setcubu]=useState("ALL")
  const [colobt,setcolbt]=useState(0)

  const [alignment, setAlignment] = React.useState("ALL");
  const [bulist,setbulist]=useState(["ALL","AEML IT Applications","Power IT Applications","Transmission IT Applications","Green Energy IT Applications","MSPVL IT Applications","Gas IT Applications","Airports IT Applications","Ports & Logistics IT Applications","Realty IT Applications","Finserve IT Applications","Natural Resources IT Applications"])
  const [buit,setbuit]=useState({
    "ALL":"ALL","AEML IT Applications":"AEML","Power IT Applications":"Power","Transmission IT Applications":"Transmission","Green Energy IT Applications":"Green Energy","MSPVL IT Applications":"MSPVL","Gas IT Applications":"Gas","Airports IT Applications":"Airports","Ports & Logistics IT Applications":"Ports & Logistics","Realty IT Applications":"Realty","Finserve IT Applications":"Finserve","Natural Resources IT Applications":"Natural Resources"})
  //fatching the data
  

  useEffect(() => {
    // console.log(alignment)
  }, [alignment]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    props.buchanged(newAlignment)
  };

  return (
    <div>
      <div>
        {Object.keys(buit).map((x,i) => {
            if(colobt==i){
                return (
                    <Button className="bt" variant="contained" color="primary" key={i} style={buttonstyle} onClick={()=>{
                      setcubu(buit[x])
                      setcolbt(i)
                      setAlignment(buit[x]);
                      props.buchanged(buit[x])
                    }}>
                      {buit[x]}
                    </Button>
                  );
            }else{
                return (
            
                    <Button className="bt" variant="outlined" color="primary" key={i} style={buttonstyle} onClick={()=>{
                      setAlignment(buit[x]);
                      props.buchanged(buit[x])
                      setcubu(buit[x])
                      setcolbt(i)
                    }}>
                      {buit[x]}
                    </Button>
                  );
            }        
      })}
        </div>


      
    </div>
  );
};

export default Mainfunction;
