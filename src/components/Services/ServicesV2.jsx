import React, { useEffect, useState } from 'react'

import ServiceItem from './ServiceItem/ServiceItem';
import { fakeServices } from '../../utils/fakeServices';
import { useCategoryContext } from '../../context/CategoryContext/CategoryContext';

export default function ServicesV2() {
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
    <div className='w-[70%] overflow-y-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 mb-[1rem]'>
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
