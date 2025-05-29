import React, { Fragment } from "react";
import ProjectData from "./ProjectData.json";
import { CiGrid2V } from "react-icons/ci";

const ProjectDataSet = ProjectData.Projects;

const ProjectTimeLine = () => {
  return (
    <div className="border rounded-3xl w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16 mt-4">
        <div className="w-full max-w-3xl mx-auto">
          {/*<!-- Vertical Timeline #1 -->*/}
          <div className="-my-6">
            {ProjectDataSet.map((project) => {
              return (
                <div key={project.id}>
                  {/* Left side of the time line */}
                  {project.position === "left" ? (
                    <div className="flex my-12">
                      <div className="w-1/2 mr-4">
                        <div className="flex flex-col items-end">
                          <div className="font-caveat font-medium text-3xl text-indigo-500">
                            {project.client}
                          </div>
                          <div className="text-lg font-bold text-slate-500">
                            {project.role}
                          </div>
                          <div className="text-md text-slate-500">
                            {project.summary}
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 ml-4">
                        <div className="flex items-start">
                          <div className="uppercase w-[150px] border text-center py-1 translate-y-1 rounded-full text-xs font-semibold text-emerald-600 bg-emerald-100">
                            {project.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {/* Right side of the time line */}
                  {project.position === "right" ? (
                    <div className="flex my-12">
                      <div className="w-1/2 mr-4">
                        <div className="flex justify-end">
                          <div className="uppercase w-[150px] border text-center py-1 translate-y-1 rounded-full text-xs font-semibold text-emerald-600 bg-emerald-100">
                            {project.date}
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 ml-4">
                        <div className="flex flex-col items-start">
                          <div className="font-caveat font-medium text-3xl text-indigo-500">
                            {project.client}
                          </div>
                          <div className="text-lg font-bold text-slate-500">
                            {project.role}
                          </div>
                          <div className="text-md text-slate-500">
                            {project.summary}
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
