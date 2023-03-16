import React from 'react';
import MyPict from '../assets/mypict.jpg';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
    return (
    <div name="home"
    className='h-screen w-full bg-gradient-to-b from-blue-100 to-blue-100'
    >
        <div className='max-w-screen-lg mx-auto flex flex-row gap-x-20
        items-center justify-center h-full px-4 text-blue-400'
        >
            <div>
                <h2>Ini Kia lohhhhhh</h2>
                <div className=''>
                    Aku adalah anak gembala
                    <br/>
                    Kia apakah anak yang multitalenta?
                    <br/>
                    Oh tentu iya, karena kia sangat keren dan kece(❁´◡`❁)
                    <br/>
                    Yayyyyyy
                </div>

                <div>
                    <button>
                        Portofolio
                        <span>
                        <MdKeyboardArrowRight />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={MyPict} alt="my profile" className='rounded-2xl mx-auto w-[500px] h-[500px] object-cover md:w-full'/>
            </div>
        </div>
    </div>
    );
};

export default Home;