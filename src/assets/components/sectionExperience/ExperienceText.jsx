import React from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import certPayroll from "../../../../public/images/certPayroll.png";
import certAbsence from "../../../../public/images/certAbsence.png";

const ExperienceText = () => {
  return (
    <div className="flex mt-2 md:mt-8">
      <div className="grow flex flex-col mx-4 md:flex-row md:justify-around md:gap-24">
        <div className="border border-black rounded-3xl text-center pt-4 my-2 md:w-2/5">
          <h1 className="text-xl font-bold">Oracle Certifications</h1>
          <div className="flex flex-row justify-center md:flex-col md:items-center">
            <div>
              <img
                src={certPayroll}
                alt="Certificate Payroll"
                className="scale-75"
              />
            </div>
            <div>
              <img
                src={certAbsence}
                alt="Certificate Absence Management"
                className="scale-75"
              />
            </div>
          </div>
        </div>
        <div className="border border-black rounded-3xl text-center pt-4 my-2 md:w-3/5">
          <h1 className="text-xl font-bold">Oracle Areas of Expertise</h1>
          <div className="my-10 mx-6">
            <table className="w-full">
              <tr>
                <td className="py-4">
                  <TbRosetteDiscountCheckFilled className="text-xl text-blue-500 md:text-3xl" />
                </td>
                <td className="text-left text-sm pl-4 md:text-2xl">
                  Oracle Cloud Payroll
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <TbRosetteDiscountCheckFilled className="text-xl text-blue-500 md:text-3xl" />
                </td>
                <td className="text-left text-sm pl-4 md:text-2xl">
                  Oracle Cloud Core Human Resources
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <TbRosetteDiscountCheckFilled className="text-xl text-blue-500 md:text-3xl" />
                </td>
                <td className="text-left text-sm pl-4 md:text-2xl">
                  Oracle Cloud Absence Management
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <TbRosetteDiscountCheckFilled className="text-xl text-blue-500 md:text-3xl" />
                </td>
                <td className="text-left text-sm pl-4 md:text-2xl">
                  Oracle Cloud Time & Labor
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <TbRosetteDiscountCheckFilled className="text-xl text-blue-500 md:text-3xl" />
                </td>
                <td className="text-left text-sm pl-4 md:text-2xl">
                  Oracle Cloud Fast Formula
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <TbRosetteDiscountCheckFilled className="text-xl text-blue-500 md:text-3xl" />
                </td>
                <td className="text-left text-sm pl-4 md:text-2xl">
                  Oracle HCM Data Load (HDL)
                </td>
              </tr>
              <tr>
                <td className="py-4">
                  <TbRosetteDiscountCheckFilled className="text-xl text-blue-500 md:text-3xl" />
                </td>
                <td className="text-left text-sm pl-4 md:text-2xl">
                  Oracle Transactional Business Intelligence (OTBI)
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceText;
