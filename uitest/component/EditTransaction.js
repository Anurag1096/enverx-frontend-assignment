
import { TextField, Container } from '@mui/material';
import CustomButtons from './Button';
import {useRouter} from 'next/router';
const EditTransaction=({handleSubmit,handleSetFormData,formData})=>{
    const router = useRouter();
    function handleCancel(){
        router.push("/")
    }
    return (<>
        <Container maxWidth="xs">
       <h2>Edit Expense</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    required
                    value={formData.category}
                    id="Category"
                    label="Category"
                    name="category"
                    onChange={handleSetFormData}
                    autoFocus
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    required
                    value={formData.date}
                    name="date"
                    // label="Date"
                    type="date"
                    id="date"
                    onChange={handleSetFormData}
                    variant="outlined"
                />
                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    value={formData.description}
                    id="description"
                    label="Description"
                    name="description"
                    onChange={handleSetFormData}
                    variant="outlined"
                />
                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    id="amount"
                    onChange={handleSetFormData}
                    value={formData.amount}
                    label="Amount"
                    name="amount"
                    variant="outlined"
                />
                <CustomButtons sx={{marginTop:2}} color="primary" fullWidth type="submit" name={"Edit Expenses"} />

            </form>
            <CustomButtons sx={{marginTop:2}} color="secondary" fullWidth name={"Cancel"} onClick={handleCancel}/>
        </Container>
    </>)
}

export default EditTransaction;