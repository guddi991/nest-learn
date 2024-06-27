/* eslint-disable prettier/prettier */

import { Controller, Delete, Put, Post, Get, Param } from "@nestjs/common";

@Controller("book")
export class BookController{

    // add book
    @Post("/add")
    addBook() : string{
        return "This will add book."
    }

    // delete book
    @Delete("/delete")
    deleteBook() : string{
        return "This will delete book."
    }

    // update book
    @Put("/update")
    updateBook() : string{
        return "This will update book."
    }

    // find all book
    @Get("/all-books")
    allBook() : string{
        return "This will find all books"
    }

    // find book by id
    @Get('/findBookById/:bookId')
    findBookById(@Param() params): string {
        console.log(params.bookId)
        return `This will find a book of id #${params.bookId}`;
    }

}