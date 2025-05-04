import React from "react";
import Header from "../components/header";
import { FaInstagram } from "react-icons/fa";


export default function Lokasi() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center py-12 bg-white">
        <h1 className="text-3xl font-bold font-poppins text-gray-800 pb-3">
          LOKASI
        </h1>
        <div className="flex justify-center w-full">
          <div className="shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2284941377474!2d107.99799159999999!3d-7.1233197999999965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b455f61b9b9f%3A0x4f532136d3e4ae15!2sKolam%20Renang%20Cipanas%20sumur%20sari!5e0!3m2!1sid!2sid!4v1713429999999!5m2!1sid!2sid"
              width="1000"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Kolam Renang Cipanas Sumur Sari"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <p className="max-w-3xl mt-6 text-center px-4 text-base text-gray-700 font-poppins">
          Cipanas Sumursari terletak di kawasan perkampungan yang tenang dengan akses jalan yang cukup baik untuk kendaraan roda dua maupun roda empat. Di sepanjang jalan menuju lokasi, pengunjung akan melewati pemukiman warga yang ramah dan pemandangan sawah yang hijau. Suasana pedesaan yang asri dan alami ini menambah kenyamanan dan ketenangan bagi siapa pun yang ingin menikmati liburan santai jauh dari keramaian kota.
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
