import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import "./main.css";
import Tables from "./table";
// import Button from 'react-bootstrap/Button';
import { Button } from "@mui/material";

const Mainall = () => {
  const [array0, setarray0] = useState([]);
  const [array1, setarray1] = useState([]);
  const [array2, setarray2] = useState([]);

  const [options0, setoptions0] = useState([]);
  const [options1, setoptions1] = useState([]);
  const [options2, setoptions2] = useState([]);

  const [fl1, setfl1] = useState(false);
  const [fl2, setfl2] = useState(false);
  const [fl3, setfl3] = useState(false);
  const [valuetable, setvaluetable] = useState({});

  const [l0, setl0] = useState("");
  const [l1, setl1] = useState("");
  const [l2, setl2] = useState("");
  const [buname, setbuname] = useState("");
  const [resultarray, setresultarray] = useState([]);

  const [showl1, setshowl1] = useState(false);
  const [showl2, setshowl2] = useState(false);
  const [showbulist, setshowbulist] = useState(false);
  const [showbtn, setshowbtn] = useState(false);
  const [showtable, setshowtable] = useState(false);

  const [data, setdata] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const getdatais = await axios.get(`http://${process.env.REACT_APP_LOCALHOSTIP_NAME}:3001/`);
      // console.log(getdatais.data)
      setdata([...getdatais.data]);
      // setdapidata(apidata.push(getdatais.data))
    };
    getdata();
  }, []);

  useEffect(() => {
    try {
      for (let x of data) {
        if (!array0.includes(x["Business Area (L0)"])) {
          setarray0(array0.push(x["Business Area (L0)"]));
          setoptions0(
            options0.push({
              value: x["Business Area (L0)"],
              label: x["Business Area (L0)"],
            })
          );
        }
        // console.log(options)
      }
      setoptions0(options0);
    } catch (error) {
      console.log(error);
    }
    // set lo
  }, [data]);

  const changel0 = (event) => {
    setl1("");
    setl2("");
    setshowtable(false);
    console.log(event.value);
    setl0(event.value);
    if (fl1 == false) {
      setfl1(true);
    } else {
      setshowl1(false);
      setshowl2(false);
      setshowbulist(false);
    }
  };

  useEffect(() => {
    try {
      if (fl1 == true) {
        setshowl1(true);
      }
      setoptions1([]);
      setarray1([]);
      for (let i of data) {
        // console.log(i["Business Capablity (L1)"])
        if (!array1.includes(i["Business Capablity (L1)"])) {
          if (l0 === i["Business Area (L0)"]) {
            setarray1(array1.push(i["Business Capablity (L1)"]));
            setoptions1(
              options1.push({
                value: i["Business Capablity (L1)"],
                label: i["Business Capablity (L1)"],
              })
            );
          }
        }
        // console.log(i["Business Capablity (L1)"])
      }
      // console.log(options)
      setoptions1(options1);
    } catch (error) {
      console.log(error);
    }
  }, [showl1, fl1, l0, options1]);

  const changel1 = (event) => {
    console.log(event.value);
    setl2("");
    setl1(event.value);
    setshowtable(false);
    if (fl2 == false) {
      setfl2(true);
    } else {
      setshowl2(false);
      setshowbulist(false);
    }
  };

  useEffect(() => {
    try {
      if (fl2 == true) {
        setshowl2(true);
      }
      setoptions2([]);
      setarray2([]);
      for (let i of data) {
        if (!array2.includes(i["Sub Capablity (L2)"])) {
          if (
            i["Business Area (L0)"] === l0 &&
            i["Business Capablity (L1)"] === l1
          ) {
            setarray2(array2.push(i["Sub Capablity (L2)"]));
            setoptions2(
              options2.push({
                value: i["Sub Capablity (L2)"],
                label: i["Sub Capablity (L2)"],
              })
            );
          }
        }
      }
      setoptions2(options2);
    } catch (error) {
      console.log(error);
    }
  }, [showl2, l1, l0, fl1, fl2, options2, options1]);

  const changel2 = (event) => {
    setshowtable(false);
    setbuname("");
    setl2(event.value);
    setshowbulist(true);
    if (fl3 == false) {
      setshowbtn(true);
      setfl3(true);
    } else {
      setshowbulist(false);
      setshowbtn(true);
    }
  };

  const searchdata = () => {
    console.log(l0, l1, l2, buname);

    if (l0.length === 0) {
      alert("please fill l0");
    } else if (l1.length === 0) {
      alert("please fill l1");
    } else if (l2.length === 0) {
      alert("please fill l2");
    } else {
      setshowtable(true);
      setvaluetable({ l0, l1, l2, buname });
    }
    // for(let i of data){
    //     if(i["Business Area (L0)"]===l0 && i["Business Capablity (L1)"]===l1 && i["Sub Capablity (L2)"] === l2){
    //         if(Object.keys(i).includes(buname)){
    //             if(i[buname].length>0){
    //                 setresultarray(resultarray.push(i[buname]))
    //             }
    //         }
    //     }
    // }
    // console.log(resultarray)
  };

  return (
    
    <div>
      <div className="maindiv">
        <label>L1</label>
        <Select
          options={options0}
          onChange={changel0}
          className="selecttag"
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary25: "hotpink",
              primary: "black",
            },
          })}
        ></Select>

        {showl1 && (
          <div>
            <label>L2</label>
            <Select
              options={options1}
              onChange={changel1}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "lightblue",
                  primary: "black",
                },
              })}
            ></Select>
          </div>
        )}
        {showl2 && (
          <div>
            <label>L3</label>
            <Select
              options={options2}
              onChange={changel2}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "lightgreen",
                  primary: "black",
                },
              })}
            ></Select>
          </div>
        )}
      </div>
      <div className="main2">
        {showbtn && (
          <Button
            className="btn"
            variant="contained"
            color="primary"
            onClick={searchdata}
            style={{ marginLeft: "15%" }}
          >
            SEARCH
          </Button>
        )}
        {showtable && (
          <Tables
            data={data}
            serchvalue={valuetable}
            showtable={showtable}
          ></Tables>
        )}
      </div>
    </div>
  );
};

export default Mainall;
