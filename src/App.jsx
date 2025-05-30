import AboutMeMain from "./assets/components/sectionAboutMe/AboutMeMain";
import HeroMain from "./assets/components/sectionHero/HeroMain";
import NavbarMain from "./assets/components/sectionNavbar/NavbarMain";
import ExperienceMain from "./assets/components/sectionExperience/ExperienceMain";
import ProjectMain from "./assets/components/sectionProjects/ProjectMain";
import ContactMain from "./assets/components/sectionContact/ContactMain";
import FooterMain from "./assets/components/sectionFooter/FooterMain";

function App() {
  return (
    <>
      <div>
        <NavbarMain />
        <HeroMain />
        <AboutMeMain />
        <ExperienceMain />
        <ProjectMain />
        <ContactMain />
        <FooterMain />
      </div>
    </>
  );
}

export default App;
