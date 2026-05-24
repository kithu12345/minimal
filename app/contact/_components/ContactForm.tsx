'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, FileText, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

const categories = [
    { id: 'order', label: 'Order & Shipping' },
    { id: 'returns', label: 'Returns & Refund' },
    { id: 'product', label: 'Product Inquiries' },
    { id: 'technical', label: 'Technical Issues' },
    { id: 'general', label: 'General Inquiry' },
];

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('order');
    const [message, setMessage] = useState('');
    
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const tempErrors: { [key: string]: string } = {};
        if (!name.trim()) tempErrors.name = 'Name is required';
        if (!email.trim()) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = 'Please enter a valid email address';
        }
        if (!message.trim()) tempErrors.message = 'Message is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('submitting');

        // Simulate API network latency (1.5 seconds)
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Randomly succeed for mock simulation (always succeeds in this case)
        setStatus('success');
    };

    const handleReset = () => {
        setName('');
        setEmail('');
        setCategory('order');
        setMessage('');
        setStatus('idle');
        setErrors({});
    };

    // Helper for direct mail link fallback
    const mailtoUrl = `mailto:support@minimal.com?subject=[${categories.find(c => c.id === category)?.label}] Issue from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

    return (
        <div className="bg-white dark:bg-black/25 border border-[#e7f1f3] dark:border-white/10 p-8 sm:p-10 rounded-2xl shadow-xl shadow-soft-charcoal/5 relative overflow-hidden">
            <AnimatePresence mode="wait">
                {status !== 'success' ? (
                    <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                        noValidate
                    >
                        <div className="space-y-2">
                            <h3 className="text-2xl font-serif italic text-soft-charcoal dark:text-white">
                                Report an Issue
                            </h3>
                            <p className="text-xs text-[#4e8b97] dark:text-gray-400 font-light">
                                Fill out the details below. Our concierge support team will resolve your request shortly.
                            </p>
                        </div>

                        {/* Asymmetric fields grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Input */}
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider font-semibold text-soft-charcoal/80 dark:text-white/80 block">
                                    Your Name
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4e8b97]/60 dark:text-gray-500">
                                        <User className="size-4" />
                                    </span>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Alexander..."
                                        className={`w-full bg-[#f8f8f7] dark:bg-white/5 border px-11 py-3.5 text-sm rounded-lg focus:outline-none transition-all duration-300
                                            ${errors.name 
                                                ? 'border-red-400 focus:ring-1 focus:ring-red-400/50' 
                                                : 'border-transparent focus:border-brand-teal focus:bg-white dark:focus:bg-black/30 focus:ring-1 focus:ring-brand-teal/20'
                                            }`}
                                    />
                                </div>
                                {errors.name && (
                                    <p className="text-xs text-red-500 font-medium">{errors.name}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-wider font-semibold text-soft-charcoal/80 dark:text-white/80 block">
                                    Your Email
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4e8b97]/60 dark:text-gray-500">
                                        <Mail className="size-4" />
                                    </span>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="alexander@domain.com"
                                        className={`w-full bg-[#f8f8f7] dark:bg-white/5 border px-11 py-3.5 text-sm rounded-lg focus:outline-none transition-all duration-300
                                            ${errors.email 
                                                ? 'border-red-400 focus:ring-1 focus:ring-red-400/50' 
                                                : 'border-transparent focus:border-brand-teal focus:bg-white dark:focus:bg-black/30 focus:ring-1 focus:ring-brand-teal/20'
                                            }`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-xs text-red-500 font-medium">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        {/* Category Selector */}
                        <div className="space-y-3">
                            <label className="text-xs uppercase tracking-wider font-semibold text-soft-charcoal/80 dark:text-white/80 block">
                                Select Issue Category
                            </label>
                            <div className="flex flex-wrap gap-2.5">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => setCategory(cat.id)}
                                        className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer
                                            ${category === cat.id
                                                ? 'bg-brand-teal border-brand-teal text-white shadow-md shadow-brand-teal/20'
                                                : 'bg-[#f8f8f7] dark:bg-white/5 border-[#e7f1f3] dark:border-white/10 text-soft-charcoal/70 dark:text-gray-300 hover:border-brand-teal/50 hover:text-brand-teal'
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-wider font-semibold text-soft-charcoal/80 dark:text-white/80 block">
                                Describe the Issue
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-4 text-[#4e8b97]/60 dark:text-gray-500">
                                    <FileText className="size-4" />
                                </span>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Please share details about your order, tracking number, or issue you need assistance with..."
                                    rows={5}
                                    className={`w-full bg-[#f8f8f7] dark:bg-white/5 border pl-11 pr-4 py-3.5 text-sm rounded-lg focus:outline-none transition-all duration-300 resize-none
                                        ${errors.message 
                                            ? 'border-red-400 focus:ring-1 focus:ring-red-400/50' 
                                            : 'border-transparent focus:border-brand-teal focus:bg-white dark:focus:bg-black/30 focus:ring-1 focus:ring-brand-teal/20'
                                        }`}
                                />
                            </div>
                            {errors.message && (
                                <p className="text-xs text-red-500 font-medium">{errors.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full relative group px-8 py-4 bg-soft-charcoal text-white text-[11px] font-bold uppercase tracking-[0.3em] overflow-hidden cursor-pointer shadow-xl shadow-soft-charcoal/10 rounded-lg disabled:opacity-85 disabled:cursor-not-allowed transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-brand-teal transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                            <span className="relative flex items-center justify-center gap-3">
                                {status === 'submitting' ? (
                                    <>
                                        <Loader2 className="size-4 animate-spin text-white" />
                                        Transmitting Concierge...
                                    </>
                                ) : (
                                    <>
                                        Submit Request
                                        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </span>
                        </button>
                    </motion.form>
                ) : (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="py-12 text-center space-y-8"
                    >
                        <div className="flex justify-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                                className="p-4 rounded-full bg-brand-teal/10 text-brand-teal"
                            >
                                <CheckCircle2 className="size-16 stroke-[1.5]" />
                            </motion.div>
                        </div>

                        <div className="space-y-3 max-w-md mx-auto">
                            <h3 className="text-3xl font-serif italic text-soft-charcoal dark:text-white">
                                Message Transmitted
                            </h3>
                            <p className="text-sm font-light text-[#4e8b97] dark:text-gray-400 leading-relaxed">
                                Thank you, <span className="font-semibold text-soft-charcoal dark:text-white">{name}</span>. Your issue ticket has been registered under category <span className="font-semibold text-brand-teal">{categories.find(c => c.id === category)?.label}</span>. We will follow up at <span className="font-semibold text-soft-charcoal dark:text-white">{email}</span> in a brief moment.
                            </p>
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href={mailtoUrl}
                                className="inline-flex items-center justify-center px-6 py-3 border border-brand-teal text-brand-teal text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-brand-teal hover:text-white transition-all duration-300"
                            >
                                Send Direct Email Copy
                            </a>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="px-6 py-3 bg-[#f8f8f7] dark:bg-white/5 border border-transparent text-soft-charcoal dark:text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-[#d0e3e7] dark:hover:bg-white/10 transition-all duration-300"
                            >
                                Submit Another Issue
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
