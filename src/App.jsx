import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Box } from "@mui/material";

import Header from "./components/Header/Header";
import IntroSection from "./components/IntroSection/IntroSection";

import ProjectsSection from "./components/ProjectsSection/index";
import ContactSection from "./components/ContactSection";
function App() {
  return (
    <Box sx={{ width: { xs: "100%", md: "calc(100% - 100px)" }, m: "auto" }}>
      <Header></Header>
      <IntroSection></IntroSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </Box>
  );
}

export default App;
