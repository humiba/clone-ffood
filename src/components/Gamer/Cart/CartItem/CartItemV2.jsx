import React from 'react'

import { useCartContext } from '../../../../context/CartContext/CartContext';
import { CloseCircleOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

export default function CartItemV2({ id, name, price, orderQuantity }) {
  const { addToCart, removeFromCart, removeDirectlyFromCart } =
    useCartContext();

  return (
    <div className='mx-2 flex flex-col justify-center'>
      <div className='flex items-center justify-between'>
        <h3>{name}</h3>
        <CloseCircleOutlined
          className='cursor-pointer'
          onClick={() => removeDirectlyFromCart({ id, name, price })}
        />
      </div>
      <div className='mt-2 flex items-center justify-between'>
        <p>{price.toLocaleString()}đ</p>
        <div className='flex items-center gap-2'>
          <button
            className='rounded-sm p-1 bg-greenColor hover:bg-greenColor/80 text-whiteColor flex items-center justify-center'
            onClick={() => removeFromCart({ id, name, price })}
          >
            <MinusOutlined />
          </button>
          <span>{orderQuantity}</span>
          <button
            className='rounded-sm p-1 bg-greenColor hover:bg-greenColor/80 text-whiteColor flex items-center justify-center'
            onClick={() => addToCart({ id, name, price })}
          >
            <PlusOutlined />
          </button>
        </div>
      </div>
      <div className='h-[1px] bg-white/20 my-3' />
    </div>
  );
}
