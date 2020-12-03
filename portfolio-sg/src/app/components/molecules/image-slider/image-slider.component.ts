import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sg-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements AfterViewInit {

  @Input() name: 'church';

  @ViewChild('original') originalImage: ElementRef;
  @ViewChild('edited') editedImage: ElementRef;

  @ViewChild('slider') slider: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    (this.editedImage.nativeElement as HTMLImageElement).style.clip=`rect(auto, 200px, auto, auto)`
  }

}
