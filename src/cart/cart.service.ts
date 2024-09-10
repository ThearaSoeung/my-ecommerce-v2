import { Inject, Injectable } from "@nestjs/common";
import { CART_MODEL, Cart } from "./cart.constant";
import { Model } from "mongoose";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { CartSchema } from "./cart.schema";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CartService {
  constructor(
    @InjectModel(CART_MODEL)
    private readonly cartModel: Model<CartSchema>
  ) { }

  async create(id, { userId, productId }: CreateCartDto) {
    try {
      const cart = await this.cartModel.create({
        userId: userId,
        productId: productId,
      });

      if(!cart) {
        throw new Error('Cart not created');
      }
      return cart;
    } catch (error) {
      console.error(error);
    }
  }

  async findAll() {
    try {
      const carts = await this.cartModel.find();
      return carts;
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: string) {
    try {
      const cart = await this.cartModel.findById(id);
      return cart;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: string, { qty }: UpdateCartDto) {
    try {
      const updatedCart = await this.cartModel.findByIdAndUpdate(id, { qty });
      return updatedCart;
    } catch (error) {
      console.error(error);
    }
  }

  async find(userId, productId) {
    try {
      const carts = await this.cartModel.find({
        productId: productId,
        userId: userId,
      });
      return carts;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: string) {
    try {
      const result: boolean = await this.cartModel.findByIdAndDelete(id);
      if (!result) {
        throw new Error('Cart not found');
      }
      return result
    } catch (error) {
      console.error(error);
    }
  }

  async completingCart(id) {
    try {
      const result: boolean = await this.cartModel.findByIdAndUpdate(id, { isCompleted: true });
      if (!result) {
        throw new Error('Cart not found');
      }
      return result;
    } catch (error) {
      console.error(error);
    }
  }

}