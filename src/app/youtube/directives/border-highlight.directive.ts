import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderHighlight]'
})
export class BorderHighlightDirective implements OnInit {
  @Input() publishedAt = '';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    let currentDate = new Date();
    let itemDate = new Date(this.publishedAt);
    let daysLag = Math.ceil(Math.abs(currentDate.getTime() - itemDate.getTime()) / (1000 * 3600 * 24));

    if (daysLag < 7) this.renderer.setStyle(this.element.nativeElement.querySelector('.example-card'), "border-bottom", "5px solid blue");
    if (daysLag < 30 && daysLag > 7) this.renderer.setStyle(this.element.nativeElement.querySelector('.example-card'), "border-bottom", "5px solid green");
    if (daysLag > 30 && daysLag < 180) this.renderer.setStyle(this.element.nativeElement.querySelector('.example-card'), "border-bottom", "5px solid yellow");
    if (daysLag > 180) this.renderer.setStyle(this.element.nativeElement.querySelector('.example-card'), "border-bottom", "5px solid red");

  }

}
