import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Switch from '@mui/material/Switch';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import L1change from './l1change';
import L1changedelete from './l1delete';



function createData(L1_name, Option_1, Option_2,l1id,l2string,l3string,enable_disable) {
  return {
    L1_name,
    Option_1,
    Option_2,
    l1id,
    l2string,
    l3string,
    enable_disable
  };
}

const popupalert = () => {
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>
  );
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);


 
  
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.L1_name}
        </TableCell>
        {/* edit */}
        <TableCell align="right">
          <L1change name={row.L1_name} type={row.Option_2}></L1change>
        </TableCell>
        {/* delete */}
        <TableCell align="right">
          <L1changedelete></L1changedelete>
        </TableCell>
        <TableCell align="right">
          {row.Option_2}-{row.l1id}
        </TableCell>
        <TableCell align="right">
          <Switch defaultChecked />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                child
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>L_name</b>
                    </TableCell>
                    <TableCell>
                      <b>List</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* l2 */}
                  <TableRow>
                    <TableCell component="th" scope="row">
                      L2_list
                    </TableCell>

                    <TableCell>{row.l2string}</TableCell>
                  </TableRow>
                  {/* l3 */}
                  <TableRow>
                    <TableCell component="th" scope="row">
                      L3_list
                    </TableCell>
                    <TableCell>{row.l3string}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};






export default function L1master() {
  const [masterdata,setmasterdata]=useState([])
  const [rows,setrow]=useState([])
    useEffect(() => {
      const getl1=async ()=>{
        const mdata=await axios.get("http://localhost:3001/getmasterdatal")
        for(let i of mdata.data){
          setmasterdata(masterdata.push(i))
        }
        setmasterdata([...masterdata])
        // console.log(masterdata)
        const data=await axios.get("http://localhost:3001/getl1")
        console.log(data.data)
        for(let i of data.data){
          let l2string=""
          let l3string=""
          for(let j of masterdata){
            if (j.l1id===i.l1id){
              if(!l2string.includes(j.l2name)){
                l2string=l2string+j.l2name+","
              }
              if(!l3string.includes(j.l3name)){
                l3string=l3string+j.l3name+","
              }
            }
          }
          let idata=createData(i.l1name,i.l1id,i.ctype,i.l1id,l2string,l3string)
          // console.log(idata)
          setrow(rows.push(idata))
        }
        setrow([...rows])
      }
      getl1()
      // console.log(rows)
    },[]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell><b>L1_name</b></TableCell>
            <TableCell align="center"><b>Edit</b> </TableCell>
            <TableCell align="center"><b>Delete</b> </TableCell>
            <TableCell align="right"><b>Type</b> </TableCell>
            <TableCell align="center"><b>Enable_Disable</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}