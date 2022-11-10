import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authmfrontend';

  

  slides = [
    {img: "https://cdn.dribbble.com/users/225637/screenshots/15637013/media/3a59c156ae32faf10a26a0e272872d18.png"},
    {img: "https://cdn.dribbble.com/users/45787/screenshots/14440819/media/8f48de6bd09b10275098379259f9789f.png?compress=1&resize=1000x750&vertical=top"},
    {img: "https://cdn.dribbble.com/users/4189231/screenshots/14532608/media/0649aa76f8f52ed8421b281956cf1d80.png?compress=1&resize=1000x750&vertical=top"},
    {img: "https://cdn.dribbble.com/users/555934/screenshots/16466111/media/2784008ea5ae9d2628538b1fff6f9e08.png?compress=1&resize=1000x750&vertical=top"},
    {img: "https://cdn.dribbble.com/users/555934/screenshots/16466111/media/2784008ea5ae9d2628538b1fff6f9e08.png?compress=1&resize=1000x750&vertical=top"},
    {img: "https://cdn.dribbble.com/users/555934/screenshots/16466111/media/2784008ea5ae9d2628538b1fff6f9e08.png?compress=1&resize=1000x750&vertical=top"},
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }
}
