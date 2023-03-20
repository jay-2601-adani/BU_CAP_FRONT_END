import axios from "axios";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Fab from "@mui/material/Fab";
import * as React from "react";
import { useNavigate } from "react-router-dom";
// import HelpIcon from '@mui/icons-material/Help';
// import './main.css'
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { padding } from "@mui/system";

const Maintables = () => {
  const navigate = useNavigate();

  const buttonstyle = {
    margin: "5px",
  };
  const [data, setdata] = useState([]);
  const [cubu, setcubu] = useState();
  const [colobt, setcolbt] = useState();

  const [l1c, setl1c] = useState();
  const [l2c, setl2c] = useState();
  const [l3c, setl3c] = useState();

  const [l1value, setl1value] = useState();
  const [l2value, setl2value] = useState();
  const [l3value, setl3value] = useState();
  const [typedata, settypetdata] = useState({ A: [], B: [] });

  const [l1, setl1] = useState([]);
  const [l2, setl2] = useState([]);
  const [l3, setl3] = useState([]);
  const [applist, setapplist] = useState([]);

  const [fdata, setfdata] = useState([]);

  const [bulist, setbulist] = useState([
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
  //fatching the data

  useEffect(() => {
    const getdata = async () => {
      const datais = await axios.get("http://localhost:3001/");
      // console.log(datais.data)
      setdata([...datais.data]);
    };
    getdata();
  }, []);

  useEffect(() => {
    for (let i of data) {
      for (let j of Object.keys(i)) {
        if (bulist.includes(j) && i[j].length > 0) {
          setfdata(
            fdata.push({
              l1: i["Business Area (L0)"],
              l2: i["Business Capablity (L1)"],
              l3: i["Sub Capablity (L2)"],
              app: i[j],
              bu: buit[j],
              type: i["Capability Type"],
            })
          );
        }
      }
    }
    setfdata([...fdata]);
    for (let i of fdata) {
      if (i.type === "Core") {
        if (!l1.includes(i.l1)) {
          setl1(l1.push(i.l1));
          settypetdata({ ...typedata, A: typedata["A"].push(i.l1) });
        }

        if (!l2.includes(i.l2)) {
          setl2(l2.push(i.l2));
          settypetdata({ ...typedata, A: typedata["A"].push(i.l2) });
        }

        if (!l3.includes(i.l3)) {
          setl1(l3.push(i.l3));
          settypetdata({ ...typedata, A: typedata["A"].push(i.l3) });
        }

        if (!applist.includes(i.app)) {
          setapplist(applist.push(i.app));
          settypetdata({ ...typedata, A: typedata["A"].push(i.app) });
        }
      } else {
        if (!l1.includes(i.l1)) {
          setl1(l1.push(i.l1));
          settypetdata({ ...typedata, A: typedata["B"].push(i.l1) });
        }

        if (!l2.includes(i.l2)) {
          setl2(l2.push(i.l2));
          settypetdata({ ...typedata, A: typedata["B"].push(i.l2) });
        }

        if (!l3.includes(i.l3)) {
          setl1(l3.push(i.l3));
          settypetdata({ ...typedata, A: typedata["B"].push(i.l3) });
        }

        if (!applist.includes(i.app)) {
          setapplist(applist.push(i.app));
          settypetdata({ ...typedata, A: typedata["B"].push(i.app) });
        }
      }
    }
    settypetdata({ ...typedata });
    setl1([...l1]);
    setl2([...l2]);
    setl3([...l3]);
    setapplist([...applist]);
    // console.log(l1, l2, l3, applist)
  }, [data]);

  useEffect(() => {
    setl1c();
    setl2c();
    setl3c();

    setl1value();
    setl2value();
    setl3value();

    let l1 = [];
    let l2 = [];
    let l3 = [];
    let applist = [];
    setl1([...l1]);
    setl2([...l2]);
    setl3([...l3]);
    setapplist([...applist]);

    for (let i of fdata) {
      if (i.bu === cubu && !l1.includes(i.l1)) {
        setl1(l1.push(i.l1));
      }
      if (i.bu === cubu && !l2.includes(i.l2)) {
        setl1(l2.push(i.l2));
      }
      if (i.bu === cubu && !l3.includes(i.l3)) {
        setl1(l3.push(i.l3));
      }
      if (i.bu === cubu && !applist.includes(i.app)) {
        setapplist(applist.push(i.app));
      }
    }
    setl1([...l1]);
    setl2([...l2]);
    setl3([...l3]);
    setapplist([...applist]);
  }, [cubu]);

  useEffect(() => {
    setl2value();
    setl3value();
    setl2c();
    setl3c();
    let l2 = [];
    let l3 = [];
    let applist = [];
    setl2([...l2]);
    setl3([...l3]);
    setapplist([...applist]);

    for (let i of fdata) {
      // console.log(i.bu,cubu,i.l1,l1value)
      if (i.bu.includes(cubu) && i.l1 === l1value && !l2.includes(i.l2)) {
        setl2(l2.push(i.l2));
      }
      if (i.bu === cubu && i.l1 === l1value && !l3.includes(i.l3)) {
        setl3(l3.push(i.l3));
      }
      if (i.bu === cubu && i.l1 === l1value && !applist.includes(i.app)) {
        setapplist(applist.push(i.app));
      }
    }
    setl2([...l2]);
    setl3([...l3]);
    setapplist([...applist]);
  }, [l1c]);

  useEffect(() => {
    setl3value();
    setl3c();
    let l3 = [];
    let applist = [];
    setl3([...l3]);
    setapplist([...applist]);
    for (let i of fdata) {
      if (
        i.bu === cubu &&
        i.l1 === l1value &&
        i.l2 === l2value &&
        !l3.includes(i.l3)
      ) {
        setl3(l3.push(i.l3));
      }
      if (
        i.bu === cubu &&
        i.l1 === l1value &&
        i.l2 === l2value &&
        !applist.includes(i.app)
      ) {
        setapplist(applist.push(i.app));
      }
    }
    setl3([...l3]);
    setapplist([...applist]);
  }, [l2c]);

  useEffect(() => {
    let applist = [];
    setapplist([...applist]);
    for (let i of fdata) {
      if (
        i.bu === cubu &&
        i.l1 === l1value &&
        i.l2 === l2value &&
        i.l3 === l3value &&
        !applist.includes(i.app)
      ) {
        setapplist(applist.push(i.app));
      }
    }
    setapplist([...applist]);
  }, [l3c]);

  const fabstyle = {
    margin: "0px",
    top: "auto",
    right: "6px",
    bottom: "20px",
    left: "auto",
    position: "fixed",
  };

  const corediv = {
    // border:"1px solid #9c27b0",
    padding: "2%",
    margin: "10px",
  };

  const supportdiv = {
    // border:"1px solid #1565c0",
    padding: "2%",
    margin: "10px",
  };

  return (
    <div className="main" style={{ display: "flex", flexDirection: "column" }}>
      <Fab
        color="primary"
        aria-label="add"
        style={fabstyle}
        onClick={() => {
          console.log("clicked");
          window.parent.location = window.parent.location.href;
        }}
      >
        <RestartAltIcon></RestartAltIcon>
      </Fab>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="box"
          style={{
            textAlign: "left",
            margin: "10px",
            padding: "8px",
            width: "22%",
            borderRadius: "12%",
            border: "2px solid white ",
            backgroundColor: "#ECF9FF",
          }}
        >
          BU
          <h3>{cubu}</h3>
        </div>
        <div
          className="box"
          style={{
            textAlign: "left",
            margin: "10px",
            padding: "8px",
            width: "22%",
            borderRadius: "12%",
            border: "2px solid white ",
            backgroundColor: "#ECF9FF",
          }}
        >
          L1
          <h3>{l1value}</h3>
        </div>
        <div
          className="box"
          style={{
            textAlign: "left",
            margin: "10px",
            padding: "8px",
            width: "22%",
            borderRadius: "12%",
            border: "2px solid white ",
            backgroundColor: "#ECF9FF",
          }}
        >
          L2
          <h3>{l2value}</h3>
        </div>
        <div
          className="box"
          style={{
            textAlign: "left",
            margin: "10px",
            padding: "8px",
            width: "22%",
            borderRadius: "12%",
            border: "2px solid white ",
            backgroundColor: "#ECF9FF",
          }}
        >
          L3
          <h3>{l3value}</h3>
        </div>
      </div>
      <div className="m1">
        {/* <h2>{cubu},{l1value},{l2value},{l3value}</h2> */}
        {Object.keys(buit).map((x, i) => {
          if (colobt == i) {
            return (
              <Button
                className="bt"
                variant="contained"
                color="primary"
                key={i}
                style={buttonstyle}
                onClick={() => {
                  setcubu(buit[x]);
                  setcolbt(i);
                }}
              >
                {buit[x]}
              </Button>
            );
          } else {
            return (
              <Button
                className="bt"
                variant="outlined"
                color="primary"
                key={i}
                style={buttonstyle}
                onClick={() => {
                  setcubu(buit[x]);
                  setcolbt(i);
                }}
              >
                {buit[x]}
              </Button>
            );
          }
        })}
      </div>
      <hr></hr>

      <div style={{ margin: "2%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "60%" }}>
          <div style={{ height: "400px", overflow: "auto", marginTop: "50px" }}>
            <h2>L1</h2>
            <div style={corediv}>
              <h4>Core</h4>
              {l1.map((x, i) => {
                let c = "primary";
                if (typedata["A"].includes(x)) {
                  c = "secondary";
                  if (l1c === i) {
                    return (
                      <Button
                        className="bt"
                        variant="contained"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl1c(i);
                          setl1value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        className="bt"
                        variant="outlined"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl1c(i);
                          setl1value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  }
                }
              })}
            </div>
            <div style={supportdiv}>
              <h4>Support</h4>
              {l1.map((x, i) => {
                let c = "primary";
                if (typedata["B"].includes(x)) {
                  if (l1c === i) {
                    return (
                      <Button
                        className="bt"
                        variant="contained"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl1c(i);
                          setl1value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        className="bt"
                        variant="outlined"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl1c(i);
                          setl1value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  }
                }
              })}
            </div>
          </div>

          <div style={{ height: "400px", overflow: "auto", marginTop: "50px" }}>
            <h2>L2</h2>
            <div style={corediv}>
              <h4>Core</h4>
              {l2.map((x, i) => {
                let c = "primary";
                if (typedata["A"].includes(x)) {
                  c = "secondary";
                  if (l2c === i) {
                    return (
                      <Button
                        className="bt"
                        variant="contained"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl2c(i);
                          setl2value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        className="bt"
                        variant="outlined"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl2c(i);
                          setl2value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  }
                }
              })}
            </div>
            <div style={supportdiv}>
              <h4>Support</h4>
              {l2.map((x, i) => {
                if (typedata["B"].includes(x)) {
                  let c = "primary";
                  if (l2c === i) {
                    return (
                      <Button
                        className="bt"
                        variant="contained"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl2c(i);
                          setl2value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        className="bt"
                        variant="outlined"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl2c(i);
                          setl2value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  }
                }
              })}
            </div>
          </div>

          <div style={{ height: "400px", overflow: "auto", marginTop: "50px" }}>
            <h2>L3</h2>
            <div style={corediv}>
              <h4>Core</h4>
              {l3.map((x, i) => {
                let c = "primary";
                if (typedata["A"].includes(x)) {
                  c = "secondary";
                  if (l3c === i) {
                    return (
                      <Button
                        className="bt"
                        variant="contained"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl3c(i);
                          setl3value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        className="bt"
                        variant="outlined"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl3c(i);
                          setl3value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  }
                }
              })}
            </div>
            <div style={supportdiv}>
              <h4>Support</h4>
              {l3.map((x, i) => {
                if (typedata["B"].includes(x)) {
                  let c = "primary";
                  if (l3c === i) {
                    return (
                      <Button
                        className="bt"
                        variant="contained"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl3c(i);
                          setl3value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        className="bt"
                        variant="outlined"
                        color={c}
                        key={i}
                        style={buttonstyle}
                        onClick={() => {
                          setl3c(i);
                          setl3value(x);
                        }}
                      >
                        {x}
                      </Button>
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            width: "40%",
            height: "1200px",
            overflow: "auto",
            margin: "2%",
          }}
        >
          <h2>Appplication</h2>
          <div style={corediv}>
            <h4>Core</h4>
            {applist.map((x, i) => {
              let c = "primary";
              if (typedata["A"].includes(x)) {
                c = "secondary";
                return (
                  <Button
                    className="bt"
                    variant="outlined"
                    color={c}
                    key={i}
                    style={buttonstyle}
                    onClick={() => {
                      alert(
                        JSON.stringify({ l1value, l2value, l3value, cubu, x })
                      );
                    }}
                  >
                    {x}
                  </Button>
                );
              }
            })}
          </div>
          <div style={supportdiv}>
            <h4>Support</h4>
            {applist.map((x, i) => {
              if (typedata["B"].includes(x)) {
                let c = "primary";
                return (
                  <Button
                    className="bt"
                    variant="outlined"
                    color={c}
                    key={i}
                    style={buttonstyle}
                    onClick={() => {
                      alert(
                        JSON.stringify({ l1value, l2value, l3value, cubu, x })
                      );
                    }}
                  >
                    {x}
                  </Button>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintables;
