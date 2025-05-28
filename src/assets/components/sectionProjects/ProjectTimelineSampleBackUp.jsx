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
            <div className="border relative pl-8 sm:pl-32 py-6 group">
              {/*<!-- Purple label -->*/}
              {ProjectDataSet.map((project) => (
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
              ))}
            </div>

            {/*<!-- Item #2 -->*/}
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/*<!-- Purple label -->*/}
              <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
                The milestone
              </div>
              {/*<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->*/}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  May, 2021
                </time>
                <div className="text-xl font-bold text-slate-900">
                  Reached 5K customers
                </div>
              </div>
              {/*<!-- Content -->*/}
              <div className="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra pharetra massa
                massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit
                cursus risus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /*    <div className="border flex rounded-3xl">
      <ul className="mx-auto">
        {ProjectsDataSet.map((project) => (
          <div className="mt-4">
            <li key={project.id} className="flex gap-12">
              <time className="left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-40 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                {project.date}
              </time>
              <div>
                <h1>{project.client}</h1>
                <h2>{project.role}</h2>
                <p>{project.summary}</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>*/
  );
};

export default ProjectTimelineSample;
