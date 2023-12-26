import { useEffect, useState } from 'react';

import ServiceItem from './ServiceItem/ServiceItem';
import { fakeServices } from '../../utils/fakeServices';
import { useCategoryContext } from '../../context/CategoryContext/CategoryContext';

function Services() {
  const [services, setServices] = useState([]);
  const { selectedCategoryId } = useCategoryContext();

  useEffect(() => {
    if (selectedCategoryId === 0) {
      setServices(fakeServices);
    } else {
      setServices(
        fakeServices.filter(({ catId }) => catId === selectedCategoryId)
      );
    }
  }, [selectedCategoryId]);

  return (
    <div className='w-[65%] grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-10'>
      {services.map(({ id, img, name, price, quantity, catId, unit }) => (
        <ServiceItem
          key={id}
          id={id}
          img={img}
          name={name}
          price={price}
          quantity={quantity}
          catId={catId}
          unit={unit}
        />
      ))}
    </div>
  );
}

export default Services;
