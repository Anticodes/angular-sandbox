import {
    ComponentRef,
    Directive,
    HostListener,
    Input,
    ViewContainerRef,
} from '@angular/core';
import { AnimatedTooltipComponent } from '../components/animated-tooltip/animated-tooltip.component';

@Directive({
    selector: '[animatedTooltip]',
})
export class AnimatedTooltipDirective {
    private tooltipComponentRef?: ComponentRef<AnimatedTooltipComponent>;

    @Input("animatedTooltip", ) tooltipData: {title?: string, description?: string};

    constructor(private viewContainer: ViewContainerRef) {}

    @HostListener('mouseenter')
    onMouseEnter() {
        this.tooltipComponentRef = this.viewContainer.createComponent(
            AnimatedTooltipComponent, 
        );
        this.tooltipComponentRef.instance.title = 
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.tooltipComponentRef?.destroy();
    }
}
