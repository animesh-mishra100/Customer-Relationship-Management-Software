import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import CustomToggle from "../../components/CustomToggle";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeContext } from "../../context/ThemeContext";

const HomeLayout = ({ children }) => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <React.Fragment>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 800, textTransform: "uppercase" }}
          >
            Easy CRM
          </Typography>
          <Link href="https://github.com/animesh-mishra100" target="_blank">
            <IconButton color="primary" style={{ cursor: "pointer" }}>
              <GitHubIcon sx={{ color: darkTheme ? "#fff" : "#000" }} />
            </IconButton>
          </Link>
          <Box sx={{ display: "flex" }}>
            <CustomToggle />
          </Box>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        {children}
      </Container>
      <Grid
        container
        component="footer"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        Developed by 
        <Link  target="_blank" ml={1}>
            Animesh Mishra
        </Link>
      </Grid>
    </React.Fragment>
  );
};

export default HomeLayout;
