import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // //name = 'jhon doe'
  // addToCart: number = 0;
  // product = {
  //   name: 'iphone 13',
  //   price: 789,
  //   color: 'red',
  //   discount: 8.5,
  //   inStock: 10,
  //   pImage: '/assets/images/iphone13.jpg',
  // };
  // getDiscountedPrice() {
  //   return (
  //     this.product.price - (this.product.price * this.product.discount) / 100
  //   );
  // }
  // onNameChange(e: any) {
  //   //this.name = e.target.value
  //   // console.log(event)
  // }

  // decrementStockValue(){
  //   if(this.addToCart > 0){
  //     this.addToCart--;
  //     this.product.inStock++;
  //   }
  // }
  // incrementStockValue(){
  //   if(this.product.inStock > 0){
  //     this.addToCart++;
  //     this.product.inStock--;

  //   }
  // }

  listOfString: string[] = ['steve', 'merry', 'sarah', 'abel', 'yonas'];

  searchText: string = ''

  setSearchText(value:string){
    this.searchText = value;
  }
}
