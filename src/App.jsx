import AboutMeMain from "./assets/components/sectionAboutMe/AboutMeMain";
import HeroMain from "./assets/components/sectionHero/HeroMain";
import NavbarMain from "./assets/components/sectionNavbar/NavbarMain";
import ExperienceMain from "./assets/components/sectionExperience/ExperienceMain";
import ProjectsMain from "./assets/components/sectionProjects/ProjectsMain";

function App() {
  return (
    <>
      <div>
        <NavbarMain />
        <HeroMain />
        <AboutMeMain />
        <ExperienceMain />
        <ProjectsMain />
      </div>
    </>
  );
}

export default App;
