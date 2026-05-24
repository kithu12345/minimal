'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import type { Product } from '@/data/products';

interface ProductGridProps {
    products: Product[];
    currentPage: number;
    productsPerPage: number;
}

export default function ProductGrid({
    products,
    currentPage,
    productsPerPage,
}: ProductGridProps) {
    const [sortBy, setSortBy] = useState('Newest Arrivals');

    const startIndex = (currentPage - 1) * productsPerPage;
    const paginatedProducts = products.slice(
        startIndex,
        startIndex + productsPerPage
    );
    const totalProducts = products.length;
    const showingCount = paginatedProducts.length;
    const showingStart = totalProducts > 0 ? startIndex + 1 : 0;
    const showingEnd = startIndex + showingCount;

    return (
        <>
            {/* Results count + Sort */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#e7f1f3] dark:border-white/10">
                <p className="text-xs text-[#4e8b97] uppercase tracking-widest">
                    Showing {showingStart}-{showingEnd} of {totalProducts} products
                </p>
                <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-widest font-bold">
                        Sort By:
                    </span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-transparent border-none text-xs uppercase tracking-widest focus:ring-0 cursor-pointer py-0 pr-8"
                    >
                        <option>Newest Arrivals</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Recommended</option>
                    </select>
                </div>
            </div>

            {/* Product Grid */}
            {totalProducts === 0 ? (
                <div className="text-center py-20">
                    <p className="text-[#4e8b97] text-sm italic">No products found in this category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                    {paginatedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.name}
                            color={product.color}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
