import { BaseModel } from "common/base.model";
import { CartSchema } from "../cart.schema";

export class CartDetailDto extends BaseModel {
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  category: string;

  static create({ }: CartSchema) {

  }
}
