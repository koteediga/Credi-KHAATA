// ExportPDF.js
import { jsPDF } from 'jspdf';

const ExportPDF = (customer) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text('Customer Details', 10, 10);

  doc.setFontSize(12);
  doc.text(`Name: ${customer.name}`, 10, 20);
  doc.text(`Customer ID: ${customer.id}`, 10, 30);

  // Loans
  let y = 50;
  doc.setFontSize(14);
  doc.text('Loans:', 10, y);
  y += 10;
  customer.loans.forEach((loan, index) => {
    doc.setFontSize(12);
    doc.text(`• ₹${loan.amount} on ${loan.date}`, 10, y);
    y += 10;
  });

  // Repayments
  y += 10;
  doc.setFontSize(14);
  doc.text('Repayments:', 10, y);
  y += 10;
  customer.repayments.forEach((repay) => {
    doc.setFontSize(12);
    doc.text(`• ₹${repay.amount} on ${repay.date}`, 10, y);
    y += 10;
  });

  // Totals
  const totalLoan = customer.loans.reduce((acc, l) => acc + l.amount, 0);
  const totalRepaid = customer.repayments.reduce((acc, r) => acc + r.amount, 0);
  const balance = totalLoan - totalRepaid;

  y += 10;
  doc.setFontSize(14);
  doc.text('Summary:', 10, y);
  y += 10;
  doc.setFontSize(12);
  doc.text(`Total Loan: ₹${totalLoan}`, 10, y);
  y += 10;
  doc.text(`Total Repaid: ₹${totalRepaid}`, 10, y);
  y += 10;
  doc.text(`Balance: ₹${balance}`, 10, y);

  // Save the file
  doc.save('customer_details.pdf');
};

export default ExportPDF;
