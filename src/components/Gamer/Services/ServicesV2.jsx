import React, { useEffect, useState } from 'react';

import ServiceItem from './ServiceItem/ServiceItem';
import { fakeServices } from '../../../utils/fakeServices';
import { useCategoryContext } from '../../../context/CategoryContext/CategoryContext';
import { fakeCategories } from '../../../utils/fakeCategories';

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
    <div className='w-[75%] overflow-y-auto px-2'>
      <h3 className='h-10 text-xl font-bold text-grayColor flex items-center gap-2 mb-2'>
        <span className='text-greenColor'>#</span>
        <span>
          {selectedCategoryId === 0
            ? 'Tất cả'
            : fakeCategories.find((item) => item.id === selectedCategoryId).name}
        </span>
      </h3>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-[1rem]'>
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
    </div>
  );
}
