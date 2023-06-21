import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit {
  @Input() appResaltar = 'yellow';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Renderer 1
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      this.appResaltar
    );
  }
}
