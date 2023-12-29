import { useEffect, useState } from 'react';
import { useCartContext } from '../../../context/CartContext/CartContext';
import CartItem from './CartItem/CartItem';

function Cart() {
  const [cartTotal, setCartTotal] = useState(0);
  const { clearCart, cartItems, getCartTotal } = useCartContext();

  useEffect(() => {
    setCartTotal(getCartTotal());
  }, [getCartTotal]);

  const requestService = async () => {
    if (cartItems.length === 0) {
      alert('Giỏ hàng trống, vui lòng chọn món');
    } else {
      alert('Gọi món thành công nha');
      clearCart();
    }
  };

  return (
    <div className='fixed right-0 w-[35%] h-screen max-h-[550px] bg-white shadow-md rounded-lg px-10 mr-5 py-5'>
      <button
        onClick={clearCart}
        className='px-2 py-1 bg-primaryColor hover:bg-primaryColor/80 rounded-md text-whiteColor'
      >
        CLEAR GIỎ HÀNG
      </button>

      {/* Cart items list */}
      <div className='flex flex-col h-1/2 mt-5 relative'>
        <div className='-m-1.5 overflow-x-hidden overflow-y-auto '>
          <div className='p-1.5 min-w-full inline-block align-middle'>
            <div className='border overflow-hidden '>
              <table className='relative min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                <thead className='bg-primaryColor text-whiteColor'>
                  <tr>
                    <th scope='col' className='p-3 text-start font-bold'>
                      Sản phẩm
                    </th>
                    <th scope='col' className='p-3 text-start font-bold'>
                      Giá
                    </th>
                    <th scope='col' className='p-3 text-start font-bold'>
                      SL
                    </th>
                    <th scope='col' className='p-3 text-start font-bold'>
                      TC
                    </th>
                    <th scope='col' className='p-3 text-end font-bold'></th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                  {cartItems.length > 0 ? cartItems.map(({ id, name, price, orderQuantity }) => (
                    <CartItem
                      key={id}
                      id={id}
                      name={name}
                      price={price}
                      orderQuantity={orderQuantity}
                    />
                  )) : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Cart summary */}
      <div className='flex gap-3 justify-center items-center mt-5 absolute bottom-10'>
        <p>
          Tổng cộng:{' '}
          <span className='font-bold'>
            {`${cartTotal.toLocaleString()}đ` || '0đ'}
          </span>
        </p>
        <button
          onClick={requestService}
          className='px-2 py-1 w-content bg-primaryColor hover:bg-primaryColor/80 rounded-md text-whiteColor'
        >
          GỌI MÓN
        </button>
      </div>
    </div>
  );
}

export default Cart;
