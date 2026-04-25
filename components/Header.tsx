'use client'

import { useState } from 'react'
import LogoIcon from './LogoIcon'
import useNavigateTo from '@/hooks/useNavigateTo'

export default function Header() {
    const [cartCount] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)
    const navigateTo = useNavigateTo()

    const navItems = [
        { label: 'Shop', path: '/shop' },
        { label: 'Collections', path: '/collections' },
        { label: 'Women', path: '/women' },
        { label: 'Men', path: '/men' },
    ]

    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#e7f1f3] dark:border-white/10">
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
                            className="cursor-pointer text-lg sm:text-xl lg:text-2xl font-black tracking-tight uppercase"
                            onClick={() => navigateTo('/', true)}
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
                                className="cursor-pointer text-sm font-semibold hover:text-primary"
                                onClick={() => navigateTo(item.path, true)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                    
                    {/* ICONS */}
                    <button className="hidden sm:flex items-center justify-center rounded-lg size-9 sm:size-10 bg-[#e7f1f3] dark:bg-white/10 hover:bg-[#d0e3e7] dark:hover:bg-white/20 transition">
                        <span className="material-symbols-outlined">search</span>
                    </button>

                    <button className="hidden sm:flex items-center justify-center rounded-lg size-9 sm:size-10 bg-[#e7f1f3] dark:bg-white/10 hover:bg-[#d0e3e7] dark:hover:bg-white/20 transition">
                        <span className="material-symbols-outlined">person</span>
                    </button>

                    {/* CART */}
                    <button className="relative flex items-center justify-center rounded-lg size-9 sm:size-10 bg-[#e7f1f3] dark:bg-white/10 hover:bg-[#d0e3e7] dark:hover:bg-white/20 transition">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        <span className="absolute -top-1 -right-1 size-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                            {cartCount}
                        </span>
                    </button>

                    {/* MOBILE MENU BUTTON */}
                    <button 
                        className="md:hidden flex items-center justify-center rounded-lg size-9 bg-[#e7f1f3] dark:bg-white/10"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="material-symbols-outlined">
                            {menuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="md:hidden px-6 pb-6 space-y-4 bg-background-light dark:bg-background-dark border-t border-[#e7f1f3] dark:border-white/10">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            type="button"
                            className="cursor-pointer block text-sm font-semibold"
                            onClick={() => {
                                setMenuOpen(false)
                                navigateTo(item.path, true)
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </header>
    )
}