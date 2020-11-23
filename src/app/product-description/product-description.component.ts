import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'
import {Album} from '../album';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo: Album;
  constructor(private _productService: ProductService, private _id: number) { }

  ngOnInit() {
    this._productService.getAlbum(this._id).subscribe(response => this.albumInfo = response);
  }

}
