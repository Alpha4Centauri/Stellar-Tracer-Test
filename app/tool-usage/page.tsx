"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OrbitTracePage() {
    const [timePeriod, setTimePeriod] = useState("");

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
            {/* Navigation Bar */}
            <nav className="relative w-full flex justify-between items-center py-4 px-6 bg-gray-900/80 backdrop-blur-md border-b border-blue-500">
                <h1 className="text-xl font-semibold tracking-wide text-blue-400">Stellar Tracer</h1>
                <div className="space-x-6 flex items-center">
                    <Link href="/" className="hover:text-blue-300">Home</Link>
                    <Link href="/stellar-data" className="hover:text-blue-300">Stellar Data</Link>
                </div>
            </nav>

            {/* Time Period Selection (Now Comes First) */}
            <div className="flex flex-col items-center mt-6">
                <div className="flex flex-col items-center">
                    <label className="text-blue-300 mb-2">Enter Time Period:</label>
                    <input
                        type="number"
                        placeholder="e.g., -5000 for past, 5000 for future"
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                        className="bg-gray-800 text-white border border-blue-400 p-2 rounded-md w-64 text-center"
                    />
                    <p className="text-gray-400 text-sm mt-1">
                        Negative years go back in time, positive years go forward.
                    </p>
                </div>

                {/* Trace Orbit Button (Now Below the Input) */}
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">
                    Trace Orbit
                </button>
            </div>

            {/* Graphs Section */}
            <div className="flex flex-col items-center mt-8 space-y-8">
                {/* 2D Galactic Position */}
                <div className="bg-gray-800 p-4 rounded-lg border border-blue-400 w-full max-w-3xl">
                    <h3 className="text-blue-300 mb-2">2D Galactic Position</h3>
                    <Image
                        src="/placeholder-galactic-position.png"
                        alt="2D Galactic Position Placeholder"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>

                {/* Orbit Trace */}
                <div className="bg-gray-800 p-4 rounded-lg border border-blue-400 w-full max-w-3xl">
                    <h3 className="text-blue-300 mb-2">Orbit Trace</h3>
                    <Image
                        src="/placeholder-orbit-trace.png"
                        alt="Orbit Trace Placeholder"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Footer */}
            <footer className="relative text-center text-gray-400 mt-10">
                <p>© 2025 Stellar Tracer. All rights reserved.</p>
            </footer>
        </div>
    );
}