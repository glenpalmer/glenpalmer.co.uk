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
          <div className="border -my-6">
            {ProjectDataSet.map((project) => {
              return (
                <div key={project.id}>
                  {/* Left side of the time line */}
                  {project.position === "left" ? (
                    <div className="border border-red-500 relative group">
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
