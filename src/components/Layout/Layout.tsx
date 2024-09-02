import React from 'react';
import {NavBar} from "@/pages/NavBar/NavBar";
import Footer from "@/pages/Footer/Footer";
import {Outlet} from 'react-router-dom';

export const Layout = () => {
  return (
      <div className='flex w-[1440px] h-[100vh]'>
        <NavBar/>
        <div>
          <div className='flex-1 bg-white-hover p-[14px]'>
            <Outlet/>
          </div>
          <Footer/>
        </div>
      </div>
  )
      ;
};

