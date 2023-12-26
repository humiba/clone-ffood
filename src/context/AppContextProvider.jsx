import { combineComponents } from '../utils/combineComponents';
import { CategoryProvider } from './CategoryContext/CategoryContext';
import { CartProvider } from "./CartContext/CartContext";

const providers = [CategoryProvider, CartProvider];

export const AppContextProvider = combineComponents(...providers);