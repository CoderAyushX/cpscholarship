const Document = ({
  rollNo,
  firstName,
  lastName,
  fathersName,
  age,
  mobileNo,
  email,
  selectedClass,
  selectedTestDate,
  selectedTimeSlot,
  selectedScholarship,
}) => {
  return `
  <style>
  .admit-card {
    width: 211mm;
    height: 295mm;
    padding: 0mm 14mm;
    background-color: #fff;
    overflow: hidden;
    position: relative;
  }

  .header {
    text-align: center;
    margin: 12px 0;
  }
  .header p{
    font-style: 16px;
    font-style: italic;
    margin-top: 15px;
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
    font-size: 20px;
  }
  .rollNo {
    font-size: 24px;
  }
  .congo-text{
    font-size: 18px;
    margin-top: 75px;
    border: .5px solid black;
    padding: 20px 10px;
  }
  .institution-details-box {
    position: absolute;
    bottom: 10px;
    right: 24px;
    left: 24px;
  }

  .signatures {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    color: #000;
    line-height: 1.5;
    padding-top: 15px;
  }

  .institution-details {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 18px;
    color: #888;
    line-height: 1.5;
    border-top: 0.5px solid #000;
    padding-top: 15px;
    margin-top: 25px;
  }

  .institution-details p {
    margin: 5px 0;
  }

  .institution-address {
    text-align: center;
    font-size: 18px;
    color: #888;
    border-top: 0.5px solid #000;
    padding-top: 15px;
    margin-top: 20px;
    grid-column: span 2;
  }
</style>

<div class="admit-card">
  <div class="header">
    <h1>Admit Card</h1>
    <p>
      <b>Carrer Point Star</b> <br />
      Scholastic Test for Analysis and reward
    </p>
  </div>

  <div class="details">
    <p class="rollNo"><strong>Roll No:</strong>  <i>${rollNo}</i></p>
    <p></p>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Father's Name:</strong> ${fathersName}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Mobile No:</strong> ${mobileNo}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Class:</strong> ${selectedClass}</p>
    <p><strong>Test Date:</strong> ${selectedTestDate}</p>
    <p><strong>Time Slot:</strong> ${selectedTimeSlot}</p>
  </div>

  <p class="congo-text">
   Congratulations  ${firstName} ${lastName}!!, <br> <br> Your dedication and hard work have earned you a chance to
    excel. As you embark on your ${selectedScholarship}  scholarship journey, may your dreams take
    flight and your efforts lead you to success. Best wishes, 
    <br> <br>
    <i>~Carrer Point Biharsharif<i/>
  </p>
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

  `;
};

export default Document;
