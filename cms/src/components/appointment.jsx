import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Swal from "sweetalert2";

export default function Appointment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [appointmentData, setAppointmentData] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    disease_name: "",
    docter_note: "",
  });

  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/appointment"
        );

        setAppointmentData(response.data);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      }
    };

    fetchAppointmentData();
  }, []);

  console.log(appointmentData);

  const filteredAppointmentData = appointmentData.filter((result) =>
    result.PatientDetails[0].name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    result.DoctorDetail[0].name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  };

  const openModal = (appointmentId) => {
    setSelectedAppointment(appointmentId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
    setModalIsOpen(false);
  };

  const handleDiagnosisChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Unauthorized: Please Login First");
      }

      const requestBody = {
        ...inputValue,
        appointmentId: selectedAppointment,
      };

      await axios.post(
        "http://localhost:3000/api/medical-record/add-medical-records",
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const updatedAppointmentData = appointmentData.map((appointment) => {
        if (appointment._id === selectedAppointment) {
          return {
            ...appointment,
            status: "Finished",
          };
        }
        return appointment;
      });

      setAppointmentData(updatedAppointmentData);

      closeModal();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Medical record added successfully.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response
          ? error.response.data.message || "Something went wrong."
          : error.message,
      });
    }
  };

  return (
    <div
      className="flex-1"
      style={{ textAlign: "end", paddingTop: "50px", paddingLeft: "250px" }}>
      <div style={{ textAlign: "center" }}>
        <form className="max-w-lg mx-auto">
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                className="bg-black hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      <table className="table margin-auto">
        <thead>
          <tr>
            <th style={{ fontSize: "20px" }}>Patient Name</th>
            <th style={{ fontSize: "20px" }}>Doctor Name</th>
            <th style={{ fontSize: "20px" }}>Date</th>
            <th style={{ fontSize: "20px" }}>Time</th>
            <th style={{ fontSize: "20px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointmentData.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.PatientDetails[0].name}</td>
              <td>{appointment.DoctorDetail[0].name}</td>
              <td>{getFormattedDate(appointment.date)}</td>
              <td>{appointment.time}:00</td>
              <td
                className={
                  appointment.status === "Paid"
                    ? "text-green-500 font-semibold"
                    : appointment.status === "Pending"
                    ? "text-red-500 font-semibold"
                    : appointment.status === "Finished"
                    ? "text-blue-500 font-semibold"
                    : ""
                }>
                {appointment.status}
              </td>
              <td>
                {appointment.status === "Paid" && (
                  <button onClick={() => openModal(appointment._id)}>
                    <img
                      className="w-5 h-5"
                      src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png"
                      alt="Edit"
                    />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Appointment Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}>
        <h2 className="text-2xl font-bold mb-4">Add Medical Record</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Diagnosis:</label>
            <textarea
              type="text"
              name="disease_name"
              value={inputValue.disease_name}
              onChange={handleDiagnosisChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label>Doctor Note:</label>
            <textarea
              name="docter_note"
              value={inputValue.docter_note}
              onChange={handleDiagnosisChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4">
              Save
            </button>
            <button
              onClick={closeModal}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4">
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
