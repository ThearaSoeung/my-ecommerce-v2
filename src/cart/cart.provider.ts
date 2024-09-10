import { Cart, CART_MODEL } from "./cart.constant";
import { CartSchema } from "./cart.schema";

export const CartProviders = [
  {
    provide: CART_MODEL,
    useFactory: (connection) => connection.model(Cart, CartSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];