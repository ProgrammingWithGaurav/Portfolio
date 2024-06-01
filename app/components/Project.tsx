"use client";
import React from "react";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from "./ui/GlowingStars";
import { IconClock, IconGitFork, IconStar } from "@tabler/icons-react";

// Remove the duplicate declaration of 'Icon' component
const Icon: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-white stroke-2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
        </svg>
    );
};

interface Repo {
        id: number,
        name: string,
        homepage: string,
        url: string,
        topics: string[],
        description: string,
        watchers: number,
        forks: number,
        stargazers_count: number,   
        created_at: string,
}

export function Project(repo: Repo) {
    return (
        <div className="flex py-20 items-center justify-center antialiased">
            <GlowingStarsBackgroundCard>
                <GlowingStarsTitle>
                    {repo.name}
                </GlowingStarsTitle>
                <div className="flex justify-between items-end">
                    <GlowingStarsDescription>
                        {repo.description}
                    </GlowingStarsDescription>
                 <div className="flex rounded-lg space-x-1 bg-[hsla(0,0%,100%,.1)] p-4 items-center justify-center">
                    <button className="cursor-pointer hover:bg-gray-500 rounded-full p-2" onClick={() => { /* handle click for IconStar */ }}>
                        <IconStar />
                    </button>
                    <button className="cursor-pointer hover:bg-gray-500 rounded-full p-2" onClick={() => { /* handle click for IconGitFork */ }}>
                        <IconGitFork />
                    </button>
                    <button className="cursor-pointer hover:bg-gray-500 rounded-full p-2" onClick={() => { /* handle click for IconClock */ }}>
                        <IconClock />
                    </button>
                </div>
                </div>
            </GlowingStarsBackgroundCard>
        </div>
    );
}
 