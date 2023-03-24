
import Mainfunction from "./mainfunction"
// import Tables from "../select_bu_cap_table/table"
import { useState ,useEffect} from "react"
import axios from "axios"
import Tableexample from "./tableexample"

const Main=()=>{
    const [buname,setbuname]=useState("ALL");
    const [apidata,setapidata]=useState([])
    const buvalue=(value)=>{
        setbuname(value)
    }

    useEffect(() => {
        const getdata = async () => {
          const datais = await axios.get("http://${process.env.REACT_APP_LOCALHOSTIP_NAME}:3001/");
          // console.log(datais.data)
          setapidata([...datais.data]);
        };
        getdata();
      }, []);
    
    return(
        <div>
           
            {/* <Mainfunction buchanged={buvalue}></Mainfunction>
            <Tables buname={buname} apidatais={apidata}></Tables> */}
            <Tableexample></Tableexample>
        </div>
    )
}

export default Main