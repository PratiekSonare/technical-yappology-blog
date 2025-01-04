"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Technical from "./technical";
import './texteffect.css';
import LifeBlogCard from "./components/LifeBlogCard";
import TechBlogCard from "./components/TechBlogCard";
import BookBlogCard from "./components/BookBlogCard";
import TravelBlogCard from "./components/TravelBlogCard";
import FoodBlogCard from "./components/FoodBlogCard";
import { useRouter } from "next/navigation";
import Chatbot from "./components/Chatbot";

export default function Home() {

  const router = useRouter();
  const [index, setIndex] = useState(3);
  const [animation, setAnimation] = useState("");
  const [titleAnimation, setTitleAnimation] = useState("");
  
  const textstyle = "kumbh-sans text-[42px] text-center transform hover:scale-110 transition-all ease-in-out hover:font-bold"
  const textstylealt = "kumbh-sans-bold text-[72px] text-center transform transition-all ease-in-out hover:font-bold"
  const img = "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img2 = "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  const handleClickLeft = () => {
    setAnimation("slide-out-right");
    setTitleAnimation("slide-out-left");
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === 1 ? 5 : prevIndex - 1));
      setAnimation("slide-in-left");
      setTitleAnimation("slide-in-right");
    }, 300); // Duration matches animation
  };

  const handleClickRight = () => {
    setAnimation("slide-out-left");
    setTitleAnimation("slide-out-right");
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === 5 ? 1 : prevIndex + 1));
      setAnimation("slide-in-right");
      setTitleAnimation("slide-in-left");
    }, 300); // Duration matches animation
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      // Scroll Down: Move to the next index
      setAnimation('slide-out-left');
      setTitleAnimation('slide-out-right');
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex === 5 ? 1 : prevIndex + 1));
        setAnimation('slide-in-right');
        setTitleAnimation('slide-in-left');
      }, 300); // Duration matches animation
    } else {
      // Scroll Up: Move to the previous index
      setAnimation('slide-out-right');
      setTitleAnimation('slide-out-left');
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex === 1 ? 5 : prevIndex - 1));
        setAnimation('slide-in-left');
        setTitleAnimation('slide-in-right');
      }, 300); // Duration matches animation
    }
  };

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

  const handleLife = () => {
    setAnimation("slide-out-right");
    setTitleAnimation("slide-out-left");
    setTimeout(() => {
      setIndex(3);
      setAnimation("slide-in-left");
      setTitleAnimation("slide-in-right");
    }, 300); // Duration matches animation
  } 

  const handleTech = () => {
    setAnimation("slide-out-right");
    setTitleAnimation("slide-out-left");
    setTimeout(() => {
      setIndex(2);
      setAnimation("slide-in-left");
      setTitleAnimation("slide-in-right");
    }, 300); // Duration matches animation
  }
  
  const handleTravel = () => {
    setAnimation("slide-out-right");
    setTitleAnimation("slide-out-left");
    setTimeout(() => {
      setIndex(4);
      setAnimation("slide-in-left");
      setTitleAnimation("slide-in-right");
    }, 300); // Duration matches animation
  } 

  const handleBook = () => {
    setAnimation("slide-out-right");
    setTitleAnimation("slide-out-left");
    setTimeout(() => {
      setIndex(5);
      setAnimation("slide-in-left");
      setTitleAnimation("slide-in-right");
    }, 300); // Duration matches animation
  } 

  const handleFood = () => {
    setAnimation("slide-out-right");
    setTitleAnimation("slide-out-left");
    setTimeout(() => {
      setIndex(1);
      setAnimation("slide-in-left");
      setTitleAnimation("slide-in-right");
    }, 300); // Duration matches animation
  } 
  return (
    <div>

      <div id="scroll-progress" className="fixed top-0 left-0 h-1 bg-[#cb6ce6] z-50"></div>

      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">        
          <div className="flex flex-col justify-center items-center mt-[0px]">
            <div className="flex flex-col">
    
              {/* technical text effect */}
              <div class="ml-[150px] -mb-[30px]">
                  <h1 class="title">technical
                      <div class="aurora">
                      <div class="aurora__item"></div>
                      <div class="aurora__item"></div>
                      <div class="aurora__item"></div>
                      <div class="aurora__item"></div>
                      </div>
                  </h1>
              </div>
    
              {/* yappology text effect  */}
              <div class="playfair-display keyboard -mt-20 z-50">
                <span class="key">Y</span>
                <span class="key">a</span>
                <span class="key">p</span>
                <span class="key">p</span>
                <span class="key">o</span>
                <span class="key">l</span>
                <span class="key">o</span>
                <span class="key">g</span>
                <span class="key">y</span>
              </div>
            </div>
    
            <span className="cedarville-cursive text-[40px]">a journey</span>
          </div>
    
          <main className="flex flex-col items-center justify-center">
            
            {/* content slider and title  */}
            <div className="flex flex-col items-center justify-center mt-12" onWheel={handleScroll}>
              <div className="flex flex-col justify-center items-center -mb-10">
                {index === 3 ? <div className="bg-white rounded-full w-[10px] h-[10px] transition-all animate-pulse"></div> : <></>} 
                <button style={{ color: '#8c52ff' }} className={`${index === 3 ? 'kumbh-sans-bold' : ''} text-[48px] ${textstyle}`} onClick={handleLife}>Life</button>
              </div>
              
              {/* First Row of Texts */}
              <div style={{ color: '#cb6ce6' }} className="flex flex-row gap-[250px] -mb-10 ml-5">
              <div className="flex flex-col justify-center items-center">
                  {index === 2 ? <div className="bg-white rounded-full w-[10px] h-[10px] transition-all animate-pulse"></div> : <></>} 
                  <button className={`${index === 2 ? 'kumbh-sans-bold' : ''} ${textstyle}`} onClick={handleTech}>Tech</button>
              </div>
              <div className="flex flex-col justify-center items-center">
                  {index === 4 ? <div className="bg-white rounded-full w-[10px] h-[10px] transition-all animate-pulse"></div> : <></>} 
                  <button className={`${index === 4 ? 'kumbh-sans-bold' : ''} ${textstyle}`} onClick={handleTravel}>Travel</button>
                </div>
              </div>
              
              {/* Buttons in the Center */}
              <div className="flex flex-row gap-[1250px] mt-0 mb-10"> {/* Adjust gap as needed */}
                <button className={textstyle} onClick={handleClickLeft}> &lt; </button>
                <button className={textstyle} onClick={handleClickRight}> &gt; </button>
              </div>
              
              {/* Second Row of Texts */}
              <div style={{ color: '#ff66c4' }} className="flex flex-row gap-[550px] -mt-[75px] ml-5">
                <div className="flex flex-col justify-center items-center">
                    {index === 1 ? <div className="bg-white rounded-full w-[10px] h-[10px] transition-all animate-pulse"></div> : <></>} 
                    <button className={`${index === 1 ? 'kumbh-sans-bold' : ''} ${textstyle}`} onClick={handleFood}>Food</button>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    {index === 5 ? <div className="bg-white rounded-full w-[10px] h-[10px] transition-all animate-pulse"></div> : <></>} 
                    <button className={`${index === 5 ? 'kumbh-sans-bold' : ''} ${textstyle}`} onClick={handleBook}>Books</button>
                  </div>
              </div>
            </div>
    
    
            <div className="mt-[150px]">
    
              <div className={`flex flex-row justify-between items-center mb-5 transition-all 0.3s ease-in-out ${titleAnimation}`}>
                {index === 3 ? <h1 style={{ color: '#8c52ff' }} className={`${textstylealt}`}>Life</h1> : <></>}
                {index === 2 ? <h1 style={{ color: '#cb6ce6' }} className={`${textstylealt}`}>Tech</h1> : <></>}
                {index === 4 ? <h1 style={{ color: '#cb6ce6' }} className={`${textstylealt}`}>Travel</h1> : <></>}
                {index === 1 ? <h1 style={{ color: '#ff66c4' }} className={`${textstylealt}`}>Food</h1> : <></>}
                {index === 5 ? <h1 style={{ color: '#ff66c4' }} className={`${textstylealt}`}>Books</h1> : <></>}
    
                <div className="flex flex-row gap-5">
                  <div className="flex items-center"><button className={textstyle} onClick={handleClickLeft}> &lt; </button></div>
                  <div className="flex items-center"><button className={textstyle} onClick={handleClickRight}> &gt; </button></div>
                </div>
    
              </div>
    
              <div className={`flex flex-col justify-center items-center transition-all 0.3s ease-in-out ${animation}`}>
                {/* lifecards */}
                {index === 3 && (
                  <>

                  <div onClick={() => {router.push('/content/lifeblogs/lifeblog1')}}>
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
      
                  <LifeBlogCard 
                    imgurl={img2} 
                    blog_title={"Blog Content Title 2"} 
                    blog_date={"01/01/2000"} 
                    tag1={"AI"} 
                    tag2={"LLMs"} 
                    tag3={""} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                  />
    
                  <button onClick={() => {router.push('/content/bloglist/lifebloglist')}} className="text-xl kumbh-sans hover:underline">View more ⇒</button>
                </>
                )}
      
      
                {/* techcards */}
                {index === 2 && (
                <>
                  <TechBlogCard 
                    imgurl={img} 
                    blog_title={"TechBlogCard Blog Content Title 1"} 
                    blog_date={"01/01/2000"} 
                    tag1={"ML"} 
                    tag2={"DS"} 
                    tag3={"Visualization"} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                  />
      
                  <TechBlogCard 
                    imgurl={img2} 
                    blog_title={"Blog Content Title 2"} 
                    blog_date={"01/01/2000"} 
                    tag1={"AI"} 
                    tag2={"LLMs"} 
                    tag3={""} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                  />
    
                  <button onClick={() => {router.push('/content/bloglist/techbloglist')}} className="text-xl kumbh-sans hover:underline">View more ⇒</button>
                </>
                )}
      
      
                {/* travelcard */}
                {index == 4 && (
                <>
                  <TravelBlogCard 
                    imgurl={img} 
                    blog_title={"TravelBlogCard Blog Content Title 1"} 
                    blog_date={"01/01/2000"} 
                    tag1={"ML"} 
                    tag2={"DS"} 
                    tag3={"Visualization"} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                  />
      
                  <TravelBlogCard 
                    imgurl={img2} 
                    blog_title={"Blog Content Title 2"} 
                    blog_date={"01/01/2000"} 
                    tag1={"AI"} 
                    tag2={"LLMs"} 
                    tag3={""} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                  />
                  <button onClick={() => {router.push('/content/bloglist/travelbloglist')}} className="text-xl kumbh-sans hover:underline">View more ⇒</button>
    
                </>
                )}
      
      
                {/* foodcards */}
                {index === 1 && (
                <>
                  <FoodBlogCard 
                    imgurl={img} 
                    blog_title={"FoodBlogCard Blog Content Title 1"} 
                    blog_date={"01/01/2000"} 
                    tag1={"ML"} 
                    tag2={"DS"} 
                    tag3={"Visualization"} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                  />
      
                  <FoodBlogCard 
                    imgurl={img2} 
                    blog_title={"Blog Content Title 2"} 
                    blog_date={"01/01/2000"} 
                    tag1={"AI"} 
                    tag2={"LLMs"} 
                    tag3={""} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                  />
                  <button onClick={() => {router.push('/content/bloglist/foodbloglist')}} className="text-xl kumbh-sans hover:underline">View more ⇒</button>
    
                </>
                )}
      
      
                {/* bookcard */}
                {index === 5 && (
                <>
                  <BookBlogCard 
                    imgurl={img} 
                    blog_title={"BookBlogCard Blog Content Title 1"} 
                    blog_date={"01/01/2000"} 
                    tag1={"ML"} 
                    tag2={"DS"} 
                    tag3={"Visualization"} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                  />
      
                  <BookBlogCard 
                    imgurl={img2} 
                    blog_title={"Blog Content Title 2"} 
                    blog_date={"01/01/2000"} 
                    tag1={"AI"} 
                    tag2={"LLMs"} 
                    tag3={""} 
                    paragraph={"This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random. This blog is random, completely random, totally random."}
                  />
                  <button onClick={() => {router.push('/content/bloglist/bookbloglist')}} className="text-xl kumbh-sans hover:underline">View more ⇒</button>
    
                </>
                )}
              
            </div>
    
          </div>

          <div className="flex my-[100px]"><Chatbot /></div>
        </main>
      </div>
    </div>
  );
}
