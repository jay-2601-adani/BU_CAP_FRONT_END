import axios from "axios"
import { useEffect,useState } from "react"
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const data=[
    {label:"helllo",value:"1"},
    {label:"helllo2",value:"2"},
    {label:"helllo3",value:"3"}
]
const Bybu = () => {
    const [apidata,setapidata]=useState([])
    const [currentbu,setciurrentbu]=useState("")
    const [bulist,setbulist]=useState([])
    const [buit, setbuit] = useState({
        "AEML IT Applications": "AEML",
        "Power IT Applications": "Power",
        "Transmission IT Applications": "Transmission",
        "Green Energy IT Applications": "Green Energy",
        "MSPVL IT Applications": "MSPVL",
        "Gas IT Applications": "Gas",
        "Airports IT Applications": "Airports",
        "Ports & Logistics IT Applications": "Ports & Logistics",
        "Realty IT Applications": "Realty",
        "Finserve IT Applications": "Finserve",
        "Natural Resources IT Applications": "Natural Resources",
      });

    useEffect(() => {
        for(let i of Object.values(buit)){
            setbuit(bulist.push(i))
        }

        const run=async()=>{
            const data=await axios.get("http://localhost:3001/")
            setapidata([...data.data])
        }
        run()
    }, []);


   useEffect(() => {
    
   }, [currentbu]);

    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={bulist}
                sx={{ width: 300 }}
                onChange={(event, newValue) => {
                    setciurrentbu(newValue);
                  }}
                renderInput={(params) => <TextField {...params} label="Buisness" />}
            />
            
        </div>
    )
}

export default Bybu