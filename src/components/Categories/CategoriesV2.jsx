import React from 'react';

import { fakeCategories } from '../../utils/fakeCategories';
import CategoryItemV2 from './CategoryItem/CategoryItemV2';

export default function CategoriesV2() {
  return (
    <div className='mt-4'>
      <CategoryItemV2 id={0} name='All' />
      {fakeCategories.map(({ id, name }) => (
        <CategoryItemV2 key={id} id={id} name={name} />
      ))}
    </div>
  );
}
