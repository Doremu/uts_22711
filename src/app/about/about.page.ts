import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  url: string;
  constructor() { }

  ngOnInit() {
    this.url = 'https://pbs.twimg.com/profile_images/764453946626748416/uR4ePkxl.jpg';
  }

}
