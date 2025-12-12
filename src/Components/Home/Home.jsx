// // src/Components/Home/Home.jsx
// import React, { useEffect, useState } from "react";
import React  from "react";

// import stBanner from "../Images/stBanner.jpg";
// import ndBanner from "../Images/ndBanner.jpg";
// import thirdImage from "../Images/thirdImage.png";
// import FourthBanner from "../Images/FourthBanner.jpg";

// const images = [stBanner, ndBanner, thirdImage, FourthBanner];

const Home = () => {
    return (
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // ⏱️ Slow down the slider (now every 5 seconds)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // 5 seconds per slide

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-[700px] overflow-hidden relative">
//       {/* Image Slider */}
//       <div
//         className="flex transition-transform duration-[1500ms] ease-in-out"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           width: `${images.length * 100}%`,
//         }}
//       >
//        {images.map((img, index) => (
//   <img
//     key={index}
//     src={img}
//     alt={`Slide ${index}`}
//     className="w-full flex-shrink-0 object-cover h-[700px]"
//   />
// ))}

//       </div>

    // </div>

    <div>

<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Your Trusted Partner for College & Gonvernment Documents</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Apply Online for Cast, Income, and Other Certificates Easily.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="/Service" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="/About" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>
 {/* //Search bar  */}
 {/* <div className=""> 
    <input type="text" placeholder="search" className="w-[200px] sm:w-[200px]
    group-hover:w-[300px] transition-all duration-300 rounded-full border 
    border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-yellow-500" />
 </div> */}
 <div>
    
</div>

{/* slider */}
{/* <div id="custom-controls-gallery" class="relative w-full" data-carousel="slide">
   
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="Images/firstBanner.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="banner"/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/Images/secondBanner.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Banner"/>
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/Images/firstBanner.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Banner"/>
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/Images/secondBanner.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Banner"/>
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/Images/firstBanner.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Banner"/>
        </div>
    </div>
    <div class="flex justify-center items-center pt-4">
        <button type="button" class="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="flex justify-center items-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</div> */}
{/* 
<div className="flex"> 
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-2">
    <a href="#">
        <img class="rounded-t-lg" src="Images/firstBanner.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Government Documents</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Apply for various government-issued certificates like Caste, Domicile, Income, Birth, and Residence online — fast and securely.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */}
{/* second card */}
{/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-2">
    <a href="#">
        <img class="rounded-t-lg w-full" src="Images/secondBanner.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Investment & Insurence Services</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Access trusted investment plans and insurance policies designed to secure your future and maximize your financial growth.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */}

{/* thirdImage */}
{/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-2">
    <a href="#">
        <img class="rounded-t-lg w-full" src="Images/thirdBanner.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Power Security Services</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We provide trained and verified security guards for residential, commercial, and industrial premises.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */}

{/* FourthBanner */}
{/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-2">
    <a href="#">
        <img class="rounded-t-lg w-full" src="Images/fourthBanner.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Trusted Loan Services</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We help you find the right loan for every need — from education to business expansion. Fast approval, minimal paperwork, and secure digital processing.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div> */}



</div>

  );
};

export default Home;
