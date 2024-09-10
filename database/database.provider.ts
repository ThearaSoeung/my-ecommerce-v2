import { MONGO_URI } from 'environment';
import { Provider } from '@nestjs/common';
import * as mongoose from 'mongoose';

export const databaseProviders: Provider[] = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      mongoose.connect(MONGO_URI);
    },
  },
];
