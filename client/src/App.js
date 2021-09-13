import React from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: { main: '#2D2424' },
      secondary: { main: '#E0C097' },
    },
    typography: {
      fontFamily: ["Roboto Slab", "Playfair Display", "serif"].join(","),
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
          <Footer />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
