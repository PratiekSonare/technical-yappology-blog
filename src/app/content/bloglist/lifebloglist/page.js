'use client'

import LifeBlogCard from "@/app/components/LifeBlogCard"
import { useRouter } from "next/navigation";

const img = "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img2 = "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Page() {

    const router = useRouter();
    const textstylealt = "kumbh-sans-bold text-[72px] text-center transform transition-all ease-in-out hover:font-bold"

    return (

        <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-10 sm:p-20">
            
            <button type='button' className="absolute text-sm top-10 left-10 kumbh-sans p-2 rounded-2xl border-white border-[1px] hover:bg-white hover:text-[#03003f] transition-colors ease-linear hover:border-[#cb6ce6]" onClick={() => router.push('/')}>
                    BACK
            </button>

            <h1 style={{ color: '#8c52ff' }} className={`${textstylealt}`}>Life</h1>
            <h2 className=" text-3xl cedarville-cursive -mt-10">it is what it is.</h2>
            
            <>
                <div className="-mb-10" onClick={('')}>
                    <LifeBlogCard 
                        imgurl={img} 
                        blog_title={"LifeBlogCard Blog Content Title 1"} 
                        blog_date={"01/01/2000"} 
                        tag1={"ML"} 
                        tag2={"DS"} 
                        tag3={"Visualization"} 
                        paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                    />
                </div>

                <div className="-mb-10" onClick={('')}>
                    <LifeBlogCard 
                    imgurl={img2} 
                    blog_title={"Blog Content Title 2"} 
                    blog_date={"01/01/2000"} 
                    tag1={"AI"} 
                    tag2={"LLMs"} 
                    tag3={""} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                    />
                </div>

                <div className="-mb-10" onClick={('')}>
                    <LifeBlogCard 
                    imgurl={img2} 
                    blog_title={"Blog Content Title 2"} 
                    blog_date={"01/01/2000"} 
                    tag1={"AI"} 
                    tag2={"LLMs"} 
                    tag3={""} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                    />
                </div>

                <div className="-mb-10" onClick={('')}>
                    <LifeBlogCard 
                    imgurl={img2} 
                    blog_title={"Blog Content Title 2"} 
                    blog_date={"01/01/2000"} 
                    tag1={"AI"} 
                    tag2={"LLMs"} 
                    tag3={""} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                    />
                </div>

                <div className="-mb-10" onClick={('')}>
                    <LifeBlogCard 
                    imgurl={img2} 
                    blog_title={"Blog Content Title 2"} 
                    blog_date={"01/01/2000"} 
                    tag1={"AI"} 
                    tag2={"LLMs"} 
                    tag3={""} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                    />
                </div>
            </>        
        </div>
)}