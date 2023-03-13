"use client";
import React from 'react';
import { Inter } from '@next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';
import me from '../../public/profile.jpg';
import design from '../../public/design.png';
import code from '../../public/code.png';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';

const inter = Inter({ subsets: ['latin'] });

interface props {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<any>>
}

export default function Home({darkMode, setDarkMode}: props) {

  return (
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-gray-200'>Kenji Fushida</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-gray-200'/>
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
              href='https://docs.google.com/document/d/1ijMHbELpxLLM7x3RNByoqrs6Kkbl2wN3UiCLqMI8q2E/edit?usp=sharing'
              target="_blank" rel='noreferrer noopener'>Resume</a>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Kenji Fushida</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-200'>Software Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300'>
            Software developer with 1 year of experience in frontend development 
            and currently doing research in cloned concurrency control schemes 
            for backup databases at Keio University.
          </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href='https://github.com/kenjifushida'>
            <AiFillGithub className='cursor-pointer hover:text-gray-800 dark:hover:text-gray-100' />
          </a>
          <a href='https://www.linkedin.com/in/kenjifushida/'>
            <AiFillLinkedin className='cursor-pointer hover:text-gray-800 dark:hover:text-gray-100' />
          </a>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={me} fill className='object-cover object-center' alt='figure'/>
        </div>
      </section>
      
      <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-gray-200'>Services I offer</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
            I&#39;ve worked as a developer for startups both in
            <span className='text-teal-500'> Japan</span> and the 
            <span className='text-teal-500'> US</span> making UI components, 
            corporate sites, and creating APIs for web application microservices.
          </p>
        </div>
        <div className='lg:flex gap-10'>
          <div className='basis-1/2 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800'>
            <div className='flex justify-center'>
              <Image src={design} alt='design' width={100} height={100}
              style={{display: 'block'}} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>Design Tools I use</h3>
            <p className='text-gray-800 py-1 dark:text-gray-300'>Photoshop</p>
            <p className='text-gray-800 py-1 dark:text-gray-300'>Figma</p>
          </div>
          <div className='basis-1/2 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800'>
            <div className='flex justify-center'>
            <Image src={code} alt='code' width={100} height={100}
            style={{display: 'block'}} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>Frameworks</h3>
            <p className='text-gray-800 py-1 dark:text-gray-300'>React</p>
            <p className='text-gray-800 py-1 dark:text-gray-300'>GatsbyJS</p>
            <p className='text-gray-800 py-1 dark:text-gray-300'>NextJS</p>
            <p className='text-gray-800 py-1 dark:text-gray-300'>Vue</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-gray-200'>Portfolio</h3>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>
            <a href='https://www.placy.city/' target='_blank' rel='noopener noreferrer'>
            <Image src={web1} className='rounded-lg object-cover' alt='Placy'/>
            </a>
          </div>
          <div className='basis-1/3 flex-1'>
            <a href='https://studio-true.net/' target='_blank' rel='noopener noreferrer'>
            <Image src={web2} className='rounded-lg object-cover'  alt='Studio TRUE'/>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
