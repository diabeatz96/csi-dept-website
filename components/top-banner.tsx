'use client';
import { X } from "lucide-react";
import { useState } from "react";

export default function TopBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-blue-200/50 text-[#1e1e1e] py-3 px-4 text-sm font-medium relative z-50">
            <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
                <span className="font-bold mr-2">Spring 2026 Registration Open</span> |
                <span className="ml-2">Apply by December 15th to secure your spot in the program.</span>
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-black/5 rounded-full"
            >
                <X size={16} />
            </button>
        </div>
    );
};