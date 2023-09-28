import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig  } from '@ng-bootstrap/ng-bootstrap';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
 
  images: {source: string, text: string }[] = [
    { source: "https://picsum.photos/id/74/367/267", text: "Think a little less, Live a little more" },
    { source: "https://picsum.photos/id/100/367/267", text: "Memory is the fourth dimension of any landscape" },
    { source: "https://picsum.photos/id/179/367/267", text: "If there's a will there's a wave" },
    { source: "https://picsum.photos/id/177/367/267", text: "Never measure the height of a mountain until you reach the top" }
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 1500;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;  
  }  

  ngOnInit() {
    
  }

}
