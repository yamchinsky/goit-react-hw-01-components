import React from "react";
import { TransactionHistoryItemContainer } from "./TransactionHistoryListItemStyled";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryItemContainer class="transaction-history">
      <thead className="thead">
        <tr className="tr">
          <th className="th">Type</th>
          <th className="th">Amount</th>
          <th className="th">Currency</th>
        </tr>
        <tbody className="tbody">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="td">{item.type}</td>
              <td className="td">{item.amount}</td>
              <td className="td">{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </thead>
    </TransactionHistoryItemContainer>
  );
};

TransactionHistory.prototypes = {
  currency: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default TransactionHistory;
