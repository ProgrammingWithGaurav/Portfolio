"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/ProfileCard";
import Link from "next/link";
import {
  IconBrandAndroid,
  IconBrandFirebase,
  IconBrandFlutter,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTypescript,
  IconUserCircle,
  IconUsers,
} from "@tabler/icons-react";

interface ProfileCardProps {
  login: string;
  bio: string;
  profileImage: string;
  followers: number;
  following: number;
  html_url: string;
}

export function ProfileCard({
  login,
  bio,
  profileImage,
  followers,
  following,
  html_url,
}: ProfileCardProps) {
  const Skills = [
    <IconBrandReact key={11} />,
    <IconBrandPython key={12} />,
    <IconBrandTypescript key={13} />,
    <IconBrandJavascript key={14} />,
    <IconBrandFlutter key={15} />,
    <IconBrandFirebase key={16} />,
    <IconBrandNodejs key={17} />,
    <IconBrandAndroid key={18} />,
  ];

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="5"
          className="text-xl font-bold text-neutral-600 dark:text-white underline cursor-pointer "
        >
          <a href={html_url} target="_blank" rel="noreferrer">
            @{login}
          </a>
        </CardItem>
        <CardItem
          as="p"
          transateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {bio}
        </CardItem>
        <CardItem translateZ="5" className="w-full mt-4">
          <a href={html_url} target="_blank" rel="noreferrer">
            <Image
              src={profileImage}
              height="200"
              width="200"
              className="h-50 w-full object-cover rounded-xl"
              alt="thumbnail"
            />
          </a>
        </CardItem>

        <div className="flex flex-col w-full items-center mt-20">
          <CardItem
            translateZ={5}
            as="button"
            className="flex items-center justify-evenly space-x-4"
          >
            <div className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
              <a
                href={html_url}
                className=" flex items-center"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandGithub
                  size={5}
                  strokeWidth={1.5}
                  className="mr-2 w-4 h-4"
                />
                Github
              </a>
            </div>
            <div className="px-4 py-2 rounded-xl bg-black dark:bg-white flex items-center dark:text-black text-white text-xs font-bold">
              <IconUsers size={5} strokeWidth={1.5} className="mr-2 w-4 h-4" />
              {followers} Followers
            </div>
            <div className="px-4 py-2 rounded-xl bg-black dark:bg-white flex items-center dark:text-black text-white text-xs font-bold">
              <IconUserCircle
                size={5}
                strokeWidth={1.5}
                className="mr-2 w-4 h-4"
              />
              {following} Following
            </div>
          </CardItem>

          {/* Tags/Pins for skills  */}
          <h4 className="text-gray-900 font-bold text-lg my-4 text-center w-full">
            Skills
          </h4>
          <CardItem
            translateZ={5}
            className="flex flex-wrap justify-center mt-4 space-x-2"
          >
            {Skills.map((Skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-2 border-2 border-blue-300 bg-gray-100 cursor-pointer hover:bg-gray-50 hover:shadow-xl  text-gray-600 text-xs font-bold rounded-xl"
              >
                {Skill}
              </div>
            ))}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
