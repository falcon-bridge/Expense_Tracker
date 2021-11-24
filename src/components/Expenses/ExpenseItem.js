import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title,setTitle]=useState(props.title);
  const title = props.title;
  const expenseAmount = props.amount;
  // const clickHandler=()=>{
  //   setTitle("Updated!!!");
  //   console.log(title);
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
          {/* <button onClick={clickHandler}>Change Title</button> */}
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
