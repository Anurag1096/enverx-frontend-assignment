
import { TextField, Container } from '@mui/material';
import CustomButtons from './Button';
const TransactionalForm = ({handleSubmit,handleSetFormData,formData}) => {
  
    return (<>
        <Container maxWidth="xs">
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
                    type="number"
                    required
                    id="amount"
                    onChange={handleSetFormData}
                    value={formData.amount}
                    label="Amount"
                    name="amount"
                    variant="outlined"
                />
                <CustomButtons sx={{marginTop:2}} color="primary" fullWidth type="submit" name={"Add Expenses"} />

            </form>
            
        </Container>
    </>)
}

export default TransactionalForm; 