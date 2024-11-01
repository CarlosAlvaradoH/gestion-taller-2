import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../admin/product.service';  // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  
})
export class AdminComponent implements OnInit {
  topSelling: Product[] = [];  // Define la propiedad topSelling en la clase

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.topSelling = this.productService.getProducts();  // Inicializa topSelling con los datos del servicio
  }
}
