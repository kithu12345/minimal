'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import LogoIcon from './LogoIcon'
import useNavigateTo from '@/hooks/useNavigateTo'

export default function Header() {
    const [cartCount] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)

    const navigateTo = useNavigateTo()
    const pathname = usePathname()

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Shop', path: '/shop' },
        { label: 'Women', path: '/women' },
        { label: 'Men', path: '/men' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ]

    const isActive = (path: string) => pathname === path

    if (pathname === '/login') return null

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
            <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">

                {/* LEFT SIDE */}
                <div className="flex items-center gap-6 lg:gap-12">

                    {/* LOGO */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="size-5 sm:size-6 text-primary">
                            <LogoIcon />
                        </div>

                        <button
                            type="button"
                            onClick={() => navigateTo('/', true)}
                            className="cursor-pointer text-lg sm:text-xl lg:text-2xl font-black tracking-tight uppercase text-black"
                        >
                            Minimal
                        </button>
                    </div>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                type="button"
                                onClick={() => navigateTo(item.path, true)}
                                className={`cursor-pointer text-sm font-semibold transition-colors duration-200 ${
                                    isActive(item.path)
                                        ? 'text-primary'
                                        : 'text-gray-700 hover:text-primary'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">

                    {/* SEARCH */}
                    <button className="hidden sm:flex items-center justify-center rounded-xl size-9 sm:size-10 bg-gray-100 hover:bg-gray-200 transition">
                        <span className="material-symbols-outlined text-[20px]">
                            search
                        </span>
                    </button>

                    {/* PROFILE */}
                    <button className="hidden sm:flex items-center justify-center rounded-xl size-9 sm:size-10 bg-gray-100 hover:bg-gray-200 transition">
                        <span className="material-symbols-outlined text-[20px]">
                            person
                        </span>
                    </button>

                    {/* CART */}
                    <button className="relative flex items-center justify-center rounded-xl size-9 sm:size-10 bg-gray-100 hover:bg-gray-200 transition">
                        <span className="material-symbols-outlined text-[20px]">
                            shopping_bag
                        </span>

                        <span className="absolute -top-1 -right-1 size-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                            {cartCount}
                        </span>
                    </button>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex items-center justify-center rounded-xl size-9 bg-gray-100 hover:bg-gray-200 transition"
                    >
                        <span className="material-symbols-outlined">
                            {menuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-6 pt-4 space-y-4 bg-white border-t border-gray-200">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            type="button"
                            onClick={() => {
                                setMenuOpen(false)
                                navigateTo(item.path, true)
                            }}
                            className={`block text-sm font-semibold transition-colors duration-200 ${
                                isActive(item.path)
                                    ? 'text-primary'
                                    : 'text-gray-700 hover:text-primary'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </header>
    )
}