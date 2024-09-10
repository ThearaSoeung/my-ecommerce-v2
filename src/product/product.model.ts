import { Prop, Schema } from '@nestjs/mongoose';
import { BaseModel } from 'common/base.model';

@Schema()
export class Card extends BaseModel {
  @Prop({
    required: true,
    ref: 'Product',
  })
  productId: string;

  @Prop({
    required: true,
    type: Boolean,
    default: false,
  })
  isDeleted: boolean;

  @Prop({
    required: true,
    type: Number,
    default: 1,
    min: 1,
  })
  qty: number;
}
