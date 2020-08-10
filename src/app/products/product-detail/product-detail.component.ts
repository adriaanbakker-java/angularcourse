import { Component, OnInit } from '@angular/core';
import {IProduct} from '../product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail...';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      description: 'Leaf rake with 48-inch wooden handle',
      imageUrl: 'assets/images/leaf_rake.png',
      price: 19.95,
      productCode: 'GDN-0011',
      productId: id,
      productName: 'Leaf Rake',
      releaseDate: 'March 19, 2019',
      starRating: 3.2
    };
  }

  onBack(): void {
      this.router.navigate (['/products']);
  }

}
