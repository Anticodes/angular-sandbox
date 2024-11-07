import { Component, ElementRef, inject, Input, OnInit, signal } from '@angular/core';

@Component({
    selector: 'app-animated-tooltip',
    templateUrl: './animated-tooltip.component.html',
    styleUrls: ['./animated-tooltip.component.scss']
})
export class AnimatedTooltipComponent implements OnInit {
    @Input({ required: true }) title!: string;
    @Input() description?: string;
    @Input({ required: true }) toolElement!: HTMLElement;
    private tooltipElement = inject(ElementRef);

    ngOnInit(): void {
        const tooltipElement = this.tooltipElement.nativeElement.firstChild;
        const rect = this.toolElement.getBoundingClientRect();
        const tipRect = tooltipElement.getBoundingClientRect();
        tooltipElement.style.left =
            rect.x + rect.width / 2 - tipRect.width / 2 - this.toolElement.clientLeft + 'px';
        tooltipElement.style.top = rect.y - rect.height + 'px';

        console.log(rect.x + rect.width / 2 - tipRect.width / 2 + 'px', this.toolElement.clientLeft);
    }
}