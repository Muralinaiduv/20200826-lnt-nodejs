//imports from angular framework
import { NgModule } from "@angular/core";
import { BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router'; 
import {FormsModule} from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http'; 







//imports from my own code
import { BooksWebAppComponent} from "./books-web-app.component";
import {BooksWebHeaderComponent} from './books-web-header-component/books-web-header.component';
import {BooksWebFooterComponent} from './books-web-footer.component'; 

import { BookInfoComponent } from './book-info/book-info.component';
import { BookListComponent } from './book-list/book-list.component';
import { CaRangeComponent } from './ca-range/ca-range.component';
import { CaRatingComponent } from './ca-rating/ca-rating.component';
import { AltvaluePipe } from './altvalue.pipe';
import { PrefixPipe } from './prefix.pipe';

import { RatingadvisePipe } from './ratingadvise.pipe';
import { BookCompositeComponent } from './book-composite/book-composite.component'; 

//get the route details
import {appRoutes} from './routes';
import { CaNotFoundComponent } from './ca-not-found/ca-not-found.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CaHighlightDirective } from './ca-highlight.directive';
import { CaRainbowColorDirective } from './ca-rainbow-color.directive'; 
import { SimpleBookService } from './service/simple-book-service';

import {UserManagementModule} from './user-management/user-management.module'; 

import {HttpBookService} from './service/http-book-service'; 





@NgModule({

    imports:[
        BrowserModule,  //most important angular module to enable component rendering
        FormsModule,
        //responsible for angular Single Page Routing design
        //You must load the RouterModule and supply the route information to be used
        UserManagementModule, //all functinalities are included
        HttpClientModule,
        RouterModule.forRoot(appRoutes) 
    ],

    declarations:[ //list all the components and other elements related to current module
        BooksWebAppComponent,
        BooksWebHeaderComponent,
        BooksWebFooterComponent,
        
        BookInfoComponent,
        
        BookListComponent,
        
        CaRangeComponent,
        
        CaRatingComponent,
        
        AltvaluePipe,
        
        PrefixPipe,
        
        RatingadvisePipe,
        
        BookCompositeComponent,
        
        CaNotFoundComponent,
        
        BookCreateComponent,      
        
        
        BookDetailsComponent,      
        
        
        CaHighlightDirective,      
        
        
        CaRainbowColorDirective
        
    ],    
    
    //set of services for dependency injection
    providers:[
        SimpleBookService,
        HttpBookService
        
    ],

    bootstrap:[  //startup compoent for the module
        BooksWebAppComponent   //only root component should be in bootstrap
    ]
})
export class AppModule{

}