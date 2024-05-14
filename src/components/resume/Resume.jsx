import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-black-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-black-700 font-medium w-[100%]">
          Ini berapa pengalaman dan pendidikan saya.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-blue-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black-500">
              Pengalaman
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-green-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Vidio/Photo Editor
                </h1>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  Tefa Ocean
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-black-500">
                  <p>-+Pernah berpartisipasi dalam lomba video KNPI 2023.</p>
                  <p>
                    -+Berpartisipasi dalam EXPO SMK untuk memamerkan desain.
                  </p>
                  <p>
                    -+Pernah terlibat dalam proyek sekolah untuk fotografi dan
                      editing foto ijazah.
                  </p>
                  <p>
                    -+Pernah berpartisipasi lomba video tentang Kebersihan
                      lingkungan.
                  </p>
                  <p>
                    -+Pernah berpartisipasi lomba video sekolah yang berjudul
                      STOP Bullying .
                  </p>
                  <p>
                    -+Pernah terlibat dalam projek pembuatan video PPG guru
                      disekolah.
                  </p>
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-blue-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black-500">
              Pendidikan
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-green-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl"></h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base"></span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base"></span>
                <p className=" text-[.9rem] text-justify text-black-500">
                  Sebagai siswa Pelajar di kelas 12 SMK Negeri 1 Tampaksiring,
                  saya, yang berusia 16 tahun telah memilih jalur Desain
                  Komunikasi Visual yang mencerminkan minat dan binkat saya. Di
                  lingkungan SMK yang dinamis saya secara aktif mengasah
                  keterampilan ini melalui program DKV, kami menekankan pada
                  kreativitas, kerjasama tim, dan disiplin.
                  <p>
                    <p>.</p>
                    <span>
                      Di tengah-tengah tantangan dan kesempatan yang ada, saya
                      merasa terdorong untuk terus belajar dan berkembang. Saya
                      percaya bahwa Desain Komunikasi Visual bukan hanya tentang
                      membuat sesuatu yang tampak bagus, tetapi juga tentang
                      menciptakan pesan yang efektif dan berarti. Saya berusaha
                      untuk menerapkan prinsip ini dalam setiap proyek yang saya
                      kerjakan.
                    </span>
                  </p>
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
