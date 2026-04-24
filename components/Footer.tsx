import LogoIcon from './LogoIcon'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white dark:bg-black/20 border-t border-[#e7f1f3] dark:border-white/10 py-16 px-10">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                
                {/* Brand */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="size-6 text-primary">
                            <LogoIcon />
                        </div>
                        <h2 className="text-xl font-bold uppercase tracking-widest">Minimal</h2>
                    </div>
                    <p className="text-[#4e8b97] text-sm leading-relaxed">
                        Redefining modern apparel with a focus on simplicity, quality materials, and timeless silhouettes.
                    </p>
                    <div className="flex gap-4">
                        <a className="text-[#4e8b97] hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">social_leaderboard</span>
                        </a>
                        <a className="text-[#4e8b97] hover:text-primary transition-colors" href="#">
                            <span className="material-symbols-outlined">camera</span>
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
                    <ul className="space-y-4 text-sm text-[#4e8b97]">
                        <li><a className="hover:text-primary transition-colors" href="#">Shop All</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Women</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Men</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Collections</a></li>
                    </ul>
                </div>

                {/* Service */}
                <div>
                    <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Service</h4>
                    <ul className="space-y-4 text-sm text-[#4e8b97]">
                        <li><a className="hover:text-primary transition-colors" href="#">Shipping</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Returns</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Size Guide</a></li>
                        <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
                    <p className="text-sm text-[#4e8b97] mb-4">
                        Exclusives and new arrivals directly to your inbox.
                    </p>
                    <div className="flex gap-2">
                        <input
                            className="flex-1 bg-white dark:bg-white border-none px-4 text-sm focus:ring-2 focus:ring-primary/50"
                            placeholder="Email Address"
                            type="email"
                        />
                        <button className="px-6 py-3 bg-brand-teal text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-teal/80 transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-[#e7f1f3] dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#4e8b97]">
                <p>© {currentYear} Minimal Apparel. Crafted for the discerning.</p>
                <div className="flex gap-6">
                    <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                    <a className="hover:text-primary transition-colors" href="#">Terms</a>
                </div>
            </div>
        </footer>
    )
}