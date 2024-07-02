import { useState } from "react";
import styles from "./expenselist.module.css";

// since by default the date is stored in yyyy-mm-dd so to convert in dd-mm-yyyy format below function is created
function ExpenseList({ expenseData, deletefunc, totalAmount }) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;
  };

  return (
    <section id="section3" className={styles.section}>
      <div className={styles.maincont}>
        <div className={styles.titlecont}>
          <h2>See all your Expense here</h2>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z" />
            </svg>{" "}
            Filter
          </button>
        </div>
        <div className={styles.datacont}>
          {expenseData.map((data, index) => (
            <ul className={styles.dataul} key={data.date}>
              <div className={styles.left}>
                <li className={styles.datecont}>{formatDate(data.date)}</li>
                <li>{data.catagory}</li>
                <li>{data.description}</li>
              </div>
              <div className={styles.right}>
                <li>{`${data.amount} INR`}</li>
                <li>
                  <button className={styles.editbtn}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    className={styles.deletebtn}
                    onClick={() => deletefunc(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e8eaed"
                    >
                      <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg>
                  </button>
                </li>
              </div>
            </ul>
          ))}
        </div>
        <div className={styles.totalamount}>
          <span>Total Expense: </span>
          <span>{`${totalAmount} INR`}</span>
        </div>
      </div>
    </section>
  );
}

export default ExpenseList;
