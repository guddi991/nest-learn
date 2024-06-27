/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { OrdersModule } from './orders.module';
import { ChatModule } from './chat.module';
import { BookController } from './app.controller';
import { BookService } from './book.service';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule],
   controllers: [BookController],
   providers: [BookService],
   exports: [],
})
export class RootModule {
  constructor(){
    console.log('App Module ')
  }
}

