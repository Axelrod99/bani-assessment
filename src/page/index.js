import React, { Component } from 'react';
import { useEffect } from 'react';
import shop from '../assets/shop.svg'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'
import social1 from '../assets/social1.svg'
import social2 from '../assets/social2.svg'
import social3 from '../assets/social3.svg'
import social4 from '../assets/social4.svg'
import axios from 'axios';


const HomePage = () => {




    return (
        <div className='bg-[#F5F6FA] flex w-full gap-4 px-7 text-[14px] py-7'>
            <div className='flex flex-col gap-8 w-full'>
                <div className='w-full flex-col p-2 bg-white'>
                    <div className='flex gap-4'>

                        <div className='flex items-center justify-center w-[52px] h-[32px] rounded-[20px] bg-[#F4F3FF]'>
                            <img alt='shop_icon' src={shop} />
                        </div>

                        <div className='flex flex-col gap-[8px]'>
                            <p>Billi Design</p>
                            <a href='#'>https://bani.africa/billidesign</a>

                            <div className='pb-4'>
                                <p>Payment description</p>

                                <p>Lorem ipsum dolor sit amet consectetur. Posuere elementum
                                    adipiscing a tincidunt in et nisi malesuada. Tellus nunc nibh
                                    tincidunt tristique pellentesque nulla morbi tortor.</p>
                            </div>

                        </div>
                    </div>

                    <div className='flex gap-[12px] border-t border-200 border-[#F4F3FF] py-4 '>
                        <img alt='socials' src={social1} />
                        <img alt='socials' src={social2} />
                        <img alt='socials' src={social3} />
                        <img alt='socials' src={social4} />
                    </div>
                </div>

                <div className='w-full flex flex-col gap-[17px] bg-white p-2'>
                    <p>Customer’s details</p>

                    <div className='flex flex-col gap-[16px] '>
                        <div className='flex flex-col gap-[17px]'>
                            <div>
                                <p>Your phone number*</p>
                            </div>

                            <div className='flex w-full gap-4'>
                                <input className='h-[34px] p-[4px]  w-full border-2 border-[#DFE8FC] rounded-[8px]' />
                                <input placeholder='09065012687' className='h-[34px] p-[4px] w-full border-2 border-[#DFE8FC] rounded-[8px]' />
                            </div>

                        </div>


                        <div className='flex flex-col gap-[17px]'>
                            <div>
                                <p>Your full name*</p>
                            </div>

                            <div className='flex w-full gap-4'>
                                <input placeholder='First name' className='h-[34px] p-[4px]  w-full border-2 border-[#DFE8FC] rounded-[8px]' />
                                <input placeholder='Last name' className='h-[34px] p-[4px] w-full border-2 border-[#DFE8FC] rounded-[8px]' />
                            </div>

                        </div>


                        <div className='flex flex-col gap-[17px]'>
                            <div>
                                <p>Email address*</p>
                            </div>

                            <div className='flex w-full gap-4'>
                                <input placeholder='e.g rodney@gmail.com' className='h-[34px] p-[4px]  w-full border-2 border-[#DFE8FC] rounded-[8px]' />
                            </div>

                        </div>


                        <div className='flex flex-col gap-[17px]'>
                            <div>
                                <p>Your message</p>
                            </div>

                            <div className='w-full'>
                                <textarea placeholder='Write a message here' className=' w-full border-2 border-[#DFE8FC] h-[104px] rounded-[8px] p-2' />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full'>

                <div className='bg-white p-2 flex flex-col gap-[34px]'>
                    <p>Payment for product</p>

                    <div className='flex justify-between'>
                        <p>Quantity</p>

                        <div className='flex gap-2'>
                            <img className='h-7' alt='shop_icon' src={plus} />
                            <input className='border border-2 border-[#DFE8FC] w-7' />
                            <img className='h-7' alt='shop_icon' src={minus} />
                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-[17px]'>
                        <p>Total</p>

                        <div className='w-full flex bg-white h-[34px]'>
                            <p className='bg-[#ECEBF4] p-1'>NGN</p>
                            <input className='w-full p-2 border-2 border-[#DFE8FC]' />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage
