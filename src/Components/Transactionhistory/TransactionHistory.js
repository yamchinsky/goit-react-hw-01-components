import React from "react";
import { TransactionHistoryItemContainer } from "./TransactionHistoryListItemStyled";
const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryItemContainer class="transaction-history">
      <thead className="thead">
        <tr className="tr">
          <th className="th">Type</th>
          <th className="th">Amount</th>
          <th className="th">Currency</th>
        </tr>
        {items.map((item) => (
          <>
            <tbody className="tbody">
              <tr>
                {/* {item.id} */}
                <td className="td">{item.type}</td>
                <td className="td">{item.amount}</td>
                <td className="td">{item.currency}</td>
              </tr>
            </tbody>
          </>
        ))}
      </thead>
    </TransactionHistoryItemContainer>
  );
};

export default TransactionHistory;
