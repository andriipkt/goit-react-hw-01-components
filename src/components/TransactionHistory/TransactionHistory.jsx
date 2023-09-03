import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map(transaction => {
        const { id, type, amount, currency } = transaction;

        return (
          <tbody key={id}>
            <tr>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
