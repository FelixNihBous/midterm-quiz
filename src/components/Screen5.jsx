import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/Screen5.css';

function Screen5() {
    return (
        <>
            <div className='container'>
                <div className='wrapper'>
                    <div className='text-wrapper'>
                        <h2>More Shortcuts</h2>
                        <h2 className='linear-color'>Effortless Navigation</h2>
                        <p>With an expanded range of shortcuts, navigating Paste is more efficient, empowering you to perform actions with ease.</p>
                    </div>
                    <img src="/more_shortcuts.png" alt="" />
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={{ clickable: true }} // Ensure pagination is clickable
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="keyboard_r.png" alt="Keyboard shortcut image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="keyboard_e.png" alt="Keyboard E shortcut image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="quick_paste.png" alt="Quick Paste shortcut image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="search_key.png" alt="Search Key shortcut image" />
                        </SwiperSlide>
                    </Swiper>
                    <img src="/image.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Screen5;
