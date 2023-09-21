import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { StepComponent } from './step/step.component';

@Component({
    selector: 'stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterContentInit {
    @ContentChildren(StepComponent) childrenQuery!: QueryList<StepComponent>;
    public children!: Array<StepComponent>;
    
    @Input("selected") _selected!: number;
    get selected() {
        return this._selected;
    }

    set selected(selection: number) {
        this.children[this._selected].show = false;
        this._selected = selection;
        this.children[this._selected].show = true;
    }

    ngAfterContentInit(): void {
        this.children = this.childrenQuery.toArray();
        this.selected = 0;
    }

    step() {
        this.selected = (this.selected + 1) % this.children.length;
    }
}
