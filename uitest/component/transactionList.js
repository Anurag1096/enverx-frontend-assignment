
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SkeletonComp from './Skeleton';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BasicModal from './Modal';
import { useDispatch } from 'react-redux';
import { saveOneExpense } from '@/features/expense/expenseSlice';
import { db } from "@/firebase";
import { doc,deleteDoc } from "firebase/firestore";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const TransactionList = ({ ItemArr ,HeaderList, loading ,handleSearch}) => {
    const router=useRouter();
    const [open,setOpen]=useState(false)
    const [toDelete,setToDelete] = useState(0);
    const dispatch=useDispatch()
    const handleRoute=(index)=>{
        console.log("logging",ItemArr[index])
        dispatch(saveOneExpense(ItemArr[index]))
        router.push("/editExpenses")
    }
    
    const handleOpen = (index) => {
        setToDelete(ItemArr[index])
        setOpen(true)};
    const handleClose = () => setOpen(false);
    const handleDelete=()=>{
         const docRef=doc(db,"expenseData",toDelete.id)
        deleteDoc(docRef).then(()=>
        {
         setOpen(false)
    })
        .catch(error=>{
            console.log(error)
        })
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
                    <TableCell sx={{cursor:'pointer'}} onClick={()=>handleRoute(index)}><EditIcon fontSize='small'/></TableCell>
                    <TableCell sx={{cursor:'pointer'}} onClick={()=>handleOpen(index)}><DeleteIcon fontSize='small'/></TableCell>
                </TableRow>)
            }
        </>)
    })
    return (<>
        <TableContainer component={Paper} sx={{ maxWidth: 650, my: 2, mx: 'auto', boxShadow: 3 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {HeaderList.map((item,index) => {
                            return (<>
                                <TableCell key={item.index} sx={{ fontWeight: 'bold', color: 'text.secondary' }}>{item}</TableCell>

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