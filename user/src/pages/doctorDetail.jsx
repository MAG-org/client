import DetailDoc from "../components/doctorDetail";

export default function DoctorDetail() {
  return (
    <section className="mt-16 border py-20 px-56 border-red-500 min-h-screen">
      <div className="flex gap-8">
        <div>
          <img src="https://thumbs.dreamstime.com/b/beautiful-successful-female-doctor-13011820.jpg" alt="" className="w-64 h-64 object-fit rounded-lg shadow-lg" />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-6">dr. John Doe</h1>
          <h2 className="text-2xl font-semibold">Specialize:</h2>
          <p className="text-xl">Dokter Umum</p>
        </div>
      </div>

      <div className="overflow-x-auto mt-12 border rounded-t-lg">
        <table className="table table-lg">
          {/* head */}
          <thead>
            <tr className="bg-blue-600 rounded-md">
              <th colSpan={3}>
                <div className=" flex items-center justify-between">
                  <h1 className="text-xl text-white">Schedule</h1>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            <tr>
              <td className="text-left text-lg">Monday</td>
              <td className="text-right text-lg">10.00 - 15.00</td>
            </tr>

            <tr>
              <td className="text-left text-lg">Tuesday</td>
              <td className="text-right text-lg">10.00 - 15.00</td>
            </tr>

            <tr>
              <td className="text-left text-lg">Wednesday</td>
              <td className="text-right text-lg">10.00 - 15.00</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
}
