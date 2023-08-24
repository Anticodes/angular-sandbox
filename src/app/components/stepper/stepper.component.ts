import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterViewInit {
    @ViewChild("viewport") viewport!: ElementRef<HTMLDivElement>;

    @Input() selected: number = 0;

    ngAfterViewInit(): void {
        for (let i = 0; i < this.viewport.nativeElement.children.length; i++) {
            if (i !== this.selected) {
                const child = this.viewport.nativeElement.children[i] as HTMLElement;
                child.style.setProperty("display", "none")
                console.log(child);
            }
        }
        console.log(this.viewport.nativeElement.children);
    }
}
