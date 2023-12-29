
import { Categories, Cart, Services } from '../../../components/Gamer';

function OrderService() {
  return (
    <div className='w-full my-4'>
      {/* Categories list */}
      <Categories />

      {/* Products list + cart */}
      <div className='flex justify-between my-4 relative'>
        {/* Services list */}
        <Services />

        {/* cart */}
        <Cart />
      </div>
    </div>
  );
}

export default OrderService;
