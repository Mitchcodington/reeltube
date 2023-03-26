import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import  logo  from "../images/logo.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#0f0f0f', top: 0, justifyContent: "space-between", zIndex:"100" }}>

    <SearchBar />
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img className="logo" src={logo} alt="logo" width={200} height={70} />
    </Link>
  </Stack>
);

export default Navbar;