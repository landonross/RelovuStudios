import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Profile', href: '/UserPage/Profile' },
    { name: 'Request Form', href: '/UserPage/RequestForm' },
    { name: 'Company', href: '#' },
]

export default function Header() {
    return (
        <div className="relative bg-gray-800 ">
            <div className="relative pt-1 pb-1 ">
                <Popover>
                    <div className="max-w-7xl mx-auto px-4 sm:p-4">
                        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <a href=".">
                                        <span className="sr-only">Workflow</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt=""
                                        />
                                    </a>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-100 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800">
                                            <span className="sr-only">Open main menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex md:space-x-10">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="font-medium text-gray-300 hover:text-mauveLight">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                                <span className="inline-flex rounded-md shadow">
                                    <a
                                        href="."
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-900 bg-coolGray-200 hover:bg-rose-500 hover:text-coolGray-200"
                                    >
                                        Log in
                                    </a>
                                </span>
                            </div>
                        </nav>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-md bg-gray-800 ring-1 ring-gray-900 ring-opacity-5 overflow-hidden">
                                <div className="px-5 pt-4 flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-coolGray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-200 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="px-2 pt-2 pb-3">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <a
                                    href="."
                                    className="block w-full px-5 py-3 text-center font-medium text-gray-200 bg-gray-900 hover:bg-rose-500"
                                >
                                    Log in
                                </a>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
        </div>
    )
}