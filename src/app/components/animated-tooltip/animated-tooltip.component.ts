import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-tooltip',
  templateUrl: './animated-tooltip.component.html',
  styleUrls: ['./animated-tooltip.component.scss']
})
export class AnimatedTooltipComponent {
    @Input() title: string = "asd";
    @Input() description: string = "asd";
}
