import { Route, Routes } from 'react-router-dom';
import { CartV2, Footer, LeftSidebar } from './components/Gamer';
import { GamerLayout, OrderServiceV2 } from './pages';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      {/* <Header /> */}
      <div
        style={{ height: 'calc(100vh - 40px)' }}
        className='flex justify-between overflow-y-hidden'
      >
        {/* Personal info + Navigation */}
        <LeftSidebar />

        {/* Main content */}
        <div className='bg-[#161B28] text-[#ccc] w-[65%] h-full'>
          <Routes>
            {/* gamer routes (public routes) */}
            <Route element={<GamerLayout />}>
              <Route path='/gamer/order' element={<OrderServiceV2 />} />
            </Route>
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
