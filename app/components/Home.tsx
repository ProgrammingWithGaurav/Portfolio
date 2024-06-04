"use client";
import React from 'react';
import { FloatingNavDemo } from './Navbar';
import { HeroHighlightDemo } from './HeroHighlight';

const HomePage = () => {
return (
    <div className='flex flex-col h-[1000px]'>
        <HeroHighlightDemo />
            <FloatingNavDemo />
            </div>
    );
}

export default HomePage;
