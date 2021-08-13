import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderHighlight]'
})
export class BorderHighlightDirective {
  @Input() publishedAt = '';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    //this.element.nativeElement.querySelector('.example-card').style.borderBottom = "5px solid green";

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //console.log("element ", this.element.nativeElement.querySelector('.example-card'));
    //this.element.nativeElement.querySelector('.example-card').style.border = "5px solid green";
    let currentDate = new Date();
    let itemDate = new Date(this.publishedAt);
    let daysLag = Math.ceil(Math.abs(currentDate.getTime() - itemDate.getTime()) / (1000 * 3600 * 24));

    if (daysLag < 7) this.renderer.setStyle(this.element.nativeElement.querySelector('.example-card'), "border-bottom", "5px solid blue");
    if (daysLag < 30 && daysLag > 7) this.renderer.setStyle(this.element.nativeElement.querySelector('.example-card'), "border-bottom", "5px solid green");
    if (daysLag > 30 && daysLag < 180) this.renderer.setStyle(this.element.nativeElement.querySelector('.example-card'), "border-bottom", "5px solid yellow");
    if (daysLag > 180) this.renderer.setStyle(this.element.nativeElement.querySelector('.example-card'), "border-bottom", "5px solid red");

  }


}
