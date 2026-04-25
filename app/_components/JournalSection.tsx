import Image from 'next/image'

export default function JournalSection() {
    return (
        <section className="max-w-[1440px] mx-auto px-10 py-24 border-t border-[#e7f1f3] dark:border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="aspect-square bg-gray-100 overflow-hidden relative">
                    <Image
                        alt="The Minimal Journal"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQeDRtvXAYNLhe4WerX6gPWP3hZNaGzbCyQhDWpvewQT5NBdBQSgbTa-DfvrBu2VaHeyskcA9zzKhMrIn6QX6QyfJnVRf74pIiklGwnktxjGF-26imYY-7GkxB8zza86QMKg_VdNEgXYdb67ZIeJk6gvwjPA6mNnknK29vbOg1SLhKkmUEIDMhKp-7s67R5BJx5DtAnjjpWmvk9TaDe0jBrnviWTNMbD4m4capzhwFK40fMSl9Z93LwObV1D6o1SKioAHzZlC24Wzm"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-8">
                    <h2 className="text-sm font-bold text-brand-teal uppercase tracking-[0.3em]">The Journal</h2>
                    <p className="text-5xl font-serif italic leading-tight">The Philosophy of Quiet Luxury</p>
                    <p className="text-[#4e8b97] text-lg leading-relaxed">
                        Discover the stories behind our sustainable practices and the craftsmen who bring our minimalist visions to life. From fabric sourcing to timeless design, explore our journey.
                    </p>
                    <button className="px-10 py-4 border border-[#0e191b] dark:border-white text-[#0e191b] dark:text-white text-xs font-bold uppercase tracking-widest hover:bg-[#0e191b] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                        Read the Journal
                    </button>
                </div>
            </div>
        </section>
    )
}