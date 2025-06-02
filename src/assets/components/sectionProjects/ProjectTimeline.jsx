import ProjectData from "./ProjectData.json";

const ProjectDataSet = ProjectData.Projects;

const ProjectTimeLine = () => {
  return (
    <div className="border flex mx-4 mt-2 md:mt-8 rounded-3xl">
      <div class="w-full mx-auto">
        <div className="flex justify-center mt-4 mb-4">Project Timeline</div>
        <div class="my-6 mx-4">
          {ProjectDataSet.map((project) => {
            return (
              <div key={project.id} className="group">
                <div class="relative pl-8 sm:pl-32 py-6">
                  {/*<!-- Purple label -->*/}
                  <div class="font-caveat font-medium text-xl text-blue2 mb-1 sm:mb-0">
                    {project.client}
                  </div>

                  <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-[10px] font-semibold uppercase w-30 h-5 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                      {project.date}
                    </time>
                    <div class="text-sm font-bold text-slate-900">
                      {project.role}
                    </div>
                  </div>

                  <div class="text-slate-500">{project.summary}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeLine;
