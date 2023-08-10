const Document = ({
  rollNo,
  firstName,
  lastName,
  fathersName,
  age,
  mobileNo,
  email,
  selectedClass,
  previousClassMarks,
  selectedTestDate,
  selectedTimeSlot,
  selectedScholarship,
}) => {
  return `
<!DOCTYPE html>
<html>
  <head>
    <title>Admit Card</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      .admit-card {
        width: 211mm;
        height: 297mm;
        margin: 10mm auto;
        padding: 10mm 20mm;
        background-color: #fff;
        position: relative;
      
      }
      .logo {
        max-width: 180px;
        height: auto;
      }
      .header {
        text-align: center;
        margin-bottom: 20px;
      }
      .details {
        padding-top: 80px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px 50px;
        border-top: 2px solid #000;
        margin-top: 20px;
      }
      .details p {
        margin: 5px 0;
        font-size:20px;
      }
   
      .institution-details-box {
        position: absolute;
        bottom: 0;
        right: 20px;
        left: 20px;
      }
      .signatures{
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 22px;
        color: #000;
        line-height: 1.5;
        padding-top: 15px;
      
      }
      .institution-details {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 22px;
        color: #888;
        line-height: 1.5;
        border-top: 1px solid #000;
        padding-top: 15px;
        margin-top: 60px;
      }
      .institution-details p {
        margin: 5px 0;
    
      }
      .institution-address {
        text-align: center;
        font-size: 18px;
        color: #888;
        border-top: 1px solid #000;
        padding-top: 15px;
        margin-top: 20px;
        grid-column: span 2;
      }
    </style>
  </head>
  <body>
    <div class="admit-card">
      <div class="header">
        <img
          src="https://careerpoint.ac.in/lp/cpsl/assets/img/logo.png"
          class="logo"
        />
        <h1>Admit Card</h1>
      </div>
      
      <div class="details">
      <p><strong>roll no:</strong> ${rollNo}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Father's Name:</strong> ${fathersName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Mobile No:</strong> ${mobileNo}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Class:</strong> ${selectedClass}</p>
        <p><strong>Test Date:</strong> ${selectedTestDate}</p>
        <p><strong>Time Slot:</strong> ${selectedTimeSlot}</p>
        <p><strong>Scholarship:</strong> ${selectedScholarship}</p>
      </div>
      <div class="institution-details-box">
        <div class="signatures">
            <p><strong>Student signature</strong>______________</p>
            <p><strong>Parents Signature</strong>______________</p>
          </div>
        <div class="institution-details">
          <p><strong>Institution:</strong> Career Point</p>
          <p><strong>Contact No:</strong> 9024465253</p>
        </div>
        <div class="institution-address">
          <p><strong>Address:</strong> Biharsharif carrer point</p>
          <p><strong>Website:</strong> info@cpil.in</p>
        </div>
      </div>
    </div>
  </body>
</html>
`;
};

export default Document;
