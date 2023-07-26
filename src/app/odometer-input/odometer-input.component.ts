import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounce } from '../../../../shared-types/util';
import { fromEvent } from 'rxjs';

@Component({
    selector: 'odometer-input',
    templateUrl: './odometer-input.component.html',
    styleUrls: ['./odometer-input.component.css']
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

    @Input() min: number;
    @Input() max: number;
    @Input() value: number;
    @Output() valueChange = new EventEmitter<number>();
    private sendOutput: Function;


    @ViewChild("odometer") odometer: ElementRef<HTMLDivElement>;
    public clicking = false;
    public mouseOffset = 0;

    ngOnInit() {
        this.sendOutput = debounce((value: number) => this.valueChange.emit(value), 500);
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
        this.clicking = false;
    }

    dragEvent(event: MouseEvent) {
        if (!this.clicking) return;
        this.mouseOffset += event.movementY;
        if (Math.abs(this.mouseOffset) >= 32) {
            this.selectedIndex = Math.floor((this.selectedIndex - this.mouseOffset / 32 + this.max) % this.max);
            this.mouseOffset -= Math.sign(this.mouseOffset) * 32;
        }
    }
}
