import React from "react";
import * as AiIcons from "react-icons/ai";
import * as HiAcademicCap from "react-icons/hi";
import * as GiTeacher from "react-icons/gi";
import * as MdLibraryBooks from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Estudiantes",
    path: "/estudiantes",
    icon: <HiAcademicCap.HiAcademicCap />,
    cName: "nav-text",
  },
  {
    title: "Profesores",
    path: "/profesores",
    icon: <GiTeacher.GiTeacher />,
    cName: "nav-text",
  },
  {
    title: "Asignaturas",
    path: "/asignaturas",
    icon: <MdLibraryBooks.MdLibraryBooks />,
    cName: "nav-text",
  },
];
