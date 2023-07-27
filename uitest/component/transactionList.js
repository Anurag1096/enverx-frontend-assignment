
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SkeletonComp from './Skeleton';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import BasicModal from './Modal';
const TransactionList = ({ ItemArr, HeaderList, loading }) => {
    const router=useRouter();
    const [open,setOpen]=useState(false)
    const handleRoute=()=>{
        router.push("/editExpenses")
    }
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleDelete=()=>{
         setOpen(true)
    }
    const renderList = ItemArr.map((item,index) => {

        return (<>
            {loading ?<TableRow key={item.id}>
            <TableCell component="th" scope="row"><SkeletonComp/></TableCell>
                    <TableCell><SkeletonComp/></TableCell>
                    <TableCell><SkeletonComp/></TableCell>
                    <TableCell><SkeletonComp/></TableCell>
                    <TableCell><SkeletonComp/></TableCell>
            </TableRow>  :
                (
                
                <TableRow key={item.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">{index+1}</TableCell>
                    <TableCell>{item.data.category}</TableCell>
                    <TableCell>{item.data.date.seconds?item.data.date.seconds:item.data.date}</TableCell>
                    <TableCell>{item.data.description}</TableCell>
                    <TableCell>{item.data.amount}</TableCell>
                    <TableCell sx={{cursor:'pointer'}} onClick={handleRoute}>Edit</TableCell>
                    <TableCell sx={{cursor:'pointer'}} onClick={handleDelete}>Delete</TableCell>
                </TableRow>)
            }
        </>)
    })
    return (<>
        <TableContainer component={Paper} sx={{ maxWidth: 650, my: 2, mx: 'auto', boxShadow: 3 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {HeaderList.map((item) => {
                            return (<>
                                <TableCell key={item} sx={{ fontWeight: 'bold', color: 'text.secondary' }}>{item}</TableCell>

                            </>)
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderList}
                </TableBody>
            </Table>
        <BasicModal  open={open}  handleOpen={handleOpen} handleClose={handleClose} handleFunction={handleDelete}/>
        </TableContainer>
    </>)
}

export default TransactionList;