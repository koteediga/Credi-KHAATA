import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://your-api-endpoint/customers');
      setCustomers(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Customer List</h2>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Outstanding Balance</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="border px-4 py-2">{customer.name}</td>
              <td className="border px-4 py-2">{customer.outstandingBalance}</td>
              <td className="border px-4 py-2">
                {customer.status === 'overdue' ? <span className="text-red-500">Overdue</span> : 'Up-to-date'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
