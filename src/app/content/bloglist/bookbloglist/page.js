'use client'

import React from 'react';
// import SVG from 'techblog/public/target-svgrepo-com.svg'
import { useRouter } from 'next/navigation';

const imgurl = "https://i.pinimg.com/564x/9e/4c/de/9e4cde48a911a1d8f9d86d3041d26370.jpg"
const altimg = "https://www.boredpanda.com/blog/wp-content/uploads/2023/09/1-6508031abf9c7__700.jpg"

export default function Page() {

    const router = useRouter();

    const textstylealt = "kumbh-sans-bold text-[72px] text-center transform transition-all ease-in-out hover:font-bold"

    return (

        <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20">

                <button type='button' className="absolute text-sm top-10 left-10 kumbh-sans p-2 rounded-2xl border-white border-[1px] hover:bg-white hover:text-[#03003f] transition-colors ease-linear hover:border-[#cb6ce6]" onClick={() => router.push('/')}>
                    BACK
                </button>

            <h1 style={{ color: '#8c52ff' }} className={`${textstylealt} mb-[100px]`}>Books</h1>

            <img
                src = {imgurl}
                // src="/home/pratiek/Downloads/Blog Website/techblog/public/herpderp.webp"
                alt="Description"
                className="w-[450px] h-auto object-fit rounded-lg"
                />

            <h2 className=" text-[100px] cedarville-cursive">Coming Soon</h2>
        </div>
)}