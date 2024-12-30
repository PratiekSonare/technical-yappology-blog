import '../globals.css';

export default function LifeBlogCard({imgurl, blog_title, blog_date, tag1, tag2, tag3, paragraph}) {

    const textstyle = "kumbh-sans text-[42px] text-center transform hover:scale-110 transition-all ease-in-out hover:font-bold"

    return (
        <>
        <div className="grid grid-cols-[35%_65%] w-[1200px] border-white border-[1px] rounded-lg p-5 mb-10 bg-transparent relative overflow-hidden group select-none"> 
            <div className="flex items-center justify-center bg-transparent transition-transform duration-500 ease-in-out ml-5">
                <img
                src={imgurl}
                alt="Description"
                className="max-w-full h-auto object-cover rounded-lg"
                />
            </div>

            <div className="px-10 py-5 flex flex-col justify-start bg-transparent">

                <h1 className="text-3xl kumbh-sans-bold mb-1">{blog_title}</h1>
                <h3 className='kumbh-sans text-md align-bottom mb-3'>{blog_date}</h3>

                <div className='flex flex-row justify-start gap-10 mb-3 ruda text-xl'>
                    <span style={{color: '#40cc31'}}>{tag1}</span>
                    <span style={{color: '#40cc31'}}>{tag2}</span>
                    <span style={{color: '#40cc31'}}>{tag3}</span>
                </div>
                
                <p className="text-gray-400 kumbh-sans mb-5">{paragraph}</p>

                <p className='kumbh-sans text-sm hover:underline'>Read more ⇒</p>
                <div className='absolute inset-0 bg-[#040058] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-[-1]'></div>
            </div>
        </div>   

        </>


        
    )
}