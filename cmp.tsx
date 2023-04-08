import { BsArrowRight } from 'react-icons/bs'

export const Button = ({ body, onClick }: { body: string, onClick: any }) => {
  return (
    <button className="flex
                   border
                   rounded-full
                   pr-5
                   pl-5
                   pt-1
                   items-center
                   pb-1
                   border-dark
                   dark:border-off-white
                   dark:hover:cursor-dark
                   group
                   ease-out
                   duration-300
                   cursor-link
                   font-normal
                   border-r-4
                   hover:text-off-white
                   hover:bg-dark
                   border-l-4
                   tracking-wide
                   hover:dark:cursor-link
                   w-fit">
      <div>{body}</div>
      <span className="ease-out
                       ml-2
                       duration-300">
        <BsArrowRight />
      </span>
    </button>
  )
}

export const Toggle = ({ value,
                  onLabel,
                  offLabel,
                  onClick }: { value: boolean,
                               onLabel: string,
                               offLabel: string,
                               onClick: any }) => {
  return (
    <label className="relative z-0 inline-flex items-center cursor-dark">
      <input type="checkbox" className="sr-only peer" onClick={onClick} />
      <div className="w-14
                  h-[25px]
                  bg-dark
                  dark:bg-off-white
                  rounded-full
                  peer
                  peer-checked:after:translate-x-full
                  peer-checked:after:border-white
                  after:content-['']
                  after:absolute
                  after:left-[4px]
                  after:top-[3px]
                  after:bg-white
                  dark:after:bg-dark
                  after:rounded-full
                  after:h-6
                  after:w-6
                  after:transition-all
                  peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-dark">
        { (value) ? onLabel : offLabel }
      </span>
    </label>
  )
}

import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

export const GeneralLink = ({ href, 
                      body, 
                      ext }: { href: string,
                               body: string,
                               ext: boolean }) => {

  const LinkBody = <div className="flex
                                   border-b
                                   border-black
                                   dark:border-off-white
                                   dark:hover:cursor-dark
                                   group
                                   ease-out
                                   items-center
                                   duration-300
                                   cursor-link
                                   hover:dark:cursor-link
                                   w-fit">
                     <div>{body}</div>
                     <span className="group-hover:-rotate-45
                                      ease-out
                                      ml-2
                                      duration-300">
                       <BsArrowUpRight />
                     </span>
                   </div>

  return (
    <div className="w-fit">
    {
      (ext)
        ? <a href={href} target="_blank" rel="noreferrer">{LinkBody}</a>
        : <Link href={href}>
            <a>
              {LinkBody}
            </a>
          </Link>
    }
    </div>
  )
}

import { useState } from 'react'

export const InputWithButton = ({ placeholder,
                           buttonBody,
                           onClick }: { placeholder: string,
                                        buttonBody: string,
                                        onClick: any }) => {

  const [value, setValue] = useState("")

  const handleChange = (e: any) => {
    setValue(e.target.value)
    if (e.target.value.length > 0) {
      (document.getElementById(placeholder) as HTMLInputElement).setCustomValidity("")
    }
  }

  const handleClick = () => {
    if (value.length === 0) {
      (document.getElementById(placeholder) as HTMLInputElement).setCustomValidity("invalid input")
    } else {
      onClick(value)
      setValue("")
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleClick()
    }
  }

  return (
    <div className="flex h-16 bg-dark w-fit rounded-md">
      <input className="border-dark
                        border-2
                        text-dark
                        p-2
                        bg-off-white
                        outline-0
                        ease-out
                        duration-500
                        invalid:border-red-600
                        rounded-md
                        "
             value={value}
             id={placeholder}
             onChange={handleChange}
             placeholder={placeholder}
             onKeyPress={handleKeyPress}
             type="text"
             />
      <button className="bg-dark
                         border-dark
                         border-2
                         rounded-md
                         text-off-white
                         h-100
                         cursor-light
                         p-2
                         pr-3
                         ease-out
                         hover:text-yeller
                         font-normal
                         tracking-wide
                         duration-500
                         "
              type="button"
              onClick={handleClick}
              >
        {buttonBody}
      </button>
    </div>
  )
}

import Link from 'next/link'

export const LinkInText = ({ href, 
                      body, 
                      ext }: { href: string,
                               body: string,
                               ext: boolean }) => {


  const LinkBody = <span className="border-b
                     hover:bg-black
                     hover:text-white
                     dark:hover:bg-off-white
                     dark:hover:text-dark
                     dark:border-off-white
                     hover:cursor-link
                     hover:dark:cursor-link
                     cursor-link
                     dark:cursor-link
                     ease-out
                     group
                     duration-300
                     border-black">
                    {body}
                   </span>

  return (
    <span>
    {
      (ext)
        ? <a href={href}
             target="_blank"
             className="cursor-dark
                       "
             rel="noreferrer">{LinkBody}</a>
        : <Link href={href}

          ><a>{LinkBody}</a></Link>
    }
    </span>
  )
}

export const PageContainer = ({ children }: { children: any }) => {
  return (
    <div className="w-full flex justify-center dark:bg-dark min-h-screen">
      <div className="sm:max-w-[1400px]
                      sm:w-9/12
                      w-11/12
                      min-h-screen
                      max-w-[95%]
                      mt-24
                      mb-24
                      relative">
        {children}
      </div>
    </div>
  )
}

export const TextInput = ({ setValue,
                     placeholder,
                     value, }: { setValue: any,
                                 placeholder: string,
                                 value: string }) => {

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }
  
  return (
    <input className="border-dark
                      border-2
                      rounded-md
                      p-2
                      bg-transparent
                      outline-0
                      ease-out
                      duration-500
                      "
           value={value}
           onChange={handleChange}
           placeholder={placeholder}
           />
  )
}

