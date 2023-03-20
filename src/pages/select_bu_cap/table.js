import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect ,useState} from 'react';
import './main.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,    
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// const rows=[
//   {id:1,l0:"jay",l1:"jay2",l2:"jay3",BU:"abb",App:"done",key:1}
// ]

export default function Tables(props) {
  const [buit,setbuit]=useState({
    "AEML IT Applications":"AEML","Power IT Applications":"Power","Transmission IT Applications":"Transmission","Green Energy IT Applications":"Green Energy","MSPVL IT Applications":"MSPVL","Gas IT Applications":"Gas","Airports IT Applications":"Airports","Ports & Logistics IT Applications":"Ports & Logistics","Realty IT Applications":"Realty","Finserve IT Applications":"Finserve","Natural Resources IT Applications":"Natural Resources"})
  const [rows,setrows]=useState([])
  const [ids,setids]=useState(0)
  const [buarry,setbuarray]=useState(["AEML IT Applications","Power IT Applications","Transmission IT Applications","Green Energy IT Applications","MSPVL IT Applications","Gas IT Applications","Airports IT Applications","Ports & Logistics IT Applications","Realty IT Applications","Finserve IT Applications","Natural Resources IT Applications"])

  useEffect(() => {
    console.log(props.data)
    console.log(props.serchvalue)
    try {
      setrows([])
      for(let i of props.data){
        if(i["Business Area (L0)"]===props.serchvalue.l0 && i["Business Capablity (L1)"]===props.serchvalue.l1 && i["Sub Capablity (L2)"]===props.serchvalue.l2){
          for(let j of buarry){
            if(Object.keys(i).includes(j) && i[j].length>0){
              setrows(rows.push({id:ids,l0:props.serchvalue.l0,l1:props.serchvalue.l1,l2:props.serchvalue.l2,BU:buit[j],App:i[j],key:j+i}))
              setids(ids+1)
            }
          }
        }
      }
      setrows(rows)
    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
   
  }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">INDEX</StyledTableCell>
            <StyledTableCell align="left">L1</StyledTableCell>
            <StyledTableCell align="left">L2</StyledTableCell>
            <StyledTableCell align="left">L3</StyledTableCell>
            <StyledTableCell align="left">BUSINESS UNIT</StyledTableCell>
            <StyledTableCell align="left">APPLICATION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <StyledTableRow key={row.key} >
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              
              <StyledTableCell align="left">{row.l0}</StyledTableCell>
              <StyledTableCell align="left">{row.l1}</StyledTableCell>
              <StyledTableCell align="left">{row.l2}</StyledTableCell>
              <StyledTableCell align="left">{row.BU}</StyledTableCell>
              <StyledTableCell align="left">{row.App}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}