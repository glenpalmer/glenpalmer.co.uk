import React, { Fragment } from "react";
import ProjectData from "./ProjectData.json";
import { CiGrid2V } from "react-icons/ci";

const ProjectDataSet = ProjectData.Projects;

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-blue-500 mx-auto"></div>;
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto"></div>
  );
};

const EventCard = ({ client, role }) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
      <div className="text-blue-800 font-bold text-lg border-b">{client}</div>
      <div className="text-sm text-grey-700">{role}</div>
    </div>
  );
};

const ProjectTimeLine = () => {
  return (
    <div className="border rounded-3xl w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <div className="border flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16 mt-4">
        <div className="w-full max-w-3xl mx-auto">
          {/*<!-- Vertical Timeline #1 -->*/}
          <div className="-my-6">
            {ProjectDataSet.map((project) => {
              return (
                <div>
                  {/* Left side of the time line */}
                  {project.position === "left" ? (
                    <div className="flex justify-start">
                      <div className="w-[350px] text-right">
                        <div className="flex flex-col items-end">
                          <div className="relative uppercase w-[150px] border text-center py-1 mb-2 rounded-full text-xs font-semibold text-emerald-600 bg-emerald-100">
                            {project.date}
                          </div>
                          <div className="font-caveat font-medium text-3xl text-indigo-500 pb-2">
                            {project.client}
                          </div>
                          <div className="text-lg font-bold text-slate-500">
                            {project.role}
                          </div>
                          <div className="text-md text-slate-500">
                            {project.primeSi} - {project.type}
                          </div>
                          <div className="text-sm text-">
                            <p>{project.summary}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {/* Right side of the time line */}
                  {project.position === "right" ? (
                    <div className="flex justify-end">
                      <div className="w-[350px] text-left">
                        <div className="flex flex-col items-start">
                          <div className="relative uppercase w-[150px] border text-center py-1 rounded-full text-xs font-semibold text-emerald-600 bg-emerald-100">
                            {project.date}
                          </div>
                          <div className="font-caveat font-medium text-3xl text-indigo-500 pb-2">
                            {project.client}
                          </div>
                          <div className="text-lg font-bold text-slate-500">
                            {project.role}
                          </div>
                          <div className="text-md text-slate-500">
                            {project.primeSi} - {project.type}
                          </div>
                          <div className="text-sm text-">
                            <p>{project.summary}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeLine;
