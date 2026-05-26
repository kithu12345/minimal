"use client";

import { Sidebar } from "@/components/Sidebar";
import { motion } from "framer-motion";

export default function SettingsPage() {
    return (
        <main className="max-w-7xl mx-auto flex min-h-screen bg-off-white">
            <Sidebar />

            <section className="flex-1 py-20 px-10 md:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="space-y-10">
                        <header className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center gap-4"
                            >
                                <span className="w-8 h-[1px] bg-brand-teal" />
                                <span className="text-[11px] uppercase tracking-[0.4em] text-brand-teal font-bold">
                                    Account Preferences
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-5xl md:text-4xl font-serif leading-tight text-zinc-900"
                            >
                                My{" "}
                                <span className="italic font-normal text-brand-teal">
                                    Settings
                                </span>
                            </motion.h1>
                        </header>

                        <div className="bg-white border border-[#e7f1f3] rounded-lg p-8 space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-lg font-serif">Notifications</h3>
                                <p className="text-sm text-zinc-500">Manage your email and push notification preferences.</p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-serif">Privacy</h3>
                                <p className="text-sm text-zinc-500">Control who can see your profile and activity.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
