import React from "react";
import ProjectData from "./ProjectData.json";

const ProjectDataSet = ProjectData.Projects;

const ProjectTimelineSample = () => {
  return (
    <div className="border rounded-3xl w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <div className="border flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
        <div className="border w-full max-w-3xl mx-auto">
          {/*<!-- Vertical Timeline #1 -->*/}
          <div className="border -my-6">
            {/*<!-- Item #1 -->*/}
            {ProjectDataSet.map((project) => (
              <div className="border relative pl-8 sm:pl-32 py-6 group">
                {/*<!-- Purple label -->*/}
                <div key={project.id} className="border">
                  <div className="border font-caveat font-medium text-3xl text-indigo-500 mb-1 sm:mb-0">
                    {project.client}
                  </div>
                  {/*<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->*/}
                  <div className="border flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="border sm:absolute -left-16 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-35 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      {project.date}
                    </time>
                    <div className="border text-xl font-bold text-slate-500">
                      {project.role}
                    </div>
                  </div>

                  {/*<!-- Content -->*/}
                  <div className="border text-black pb-12">
                    {project.summary}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*<!-- New Version Attempt -->*/}
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

export default ProjectTimelineSample;
