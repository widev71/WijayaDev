import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";

import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiJavascript,
  SiCanva,
} from "react-icons/si";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-black-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-black-700 font-medium w-[100%]"
            >
              Ini adalah berapa skill saya.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar 
                logo={<IoLogoHtml5 />} 
                name={"HTML"} 
                value={65} />

                <ProgressBar 
                logo={<IoLogoCss3 />} 
                name={"CSS"} 
                value={56} />

                <ProgressBar
                  logo={<SiAdobephotoshop />}
                  name={"AdobePhotoshop"}
                  value={76}
                />

                <ProgressBar logo={<SiFigma />} name={"Figma"} value={60} />

                <ProgressBar
                  logo={<SiAdobeillustrator />}
                  name={"Adobeillustrator"}
                  value={44}
                />

                <ProgressBar 
                logo={<SiCanva />} 
                name={"Canva"} 
                value={90} />

                <ProgressBar 
                logo={<SiJavascript />} 
                name={"JavaScrip"} 
                value={13} />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<SiAdobephotoshop />}
                black={"white"}
                white={"black"}
                skill={"Photoshop"}
              />
              <SkillBox
                logo={<SiAdobeillustrator />}
                black={"white"}
                white={"black"}
                skill={"Adobeillustrator"}
              />
              <SkillBox
                logo={<SiJavascript />}
                black={"white"}
                white={"black"}
                skill={"JavaScrip"}
              />
            </div>

            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiFigma />}
                black={"black"}
                white={"white"}
                skill={"Figma"}
              />
              <SkillBox
                className=""
                logo={<BsCodeSlash />}
                black={"black"}
                white={"white"}
                skill={"Coder"}
              />
              <SkillBox
                className=""
                logo={
                  <SiCanva className=" text-white bg-black rounded-full h-fit border-white overflow-hidden" />
                }
                black={"black"}
                white={"white"}
                skill={"Canva"}
              />
            </div>
          </div>
        </div>
        <div>
          <h6 data-aos="fade-up" className=" text-black-700 font-medium w-[100%]">
            Berapa Tambahan skill lainya.
          </h6>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="container m-auto flex items-center justify-center mt-8 gap-2 md:gap-5 lg:gap-8"
        >      
          <img
            className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
            src="https://seeklogo.com/images/C/corel-draw-2020-logo-270FEE465B-seeklogo.com.png"
          />
          <img
            className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
            src="https://w7.pngwing.com/pngs/770/966/png-transparent-blender-computer-icons-rendering-blender-3d-computer-graphics-text-orange-thumbnail.png"
          />
          <img
            className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1pU_APNYcivwn1Pno9vkRXMVszCa-THuRd45atu6QA&s"
          />

        </div>
      </div>
    </div>
  );
};

export default Skills;
