/* eslint-disable prettier/prettier */

import { Controller, Delete, Put, Post, Get, Param } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")
export class BookController{

    // creating object for book service
    //public bookService : BookService = new BookService();
    
    // instead of using object we are injection the book service using "Providers".
    constructor(private bookService: BookService){}
    
    // add book
    @Post('/add')
    addBook() : string{
        return this.bookService.addBook();
    }

    // delete book
    @Delete('/delete')
    deleteBook() : string{
        return this.bookService.deleteBook();
    }

    // update book
    @Put('/update')
    updateBook() : string{
        return this.bookService.updateBook();
    }

    // find all book
    @Get('/all-books')
    allBook() : string{
        return this.bookService.findBook();
    }

    // find book by id
    @Get('/findBookById/:bookId')
    findBookById(@Param() params): string {
        console.log(params.bookId)
        return `This will find a book of id #${params.bookId}`;
    }

}