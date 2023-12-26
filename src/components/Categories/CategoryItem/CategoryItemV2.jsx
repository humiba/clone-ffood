import { RightOutlined } from '@ant-design/icons';
import React from 'react';

import { useCategoryContext } from '../../../context/CategoryContext/CategoryContext';

export default function CategoryItemV2({ id, name }) {
  const { selectedCategoryId, setSelectedCategoryId } = useCategoryContext();
  const categoryTextStyle = selectedCategoryId === id ? 'text-greenColor font-medium' : 'text-white hover:text-white/70';
  const iconStyle =
    selectedCategoryId === id
      ? 'text-greenColor'
      : 'text-[#636671]';

  return (
    <div
      className='flex gap-2 items-center cursor-pointer'
      onClick={() => setSelectedCategoryId(id)}
    >
      <RightOutlined className={iconStyle} />
      <p className={categoryTextStyle}>{name}</p>
    </div>
  );
}
