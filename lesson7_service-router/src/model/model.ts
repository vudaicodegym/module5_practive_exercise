export class Product {
id!: number;
name!: string;
color!: string;
price!: number;
category!: string;
brand!: string;
quantity!: number;
img!: string;
  constructor(id: number, name: string,color: string, price: number, category: string, brand: string, quantity: number, img: string) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.price = price;
    this.category = category;
    this.brand = brand;
    this.quantity = quantity;
    this.img = img;
  }
}
// export class category{
//   categoryId!: number;
//   categoryName!: string;
//
//   constructor(categoryId: number, categoryName: string) {
//     this.categoryId = categoryId;
//     this.categoryName = categoryName;
//   }
// }
// export class brand{
//   brandId!: number;
//   brandName!: string;
//
//   constructor(brandId: number, brandName: string) {
//     this.brandId = brandId;
//     this.brandName = brandName;
//   }
// }
// export class color{
//   colorId!: number;
//   colorName!: string;
// }
