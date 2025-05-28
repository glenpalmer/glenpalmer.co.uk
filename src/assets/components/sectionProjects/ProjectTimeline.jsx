import React from "react";
import ProjectData from "./ProjectData.json";

const ProjectDataSet = ProjectData.Projects;

const ProjectTimeLine = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center pt-20">
        <div class="w-80">
          <h2 className="text-xl text-gray-700 mb-7">Recent Updates</h2>
          <ul>
            <li className="relative flex gap-6 items-baseline">
              <div className="before:absolute before:left-[6px] before:h-full before:w-[3px] before:bg-gray-400">
                <div className="h-[15px] w-[15px] rounded-full bg-gray-400"></div>
              </div>
              <div className="text-sm text-gray-600">
                <p>27.08.2022</p>
                <p className="mt-2 pb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  possimus ducimus quos velit ratione consequatur eius veniam
                  neque ea quae, suscipit cupiditate fuga saepe aliquam beatae,
                  fugit dolor nisi sed.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeLine;
