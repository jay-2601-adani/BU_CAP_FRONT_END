import { useEffect, useState } from "react";
import axios from "axios";
import "../master.css";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

const Showapp = (props) => {
  const {l1id,l2id,l3id,bunameis} = useParams();

  const [l3data, setl3data] = useState([]);

  useEffect(() => {
    // console.log("called")
    (async () => {
      setl3data(l3data.splice(0));
      const l3datais = await axios.get(
        `http://${process.env.REACT_APP_LOCALHOSTIP_NAME}:3001/getapp/${l1id}/${l2id}/${l3id}`
      );
      console.log(l3datais.data);
      for (let i of l3datais.data) {
        setl3data(l3data.push(i));
      }
      setl3data([...l3data]);
    })();
  }, []);

  const changel1id = (l1id) => {
    console.log(l1id);
  };

  return (
    <div style={{ marginLeft: "10px", marginTop: "20px" }}>
      <div style={{ display: "flex" }}>
        <h3 className="l1text">BU - {bunameis}</h3>
        {/* <h3 className="l2text"> L1 - {l1name} </h3>{" "}
        <h3 className="l2text"> L2 - {l2name} </h3> */}
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>APP_LIST</th>
            <th>Type</th>
            <th>Edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {l3data.map((x) => {
            return (
              <tr key={x.l3id}>
                <td>
                    {x.appnameinmaping}
                </td>
                <td>{x.ctype}</td>
                <td>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      changel1id(x.l3id);
                    }}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="outlined" color="error">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Showapp;
