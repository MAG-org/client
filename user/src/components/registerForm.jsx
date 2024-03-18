import React, { useState } from "react";
import axios from "axios"; // Import axios
import Swal from "sweetalert2"; // Import SweetAlert2

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    gender: "male",
    nik: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // Tambahkan async
    e.preventDefault();
    try {
      const data = await axios.post(
        // API URL HERE
        "API_URL_HERE", // Anda perlu mengganti ini dengan URL API yang benar
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          age: formData.age,
          phone: formData.phone,
          gender: formData.gender,
          nik: formData.nik,
          address: formData.address,
        }
      );
      console.log(data); // Jika Anda ingin melihat respons dari server
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Registration successful!",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
    // Lakukan sesuatu dengan formData, seperti mengirimkan ke server
    console.log(formData);
  };

  return (
    <div>
      <h2 className="text-2xl mb-4 text-left">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Name */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              style={{ borderRadius: "100px" }}
            />
          </div>
          {/* Input Email */}
          <div className="w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              style={{ borderRadius: "100px" }}
            />
          </div>
        </div>
        {/* Input Password */}
        <div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            style={{ borderRadius: "100px" }}
          />
        </div>
        {/* Input Birth Date, Phone, Gender */}
        <div className="flex space-x-4">
          {/* Birth Date */}
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="age" className="block">
              Birth Date
            </label>
            <input
              type="date"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              style={{ borderRadius: "100px" }}
            />
          </div>
          {/* Phone */}
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="phone" className="block">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              style={{ borderRadius: "100px" }}
            />
          </div>
          {/* Gender */}
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="gender" className="block">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-select w-full mt-1">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        {/* Input NIK */}
        <div>
          <input
            type="text"
            id="nik"
            name="nik"
            value={formData.nik}
            onChange={handleChange}
            placeholder="NIK"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            style={{ borderRadius: "100px" }}
          />
        </div>
        {/* Input Address */}
        <div>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            style={{ borderRadius: "10px" }}></textarea>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
