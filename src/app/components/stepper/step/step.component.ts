import { Component, Input } from '@angular/core';

@Component({
    selector: 'step',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.scss']
})
export class StepComponent {
    @Input({ alias: "title", required: true }) title!: string;
    
    public show: boolean = false;
}
