'use client'
import useDarkMode from '../hooks/useDarkMode'
import React, { useState } from 'react'

const Nav = () => {
	const [darkTheme, setDarkTheme] = useDarkMode()
	const handleMode = () => setDarkTheme(!darkTheme)

	return (
		<div className='p-8 flex justify-between w-full dark:bg-black dark:text-white'>
			<div>Nav</div>
			<div onClick={handleMode}>{darkTheme ? 'Dark' : 'Light'}</div>
		</div>
	)
}

export default Nav
