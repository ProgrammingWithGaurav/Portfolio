import React, { useEffect, useState } from 'react';
import { FloatingNavDemo } from '../components/Navbar';
import './../app/globals.css';
import { Project } from '@/components/Project';

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

const ProjectsPage = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    // Fetch all repositories for a user
    fetch('https://api.github.com/users/ProgrammingWithGaurav/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  // print the repo when repos are fetched
  console.log(repos);

  return (
    <div className='flex flex-col h-[1000px]'>
      <FloatingNavDemo />
      <div className='flex flex-col my-10 h-[100px]'>
        <h1 className='text-6xl font-bold text-center'>Projects</h1>
        <div className='grid grid-cols-3 gap-4 p-4'>
          {repos.map((repo: Repo) => (
            <Project repo={repo} key={repo.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;