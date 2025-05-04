import React from "react";
import Header from "../components/header";
import { FaInstagram } from "react-icons/fa";

export default function Informasi() {
  return (
    <>
      <Header />
      <div className="py-12 px-6 text-gray-800 bg-white flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold font-poppins mb-4">Informasi</h1>

        {/* Paragraf 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl">
          <img
            src="/images/cipanas.jpg"
            alt="Pemandian Air Panas"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <p className="text-justify font-poppins text-base">
            Cipanas Sumursari merupakan destinasi wisata pemandian air panas alami yang terletak di Garut,
            Jawa Barat. Tempat ini dikenal karena air panas alaminya yang mengandung mineral,
            dipercaya mampu membantu relaksasi dan menyembuhkan penyakit kulit ringan.
          </p>
        </div>

        {/* Paragraf 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 max-w-5xl">
          <img
            src="/images/fasilitas.jpg"
            alt="Fasilitas Kolam"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <p className="text-justify font-poppins text-base">
            Tempat ini memiliki berbagai fasilitas seperti kolam pemandian untuk dewasa dan anak-anak,
            kamar bilas, tempat duduk santai, serta kantin kecil. Semua fasilitas dirancang untuk memberikan
            kenyamanan bagi pengunjung selama menikmati waktu di lokasi.
          </p>
        </div>

        {/* Paragraf 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl">
          <img
            src="/images/pemandangan.png"
            alt="Pemandangan Sekitar"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <p className="text-justify font-poppins text-base">
            Dikelilingi oleh perbukitan hijau dan udara yang sejuk, Cipanas Sumursari juga menawarkan
            keindahan alam yang menyegarkan. Suasananya yang tenang sangat cocok untuk melepas penat
            dari kesibukan kota bersama keluarga atau teman.
          </p>
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
