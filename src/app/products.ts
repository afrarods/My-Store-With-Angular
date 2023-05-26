export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    price: 1221,
    description: 'Processor A16 Bionic, RAM 6GB, Internal Storage 128GB, '
  },
  {
    id: 2,
    name: 'Samsung Galaxy S22 Ultra 5G',
    price: 896,
    description: 'Processor Exynos 2200, RAM 6GB, Internal Storage 128GB'
  },
  {
    id: 3,
    name: 'HUAWEI P40 Lite',
    price: 204,
    //description: 'Processor Kirin 810, RAM 8GB, Internal Storage 64GB'
  }
];


