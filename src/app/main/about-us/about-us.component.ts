import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    // Set the title of the page
    this.titleService.setTitle('About Home Servicing and Interior Design Solutions');
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
