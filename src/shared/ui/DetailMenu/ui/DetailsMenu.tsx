import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface TabsI {
    id: string,
    label: string | React.ReactNode
}

interface DetailMenuProops {
    tabs: TabsI[]
    children: (activeTab: string) => React.ReactNode
}

export const DetailsMenu = ({ tabs, children }: DetailMenuProops) => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="inline-block border-b border-[#332833] py-10">
            <nav className="inline-flex gap-8 border-b border-[#332833] relative">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`cursor-pointer relative py-4 text-md font-bold transition-colors hover:text-white ${activeTab === tab.id ? 'text-white' : 'text-[var(--color-gray-2)]'
                            }`}
                    >
                        {tab.label}

                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-[3px] bg-white"
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </nav>

            <div className="py-15">
                {children(activeTab)}
            </div>
        </div>
    );
}