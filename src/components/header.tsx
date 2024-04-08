import React, { useState } from 'react';
import Link from 'next/link';

export default function Header (){

    return (
        <>
          <header
            className={"sticky inset-0 z-50 backdrop-blur-lg  bg-blue-200"}
          >
            <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
                <div className="container text-2xl font-medium">
                    <Link href="/">Audio<span className='text-blue-700'>Scribe</span></Link>
                </div>
            </nav>
          </header>
        </>
      );
};