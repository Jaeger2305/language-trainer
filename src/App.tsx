import {Container} from "@mui/material";
import {NavigationTabs} from "./NavigationTabs";
import {Outlet} from "react-router-dom";

const App = () => {
  return (
    <>
      <NavigationTabs />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
