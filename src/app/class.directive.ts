import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  // @Input() backgroundColor: string;

  constructor(private element: ElementRef) { }
    // this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // This will not work because as soon as this constructor runs, the value of "this.background" is undefined, because,
    // that value had to come from the template and is not reached here yet. One solution is to add a timeOut, but that is
    // not a real solution so it should be avoided at all cost

  // @Input() set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  //we can shorten the syntax if we change the set backgroundColor to appClass, this simplifies the syntax and we do not have
  //to write appClass [backgroundColor] = "'red'"... instead we can write => [appClass] = "'red'" as all other built-in
  //directives use.

  // @Input() set appClass(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }
  //Now everything is working just fine, all we have to do to make the developer's life easier is to give it a sensible name
  // like => [appClass] = "'red'", how to do this?

  // @Input('appClass') set backgroundColor(color: string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  // }

  //Now, we will replace Angular's ngClass with our own appClass directive

  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
