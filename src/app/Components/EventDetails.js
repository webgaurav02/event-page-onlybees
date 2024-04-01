"use client";
import React, { useState, useEffect } from 'react';

import "./EventDetails.css";

import flyer from "../../../public/hoot_mobile.png"


import Image from "next/image";


const EventDetails = () => {

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    useEffect(() => {
        const Script = document.createElement("script");
        //id should be same as given to form element
        const Form = document.getElementById("paymentForm");
        Script.setAttribute(
            "src",
            "https://checkout.razorpay.com/v1/payment-button.js"
        );
        Script.setAttribute("data-payment_button_id", "pl_Nrt2TGD923RDhP");
        if (Form) {
            Form.appendChild(Script);
        }
    }, [mounted]);


    const [windowWidth, setWindowWidth] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set initial value
        updateWindowWidth();

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowWidth);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', updateWindowWidth);
    }, []);

    useEffect(() => {
        // Decide which image to use based on the window width
        const mobileBreakpoint = 768; // Example breakpoint for mobile devices
        if (windowWidth <= mobileBreakpoint) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [windowWidth]);




    return (
        // <div className="grid-container px-20 lg:mx-80 mt-20">
        // <div className="grid-item item-1 p-0 leading-8">
        //     <h2 className="text-right text-5xl">MIX N MATCH</h2>
        //     <p className="text-right font-light">The Yeastern Civilization</p>
        //     <h3 className="text-right text-xl text-[#00FF38]">Sat, Apr 6, 9:00 PM GMT +5:30</h3>
        //     <div className="flex gap-16 justify-end">
        //         <p>Tag</p>
        //         <p>Shillong</p>
        //     </div>
        // </div>

        // <div className="grid-item item-2 aspect-w-1 aspect-h-1">
        //     <Image
        //         src={flyer}
        //         loading="lazy"
        //         // layout="fill"
        //         objectFit="cover"
        //         objectPosition="center"
        //         alt="Event Flyer"
        //     />
        // </div>

        // <div className="grid-item item-3 p-4 rounded-2xl">
        //     <h3 className="text-xl font-bold leading-10">About</h3>
        //     <div className="overflow-scroll about-text">
        //         <p className="leading-6">
        //             Introducing Hoot Society - your dynamic event powerhouse in Northeast India. Driven by youth and fueled by determination, our team is dedicated to curating top-tier events for diverse audiences. With strong PR and networking skills, we're on a mission to revolutionize Meghalaya&apos;s nightlife scene, blending entertainment, music, and culture to create unforgettable experiences.
        //             Join us as we push boundaries and redefine event standards in Northeast India. Experience the magic of Hoot Society and let us elevate your events to new heights
        //             Introducing "Mix N Match" - an innovative event IP poised to revolutionize Meghalaya&apos;s nightlife scene with a vibrant fusion of Hip-Hop, R&B, and Afrobeats music. Prepare to be immersed in an unparalleled audiovisual journey.
        //             At the heart of our mission is bridging the gap between local talent and national luminaries. We strive to spotlight the rich pool of talent within Meghalaya while also featuring renowned artists from across the nation.
        //             Through collaboration and a dedicated platform, "Mix N Match" serves as a catalyst for artistic advancement and cultural exchange. With a steadfast commitment to excellence, every facet of the event is meticulously curated to ensure an unforgettable experience for all attendees.
        //         </p>
        //     </div>
        // </div>
        //     <div className="grid-item item-4">4</div>
        //     <div className="grid-item item-5">5</div>
        // </div>
        <div className="event-container">
            <div className="my-16 flex lg:flex-row flex-col-reverse gap-6">

                {/* LEFT */}
                <div className="flex flex-col left gap-6">

                    <div className="p-0 leading-8">
                        <h2 className="lg:ml-0 ml-3 lg:text-right text-left text-5xl font-bold mb-2">MIX N MATCH</h2>
                        <p className="lg:ml-0 ml-3 lg:text-right text-left font-light">The Yeastern Civilization</p>
                        {<h3 className="lg:ml-0 ml-3 lg:text-right text-left text-xl text-[#00FF38]">Sat, Apr 6, 9:00 PM <span className="font-light text-sm">{isMobile?<br />:""}GMT +5:30</span></h3>}
                        <div className="lg:ml-0 ml-3 flex lg:gap-16 gap-10 lg:justify-end">
                            <p>Tag</p>
                            <p>Shillong</p>
                        </div>
                    </div>

                    <div className="scroll-about-text">
                        <h3 className="lg:text-right ml-2 text-xl font-bold leading-10">About</h3>
                        <div className="overflow-scroll about-text p-4 rounded-2xl">
                            <p className="leading-7">
                                Introducing <span className="text-[#00FF38]">Hoot Society</span> - your dynamic event powerhouse in Northeast India. Driven by youth and fueled by determination, our team is dedicated to curating top-tier events for diverse audiences. With strong PR and networking skills, we&apos;re on a mission to revolutionize Meghalaya&apos;s nightlife scene, blending entertainment, music, and culture to create unforgettable experiences.
                                Join us as we push boundaries and redefine event standards in Northeast India. Experience the magic of Hoot Society and let us elevate your events to new heights
                                Introducing &quot;Mix N Match&quot; - an innovative event IP poised to revolutionize Meghalaya&apos;s nightlife scene with a vibrant fusion of Hip-Hop, R&B, and Afrobeats music. Prepare to be immersed in an unparalleled audiovisual journey.
                                At the heart of our mission is bridging the gap between local talent and national luminaries. We strive to spotlight the rich pool of talent within Meghalaya while also featuring renowned artists from across the nation.
                                Through collaboration and a dedicated platform, &quot;Mix N Match&quot; serves as a catalyst for artistic advancement and cultural exchange. With a steadfast commitment to excellence, every facet of the event is meticulously curated to ensure an unforgettable experience for all attendees.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col right gap-6">

                    <div className="flyer aspect-w-1 aspect-h-1">
                        <Image
                            src={flyer}
                            loading="lazy"
                            // layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            alt="Event Flyer"
                        />
                    </div>

                    <div className="btn-container flex lg:flex-row flex-col p-7 lg:gap-10 gap-5 bg-[#1e1e1e] justify-center rounded-3xl">
                        <div className="leading-0 price">
                            <p className="font-semibold lg:text-[0.6rem] text-[0.8rem] lg:ml-0 ml-2">STARTING</p>
                            <p className="font-semibold lg:text-4xl text-6xl">499</p>
                        </div>
                        <div className='bg-[#00FF38] pt-2 pb-0 px-4 rounded-full btn-inner-container'>
                            {mounted ? <form id="paymentForm"></form> : <p className='text-center font-bold py-3 px-6 text-black'>loading....</p>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EventDetails