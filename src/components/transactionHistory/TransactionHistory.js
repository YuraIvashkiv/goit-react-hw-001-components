import { HistoryTable, HistoryTitle } from './transactionHistory.styled.js';

export const TransactionHistory = ({ items }) => {
  return (
    <HistoryTable>
      <HistoryTitle>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </HistoryTitle>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </HistoryTable>
  );
};
