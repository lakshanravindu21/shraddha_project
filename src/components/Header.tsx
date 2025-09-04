import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { MdCall } from 'react-icons/md'
import Link from "next/link";

const navigation = [
    { name: 'Home', href: '#home', current: true },
    { name: 'About Us', href: '#about', current: false },
    { name: 'Map', href: '#mps', current: false },
    { name: 'Contact Us', href: '#contact-us', current: false },
]

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

function classNames(...classes: (string | undefined | false | null)[]): string {
    return classes.filter(Boolean).join(' ');
}

const rightNavItemsDesign =
    <>
        <button className='font-[16px] flex text-white items-center py-2'>
            <MdCall className='me-1' /> (+1) 840 841 25 69
        </button>

        {/* Updated Contact Us button */}
        <Link href="/contact">
            <button className='bg-[#191D23] px-8 py-2 text-white rounded-[20px] font-[16px]'>
                Contact Us
            </button>
        </Link>
    </>

export default function Example() {
    return (
        <Disclosure
            as="nav"
            className="relative bg-transparent dark:bg-transparent "
        >
            <div className="mx-auto max-w-full">
                <div className="relative flex h-16 items-center justify-between align-middle">

                    <div className="flex flex-1 items-center sm:items-stretch justify-start my-auto">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="size-10 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10 me-4"
                            />

                            <h5 className='text-[32px] font-semibold text-white'>Logo</h5>
                        </div>
                        <div className="hidden sm:ml-6 lg:flex items-center">
                            <div className="flex gap-[34px] items-center">
                                {navigation.map((item) => (
                                    <div key={item.name} className="flex flex-col items-center">
                                        <a
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current
                                                    ? ''
                                                    : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                                'rounded-md py-2 font-medium text-[16px] text-white flex flex-col items-center',
                                            )}
                                        >
                                            {item.name}
                                            <span
                                                style={{
                                                    display: item.current ? 'block' : 'none',
                                                    width: '100%',
                                                    height: '2px',
                                                    backgroundColor: 'white',
                                                    marginTop: '4px',
                                                    borderRadius: '2px',
                                                }}
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=" inset-y-0 left-0 flex items-center justify-end md:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="hidden lg:flex justify-centerw gap-5 text-white items-center">
                        {rightNavItemsDesign}
                    </div>

                </div>
            </div>

            <DisclosurePanel className="lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col items-center justify-center">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current
                                    ? 'text-white font-semibold'
                                    : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium text-[16px]',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                    {rightNavItemsDesign}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
