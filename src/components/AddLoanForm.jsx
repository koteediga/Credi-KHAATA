import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

const AddLoanForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const newLoan = {
      customerId: id,
      amount: parseFloat(data.amount),
      date: new Date().toISOString().split('T')[0]
    };

    // Mock submission (API can be added later)
    console.log('New loan submitted:', newLoan);
    alert('Loan added successfully');
    reset();
    navigate(`/customer/${id}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add Loan for Customer #{id}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input 
          {...register('amount', { required: true })} 
          placeholder="Loan Amount" 
          type="number" 
          className="border p-2 block w-full" 
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Loan</button>
      </form>
    </div>
  );
};

export default AddLoanForm;