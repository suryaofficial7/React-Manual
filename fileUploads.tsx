import { FC, useState } from "react";

const AddonData:FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    std: "",
    seatNo: "",
    studentImage: null,
    hallTicketImage: null,
    aadhaarCardImage: null,
    birthCertificateImage: null,
  });

  const handleChange = (e:any) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic (e.g., sending the data to a server) here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-gray-300 border"

        />
      </div>

      <div>
        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="border-gray-300 border"

        />
      </div>

      <div>
        <label>Standard (Std): </label>
        <input
          type="text"
          name="std"
          value={formData.std}
          onChange={handleChange}
          required
          className="border-gray-300 border"

        />
      </div>

      <div>
        <label>Seat No: </label>
        <input
          type="text"
          name="seatNo"
          value={formData.seatNo}
          onChange={handleChange}
          required         
           className="border-gray-300 border"

        />
      </div>

      <div>
        <label>Upload Student Image: </label>
        <input
          type="file"
          name="studentImage"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Upload Hall Ticket Image: </label>
        <input
          type="file"
          name="hallTicketImage"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Upload Aadhaar Card Image: </label>
        <input
          type="file"
          name="aadhaarCardImage"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Upload Birth Certificate Image: </label>
        <input
          type="file"
          name="birthCertificateImage"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );

};

export default AddonData;
