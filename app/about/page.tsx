'use client';

import Breadcrumb from '@/components/Breadcrumb';
import Story from '@/app/about/_components/Story';

export default function AboutPage() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about', isActive: true },
    ];

    return (
        <main className="bg-off-white dark:bg-black/5 min-h-screen">
            {/* Header / Breadcrumb Section */}
            <section className="bg-white dark:bg-black/10 py-16 px-6 md:px-10 border-b border-[#e7f1f3] dark:border-white/10">
                <div className="max-w-[1440px] mx-auto">
                    <Breadcrumb
                        items={breadcrumbItems}
                        className="mb-4"
                    />
                    <h1 className="text-5xl font-serif italic tracking-tight">About Us</h1>
                </div>
            </section>

            {/* Core Content Container */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 space-y-32">
                {/* Story Section */}
                <Story />
            </section>
        </main>
    );
}
