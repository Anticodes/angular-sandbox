import { Component, Input } from '@angular/core';

@Component({
    selector: 'orbiting-text',
    templateUrl: './orbiting-text.component.html',
    styleUrls: ['./orbiting-text.component.scss']
})
export class OrbitingTextComponent {
    @Input() text: string = "";
}
