/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { OrdersModule } from './orders.module';
import { ChatModule } from './chat.module';
import { BookController } from './app.controller';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule],
   controllers: [BookController],
   providers: [],
   exports: [],
})
export class RootModule {
  constructor(){
    console.log('App Module ')
  }
}

