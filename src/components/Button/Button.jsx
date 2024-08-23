import React from 'react'
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link className='flex items-center gap-4 shadow-lg px-3 py-1 w-32 dark:bg-dark-blue-elements'
        to='/'
    >
        <MdKeyboardBackspace size={30} />Back
    </Link>
  )
}

export default Button