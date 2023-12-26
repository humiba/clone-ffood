import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../context/CartContext/CartContext';
import CartItemV2 from './CartItem/CartItemV2';

export default function CartV2() {
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
    <div className='sidebar w-[20%] relative overflow-hidden'>
      <div className='w-full h-[10%] flex px-2 justify-between items-center'>
        <p>Giỏ hàng</p>
        <button
          onClick={clearCart}
          className='p-2 rounded-md text-whiteColor bg-greenColor hover:bg-greenColor/85 transition-all duration-[150ms]'
        >
          Clear giỏ hàng
        </button>
      </div>

      {/* Cart */}
      <div className='overflow-y-auto w-full px-2 h-[80%] mt-1'>
        {/* Cart item */}
        {cartItems.length > 0
          ? cartItems.map(({ id, name, price, orderQuantity }) => (
              <CartItemV2
                key={id}
                id={id}
                name={name}
                price={price}
                orderQuantity={orderQuantity}
              />
            ))
          : 'Giỏ hàng trống'}
      </div>

      {/* Request order */}
      <div className='z-10 absolute bottom-0 h-[10%] w-full flex justify-center'>
        <button className='baseFilledBtn mb-[1rem]' onClick={requestService}>
          Đặt hàng (<span>{cartTotal.toLocaleString()}đ</span>)
        </button>
      </div>
    </div>
  );
}
