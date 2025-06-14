import Link from 'next/link'
import React from 'react'
import { HiOutlineMail } from "react-icons/hi";

const EmailSendMessage = () => {
  return (
    <Link href={'mailto:buddhikamadusanka2000@gmail.com'} className='bg-secondary px-10 py-3 font-poppins text-sm font-normal rounded-lg flex gap-2 items-center w-fit duration-150 hover:scale-110'>
        <div className='text-xl font-bold'>
            <HiOutlineMail />
        </div>
        Connect with me
    </Link>
  )
}

export default EmailSendMessage