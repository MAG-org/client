import React, { useState } from "react";
import axios from "axios"; // Import axios
import Swal from "sweetalert2"; // Import SweetAlert2
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    birthDate: "",
    phoneNumber: "",
    gender: "",
    IDNumber: "",
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
      const response = await axios.post("http://localhost:3000/api/patient/register", formData, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      });

      console.log(response.data); // Jika Anda ingin melihat respons dari server

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Registration successful!",
      });

      navigate('/login')

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
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-4 text-left">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Name */}
        <div className="grid grid-cols-2 gap-6">
          <div className="">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Input Email */}
          <div className="">
          <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

           {/* Input Password */}
          <div>
            <label htmlFor="passwordConfirm" className="block"> Password </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Input Password Confirmation*/}
          <div>
            <label htmlFor="passwordConfirm" className="block"> Password Confirmation </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              placeholder="Password Confirmation"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="">
            <label htmlFor="age" className="block"> Birth Date </label>
            <input
              type="date"
              id="age"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="">
            <label htmlFor="phone" className="block"> Phone Number </label>
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="">
            <label htmlFor="gender" className="block"> Gender </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-select w-full mt-1 border py-2 px-3 rounded-md">
              <option value="" disabled selected>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="nik" className="block"> NIK</label>
            <input
              type="text"
              id="nik"
              name="IDNumber"
              value={formData.IDNumber}
              onChange={handleChange}
              placeholder="NIK"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
        </div>

        </div>

        {/* Input Address */}
        <div>
          <label htmlFor="address">Address</label>
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
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Register
          </button>
        </div>
      </form>

      <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign In</Link>
        </p>
    </div>
  );
}
