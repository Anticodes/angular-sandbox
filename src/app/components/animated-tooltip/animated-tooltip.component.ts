import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-tooltip',
  templateUrl: './animated-tooltip.component.html',
  styleUrls: ['./animated-tooltip.component.scss']
})
export class AnimatedTooltipComponent {
    @Input({ required: true }) title!: string;
    @Input() description?: string;
}
