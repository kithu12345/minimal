"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-off-white">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-serif font-bold text-soft-charcoal/5 select-none pointer-events-none whitespace-nowrap z-0">
                A / W 24
            </div>

            {/* Left Side: Image with Glass Overlay */}
            <div className="relative h-[60vh] lg:h-auto overflow-hidden group">
                <motion.div 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <Image
                        alt="Editorial model in motion"
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtguZAV7TBALXLtTufILyZZSf6xZS7-FAWar0pFGdHw81JRdTFDvsVNwGzi57CpHS1cOkvWi4N5Sb1nr_F7PjKkgfe4nu5ZF6M32Zd5pQ5kiMdMICAOy9lkvnmfRFo5A1Jl_zY9CGNLa2Mvbmmkqv3o_rIttcvyZf1yTFnxEbTUZgFRJNHfWho98bcNGsphyVGdmUGCdBuLLmPMwm-IDq7YHN5Uw-16SYW2p4w46XYxFrY6t0EOmGfoL0GS3nMJjcz6O6F5x6VySzE"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </motion.div>

                {/* Floating Glass Element */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="absolute bottom-8 right-8 lg:bottom-16 lg:right-[-4rem] z-20"
                >
                    <div className="glass-card p-6 flex items-center gap-6 shadow-2xl backdrop-blur-xl bg-white/10 border-white/20">
                        <button className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-soft-charcoal transition-colors group/btn cursor-pointer">
                            <Play className="w-4 h-4 ml-1 fill-current" />
                        </button>
                        <div className="text-white">
                            <p className="text-xs uppercase tracking-widest font-semibold mb-1">Behind the Scenes</p>
                            <p className="text-sm font-light opacity-80">Watch Campaign Video</p>
                        </div>
                    </div>
                </motion.div>
                
                {/* Decorative Lines */}
                <div className="absolute top-0 right-0 w-[1px] h-32 bg-white/30 hidden lg:block" />
                <div className="absolute bottom-0 left-8 w-32 h-[1px] bg-white/30 hidden lg:block" />
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col justify-center px-8 lg:px-24 py-16 z-10 relative">
                <div className="max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[1px] bg-brand-teal" />
                            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal font-bold">
                                Fall Winter 2024
                            </p>
                        </div>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-soft-charcoal font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 relative"
                    >
                        AUTUMN <br />
                        <span className="italic font-light text-soft-charcoal/80">REDEFINED</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-soft-charcoal/60 text-lg md:text-xl font-light tracking-wide leading-relaxed mb-12 border-l-2 border-brand-teal/30 pl-6"
                    >
                        A dialogue between architecture and anatomy. Exploring the boundaries of movement
                        through tailored silhouettes and premium fibers.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap items-center gap-8"
                    >
                        <button className="group relative px-10 py-5 bg-soft-charcoal text-white text-[10px] font-bold uppercase tracking-[0.3em] overflow-hidden cursor-pointer shadow-xl shadow-soft-charcoal/20">
                            <div className="absolute inset-0 bg-brand-teal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                            <span className="relative flex items-center gap-3">
                                Shop the Collection
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        
                        <a href="#" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-soft-charcoal hover:text-brand-teal transition-colors border-b border-transparent hover:border-brand-teal pb-1">
                            View Lookbook
                        </a>
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden lg:flex z-20"
            >
                <span className="text-[9px] uppercase tracking-widest text-soft-charcoal/50 [writing-mode:vertical-lr] rotate-180">Scroll</span>
                <div className="w-[1px] h-12 bg-soft-charcoal/20 overflow-hidden relative">
                    <motion.div 
                        animate={{ y: [-48, 48] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute top-0 w-full h-1/2 bg-brand-teal" 
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;