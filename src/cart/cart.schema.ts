import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { BaseModel } from "common/base.model";
import { Document } from "mongoose";

@Schema()
export class CartSchema extends BaseModel {
  @Prop({
    required: true,
    ref: 'Product'
  })
  productId: string;

  @Prop({
    required: true,
    ref: 'User'
  })
  userId: string;


  @Prop({
    required: true,
    type: Boolean,
    default: false
  })
  isDeleted: boolean;

  @Prop({
    required: true,
    type: Number,
    default: 1,
    min: 1
  })
  qty: number;
}

export type CartDocument = CartSchema & Document;
export const CartSchemaFactory = SchemaFactory.createForClass(CartSchema);