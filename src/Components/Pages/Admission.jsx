import React from "react";
import { jsPDF } from "jspdf";

const Admission = () => {
  // Function to handle PDF download
  const handleDownload = () => {
    const doc = new jsPDF();

    // Collect form data
    const studentName = document.getElementById("student-name").value;
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value;
    const file = document.getElementById("file").files[0]?.name || "No file uploaded";

    const fatherName = document.getElementById("father-name").value;
    const fatherOccupation = document.getElementById("father-occupation").value;
    const fatherPhone = document.getElementById("father-phone").value;

    const motherName = document.getElementById("mother-name").value;
    const motherOccupation = document.getElementById("mother-occupation").value;
    const motherPhone = document.getElementById("mother-phone").value;

    // Create PDF content
    doc.text("Admission Form", 20, 20);
    doc.text(`Student Name: ${studentName}`, 20, 30);
    doc.text(`Subject: ${subject}`, 20, 40);
    doc.text(`Email: ${email}`, 20, 50);
    doc.text(`Phone: ${phone}`, 20, 60);
    doc.text(`Address: ${address}`, 20, 70);
    doc.text(`Date of Birth: ${dob}`, 20, 80);
    doc.text(`File: ${file}`, 20, 90);

    doc.text("Father's Details", 20, 110);
    doc.text(`Name: ${fatherName}`, 20, 120);
    doc.text(`Occupation: ${fatherOccupation}`, 20, 130);
    doc.text(`Phone: ${fatherPhone}`, 20, 140);

    doc.text("Mother's Details", 20, 160);
    doc.text(`Name: ${motherName}`, 20, 170);
    doc.text(`Occupation: ${motherOccupation}`, 20, 180);
    doc.text(`Phone: ${motherPhone}`, 20, 190);

    // Save the PDF
    doc.save("admission_form.pdf");
  };

  return (
    <div>
      <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded-md">
        {/* Student Information */}
        <input id="student-name" type="text" placeholder="Candidate Name" className="w-full p-2 mb-4" />
        <input id="subject" type="text" placeholder="Subject" className="w-full p-2 mb-4" />
        <input id="email" type="email" placeholder="Email" className="w-full p-2 mb-4" />
        <input id="phone" type="tel" placeholder="Phone" className="w-full p-2 mb-4" />
        <textarea id="address" placeholder="Address" className="w-full p-2 mb-4"></textarea>
        <input id="dob" type="date" className="w-full p-2 mb-4" />
        <input id="file" type="file" className="w-full p-2 mb-4" />

        {/* Father's Information */}
        <input id="father-name" type="text" placeholder="Father's Name" className="w-full p-2 mb-4" />
        <input id="father-occupation" type="text" placeholder="Father's Occupation" className="w-full p-2 mb-4" />
        <input id="father-phone" type="tel" placeholder="Father's Phone" className="w-full p-2 mb-4" />

        {/* Mother's Information */}
        <input id="mother-name" type="text" placeholder="Mother's Name" className="w-full p-2 mb-4" />
        <input id="mother-occupation" type="text" placeholder="Mother's Occupation" className="w-full p-2 mb-4" />
        <input id="mother-phone" type="tel" placeholder="Mother's Phone" className="w-full p-2 mb-4" />

       
        <button type="button" className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleDownload}>
          Submit
        </button>
        <button type="button" className="bg-green-500 text-white mx-10 px-4 py-2 rounded-md" onClick={handleDownload}>
          Download PDF
        </button>
      </form>
    </div>
  );
};

export default Admission;
