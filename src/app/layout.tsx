"use client";
import './globals.css'
import React from 'react';
import Home from './home';

export default function RootLayout() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <html className={darkMode ? 'dark' : ''} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </body>
    </html>
  )
}
