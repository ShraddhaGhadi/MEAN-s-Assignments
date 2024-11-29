import { Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { DefaultComponent } from './default/default.component';

export const routes: Routes = [
    {
        path : "",
        component : TechnologyComponent
    },
    {
        path : "books",
        component : BooksComponent
    },
    {
        path : "**",
        component : DefaultComponent
    }
];
