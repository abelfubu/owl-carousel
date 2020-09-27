import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'fb-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;
  pos = [0, 1, 2];
  images = [
    'assets/dessert-1.jpg',
    'assets/dessert-4.jpg',
    'assets/dessert-5.jpg',
    'assets/dessert-6.jpg',
    'assets/dessert-7.jpg',
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {}

  moveLeft(): void {
    this.pos = this.pos.map((item) => {
      if (item === 0) return (item = this.images.length - 1);
      else return (item -= 1);
    });
    const img = this.el.nativeElement.querySelector('img');
    img.removeClass('slide-right');
    img.addClass('slide-left');
  }
  moveRight(): void {
    this.pos = this.pos.map((item) => {
      if (item === this.images.length - 1) return (item = 0);
      else return (item += 1);
    });
    const img = this.el.nativeElement.querySelector('img');
    img.removeClass('slide-left');
    img.addClass('slide-right');
  }
}
