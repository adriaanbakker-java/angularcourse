import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ProductService} from './service/product.service';
import {Observable} from 'rxjs';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
   // styles: ['thead {color: #337AB7'],
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    // listFilter: string = 'cart';
  filteredProducts: IProduct[] | Observable<IProduct[]>;
  products: IProduct[] = [];
  imageWidth = 50;
  imageMargin = 15;
  pageTitle = 'Product List :)';
  showImage = false;
  _listFilter: string;
  errorMessage: string;

    constructor(private productService: ProductService) {
      // this.listFilter = 'cart';
    }


    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      console.log('listFilter value set to ' + value);
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }




    performFilter(filterBy: string): IProduct[] {
      // throw new Error("Method not implemented.");
      filterBy = filterBy.toLocaleLowerCase();

      return this.products.filter((product: IProduct) =>
         product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        console.log('in ngOnInit');
        this.productService.getProducts().subscribe(
          {
            next: products => { this.products = products;
                                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
          }
        );
        this.filteredProducts = this.products;
    }

    toggleImage(): void {
            this.showImage = !this.showImage;
    }

   onRatingClicked(message: string): void {
     this.pageTitle = 'Product List:' + message;
   }
}
