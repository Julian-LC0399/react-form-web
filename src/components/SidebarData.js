import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as HiAcademicCap  from "react-icons/hi";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'Estudiantes',
    path: '/estudiantes',
    icon: <HiAcademicCap.HiAcademicCap />,
    cName: 'nav-text'
  },
  {
    title: 'Profesores',
    path: '/profesores',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Asignaturas',
    path: '/asignaturas',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
];