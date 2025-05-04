import React from "react";
import Header from "../components/header";
import { FaInstagram } from "react-icons/fa";


export default function Kontak() {
  return (
    <>
      <Header />
      <div className="py-12 px-6 text-gray-800 bg-white">
        <h1 className="text-3xl font-bold font-poppins mb-4">Kontak</h1>

        {/* Paragraf Deskripsi */}
        <p className="font-poppins text-justify mb-6 max-w-3xl">
          Cipanas Sumursari menjadi salah satu destinasi favorit masyarakat untuk menikmati pemandian air panas alami yang menenangkan.
          Selain suasana alam yang asri dan udara pegunungan yang sejuk, fasilitas yang lengkap serta keramahan warga sekitar menjadikan tempat ini semakin diminati oleh wisatawan lokal maupun luar kota.
        </p>

        {/* Info Kontak */}
        <p className="font-poppins mb-2">
          Instagram:{" "}
          <a
            className="text-blue-600"
            href="https://www.instagram.com/cipanassumursari_id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @cipanassumursari_id
          </a>
        </p>
        <p className="font-poppins mb-2">
          Alamat lengkap: Sukasono, Kec. Sukawening, Kabupaten Garut, Jawa Barat 44184
        </p>
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
