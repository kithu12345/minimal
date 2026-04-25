'use client';

import Breadcrumb from '@/components/Breadcrumb';
import Filter from '@/app/shop/_components/Filter';

export default function Shop() {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'All Collections', href: '/shop', isActive: true },
    ];

    return (
        <main>
            {/* Breadcrumb */}
            <section className="bg-white dark:bg-black/10 py-16 px-10 border-b border-[#e7f1f3] dark:border-white/10">
                <div className="max-w-[1440px] mx-auto">
                    <Breadcrumb
                        items={breadcrumbItems}
                        className="mb-4"
                    />
                    <h1 className="text-5xl font-serif italic tracking-tight">All Collections</h1>
                </div>
            </section>


            {/* Filter + Products */}
            <section className="max-w-[1440px] mx-auto px-10 py-12 flex gap-12">
                <aside className="w-1/5 shrink-0 hidden lg:block">
                    <Filter />
                </aside>

            </section>
        </main>
    );
}