import TransactionHistoryRaw from "./TransactionHistoryRaw";

function TransactionHistory({items}) {
    return (
     <table class="transaction-history">
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