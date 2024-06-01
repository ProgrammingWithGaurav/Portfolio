"use client";
import React from 'react';
import { FloatingNavDemo } from '../components/Navbar';
import { HeroHighlightDemo } from '../components/HeroHighlight';

const HomePage = () => {
return (
    <div className='flex flex-col h-[1000px]'>
        <HeroHighlightDemo />
            <FloatingNavDemo />
            </div>
    );
}

export default HomePage;
