import AboutMeMain from "./assets/components/sectionAboutMe/AboutMeMain";
import HeroMain from "./assets/components/sectionHero/HeroMain";
import NavbarMain from "./assets/components/sectionNavbar/NavbarMain";
import ExperienceMain from "./assets/components/sectionExperience/ExperienceMain";
import ProjectMain from "./assets/components/sectionProjects/ProjectMain";

function App() {
  return (
    <>
      <div>
        <NavbarMain />
        <HeroMain />
        <AboutMeMain />
        <ExperienceMain />
        <ProjectMain />
      </div>
    </>
  );
}

export default App;
