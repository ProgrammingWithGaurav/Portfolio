"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/ProfileCard";
import Link from "next/link";
import { IconUserCircle, IconUsers } from "@tabler/icons-react";

interface ProfileCardProps {
    username: string;
    bio: string;
  profileImage: string;
  followers: number;
  following: number;
  html_url: string;
} 

export function ProfileCard({ username, bio, profileImage, followers, following, html_url }: ProfileCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {username}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {bio}
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4">
          <a href={html_url} target="_blank" rel="noreferrer">
          <Image
            src={profileImage}
            height="1000"
            width="1000"
            className="h-50 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            />
            </a>
        </CardItem>
        <div className="flex justify-evenly w-full items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <IconUsers size={20} strokeWidth={1.5} className="mr-2" />
            {followers} Followers
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <IconUserCircle size={20} strokeWidth={1.5} className="mr-2" />

            {following} Following
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
