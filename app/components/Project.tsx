"use client";
import React from "react";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from "./ui/GlowingStars";
import { IconArrowAutofitContent, IconBrandGit, IconClock, IconGitFork, IconLink, IconStar } from "@tabler/icons-react";
import { AnimatedTooltip } from "./ui/Tooltip";

export function Project({
    repo,
}: {
    repo: {
        id: number;
        name: string;
        html_url: string;
        homepage: string;
        topics: string[];
        description: string;
        watchers: number;
        forks: number;
        stargazers_count: number;
        created_at: string;
    };

}) {
       // Convert the created_at string to a Date object
    const createdAt = new Date(repo.created_at);

    // Format the date
    const formattedDate = `${createdAt.getDate()}-${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;

    // Capitalize the name
    const capitalizedTitle = repo.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const icons = [
    {
        id: 1,
        name: "Stars",
        count: repo.stargazers_count.toString(), // Convert to string
        icon:
        <IconStar className="object-cover m-2 !p-0 object-top rounded-full cursor-pointer text-gray-200 hover:text-gray-100  group-hover:scale-105 group-hover:z-30  relative transition duration-500"/>
    },
    {
        id: 2,
        name: "Forks",
        count: repo.forks.toString(), // Convert to string
        icon:
        <IconGitFork className="object-cover m-2 !p-0 object-top rounded-full cursor-pointer text-gray-200 hover:text-gray-100  group-hover:scale-105 group-hover:z-30  relative transition duration-500"/>
    },
    {
        id: 3,
        name: "Created At",
        count: formattedDate,
        icon:
        <IconClock className="object-cover m-2 !p-0 object-top rounded-full cursor-pointer text-gray-200 hover:text-gray-100  group-hover:scale-105 group-hover:z-30  relative transition duration-500"/>
        },
    
    {
        id:4,
        name: "Github Link",
        count: "Visit the Repo",
        icon:
            <a href={repo.html_url} target="_blank" rel="noreferrer">
        <IconBrandGit className="object-cover m-2 !p-0 object-top rounded-full cursor-pointer text-gray-200 hover:text-gray-100  group-hover:scale-105 group-hover:z-30  relative transition duration-500"/>
        </a>},
    {
        id:5,
        name: "Site Link",
        count: "Visit the Site",
        icon:
            <a href={repo.homepage} target="_blank" rel="noreferrer">
        <IconLink className="object-cover m-2 !p-0 object-top rounded-full cursor-pointer text-gray-200 hover:text-gray-100  group-hover:scale-105 group-hover:z-30  relative transition duration-500"/>
        </a>},
    ];
    return (
        <div className="flex py-20 items-center justify-center antialiased">
            <GlowingStarsBackgroundCard>
                <GlowingStarsTitle>
                    {capitalizedTitle}
                </GlowingStarsTitle>                                                    
                
                
                <AnimatedTooltip items={icons} />
            </GlowingStarsBackgroundCard>
        </div>
    );
}
 