import React from 'react'
import heroImg from '../../assets/images/hero.svg'
import CountUp from 'react-countup'
import '../UI/Hero.css'
const Hero = () => {
  return (
    <section className="pt-0" id="about">
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* =========== hero left content ========== */}
                <div className='w-full md:basis-1/2'>
                    <h5 data-aos='fade-right' data-aos-duration="1500" className='text-headingColor font-[600] text-[16px]'> 
                    Hello Welcome </h5>
                    <h1 data-aos='fade-up'
                    data-aos-duration="1500"
                    className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
                    >SimpleStack AI <br /> AI Automation Agency</h1>

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
                { /* =============== Hero Img =============== */}
                { /* =============== Hero Img End=============== */}

            </div>
        </div>
    </section>
  )
}

export default Hero
