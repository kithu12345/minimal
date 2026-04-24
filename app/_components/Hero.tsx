import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            <div className="relative h-[70vh] lg:h-auto overflow-hidden">
                <Image
                    alt="Editorial model in motion"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtguZAV7TBALXLtTufILyZZSf6xZS7-FAWar0pFGdHw81JRdTFDvsVNwGzi57CpHS1cOkvWi4N5Sb1nr_F7PjKkgfe4nu5ZF6M32Zd5pQ5kiMdMICAOy9lkvnmfRFo5A1Jl_zY9CGNLa2Mvbmmkqv3o_rIttcvyZf1yTFnxEbTUZgFRJNHfWho98bcNGsphyVGdmUGCdBuLLmPMwm-IDq7YHN5Uw-16SYW2p4w46XYxFrY6t0EOmGfoL0GS3nMJjcz6O6F5x6VySzE"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
            <div className="flex flex-col justify-center px-8 lg:px-24 py-16 bg-off-white">
                <div className="max-w-xl">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-brand-teal font-bold mb-6">
                        Fall Winter 2024
                    </p>
                    <h1 className="text-soft-charcoal font-serif text-6xl md:text-8xl leading-[0.9] mb-8">
                        AUTUMN <br />REDEFINED
                    </h1>
                    <p className="text-soft-charcoal/60 text-lg md:text-xl font-light tracking-wide leading-relaxed mb-12">
                        A dialogue between architecture and anatomy. Exploring the boundaries of movement
                        through tailored silhouettes and premium fibers.
                    </p>
                    <div className="relative inline-block">
                        <button className="px-12 py-5 bg-brand-teal text-white text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-teal/90 transition-all shadow-xl shadow-brand-teal/20">
                            Shop the Collection
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;