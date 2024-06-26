import React from 'react';
import { FloatingNavDemo } from '../components/Navbar';
import './../app/globals.css';
import { useEffect, useState } from 'react';
import { ProfileCard } from '@/components/ProfileCard';

interface Profile {
    avatar_url: string;
    login: string;
    bio: string;
    followers: number;
    following: number;
    html_url: string;
}
const AboutPage = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    console.log(profile);

  useEffect(() => {
    fetch('https://api.github.com/users/ProgrammingWithGaurav')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setProfile(data))
        .catch(error => console.error('Error:', error));
}, []);

    return (
        <div className='flex flex-col items-center justify-center h-[1000px]'>
            <FloatingNavDemo />
            {profile && (
                <ProfileCard html_url={profile.html_url} followers={profile.followers} login={profile.login} bio={profile.bio} profileImage={profile.avatar_url} following={profile.following}  />
            )}
        </div>
    );
}

export default AboutPage;