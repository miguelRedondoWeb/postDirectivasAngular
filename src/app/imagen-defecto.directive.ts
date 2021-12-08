import { Directive, ElementRef, HostListener } from '@angular/core';
import { environment } from '../environments/environment';

@Directive({
  selector: '[appImagenDefecto]'
})
export class ImagenDefectoDirective {

  constructor(private elementImg: ElementRef) { }
  @HostListener('error')
  onError():void{
    this.elementImg.nativeElement.src = environment.urlImage;
}
}
