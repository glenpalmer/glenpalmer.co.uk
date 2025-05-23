import React from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import certPayroll from "../../../../public/images/certPayroll.png";
import certAbsence from "../../../../public/images/certAbsence.png";

const ExperienceText = () => {
  return (
    <div className="flex justify-around gap-24 mt-8">
      <div className="relative w-3/5 border border-black rounded-3xl text-center pt-6">
        <h1 className="text-3xl font-bold">Oracle Areas of Expertise</h1>
        <div className="my-10 mx-10">
          <table className="w-full">
            <tr>
              <td className="py-2">
                <TbRosetteDiscountCheckFilled className="text-3xl text-blue-500" />
              </td>
              <td className="text-left">Oracle Cloud Payroll</td>
            </tr>
            <tr>
              <td className="py-2">
                <TbRosetteDiscountCheckFilled className="text-3xl text-blue-500" />
              </td>
              <td className="text-left">Oracle Cloud Core Human Resources</td>
            </tr>
            <tr>
              <td className="py-2">
                <TbRosetteDiscountCheckFilled className="text-3xl text-blue-500" />
              </td>
              <td className="text-left">Oracle Cloud Absence Management</td>
            </tr>
            <tr>
              <td className="py-2">
                <TbRosetteDiscountCheckFilled className="text-3xl text-blue-500" />
              </td>
              <td className="text-left">Oracle Cloud Time & Labor</td>
            </tr>
            <tr>
              <td className="py-2">
                <TbRosetteDiscountCheckFilled className="text-3xl text-blue-500" />
              </td>
              <td className="text-left">Oracle Cloud Fast Formula</td>
            </tr>
            <tr>
              <td className="py-2">
                <TbRosetteDiscountCheckFilled className="text-3xl text-blue-500" />
              </td>
              <td className="text-left">Oracle HCM Data Load (HDL)</td>
            </tr>
            <tr>
              <td className="py-2">
                <TbRosetteDiscountCheckFilled className="text-3xl text-blue-500" />
              </td>
              <td className="text-left">
                Oracle Transactional Business Intelligence (OTBI)
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="w-2/5 border border-black rounded-3xl text-center pt-6">
        <h1 className="text-3xl font-bold">Oracle Certifications</h1>
        <div>
          <img
            src={certPayroll}
            alt="Certificate Payroll"
            className="scale-75"
          />
          <img
            src={certAbsence}
            alt="Certificate Absence Management"
            className="scale-75"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceText;
