import { Route, Routes } from 'react-router-dom';
import { CartV2, Footer, Header, LeftSidebar } from './components';
import { OrderServiceV2 } from './pages';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <div
        style={{ height: 'calc(100vh - 40px - 28px)' }}
        className='flex justify-between overflow-y-hidden'
      >
        {/* Personal info + Navigation */}
        <LeftSidebar />

        {/* Main content */}
        <div className='bg-[#161B28] text-[#ccc] w-[65%] h-full'>
          <Routes>
            <Route path='/' element={<OrderServiceV2 />} />
          </Routes>
        </div>

        {/* Cart */}
        <CartV2 />
      </div>

      <Footer />
    </Fragment>
  );
}

export default App;
