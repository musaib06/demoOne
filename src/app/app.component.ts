import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as mu from 'musaib06'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) {
  }

  ngOnInit(): void {

    // Set the title of the page
    this.titleService.setTitle('Home Servicing and Interior Design Solutions');
    // Set meta tags
    this.metaTagService.addTags([
      { name: 'description', content: 'Transform your home with our professional home servicing, repair, and interior design solutions. Expert services for all your home improvement needs.'},
      { name: 'keywords', content: 'home servicing, home repair, interior design, home improvement, home renovation, house maintenance, home decor' },
      { property: 'og:title', content: 'Home Servicing and Interior Design Solutions'},
      { property: 'og:description', content: 'Transform your home with our professional home servicing, repair, and interior design solutions. Expert services for all your home improvement needs.' },
      { charset: 'UTF-8' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Musaib' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]);
  }
}
