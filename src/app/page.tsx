"use client";

import React from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
// import Image from "next/image";
import Link from "next/link";
import heroBackground from "../../public/brand-assets/hero-background.png"

export default function HomePage() {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Header */}
            <header className="flex justify-between items-center p-4 bg-black text-white rounded-b-3xl">
                <div className="text-2xl font-bold">
                    <span className="text-lime-400">J</span>obwhoo
                </div>
                <nav className="space-x-6 hidden md:flex">
                    <Link href="#">Post a Job</Link>
                    <Link href="#">Explore Jobs</Link>
                    <Link href="#">How it Works</Link>
                </nav>
                <div className="flex items-center space-x-3">
                    <select className="bg-black border border-gray-600 rounded-lg px-2 py-1">
                        <option>English</option>
                        <option>Greek</option>
                    </select>
                    <Button variant="outline" className="text-white border-white rounded-full px-4 py-2">
                        Sign In
                    </Button>
                    <Button className="bg-white text-black rounded-full px-4 py-2">Sign Up</Button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-white p-6 rounded-b-3xl overflow-hidden mt-4"
                     style={{
                         backgroundImage: `url(${heroBackground.src})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center"
                     }}
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
                            FIND THE <span className="text-lime-500">TALENT</span> SIGN UP & GET THE JOB DONE
                        </h1>
                        <p className="text-xl font-semibold text-gray-700">WE WILL HANDLE THAT</p>
                        <Button className="bg-lime-500 text-white rounded-full px-6 py-3">Sign Up for Contract</Button>
                    </div>
                    {/*<div className="flex-1">*/}
                    {/*     <Image src="/brand-assets/hero-background.png" alt="hero" width={500} height={500} className="rounded-3xl" />*/}
                    {/*</div>*/}
                </div>

                <div className="mt-6 flex flex-col md:flex-row gap-3 items-center justify-center">
                    <input
                        type="text"
                        placeholder="Find a job, talent or service"
                        className="border p-3 rounded-full w-72"
                    />
                    <select className="border p-3 rounded-full">
                        <option>Talent</option>
                        <option>Client</option>
                    </select>
                    <Button className="bg-black text-white rounded-full px-6 py-3">Search</Button>
                </div>
            </section>

            {/* Successful Contracts */}
            <section className="max-w-7xl mx-auto py-16">
                <h2 className="text-2xl font-bold text-center mb-10">
                    <span className="text-lime-500 text-3xl">•</span> SUCCESSFUL <span className="underline">CONTRACTS</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i} className="shadow-lg rounded-3xl overflow-hidden border border-gray-200">
                            <div className="p-6 space-y-4">
                                <p className="text-sm uppercase font-bold">Contract</p>
                                <h3 className="text-lg font-bold">Looking for Math Teacher</h3>
                                <p className="text-sm">Payment Type: Fixed Price</p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <p className="font-bold">Edward Smith</p>
                                            <p className="text-xs">Founder at MathTech</p>
                                            <p className="text-sm text-yellow-500">⭐ 5.0</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lime-500 font-bold">Talent</p>
                                        <p className="text-sm text-yellow-500">⭐ 4.7</p>
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed">
                                    We are looking for a teacher to provide one-on-one algebra and geometry tutoring.
                                    60+ minute sessions, twice weekly.
                                </p>

                                <div className="text-sm">
                                    <p><strong>Start Date:</strong> Jan 15, 2025</p>
                                    <p><strong>Status:</strong> Ongoing</p>
                                    <p><strong>Budget:</strong> $2000</p>
                                </div>

                                <p className="text-xs text-gray-500">
                                    Fixed-priced contract is under the protection of the payment system.
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-center mt-10 gap-6">
                    <Button variant="outline" className="rounded-full px-5 py-2 text-lg">{"<"}</Button>
                    <Button variant="outline" className="rounded-full px-5 py-2 text-lg">{">"}</Button>
                </div>
            </section>
        </div>
    );
}
