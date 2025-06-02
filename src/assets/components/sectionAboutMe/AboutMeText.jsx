import React from "react";
import AboutMeProfileImage from "./AboutMeProfileImage";
import { SlBadge } from "react-icons/sl";
import { LuSquareChartGantt } from "react-icons/lu";

const AboutMeText = () => {
  return (
    <div className="flex mt-2 md:mt-8">
      <div className="hidden lg:block">
        <AboutMeProfileImage />
      </div>
      <div className="grow">
        <div className="flex flex-col mx-4 md:flex-row md:justify-evenly">
          <div className="flex-col my-2 border border-black rounded-3xl h-full w-full justify-center md:h-40 md:w-80">
            <div className="relative my-2">
              <SlBadge className="text-4xl mx-auto" />
            </div>
            <h1 className="text-2xl font-bold text-center mt-1 md:text-3xl">
              Experience
            </h1>
            <p className="text-center text-sm mb-2 md:text-base">
              30+ years working with <br />
              Oracle HCM products
            </p>
          </div>
          <div className="flex-col my-2 border border-black rounded-3xl h-full w-full justify-center md:h-40 md:w-80">
            <div className="relative my-2">
              <LuSquareChartGantt className="text-4xl mx-auto" />
            </div>
            <h1 className="text-2xl font-bold text-center mt-1 md:text-3xl">
              Projects
            </h1>
            <p className="text-center text-sm mb-2 md:text-base">
              25+ projects across <br />
              numerous sectors
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-6 mx-4 max-w-[800px]">
            With 30 plus years experience working as an Oracle applications
            functional consultant in the process areas of Payroll, Absence
            Management, Time & Labor and Human Capital Management delivering
            elegant, best business practise solutions.
            <br />
            <br />
            Having worked with 29 plus organisations assisting with business
            transformation programmes during a career delivering full lifecycle
            deployments, piecemeal incremental enhancements and post Go-Live
            support.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeText;
