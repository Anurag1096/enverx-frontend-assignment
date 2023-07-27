
import EditTransaction from "../../component/EditTransaction";
import { useState } from "react";
import { useSelector } from "react-redux";
import { db } from "@/firebase";
import { doc,updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
const EditExpenses = () => {
    const router=useRouter()
    const singleData=useSelector((state)=>state.expense.singleExpense)
    const handleSubmit = (e) => {
        e.preventDefault()
      const docRef = doc(db,"expenseData",singleData.id)
      updateDoc(docRef,{
        category: formData.category,
        date: formData.date,
        description: formData.description,
        amount: formData.amount,
      }).then((response)=>{
        console.log(response);
        router.push("/");
      }).catch(error=>{
        console.log(error)
      })
    }
    const initialValues = {
        category: singleData.data.category,
        date: singleData.data.date,
        description: singleData.data.description,
        amount: singleData.data.amount,
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