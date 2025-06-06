import ProjectData from "./ProjectData.json";

const ProjectDataSet = ProjectData.Projects;

const ProjectTimeLine = () => {
  return (
    <div className="border flex mx-4 mt-2 md:mt-8 rounded-3xl">
      <div class="w-full mx-auto">
        <div className="flex text-center justify-center mt-4 mb-4 md:text-2xl">
          Summary of Project Timeline, for full detail please download CV.
        </div>
        <div class="my-6 mx-6">
          {ProjectDataSet.map((project) => {
            return (
              <div key={project.id} className="group">
                <div class="relative pl-8 py-6 md:pl-70 md:pb-12">
                  <div class="font-caveat font-medium text-xl text-blue2 mb-1 sm:mb-0 md:font-bold md:text-4xl">
                    {project.client}
                  </div>
                  <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 md:before:left-30 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-30 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-[10px] font-semibold uppercase w-30 h-5 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full md:text-[15px] md:font-semibold md:w-45 md:h-7.5">
                      {project.date}
                    </time>
                    <div class="text-sm font-bold text-slate-900 md:text-2xl">
                      {project.role}
                    </div>
                  </div>
                  {/* <!-- Comment out this section until we can render long text, probably using Markdown
                  <div class="md:hidden text-slate-500 text-xs md:text-lg">
                    {project.summary}
                  </div>
                  <div class="hidden md:block text-slate-500 text-xs md:text-lg">
                    {project.detail}
                  </div>
                  */}
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
