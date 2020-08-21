import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./print.css";

const Print = (props) => {

  const handlePrint = () => {
    const filename  = 'pdf-file.pdf';
    html2canvas(document.querySelector('#root')).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
      pdf.save(filename);
    });
  }

  return (
    <button
      className="button no-print"
      onClick={handlePrint}>
        Распечатать
    </button>
  );
}

export default Print;