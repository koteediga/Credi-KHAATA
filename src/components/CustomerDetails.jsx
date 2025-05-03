import React from 'react';
import { useParams } from 'react-router-dom';

const CustomerDetail = () => {
  const { id } = useParams();
  const customer = {
    id,
    name: 'John',
    loans: [
      { id: 1, amount: 300, date: '2025-04-01' },
      { id: 2, amount: 200, date: '2025-04-15' },
    ],
    repayments: [
      { id: 1, amount: 100, date: '2025-04-20' },
    ],
  };

  const totalLoan = customer.loans.reduce((acc, loan) => acc + loan.amount, 0);
  const totalRepaid = customer.repayments.reduce((acc, repay) => acc + repay.amount, 0);
  const balance = totalLoan - totalRepaid;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Customer Detail: {customer.name}</h2>
      <div className="mb-4">
        <p><strong>Total Loan:</strong> ₹{totalLoan}</p>
        <p><strong>Total Repaid:</strong> ₹{totalRepaid}</p>
        <p><strong>Balance:</strong> ₹{balance}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Loans</h3>
        <ul>
          {customer.loans.map(loan => (
            <li key={loan.id}>₹{loan.amount} on {loan.date}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Repayments</h3>
        <ul>
          {customer.repayments.map(repay => (
            <li key={repay.id}>₹{repay.amount} on {repay.date}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerDetail;