import { Component, OnInit } from '@angular/core';
import {blogcard,blogcards} from './blog-cards-data';
import { Services } from 'src/app/interfaces/services.interface';
import { Subscription } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards-component.scss']
})
export class BlogCardsComponent implements OnInit {

  blogcards:blogcard[];

  availableServices!: Services[];
  private subscription: Subscription = new Subscription();

  constructor(
    private servicesSv: ServicesService,
  ) { 

    this.blogcards=blogcards;
    this.subscription = this.servicesSv.services$.subscribe(services => {
      this.availableServices = services;
    });

    this.servicesSv.getServices();
  }

  ngOnInit(): void {
  }
  

}
