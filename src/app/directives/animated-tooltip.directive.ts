import {
    ComponentRef,
    Directive,
    HostListener,
    inject,
    Input,
    ViewContainerRef,
} from '@angular/core';
import { AnimatedTooltipComponent } from '../components/animated-tooltip/animated-tooltip.component';

@Directive({
    selector: '[animatedTooltip]',
})
export class AnimatedTooltipDirective {
    private tooltipComponentRef?: ComponentRef<AnimatedTooltipComponent>;
    private viewContainer = inject(ViewContainerRef);

    @Input({ alias: 'animatedTooltip', required: true }) tooltipData!: {
        title: string;
        description?: string;
    };

    @HostListener('mouseenter')
    onMouseEnter() {
        this.tooltipComponentRef = this.viewContainer.createComponent(
            AnimatedTooltipComponent
        );
        this.tooltipComponentRef.instance.title = this.tooltipData.title;
        this.tooltipComponentRef.instance.description =
            this.tooltipData.description;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.tooltipComponentRef?.destroy();
    }
}
