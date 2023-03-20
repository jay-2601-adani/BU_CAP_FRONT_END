import React from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import "./main.css";
import { useEffect, useState } from "react";
import { green } from "@mui/material/colors";
import Mainfunction from "./mainfunction";
import CountUp from 'react-countup';

const columns = [
  {
    name: "L1",
    label: "L1",
    options: {
      StyleSheet: { backgroundColor: green },
      filter: true,
      sort: false,
      // customFilterListOptions: { render: v => `Name: ${v}` },
      // hint:"this is L1",
      filterOptions: {},
    },
  },
  {
    name: "L2",
    label: "L2",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "L3",
    label: "L3",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "BU",
    label: "BU",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "APP",
    label: "APP",
    options: {
      filter: true,
      sort: true,
    },
  },
];

const options = {
  filterType: "multiselect",
  draggableColumns: {
    enabled: true,
    transitionTime: 300,
  },
  elevation: 5,
  fixedHeader: true,
  fixedSelectColumn: true,
  tableBodyHeight: "400px",
  jumpToPage: true,
  onFilterChange: (
    changedColumn,
    filterList,
    changedColumnIndex,
    displayData
  ) => {
    console.log(changedColumn, filterList, changedColumnIndex, displayData);
  },
  //   resizableColumns:true,
  selectableRowsHeader: false,
  selectableRows: "none",
  setFilterChipProps: (colIndex, colName, filterValue) => {
    // console.log(colIndex,colName,filterValue)
  },
  //   selectableRowsHideCheckboxes:false
};

const Tableexample = () => {
  const [emptyarray, setemptyarray] = useState([])
  const [buname, setbuname] = useState("ALL");
  const [apidata, setapidata] = useState([]);
  const [data, setdata] = useState([]);
  const [ccount, setccount] = useState(0)


  const [c1, setc1] = useState(0)
  const [c2, setc2] = useState(0)
  const [c3, setc3] = useState(0)

  const [l1, setl1] = useState([])
  const [l2, setl2] = useState([])
  const [l3, setl3] = useState([])
  const [app,setapp]=useState([])

  const [buitis, setbuitis] = useState({
    "ALL": "ALL", "AEML IT Applications": "AEML", "Power IT Applications": "Power", "Transmission IT Applications": "Transmission", "Green Energy IT Applications": "Green Energy", "MSPVL IT Applications": "MSPVL", "Gas IT Applications": "Gas", "Airports IT Applications": "Airports", "Ports & Logistics IT Applications": "Ports & Logistics", "Realty IT Applications": "Realty", "Finserve IT Applications": "Finserve", "Natural Resources IT Applications": "Natural Resources"
  })

  const [buit, setbuit] = useState({
    "AEML": "AEML IT Applications",
    "Power": "Power IT Applications",
    "Transmission": "Transmission IT Applications",
    "Green Energy": "Green Energy IT Applications",
    "MSPVL": "MSPVL IT Applications",
    "Gas": "Gas IT Applications",
    "Airports": "Airports IT Applications",
    "Ports & Logistics": "Ports & Logistics IT Applications",
    "Realty": "Realty IT Applications",
    "Finserve": "Finserve IT Applications",
    "Natural Resources": "Natural Resources IT Applications",
  });

  const [buarry, setbuarray] = useState([
    "AEML IT Applications",
    "Power IT Applications",
    "Transmission IT Applications",
    "Green Energy IT Applications",
    "MSPVL IT Applications",
    "Gas IT Applications",
    "Airports IT Applications",
    "Ports & Logistics IT Applications",
    "Realty IT Applications",
    "Finserve IT Applications",
    "Natural Resources IT Applications",
  ]);

  useEffect(() => {
    const getdata = async () => {
      const datais = await axios.get("http://localhost:3001/");
      // console.log(datais.data)
      setapidata([...datais.data]);

    };
    getdata();

  }, []);

  useEffect(() => {

    for (let i of apidata) {
      for (let j of Object.keys(i)) {
        if (buarry.includes(j) && i[j].length > 0) {
          setdata(
            data.push({
              L1: i["Business Area (L0)"],
              L2: i["Business Capablity (L1)"],
              L3: i["Sub Capablity (L2)"],
              BU: buitis[j],
              APP: i[j],
            })
          );
        }
      }
    }
    setdata([...data]);
    setccount(data.length)
    
  }, [apidata]);




  const changebu = (datais) => {
    setbuname(datais);
  };

  useEffect(() => {
    
    console.log(l1,l2,l3)

    if (buname === "ALL") {
      for (let i of data) {
         if(! app.includes(i.APP)){
          setapp(app.push(i.APP))
         }

          if (! l1.includes(i.L1)) {
            setl1(l1.push(i.L1))
          }

          else if (! l2.includes(i.L2)) {
            setl2(l2.push(i.L2))
          }
          
          else if (! l3.includes(i.L3)) {
            setl3(l3.push(i.L3))
          }
        
      }
      // setccount(app.length)
    } else {
      for (let i of data) {
        if (i["BU"] === buname) {
          if(! app.includes(i.APP)){
            setapp(app.push(i.APP))
           }

          if (! l1.includes(i.L1)) {
            setl1(l1.push(i.L1))
          }

          else if (! l2.includes(i.L2)) {
            setl2(l2.push(i.L2))
          }
          
          else if (! l3.includes(i.L3)) {
            setl3(l3.push(i.L3))
          }
        }
      }
    }
    setccount(app.length)
    setc1(l1.length)
    setc2(l2.length)
    setc3(l3.length)
    setl1([])
    setl2([])
    setl3([])
    setapp([])
  }, [buname,apidata]);



  return (
    <div>
      <Mainfunction buchanged={changebu}></Mainfunction>
      <div className="countl">
        <div className="cnumber" style={{ margin: "10px", padding: "8px", width: "20%", borderRadius:"12%", border: "2px solid white " , backgroundColor:"#ECF9FF" }}>
          <h2 >
            <CountUp
              start={0}
              end={c1}
              duration={1.1}
              scrollSpyOnce={true}
            ></CountUp>
          </h2>Business Area - L1
        </div>
        <div className="cnumber" style={{ margin: "10px",padding: "8px", width: "20%", borderRadius:"12%", border: "2px solid white", backgroundColor:"#ECF9FF" }}>
          <h2>
            <CountUp
              start={0}
              end={c2}
              duration={1.2}
              scrollSpyOnce={true}
            ></CountUp>
          </h2>Business Capablity - L2
        </div>
        <div className="cnumber" style={{ margin: "10px", padding: "8px", width: "20%", borderRadius:"12%", border: "2px solid white" , backgroundColor:"#ECF9FF" }}>
          <h2>
            <CountUp
              start={0}
              end={c3}
              duration={1.3}
              scrollSpyOnce={true}
            ></CountUp>
          </h2>Sub Capablity - L3
        </div>
        <div className="cnumber" style={{ margin: "10px", padding: "8px", width: "20%", borderRadius:"12%",border: "2px solid white" , backgroundColor:"#ECF9FF" }}>
          <h2>
            <CountUp
              start={0}
              end={ccount}
              duration={1}
              scrollSpyOnce={true}
            ></CountUp>
          </h2>Applications
        </div>
      </div>



      <MUIDataTable
        data={data.filter((x) => {
          if (buname === "ALL") {
            return x;
          }
          return x["BU"] === buname;
        })}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default Tableexample;
