'use client'

import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

import { useRouter } from 'next/navigation'; // Import useRouter


export default function BlogContent() {

    const router = useRouter();

    const img = "https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-superJumbo.jpg"

    const codeString = 
    `<div className='flex flex-row justify-start gap-10 mb-5 ruda text-xl'>
        <span style={{color: '#40cc31'}}>tag1</span>
        <span style={{color: '#40cc31'}}>tag2</span>
        <span style={{color: '#40cc31'}}>tag3</span>
    </div>`

    const highlightedCode = hljs.highlightAuto(codeString).value;

      useEffect(() => {
        const scrollProgress = document.getElementById('scroll-progress');
        const height =
          document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
        const updateScrollProgress = () => {
          const scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop;
          scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
        };
    
        window.addEventListener('scroll', updateScrollProgress);
        return () => window.removeEventListener('scroll', updateScrollProgress);
      }, []);

    return (

        <div>
            <div id="scroll-progress" className="fixed top-0 left-0 h-[1px] bg-[#cb6ce6] z-50"></div>
    
            <div className="grid grid-cols-[18%_5%_77%] justify-center min-h-screen p-8 pb-20 sm:p-20">
                
                <button type='button' className="absolute text-sm top-10 left-10 kumbh-sans p-2 rounded-2xl border-white border-[1px] hover:bg-white hover:text-[#03003f] transition-colors ease-linear hover:border-[#cb6ce6]" onClick={() => router.push('/')}>
                    BACK
                </button>
    
                {/* date and author infomation */}
                <div className="">
                    <div className="p-10 flex flex-col justify-evenly">
                        <div className="flex flex-col items-center justify-center mb-10">
                                <img
                                src={img}
                                alt="Description"
                                className="w-[150px] h-full object-cover rounded-full mb-5"
                                />
                                
                                <span className="ruda text-3xl text-left text-green-500 mb-20">Author Name</span>    
                        </div>
    
                            <span className="text-left kumbh-sans-bold text-xl text-gray-500">Date of publishing</span>
                            <span className="text-left kumbh-sans text-xl text-white mb-10">1st January, 2000</span>
    
                            <span className="text-left kumbh-sans-bold text-xl text-gray-500">Last edited on</span>
                            <span className="text-left kumbh-sans text-xl text-white">1st January, 2000</span>
                   </div>
                </div>
    
                <div className="bg-white h-full mx-10 w-[2px]"></div>
    
                {/* content -> title and shi  */}
                <div className="flex flex-col items-start p-10">
                    <span className="text-[50px] kumbh-sans-bold">Blog Title 1</span>
    
                    <div className='flex flex-row justify-start gap-10 mb-5 ruda text-xl'>
                        <span style={{color: '#40cc31'}}>tag1</span>
                        <span style={{color: '#40cc31'}}>tag2</span>
                        <span style={{color: '#40cc31'}}>tag3</span>
                    </div>
    
                    <div className="bg-gray-500 h-[1px] w-full mb-10"></div>
    
                    <div className="">
                        <span className="kumbh-sans text-lg">This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random.</span>
                        <span className="kumbh-sans text-lg">This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random.</span>
                        <div className="code rounded-2xl h-[200px] overflow-auto bg-black text-md ruda my-10 p-5 tracking-wide">
                            <div dangerouslySetInnerHTML={{ __html: highlightedCode }}/>
                        </div>
    
                        <span className="kumbh-sans text-lg">This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random.</span>
                        <span className="kumbh-sans text-lg">This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random.</span>
                        <span className="kumbh-sans text-lg">This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random.</span>
    
                        <span className="kumbh-sans text-lg">This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random.</span>
                        <span className="kumbh-sans text-lg">This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random.</span>
    
                        <span className="kumbh-sans text-lg">This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random.</span>
                        <span className="kumbh-sans text-lg">This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random.</span>
    
                        <span className="kumbh-sans text-lg">This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random.</span>
    
                    </div>
                </div>
            </div>
        </div>
    )
}