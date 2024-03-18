import { Link } from "react-router-dom";
import React from "react";
import DoctorCard from "./doctorCard";

export default function HomePage() {
  return (
    <div>
      {/* Slider */}
      <div
        style={{ height: "400px", paddingTop: "60px", paddingBottom: "60px" }}
        data-hs-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": true}'
        className="relative">
        <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-100 p-6">
                <img
                  src="https://e0.pxfuel.com/wallpapers/603/552/desktop-wallpaper-hospital.jpg"
                  alt="Placeholder Image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-200 p-6">
                <img
                  src="https://e0.pxfuel.com/wallpapers/13/207/desktop-wallpaper-hospital-room-background.jpg"
                  alt="Placeholder Image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-300 p-6">
                <img
                  src="https://source.unsplash.com/random?hospital"
                  alt="Placeholder Image"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
        </div>
      </div>
      {/* End Slider */}

      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Why Us?
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              aperiam voluptates iure sit fugiat excepturi cumque, harum ut!
              Laborum, adipisci.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Why Us Cards */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Quality Care
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We provide top-notch medical care to our patients.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    Experienced Staff
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Our staff members are highly experienced and skilled.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    State-of-the-art Facilities
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We have modern facilities equipped with the latest
                    technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center" style={{ marginTop: "20px" }}>
        <DoctorCard />
      </div>
    </div>
  );
}
