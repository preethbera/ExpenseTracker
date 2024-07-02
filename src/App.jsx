import { useState } from "react";
import Navbar from "./navbar";
import HeroComp from "./herocomp";
import ExpenseForm from "./expenseformcomp_folder/expenseform";
import ExpenseList from "./Expenselist/Expenselist";

function App() {
  let [expenseData, setExpenseData] = useState([]);

  function addExpenseData(data) {
    setExpenseData([...expenseData, data]);
    updateAmount(Number(data.amount));
  }
  function deleteData(index) {
    let temp = [...expenseData];
    updateAmount(-1 * Number(expenseData[index].amount));
    temp.splice(index, 1);
    setExpenseData(temp);
  }

  let [totalAmount, setTotalAmount] = useState(0);
  function updateAmount(value) {
    let temp = totalAmount;
    temp += value;
    setTotalAmount(temp);
  }
  function editData(index, newAmount) {
    let temp = {
      amount: newAmount,
      description: expenseData[index].description,
      catagory: expenseData[index].catagory,
      date: expenseData[index].date,
    };
    let tempArr = expenseData;
    tempArr.splice(index, 1, temp);
    setExpenseData(tempArr);
  }
  return (
    <>
      <Navbar></Navbar>
      <HeroComp></HeroComp>
      <ExpenseForm addData={addExpenseData}></ExpenseForm>
      <ExpenseList
        expenseData={expenseData}
        deletefunc={deleteData}
        totalAmount={totalAmount}
      ></ExpenseList>
    </>
  );
}

export default App;
