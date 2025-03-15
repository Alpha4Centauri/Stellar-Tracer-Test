"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function StellarDataPage() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center p-8">
            {/* Navigation Bar */}
            <nav className="relative w-full flex justify-between items-center py-4 px-6 bg-gray-900/80 backdrop-blur-md border-b border-blue-500">
                <h1 className="text-xl font-semibold tracking-wide text-blue-400">Stellar Tracer</h1>
                <div className="space-x-6 flex items-center">
                    <Link href="/" className="hover:text-blue-300">Home</Link>
                    <Link href="/orbit-trace" className="hover:text-blue-300">Orbit Tracing</Link>
                </div>
            </nav>

            {/* Stellar Parameter Input Section */}
            <section className="bg-gray-900/80 p-6 rounded-lg w-full max-w-3xl shadow-xl mt-8 backdrop-blur-md border border-blue-500">
                <h2 className="text-lg font-semibold text-blue-300 mb-4">Enter Stellar Parameters</h2>
                <div className="grid grid-cols-2 gap-4">
                    {["RA", "DEC", "Parallax", "pmra", "pmddec", "RV", "Gmag", "BP-RP", "phot_g_mean_mag"].map((label) => (
                        <input
                            key={label}
                            type="text"
                            placeholder={label}
                            className="bg-gray-800 text-white placeholder-gray-400 border border-blue-400 focus:ring-blue-500 p-2 rounded-md w-full"
                        />
                    ))}
                </div>
            </section>

            {/* Hertzsprung-Russell Diagram */}
            <div className="bg-gray-800 p-4 rounded-lg border border-blue-400 w-full max-w-3xl mt-8">
                <h3 className="text-blue-300 mb-2">Hertzsprung-Russell Diagram</h3>
                <Image
                    src="/placeholder-hr-diagram.png"
                    alt="HR Diagram Placeholder"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                />
            </div>

            {/* Additional Image Below HR Diagram with Hover Popup */}
            <div className="relative bg-gray-800 p-4 rounded-lg border border-blue-400 w-full max-w-3xl mt-8">
                <h3 className="text-blue-300 mb-2">Additional Data Visualization</h3>

                {/* Image Container with Hover Effect */}
                <div
                    className="relative flex justify-center"
                    onMouseEnter={() => setShowPopup(true)}
                    onMouseLeave={() => setShowPopup(false)}
                >
                    <Image
                        src="/placeholder-extra-diagram.png"
                        alt="Additional Data Placeholder"
                        width={600}
                        height={400}
                        className="w-full h-auto"
                    />

                    {/* Popup Tooltip (Appears to the Right) */}
                    {showPopup && (
                        <div className="absolute top-1/2 left-full ml-4 w-64 p-4 bg-gray-900 border border-blue-400 rounded-lg shadow-lg transform -translate-y-1/2">
                            <h4 className="text-blue-300 text-lg font-semibold">Star Properties</h4>
                            <p className="text-gray-300 text-sm mt-2">RA: 12.345°</p>
                            <p className="text-gray-300 text-sm">DEC: -45.678°</p>
                            <p className="text-gray-300 text-sm">Parallax: 3.21 mas</p>
                            <p className="text-gray-300 text-sm">pmra: 5.67 mas/yr</p>
                            <p className="text-gray-300 text-sm">pmddec: -4.32 mas/yr</p>
                            <p className="text-gray-300 text-sm">RV: 25.4 km/s</p>
                            <p className="text-gray-300 text-sm">Gmag: 14.2</p>
                            <p className="text-gray-300 text-sm">BP-RP: 1.3</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="relative text-center text-gray-400 mt-10">
                <p>© 2025 Stellar Tracer. All rights reserved.</p>
            </footer>
        </div>
    );
}