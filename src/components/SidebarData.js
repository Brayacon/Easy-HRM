import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GoIcons from 'react-icons/go';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <IoIcons.IoMdArrowDropdown/>,
        iconOpened: <IoIcons.IoMdArrowDropup/>,
    },

    {
        title: 'Department Management',
        path: '/department-management',
        icon: <FaIcons.FaCartPlus/>,
    },

    {
        title: 'Leave Management',
        path: '/leave-management',
        icon: <FaIcons.FaEnvelopeOpenText/>,

        iconClosed: <IoIcons.IoMdArrowDropdown/>,
        iconOpened: <IoIcons.IoMdArrowDropup/>,
        subNav: [
            {
                title: 'messages 1',
                path: '/messages/messages1',
                icon: <IoIcons.IoMdMail/>,
            },
            {
                title: 'messages 2',
                path: '/messages/messages2',
                icon: <IoIcons.IoMdMail/>,
            },
        ]
    },
    
    {
        title: 'Employee Management',
        path: '/employee-management',
        icon: <GoIcons.GoReport/>,
        iconClosed: <IoIcons.IoMdArrowDropdown/>,
        iconOpened: <IoIcons.IoMdArrowDropup/>,
        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title: 'HR Process',
        path: '/hr-process',
        icon: <GoIcons.GoReport/>,
        iconClosed: <IoIcons.IoMdArrowDropdown/>,
        iconOpened: <IoIcons.IoMdArrowDropup/>,
        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 4',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 5',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            },
            
        ]
    },
    {
        title: 'Transactions',
        path: '/transactions',
        icon: <GoIcons.GoReport/>,
        iconClosed: <IoIcons.IoMdArrowDropdown/>,
        iconOpened: <IoIcons.IoMdArrowDropup/>,
        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 4',
                path: '/reports/reports4',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 5',
                path: '/reports/reports5',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },

    {
        title: 'Reporting',
        path: '/reporting',
        icon: <GoIcons.GoReport/>,
        iconClosed: <IoIcons.IoMdArrowDropdown/>,
        iconOpened: <IoIcons.IoMdArrowDropup/>,
        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title: 'Settings',
        path: '/employee-management',
        icon: <GoIcons.GoReport/>,
        iconClosed: <IoIcons.IoMdArrowDropdown/>,
        iconOpened: <IoIcons.IoMdArrowDropup/>,
        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },
]