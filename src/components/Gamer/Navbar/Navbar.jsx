import { CustomerServiceOutlined } from '@ant-design/icons';
import {  Layout } from 'antd';
const { Header } = Layout;

function Navbar() {

  return (
    <Header className='sticky top-0 z-[1] text-whiteColor flex items-center justify-between bg-primaryColor '>
      <div className='cursor-pointer flex items-center justify-start gap-2 hover:text-whiteColor/80 flex-1'>
        <CustomerServiceOutlined className='text-lg ' />
        <p className='font-bold text-lg'>GỌI DỊCH VỤ</p>
      </div>
    </Header>
  );
}

export default Navbar;
