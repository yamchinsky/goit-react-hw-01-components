import React from "react";
import { TransactionHistoryItemContainer } from "./TransactionHistoryListItemStyled";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryItemContainer className="transaction-history">
      <thead className="thead">
        <tr className="tr">
          <th className="th">Type</th>
          <th className="th">Amount</th>
          <th className="th">Currency</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {items.map((item) => (
          <tr key={item.id}>
            <td className="td">{item.type}</td>
            <td className="td">{item.amount}</td>
            <td className="td">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryItemContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default TransactionHistory;
