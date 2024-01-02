import { useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { fakeCategories } from '../../utils/fakeCategories';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const DEFAULT_CATEGORY = 0;

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] =
    useState(DEFAULT_CATEGORY);

  const filterCategory = (categoryId) => {
    if (categoryId === DEFAULT_CATEGORY) {
      setCurrentCategory("Tất cả");
      setSelectedCategoryId(DEFAULT_CATEGORY);
    } else {
      setCurrentCategory(fakeCategories[categoryId].name);
      setSelectedCategoryId(categoryId);
    }
  };

  useEffect(() => {
    setCategories(fakeCategories);
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        DEFAULT_CATEGORY,
        categories,
        setCategories,
        selectedCategoryId,
        setSelectedCategoryId,
        filterCategory,
        currentCategory,
        setCurrentCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
