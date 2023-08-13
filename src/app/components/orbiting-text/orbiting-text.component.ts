import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'orbiting-text',
    templateUrl: './orbiting-text.component.html',
    styleUrls: ['./orbiting-text.component.scss']
})
export class OrbitingTextComponent implements OnInit {
    @Input() text: string = "";
    @ViewChild("renderer") renderer!: ElementRef<HTMLDivElement>;
    readonly canvasContext = new OffscreenCanvas(0, 0).getContext("2d")!;

    ngOnInit() {
        this.canvasContext.font = this.getCanvasFont();
    }

    calculateWidth(text: string) {
        return this.canvasContext.measureText(text).width;
    }

    increasing(text: string) {
        const result: Array<LetterWithPreviousWidths> = [];
        let previousWidths = 0;
        for (const letter of text.split("")) {
            result.push({ previousWidths, letter });
            previousWidths += this.calculateWidth(letter);
        }
        return result;
    }

    private getCssStyle(prop: string) {
        return window.getComputedStyle(this.renderer.nativeElement, null).getPropertyValue(prop);
    }

    private getCanvasFont() {
        const fontWeight = this.getCssStyle('font-weight') || 'normal';
        const fontSize = this.getCssStyle('font-size') || '16px';
        const fontFamily = this.getCssStyle('font-family') || 'Times New Roman';

        return `${fontWeight} ${fontSize} ${fontFamily}`;
    }
}

type LetterWithPreviousWidths = {
    previousWidths: number,
    letter: string
};