import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Timing } from '../../utility/timing.utility';

@Component({
    selector: 'odometer-input',
    templateUrl: './odometer-input.component.html',
    styleUrls: ['./odometer-input.component.scss']
})
export class OdometerInputComponent implements OnInit {
    public range: number[] = [];
    private _selectedIndex: number = 0;
    public get selectedIndex(): number {
        return this._selectedIndex;
    }
    public set selectedIndex(value: number) {
        this._selectedIndex = value;
        this.sendOutput(this.range[this._selectedIndex]);
    }

    @Input() min: number = 0;
    @Input() max: number = 9;
    @Input() value: number = 0;
    @Output() valueChange = new EventEmitter<number>();
    private sendOutput = Timing.debounce((value: number) => this.valueChange.emit(value), 500);


    @ViewChild("odometer") odometer!: ElementRef<HTMLDivElement>;
    public mouseOffset = 0;
    private previousY = 0;
    private previousIndex = 0;

    ngOnInit() {
        for (let i = this.min; i <= this.max; i++) {
            this.range.push(i);
        }
        this.selectedIndex = this.range.findIndex((val) => val === this.value);
    }

    ngAfterViewInit() {
        fromEvent(this.odometer.nativeElement, 'mousewheel').subscribe((event: any) => {
            event.preventDefault();
            let timer = 0;
            const interval = setInterval(() => {
                console.log(event.wheelDelta);
                this.mouseOffset += event.wheelDelta > 0 ? 3 : -3;
                if (Math.abs(this.mouseOffset) >= 45) {
                    this.selectedIndex = Math.floor((this.selectedIndex - this.mouseOffset / 45 + this.range.length) % this.range.length);
                    this.mouseOffset -= Math.sign(this.mouseOffset) * 45;
                }
                if (++timer === 15) {
                    clearInterval(interval);
                }
            }, 30);
        });
    }

    dragStart(event: DragEvent) {
        this.mouseOffset = 0;
        if (event.dataTransfer) {
            event.dataTransfer.setDragImage(document.createElement("div"), 8, 8);
            event.dataTransfer.effectAllowed = "none";
        }
    }

    dragEnd() {
        this.mouseOffset = 0;
        this.previousY = 0;
        this.selectedIndex = this.previousIndex;
    }

    dragEvent(event: DragEvent) {
        this.mouseOffset += event.offsetY - this.previousY;
        this.previousY = event.offsetY;
        if (Math.abs(this.mouseOffset) >= 45) {
            this.previousIndex = this.selectedIndex;
            this.selectedIndex = Math.floor((this.selectedIndex - this.mouseOffset / 45 + this.range.length) % this.range.length);
            this.mouseOffset -= Math.sign(this.mouseOffset) * 45;
        }
    }
}
