import { Component, OnInit } from '@angular/core';
import * as mu from 'musaib06';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  ngOnInit(): void {
    // alert(mu.testFunction())
  }

}
