import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          variant="dense"
          sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} alt="Logo" width={50} height={50} />
          </IconButton>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Link
              to="/sobre"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="inherit"
                component="div"
                sx={{
                  color: "inherit",
                }}
              >
                Sobre
              </Typography>
            </Link>
            <Link
              to="/contato"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginLeft: "1rem",
              }}
            >
              <Typography
                variant="inherit"
                component="div"
                sx={{
                  color: "inherit",
                }}
              >
                Contato
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
