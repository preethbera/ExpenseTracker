import { useState, useRef } from "react";
import styles from "./expenseform.module.css";

function ExpenseForm({ addData }) {
  let [data, setData] = useState({
    amount: "",
    description: "",
    catagory: "Food",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  function checkComplete() {
    if (data.amount == "" || data.description == "" || data.date == "") {
      return false;
    }
    return true;
  }

  function clear() {
    setData({
      amount: "",
      description: "",
      catagory: "Food",
      date: "",
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    if (checkComplete()) {
      addData(data);
      clear();
    }
  }

  return (
    <section id="section2" className={styles.section}>
      <div className={styles.title}>
        <h2>Add your Expense here</h2>
      </div>
      <form>
        <input
          name="amount"
          value={data.amount}
          onChange={handleChange}
          type="number"
          className={`${styles.input} ${styles.commonstyle} ${styles.focus}`}
          placeholder="Amount"
        />
        <textarea
          name="description"
          value={data.description}
          onChange={handleChange}
          className={`${styles.description} ${styles.commonstyle} ${styles.focus}`}
          placeholder="Expense Description"
        ></textarea>
        <select
          name="catagory"
          value={data.catagory}
          onChange={handleChange}
          className={`${styles.commonstyle} ${styles.focus}`}
        >
          <option value="Food">Food</option>
          <option value="Stationary">Stationary</option>
          <option value="Clothing">Clothing</option>
        </select>
        <input
          name="date"
          value={data.date}
          onChange={handleChange}
          type="date"
          className={`${styles.commonstyle} ${styles.focus}`}
        />
        <button type="submit" className={styles.submitbtn} onClick={onSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default ExpenseForm;
