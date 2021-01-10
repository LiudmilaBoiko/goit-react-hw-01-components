import PropTypes from 'prop-types';

function TransactionHistoryRaw({ type, amount, currency, id }) {
  return (
      <tr key = {id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
}

TransactionHistoryRaw.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default TransactionHistoryRaw;