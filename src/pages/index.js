import React from "react";
import Bio from "../components/Bio";
import SideBar from "./SideBar";
import "./index.css";

// auto fixable order
//
// import React from "react";
// import SideBar from "./SideBar";
// import Bio from "../components/Bio"; // invalid
// import "./index.css";

// not auto fixable order
//
// import React from "react";
// import SideBar from "./SideBar";
// import "./index.css";
// import Bio from "../components/Bio"; // invalid

export default () => (
  <div>
    <Bio />
    <SideBar />
  </div>
);
