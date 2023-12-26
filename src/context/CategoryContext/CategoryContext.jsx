import { useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import { fakeCategories } from '../../utils/fakeCategories';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const DEFAULT_CATEGORY = 0;

  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] =
    useState(DEFAULT_CATEGORY);

  const filterCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  }

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
