import React from "react";
import { useForm } from "react-hook-form";
import RiderImage from '../../../assets/agent-pending.png'

const Rider = () => {
  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="bg-white px-6 py-12 md:px-16 md:py-20 max-w-7xl mx-auto rounded-lg shadow-md">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-[#03373D] mb-2">Be a Rider</h2>
          <p className="text-[#03373D] text-sm mb-8 max-w-xl">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero
            hassle. From personal packages to business shipments — we deliver on
            time, every time.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#CAEB66]"
              />

              <input
                {...register("age", { required: true })}
                placeholder="Your age"
                type="number"
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#CAEB66]"
              />

              <input
                {...register("email", { required: true })}
                placeholder="Your Email"
                type="email"
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#CAEB66]"
              />

              <select
                {...register("region", { required: true })}
                className="border rounded-md p-3 w-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CAEB66]"
              >
                <option value="">Select your region</option>
                <option value="north">North</option>
                <option value="south">South</option>
                <option value="east">East</option>
                <option value="west">West</option>
              </select>

              <input
                {...register("nid", { required: true })}
                placeholder="NID"
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#CAEB66]"
              />

              <input
                {...register("contact", { required: true })}
                placeholder="Contact"
                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#CAEB66]"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#03373D] font-semibold">
                Which wire-house you want to work?
              </label>
              <select
                {...register("warehouse", { required: true })}
                className="border rounded-md p-3 w-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#CAEB66]"
              >
                <option value="">Select wire-house</option>
                <option value="warehouse1">Warehouse 1</option>
                <option value="warehouse2">Warehouse 2</option>
                <option value="warehouse3">Warehouse 3</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#CAEB66] text-[#03373D] font-bold py-3 rounded-md hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={RiderImage}
            alt="Rider"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Rider;
