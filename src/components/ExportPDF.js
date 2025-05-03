import React from 'react';
import { jsPDF } from 'jspdf';

const ExportPDF = ({ customerData, loanData }) => {
  const handleExport = () => {
    const doc = new jsPDF();

    doc.text('Customer Details:', 10, 10);
    doc.text(`Name: ${customerData.name}`, 10, 20);
    doc.text(`Email: ${customerData.email}`, 10, 30);
    doc.text(`Contact: ${customerData.contact}`, 10, 40);

    doc.text('Loan Details:', 10, 60);
    doc.text(`Loan Amount: ${loanData.loanAmount}`, 10, 70);
    doc.text(`Interest Rate: ${loanData.interestRate}%`, 10, 80);
    doc.text(`Repayment Period: ${loanData.repaymentPeriod} months`, 10, 90);

    doc.save('customer_loan_details.pdf'); // Download PDF
  };

  return (
    <button onClick={handleExport} className="bg-green-500 text-white px-4 py-2">Export to PDF</button>
  );
};

export default ExportPDF;
