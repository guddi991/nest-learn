/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService{
    
    addBook() :string{
        return "This will add Book.";
    }

    updateBook() : string{
        return "This will update book.";
    }

    deleteBook() : string{
        return "This will delete book.";
    }

    findBook() : string{
        return "This will find all books.";
    }
}