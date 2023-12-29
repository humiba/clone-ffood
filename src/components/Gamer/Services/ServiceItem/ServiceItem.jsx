import { useCartContext } from '../../../../context/CartContext/CartContext';

// eslint-disable-next-line react/prop-types, no-unused-vars
function ServiceItem({ id, img, name, price, quantity, catId, unit }) {
  const { addToCart } = useCartContext();

  return (
    <div id={id} className='bg-[#1D2333] shadow-md rounded-lg px-5 py-2'>
      <img src={img} alt={name} className='rounded-md w-full h-32' />
      <div className='mt-1 flex flex-col items-center'>
        <h1 className='text-lg uppercase font-bold text-white'>{name}</h1>
        <p className='mt-1 text-white'>{price.toLocaleString()}đ</p>
        <p style={{ display: 'none' }} className='mt-1 text-white'>
          Đơn vị: {unit}
        </p>
        <button
          onClick={() =>
            addToCart({
              id,
              name,
              price,
            })
          }
          className='px-4 py-1 mt-2 rounded-md bg-greenColor hover:bg-greenColor/80 text-whiteColor'
        >
          THÊM
        </button>
      </div>
    </div>
  );
}

export default ServiceItem;
