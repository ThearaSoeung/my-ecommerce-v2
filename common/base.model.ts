import { Document } from 'mongoose';

export class BaseModel extends Document {
  createdAt: Date;
  updatedAt: Date;
}

export const BaseSchemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: (doc: any, ret: any) => {
      delete ret._id;
    },
  },
};
