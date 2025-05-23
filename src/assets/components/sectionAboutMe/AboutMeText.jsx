import React from "react";
import AboutMeProfileImage from "./AboutMeProfileImage";
import { SlBadge } from "react-icons/sl";
import { LuSquareChartGantt } from "react-icons/lu";

const AboutMeText = () => {
  return (
    <div className="flex mt-8">
      <div>
        <AboutMeProfileImage />
      </div>
      <div className="grow">
        <div className="flex justify-evenly">
          <div className="flex-col border border-black rounded-3xl h-40 w-80 justify-center">
            <div className="relative pt-2">
              <SlBadge className="text-4xl mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-center pt-2">Experience</h1>
            <p className="text-center pt-2">
              29+ years as a <br />
              functional consultant
            </p>
          </div>
          <div className="flex-col border border-black rounded-3xl h-40 w-80 justify-center">
            <div className="relative pt-2">
              <LuSquareChartGantt className="text-4xl mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-center pt-2">Projects</h1>
            <p className="text-center pt-2">
              25+ project across <br />
              numerous sectors
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-6 max-w-[800px]">
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
