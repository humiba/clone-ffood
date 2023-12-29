import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

import { useCartContext } from '../../../../context/CartContext/CartContext';

// eslint-disable-next-line react/prop-types
function CartItem({ id, name, price, orderQuantity }) {
  const { addToCart, removeFromCart, removeDirectlyFromCart } =
    useCartContext();

  return (
    <div className='w-full'>
      <h3 className='p-3 whitespace-nowrap text-sm font-medium'>{name}</h3>
      <td className='p-3 whitespace-nowrap text-sm'>
        {price.toLocaleString()}đ
      </td>
      <td className='p-3 whitespace-nowrap text-sm flex gap-3 items-center'>
        <button
          className='p-1 bg-primaryColor hover:bg-primaryColor/80 text-whiteColor'
          onClick={() => removeFromCart({ id, name, price })}
        >
          <MinusOutlined />
        </button>
        <span>{orderQuantity}</span>
        <button
          className='p-1 bg-primaryColor hover:bg-primaryColor/80 text-whiteColor'
          onClick={() => addToCart({ id, name, price })}
        >
          <PlusOutlined />
        </button>
      </td>
      <td className='p-3 whitespace-nowrap text-sm'>
        {(price * orderQuantity).toLocaleString()}đ
      </td>
      <td className='p-3 whitespace-nowrap text-end text-sm font-medium'>
        <button
          type='button'
          className='flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400'
          onClick={() => removeDirectlyFromCart({ id, name, price })}
        >
          <DeleteOutlined />
        </button>
      </td>
    </div>
  );
}

export default CartItem;
