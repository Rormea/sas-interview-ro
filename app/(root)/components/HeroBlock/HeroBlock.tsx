"use client";

import { TypeAnimation } from "react-type-animation";
import {Sparkles} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";




export  function HeroBlock() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen">
        <div className="px-4 py-20 mx-auto container">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-center flex flex-col items-center gap-3">
                Practice real interviews in
                <span className="inline-block bg-indigo-500 text-white shadow-[0_0_20px_#6366f1] px-6 py-2 rounded-xl">
                    <TypeAnimation
                        sequence={[
                            1000,
                            'Frontend 🚀',
                            1000,
                            'Backend   💻',
                            1000,
                            'Fullstack 🦄',
                            1000,
                            'Mobile    📱',
                            1000,
                            'DevOps    ⌨️',
                            1000,
                            'Data      📊',
                        ]}
                        wrapper="span"
                        speed={70}
                        className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-center inline-block"
                        repeat={Infinity}
                    />
                   {/*  <Sparkles className="inline-block ml-2 text-yellow-300 animate-pulse"/> */}
                </span>
            </h1>
            <p className="text-indigo-100 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed text-center">
                Prepare for you next job with  realistic interview simulations and actionable feedback.
            </p>

            <div className="flex items-center justify-center pb-5">
                <Button 
                className="bg-purple-600 text-white rounded-lg px-20 py-6 text-lg font-semibold
                shadow-lg transition duration-300 ease-in-out asChild hover:bg-purple-700 hover:scale-105
                flex items-center group"
                >

                    <Link href="/dashboard">
                        <Sparkles className="group-hover:rotate-12 transition-transform inline-block mr-2"/> 
                        Start Practicing Now
                    </Link>
                </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-slate-200 justify-center">
                <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"/>
                            5+ interview types
                </div>

                <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"/>
                            No credit card required
                </div>
                <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"/>
                            Instant feedback and detailed reports
                </div>
            </div>

        </div>
    </section>
  )
}
