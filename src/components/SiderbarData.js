import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SiderbarData = [
  {
    title: "Dashoard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Estudiantes",
    path: "/estudiantes",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Profesores",
    path: "/profesores",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Asignaturas",
    path: "/asignaturas",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
