import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useCategoryContext } from '../../context/CategoryContext/CategoryContext';
import CategoryItem from './CategoryItem/CategoryItem';

function Categories() {
  const defaultCategory = { id: 0, name: 'All' };

  const { categories, selectedCategoryId, setSelectedCategoryId } =
    useCategoryContext();

  const slideLeft = () => {
    const slider = document.getElementById('categories');
    slider.scrollLeft = slider.scrollLeft - 200;
  };
  const slideRight = () => {
    const slider = document.getElementById('categories');
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div className='flex justify-center items-center gap-3 mb-3 relative mx-5'>
      <CaretLeftOutlined
        onClick={slideLeft}
        className='left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block'
      />
      <div
        id='categories'
        className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar mx-[2rem]'
      >
        <button
          className={`px-4 py-2 mx-1 rounded-md ${
            selectedCategoryId === defaultCategory.id
              ? 'bg-[#F2A851] hover:bg-[#F2A851]/80 text-whiteColor'
              : 'bg-primaryColor text-whiteColor'
          }`}
          onClick={() => setSelectedCategoryId(defaultCategory.id)}
        >
          {defaultCategory.name}
        </button>
        {categories.map(({ id, name }) => (
          <CategoryItem key={id} id={id} name={name} />
        ))}
      </div>
      <CaretRightOutlined
        onClick={slideRight}
        className='right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block'
      />
    </div>
  );
}

export default Categories;
