import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IoSettings } from "react-icons/io5";

export const SidebarData = [
  {
    title: 'Home',
    path: '#',
    icon: <AiIcons.AiFillHome className="m-1"/>,
    cName: 'nav-text'
  },
  {
    title: 'Organization',
    path: '#',
    icon: <IoIcons.IoIosPaper className="m-1"/>,
    cName: 'nav-text'
  },
  {
    title: 'Assests',
    path: '#',
    icon: <FaIcons.FaCartPlus className="m-1"/>,
    cName: 'nav-text'
  },
  {
    title: 'Trade',
    path: '#',
    icon: <IoIcons.IoMdPeople className="m-1"/>,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '#',
    icon: <IoSettings className="m-1"/>,
    cName: 'mb-auto'
  },

];