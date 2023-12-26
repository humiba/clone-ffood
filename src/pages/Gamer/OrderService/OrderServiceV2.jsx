import React from 'react';
import { CategoriesV2, Search, ServicesV2 } from '../../../components';

export default function OrderServiceV2() {
  return (
    <div className='flex flex-col h-full w-full '>
      {/* Service name */}
      <div
        className='py-4 px-4 m-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
        style={{
          backgroundImage: `url('https://cdn.culvers.com/nativeapp/mobile-hero-default.jpg')`,
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h2 className='uppercase font-bold text-lg'>Dịch vụ ăn uống</h2>
        <p>Nóng hổi vừa thổi vừa chơi</p>
      </div>

      {/* Nap game */}
      {/* 
      <div className='flex items-center justify-between py-2 px-4 mx-3 mb-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-2 border-[#5b6274]'>
        <h2 className='text-center uppercase font-bold text-lg'>
          Nạp giờ chơi
        </h2>

        <div className='flex justify-center gap-5'>
          <button className='flex flex-col items-center bg-[#2A3249] hover:bg-[#2A3249]/80 py-2 px-5 rounded-md'>
            Nạp 10,000đ{' '}
            <span className='text-yellowColor font-bold'>10,000đ</span>
          </button>
          <button className='flex flex-col items-center bg-[#2A3249] hover:bg-[#2A3249]/80 py-2 px-5 rounded-md'>
            Nạp 100,000đ{' '}
            <span className='text-yellowColor font-bold'>100,000đ</span>
          </button>
          <button className='flex flex-col items-center bg-[#2A3249] hover:bg-[#2A3249]/80 py-2 px-5 rounded-md'>
            Nạp 200,000đ{' '}
            <span className='text-yellowColor font-bold'>200,000đ</span>
          </button>
          <button className='flex flex-col items-center bg-[#2A3249] hover:bg-[#2A3249]/80 py-2 px-5 rounded-md'>
            Nạp 500,000đ{' '}
            <span className='text-yellowColor font-bold'>500,000đ</span>
          </button>
          <button className='flex flex-col items-center bg-[#2A3249] hover:bg-[#2A3249]/80 py-2 px-5 rounded-md'>
            Tùy chọn{' '}
            <span className='text-yellowColor font-bold'>Tùy chọn</span>
          </button>
        </div>
      </div> 
      */}

      {/* services */}
      <div className='flex mx-3 overflow-hidden'>
        {/* Search bar + categories menu */}
        <div className='w-[30%] px-4'>
          {/* Search bar */}
          <Search />

          {/* Categories menu */}
          <CategoriesV2 />
        </div>

        {/* Services */}
        <ServicesV2 />
      </div>
    </div>
  );
}
