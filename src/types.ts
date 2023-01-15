export interface IPizza {
  _id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number[];
  category: number;
  rating: number;
}

export interface ISelectedPizza {
  _id: string;
  imageUrl: string;
  title: string;
  types: number;
  sizes: number;
  price: number;
  category: number;
  rating: number;
}
export interface IPizzaFromServer {
  _id: string;
  imageUrl: string;
  title: string;
  types: string;
  sizes: string;
  price: string;
  category: string;
  rating: number;
  users: string[];
  __v: number;
}
