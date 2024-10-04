import { AllProductsAPI, Product, ProductInfo } from '../types/products';

const url = 'https://www.themealdb.com/api/json/v1/1/';

const allProductsURL = 'filter.php?c=Dessert';
const productDetailByIdURL = 'lookup.php?i=';

async function http<T>(request: string): Promise<T> {
  const response = await fetch(request);
  const body = response.json();
  return body;
}

export async function getProduct(id?: string) {
  try {
    const product = await http<AllProductsAPI<ProductInfo>>(`${url}${productDetailByIdURL}${id}`);
    const ingredients: any = [];
    const measures: any = [];
    Object.entries(product.meals[0]).forEach(([key, value]) => {
      if (key.includes('strIngredient') && value) {
        ingredients.push(value);
      }
    });
    Object.entries(product.meals[0]).forEach(([key, value]) => {
      if (key.includes('strMeasure') && value) {
        measures.push(value);
      }
    });
    return { ...product.meals[0], ingredients, measures };
  } catch (error) {
    console.error(error);
    return {} as ProductInfo;
  }
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await http<AllProductsAPI<Product>>(`${url}${allProductsURL}`);
    return response.meals;
  } catch (error) {
    console.error(error);
    return {} as Product[];
  }
}

// 59 id
