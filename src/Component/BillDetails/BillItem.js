import React from 'react';
import style from './BillItem.module.css'
const BillItem = ({label,amount}) =>{
  const classes = [style.Amount,label==="Savings"?style.Red:null];
  const styles = [style.BillItem,label.includes('Total')?style.Total:null]
  return (
      <div className={styles.join(" ")}>
        <p className={style.Label}>{label}</p>
        <p className={classes.join(" ")}>${parseFloat(amount).toFixed(2)}</p>
      </div>
  )
}

export default BillItem;