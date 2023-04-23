import React, { useState, useContext } from 'react'
import logo from '../../assets/images/shoppers-haven-logo.png'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthContext'

export default function Navbar() {
    const [current] = useState(false)
    const {setChange, change, user} = useContext(AuthContext)
    const navigate = useNavigate()
   
    const navigation = [
    { name: 'Home', href: '/', current: true }, 
    { name: 'About', href: '/about', current: false },
    ]

    function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    }

    function handleSignOut(e) {
        fetch("/logout",{
            method: "DELETE"
        })
        .then(response=>{
            // localStorage.setItem("jwt", null)
            localStorage.removeItem("jwt")
            setChange(change)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'LoggedOut successfully!',
                showConfirmButton: false,
                timer: 3000
              })
              navigate("/login")
        })
    }


  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800 fixed w-full z-20">
        {({ open }) => (
            <>
                <div className="mx-3 max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                            </Disclosure.Button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                            <img
                                className="block h-20 w-auto lg:hidden"
                                src={logo}
                                alt="Your Company"
                            />
                            <img
                                className="hidden h-20 w-auto lg:block"
                                src={logo}
                                alt="Your Company"
                            />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    style = {{textDecoration: "none"  }}
                                    href={item.href}
                                    className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                                ))}
                            </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                </Menu.Button>
                            </div>
                            <Disclosure.Button
                                as="a"
                                style = {{textDecoration: "none"}}
                                href='/login'
                                className={classNames(
                                    current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium'
                                )}
                                aria-current={current ? 'page' : undefined}
                                >
                                Login
                            </Disclosure.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                    <a
                                        href="hf#"
                                        className={`${classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} no-underline`}
                                    >
                                        Your Profile
                                    </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <a
                                        href="ln#"
                                        className={`${classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} no-underline`}
                                    >
                                        Settings
                                    </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                        href="#ln"
                                        className={`${classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} no-underline`}
                                        onClick={(e) => handleSignOut(e)}
                                    >
                                        Sign out
                                    </button>
                                    )}
                                </Menu.Item>
                                </Menu.Items>
                            </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Disclosure.Button
                        key={item.name}
                        as="a"
                        style = {{textDecoration: "none"}}
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        >
                        {item.name}
                        </Disclosure.Button>
                    ))}
                    </div>
                </Disclosure.Panel>
            </>
        )}
      </Disclosure>
    </div>
  )
}