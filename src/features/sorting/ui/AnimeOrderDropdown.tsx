import { useState } from "react";
import type { SortingI } from "../model/types/SortingI";

export const SortDropdown = ({handleSelect,selected}: SortingI) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const options = [
        { id: 'popularity', label: 'Popularity' },
        { id: 'ranked', label: 'Ranked' },
        { id: 'name', label: 'Name' },
        { id: 'episodes ', label: 'Episodes ' },
    ];

    const handleSelectOption = (id: string) => {
        handleSelect(id)
        setIsOpen(false)
    }

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className={`cursor-pointer flex items-center gap-2 border-b outline-none focus:outline-none py-2 bg-transparent transition-colors
                    ${isOpen
                        ? "text-[var(--color-offwhite)] border-[var(--color-offwhite)]"
                        : "text-[var(--color-gray-2)] border-[var(--color-gray-2)]"
                    }`}
            >
                <span className="text-sm font-medium">
                    Sort By: {options.find(opt => opt.id === selected)?.label}
                </span>
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="absolute right-0 mt-1 w-full bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-20 overflow-hidden">
                        <div className="py-1">
                            {options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleSelectOption(option.id)}
                                    className={`cursor-pointer w-full text-left px-4 py-2 text-sm transition-colors ${
                                        selected === option.id
                                            ? 'bg-zinc-700 text-white font-medium'
                                            : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                                    }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};