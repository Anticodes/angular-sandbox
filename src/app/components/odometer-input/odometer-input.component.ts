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
    @Input("max")
    private _max: number = 9;
    public set max(val: number) {
        this._max = val;
    }
    public get max() {
        return this._max + 1;
    }
    @Input() value: number = 0;
    @Output() valueChange = new EventEmitter<number>();
    private sendOutput = Timing.debounce((value: number) => this.valueChange.emit(value), 500);


    @ViewChild("odometer") odometer!: ElementRef<HTMLDivElement>;
    @ViewChild("handle") handle!: ElementRef<HTMLDivElement>;
    public clicking = false;
    public mouseOffset = 0;

    ngOnInit() {
        for (let i = this.min; i <= this.max; i++) {
            this.range.push(i);
        }
        this.selectedIndex = this.range.findIndex((val) => val === this.value);
    }

    ngAfterViewInit() {
        fromEvent(this.odometer.nativeElement, 'mousewheel').subscribe((event: any) => {
            event.preventDefault();
            if (event.wheelDelta > 0) {
                this.selectedIndex = Math.floor((this.selectedIndex - 1 + this.max) % this.max);
            } else {
                this.selectedIndex = Math.floor((this.selectedIndex + 1 + this.max) % this.max);
            }
        });
    }

    mouseDown() {
        this.mouseOffset = 0;
        this.clicking = true;
    }

    mouseUp() {
        this.mouseOffset = 0;
        this.handle.nativeElement.style.transform = "translateX(0px) translateY(0px) translateZ(99px)"
        this.clicking = false;
    }

    dragEvent(event: MouseEvent) {
        if (!this.clicking) return;
        const rect = this.odometer.nativeElement.getBoundingClientRect();
        this.handle.nativeElement.style.transform = `translateX(${event.x - rect.x - rect.width / 2}px) translateY(${event.y - rect.y - rect.height / 2}px) translateZ(99px)`;
        this.mouseOffset += event.movementY;
        if (Math.abs(this.mouseOffset) >= 32) {
            this.selectedIndex = Math.floor((this.selectedIndex - this.mouseOffset / 32 + this.max) % this.max);
            this.mouseOffset -= Math.sign(this.mouseOffset) * 32;
        }
    }
}
