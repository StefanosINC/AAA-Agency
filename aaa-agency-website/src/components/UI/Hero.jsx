    import React, { useState, useEffect } from 'react';
    import heroImg from '../../assets/images/muhib.png';
    import CountUp from 'react-countup';
    import '../UI/Hero.css';

    const Header = () => {
        const [additionalWords, setAdditionalWords] = useState([
        'AI Automation',
        '100 + Integrations',
        // Add more words here as needed
        ]);
    
        // Static word for the heading
        const staticWord = 'SimpleStack AI';
        const [currentWordIndex, setCurrentWordIndex] = useState(0);
        const [typingText, setTypingText] = useState(staticWord); // Initialize with the static word
    
        useEffect(() => {
        // Function to start the typewriter effect
        const startTyping = () => {
            const word = additionalWords[currentWordIndex];
            let charIndex = staticWord.length; // Start typing from the end of the static word
    
            const typingInterval = setInterval(() => {
            if (charIndex < staticWord.length + word.length) {
                setTypingText((prevText) => prevText + word.charAt(charIndex - staticWord.length));
                charIndex++;
            } else {
                // Delay before erasing the word
                setTimeout(() => eraseWord(), 1000);
                clearInterval(typingInterval);
            }
            }, 100); // Adjust typing speed here
        };
    
    
        // Function to erase the word
        const eraseWord = () => {
            let charIndex = typingText.length - 1;
    
            const erasingInterval = setInterval(() => {
            if (charIndex >= 0) {
                setTypingText((prevText) => prevText.slice(0, -1));
                charIndex--;
            } else {
                // Move to the next word
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % additionalWords.length);
                clearInterval(erasingInterval);
            }
            }, 50); // Adjust erasing speed here
        };
    
        // Start the typewriter effect
        startTyping();
    
        // Clean up the intervals on component unmount
        return () => {
            clearInterval(startTyping);
            clearInterval(eraseWord);
        };
        }, [currentWordIndex, additionalWords]);
    
    return (
        <section className="pt-0" id="about">
        <div className="container pt-14">
            <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
            {/* =========== hero left content ========== */}
            <div className="w-full md:basis-1/2">
                <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-headingColor font-[600] text-[16px]"
                >
                Hello Welcome
                </h5>
                <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
                >
                <br /> {typingText}
                </h1>   

                        <div data-aos="fade-up"
                        data-aos-duration="1800"
                        data-aos-delay="200"
                        className='flex items-center gap-6 mt-7'>
                            
                            <a href='#contact'>
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 darkPurple py-2 px-4 rounded-[8px]'>
                                    <i className="ri-mail-line"></i> Hire Us
                                </button>
                                </a>

                                <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>
                                    See Portfolio</a>
                                
                                </div>
                                <p 
                                data-aos="fade-left"
                                data-aos-duration="1500"
                                className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
                                >
                                    <span>
                                        <i class="ri-apps-2-line"></i>
                                    </span>
                                { /*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */ } 
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. 
                                Fusce vestibulum cursus sapien vel venenatis. sadfasdfasdfasdf
                                asdfasdfasdfasdsd
                                </p>
                            <div className="flex items-center gap-9 mt-14">
                                <span className="text-smallTextColor text-[15px] font-[600]">
                                    Follow us 
                                </span>

                                <span> 
                                    <a href='#linkedIn' className="text-smallTextColor text-[15px] font-[600]"> <i className="ri-linkedin-line"></i></a>
                                </span>
                                <span> 
                                    <a href='#instagram' className="text-smallTextColor text-[15px] font-[600]"> <i className="ri-instagram-line"></i></a>
                                </span>
                                <span> 
                                    <a href='#youtube' className="text-smallTextColor text-[15px] font-[600]"><i class="ri-discord-line"></i></a>
                                </span>
                    
                            </div>
                    </div>
                    { /* =========== hero left end ========== */}
                    { /* ========== Hero Img ========= */}
                    <div className ='basis-1/3 mt-10 sm:mt-0'>
                        <figure className="flex items-center justify-center">
                            <img src={heroImg} alt="" />
                        </figure>
                    </div>

                    {/*========== Hero Img End ============== */}


                    { /* =============== Hero content right =============== */}
                    <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={6} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[700] text-[18px]"> 
                            Years of experience</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={100} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[700] text-[18px]"> 
                            Sucess Rate</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={150} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[700] text-[18px]"> 
                            Happy clients</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={249} duration={2} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[700] text-[18px]"> 
                                Projects Completed</h4>
                        </div>
                    </div>
                    { /* =============== Hero content right End=============== */}
                
                </div>
            </div>
        </section>
    )
    }

    export default Header
