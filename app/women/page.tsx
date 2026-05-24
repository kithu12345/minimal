'use client';

import { useState } from 'react';
import Pagination from '@/components/Pagination';
import Breadcrumb from '@/components/Breadcrumb';
import ProductGrid from '@/app/women/_components/ProductGrid';
import Filter from '@/app/women/_components/Filter';
import { allProducts } from '@/data/products';

const PRODUCTS_PER_PAGE = 6;

export default function WomenShop() {
    const [currentPage, setCurrentPage] = useState(1);

    // Filter products for women
    const womenProducts = allProducts.filter(
        (product) => product.gender === 'women' || product.gender === 'unisex'
    );

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Women', href: '/women', isActive: true },
    ];

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <main>
            {/* Breadcrumb */}
            <section className="bg-white dark:bg-black/10 py-16 px-10 border-b border-[#e7f1f3] dark:border-white/10">
                <div className="max-w-[1440px] mx-auto">
                    <Breadcrumb
                        items={breadcrumbItems}
                        className="mb-4"
                    />
                    <h1 className="text-5xl font-serif italic tracking-tight">Women</h1>
                </div>
            </section>

            {/* Filter + Products */}
            <section className="max-w-[1440px] mx-auto px-10 py-12 flex gap-12">
                <aside className="w-1/5 shrink-0 hidden lg:block">
                    <Filter />
                </aside>
                <div className="flex-1">
                    <ProductGrid
                        products={womenProducts}
                        currentPage={currentPage}
                        productsPerPage={PRODUCTS_PER_PAGE}
                    />
                    {womenProducts.length > PRODUCTS_PER_PAGE && (
                        <Pagination
                            currentPage={currentPage}
                            totalItems={womenProducts.length}
                            itemsPerPage={PRODUCTS_PER_PAGE}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            </section>
        </main>
    );
}
