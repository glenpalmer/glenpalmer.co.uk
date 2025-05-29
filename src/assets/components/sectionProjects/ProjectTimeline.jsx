import ProjectData from "./ProjectData.json";

const ProjectDataSet = ProjectData.Projects;

const ProjectTimeLine = () => {
  return (
    <div className="border rounded-3xl w-full max-w-6xl mx-auto py-24">
      <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
        <div className="w-full max-w-3xl mx-auto">
          {/*<!-- Vertical Timeline #1 -->*/}
          <div className="-my-6">
            {ProjectDataSet.map((project) => {
              return (
                <div key={project.id}>
                  {/* Left side of the time line */}
                  {project.position === "left" ? (
                    <div className="flex">
                      <div className="w-1/2 mr-4 pb-12">
                        <div className="font-caveat font-medium text-3xl text-blue2">
                          {project.client}
                        </div>
                        <div className="text-lg font-bold text-slate-500">
                          {project.role}
                        </div>
                        <div className="text-md text-slate-500">
                          {project.summary}
                        </div>
                      </div>
                      <div className="w-1/2 ml-4">
                        <div className="flex relative h-full items-start">
                          {/*<div className="flex flex-col items-end mb-1 group-last:before:hidden before:absolute before:-left-4 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:-left-4 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">*/}
                          <div className="flex flex-col items-start after:absolute after:h-3 after:w-3 after:bg-indigo-600 after:border-3 after:border-slate-50 after:rounded-full after:box-content after:-left-6 after:translate-y-2 before:absolute before:-left-3.75 before:h-full before:px-px before:bg-slate-300 before:-translate-x-1/2 before:translate-y-3">
                            <div className="uppercase w-[150px] border text-center py-1 translate-y-1 rounded-full text-xs font-semibold text-emerald-600 bg-emerald-100">
                              {project.date}
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
                    <div className="flex">
                      <div className="w-1/2 mr-4">
                        <div className="flex relative h-full justify-end">
                          {/*<div className="flex flex-col items-end mb-1 group-last:before:hidden before:absolute before:-right-4 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:-right-7.5 after:w-2 after:h-2 after:bg-indigo-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full after:-translate-x-1/2 after:translate-y-1.5">*/}
                          <div className="flex flex-col items-end after:absolute after:h-3 after:w-3 after:bg-indigo-600 after:border-3 after:border-slate-50 after:rounded-full after:box-content after:-right-6.5 after:translate-y-2 before:absolute before:-right-4.75 before:h-full before:px-px before:bg-slate-300 before:-translate-x-1/2 before:translate-y-3">
                            {/* <div className="flex flex-col items-end after:absolute after:h-3 after:w-3 after:bg-indigo-600 after:border-3 after:border-slate-50 after:rounded-full after:box-content after:-right-6 after:translate-y-2">*/}
                            <div className="uppercase w-[150px] border text-center py-1 translate-y-1 rounded-full text-xs font-semibold text-emerald-600 bg-emerald-100">
                              {project.date}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 ml-4 pb-12">
                        <div className="flex flex-col items-start">
                          <div className="font-caveat font-medium text-3xl text-blue2">
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
