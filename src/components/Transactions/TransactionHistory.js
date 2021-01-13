import TransactionHistoryRaw from "./TransactionHistoryRaw";
import s from './Transactions.module.css';

function TransactionHistory({items}) {
    return (
     <table className={s.transactionHistory}>
      <thead>
         <tr>
           <th>Type</th>
           <th>Amount</th>
           <th>Currency</th>
         </tr>
       </thead>

   <tbody>
      {items.map(TransactionHistoryRaw)} 
   </tbody>
        
   </table>
    )
}

export default TransactionHistory;