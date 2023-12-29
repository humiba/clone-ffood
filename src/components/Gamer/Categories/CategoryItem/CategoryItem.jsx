import PropTypes from 'prop-types';

import { useCategoryContext } from '../../../../context/CategoryContext/CategoryContext';

function CategoryItem({ id, name }) {
  const { selectedCategoryId, setSelectedCategoryId } = useCategoryContext();

  const btnStyle =
    selectedCategoryId === id
      ? 'bg-[#F2A851] hover:bg-[#F2A851]/80 text-whiteColor'
      : 'bg-primaryColor text-whiteColor';

  return (
    <button
      className={`px-4 py-2 mx-1 rounded-md ${btnStyle}`}
      onClick={() => setSelectedCategoryId(id)}
    >
      <span>{name}</span>
    </button>
  );
}

CategoryItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoryItem;
