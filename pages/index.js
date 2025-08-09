import React from "react";
import Header from "../components/header";
import { FaInstagram } from "react-icons/fa";

function index() {
  return (
    <>
      <Header />

      <div className="relative w-full h-screen mt-1">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="./images/drone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
          <div className="flex gap-4">
            <button
              className="relative"
              onClick={() => window.open('/3dvista-cipanas jadi2/index.htm', '_blank')}
            >
              <img
                src="./images/icon1.jpg"
                alt="Icon 1"
                className="icon-size object-cover hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-lg font-bold transition-transform duration-300">
                Cipanas Sumursari
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-12 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 font-poppins mb-6">
          INFORMASI
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-10">
          <img
            src="./images/cipanas.jpg"
            alt="Cipanas Sumursari"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <p className="text-justify font-poppins font-normal text-base max-w-xl">
            Cipanas Sumursari merupakan destinasi pemandian air panas alami yang
            terletak di kawasan Garut, Jawa Barat. Tempat ini terkenal karena
            sumber air panas alaminya yang dipercaya memiliki khasiat untuk
            relaksasi dan penyembuhan berbagai penyakit kulit. Dikelilingi oleh
            pemandangan alam yang asri dan udara sejuk pegunungan, Cipanas
            Sumursari menjadi pilihan tepat untuk berwisata bersama keluarga.
            Fasilitas yang tersedia cukup lengkap, mulai dari kolam pemandian
            dewasa dan anak-anak, area bilas, hingga tempat istirahat. Selain itu,
            suasana yang tenang dan jauh dari hiruk pikuk kota memberikan
            pengalaman menyegarkan bagi para pengunjung.
          </p>
        </div>
      </div>

      {/* Bagian Lokasi yang sudah responsif */}
      <div className="flex flex-col items-center justify-center pb-12 bg-white px-4">
        <h1 className="text-3xl font-bold font-poppins text-gray-800 pb-3">
          LOKASI
        </h1>
        <div className="w-full max-w-5xl aspect-video shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2284941377474!2d107.99799159999999!3d-7.1233197999999965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b455f61b9b9f%3A0x4f532136d3e4ae15!2sKolam%20Renang%20Cipanas%20sumur%20sari!5e0!3m2!1sid!2sid!4v1713429999999!5m2!1sid!2sid"
            className="w-full h-full rounded-md"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Kolam Renang Cipanas Sumur Sari"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col items-center bg-sky-500 py-2 gap-2">
        <div className="flex gap-2">
          <a
            href="https://www.instagram.com/cipanassumursari_id/?hl=id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-gray-800 text-xl hover:text-gray-400 transition duration-500" />
          </a>
        </div>
        <h1 className="text-gray-800 font-poppins-regular">
          © 2025
          <span className="px-1 text-gray-800 hover:text-gray-400 font-poppins font-normal text-base transition duration-500 cursor-default">
            Cipanas Sumursari
          </span>
        </h1>
      </div>
    </>
  );
}

export default index;
