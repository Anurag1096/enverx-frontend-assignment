
import EditTransaction from "../../component/EditTransaction";
import { useState } from "react";


const EditExpenses = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const initialValues = {
        category: "",
        date: "",
        description: "",
        amount: "",
    };
    const [formData, setFromData] = useState(initialValues)

    const handleSetFormData = (e) => {
        const { name, value } = e.target;
        setFromData({
            ...formData,
            [name]: value,
        });
    }
    return (<>
        <EditTransaction handleSubmit={handleSubmit} formData={formData} handleSetFormData={handleSetFormData} />
    </>)
}

export default EditExpenses;