import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sidebarItems } from '../../../utils/sidebarItems';

export default function LeftSidebar() {
  const DEFAULT_ITEM = sidebarItems[0].id;
  const [selectedItem, setSelectedItem] = useState(DEFAULT_ITEM);
  const navigate = useNavigate();

  return (
    <div className='sidebar w-[15%] relative'>
      <div className='mx-2 my-3'>
        <div className='flex flex-col items-center'>
          <img
            src='https://cdn.oneesports.gg/cdn-data/2023/03/LeagueofLegends_Faker_Hands.jpg'
            alt=''
            className='w-[100px] h-[100px] rounded-full mb-2 border-2 border-greenColor'
            onClick={() => navigate('/')}
          />
          <h2 className='font-bold'>
            User: <span className='hover:text-whiteColor'>Humiba</span>
          </h2>
          <p>
            PC name: <span>Desktop 1</span>
          </p>
          <p>
            IP: <span>192.168.0.1</span>
          </p>
        </div>
        <div className='mt-2'>
          <button className='baseOutlineBtn uppercase'>
            Góp ý / Gửi yêu cầu
          </button>
        </div>
        <div className='h-[1px] bg-grayColor my-4' />
        <div className='text-grayColor'>
          {sidebarItems.map(({ id, Icon, title, url }) => (
            <div
              className={`sidebarAction ${selectedItem === id && 'active'}`}
              key={id}
              onClick={() => {
                navigate(url);
                setSelectedItem(id);
              }}
            >
              <Icon />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
      <button className='baseFilledBtn absolute bottom-0 mb-[1rem]'>
        Đăng xuất
      </button>
    </div>
  );
}
