import {
    ComponentRef,
    Directive,
    ElementRef,
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
    private element = inject(ElementRef);

    @Input({ alias: 'animatedTooltip', required: true }) tooltipData!: {
        title: string;
        description?: string;
    };

    @HostListener('mouseenter', ['$event.target'])
    onMouseEnter(target: HTMLElement) {
        if (target !== this.element.nativeElement) return;
        this.tooltipComponentRef = this.viewContainer.createComponent(
            AnimatedTooltipComponent
        );
        this.tooltipComponentRef.instance.title = this.tooltipData.title;
        this.tooltipComponentRef.instance.description =
            this.tooltipData.description;
        setTimeout(() => {
            const tooltipElement =
                this.tooltipComponentRef!.location.nativeElement.firstChild;
            const rect = this.element.nativeElement.getBoundingClientRect();
            const tipRect = tooltipElement.getBoundingClientRect();
            tooltipElement.style.visibility = 'visible';
            tooltipElement.style.left =
                rect.x + rect.width / 2 - tipRect.width / 2 + 'px';
            tooltipElement.style.top = rect.y - rect.height + 'px';
            tooltipElement.classList.add('fade-in');
        });
    }

    @HostListener('mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        if (!this.tooltipComponentRef) return;
        const rangeOfMotion = 40;
        const rect = this.element.nativeElement.getBoundingClientRect();
        const relativeX = event.x - rect.x;
        const rationalX = (relativeX / rect.width) * rangeOfMotion;

        this.tooltipComponentRef.location.nativeElement.firstChild.style.setProperty(
            '--tooltip-rotation',
            `${-rangeOfMotion / 2 + rationalX}deg`
        );
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        const tooltip = this.tooltipComponentRef;
        tooltip?.location.nativeElement.firstChild.classList.remove('fade-in');
        tooltip?.location.nativeElement.firstChild.classList.add('fade-out');
        tooltip?.location.nativeElement.firstChild.addEventListener(
            'animationend',
            () => {
                tooltip?.destroy();
            }
        );
    }
}
