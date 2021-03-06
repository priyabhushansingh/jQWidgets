/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxProgressBarComponent implements OnChanges {
    attrAnimationDuration: number;
    attrColorRanges: Array<jqwidgets.ProgressBarColorRanges>;
    attrDisabled: boolean;
    attrLayout: any;
    attrMax: string | number;
    attrMin: number | string;
    attrOrientation: any;
    attrRtl: boolean;
    attrRenderText: any;
    attrShowText: boolean;
    attrTemplate: any;
    attrTheme: string;
    attrValue: string | number;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxProgressBar;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    animationDuration(arg?: number): any;
    colorRanges(arg?: Array<jqwidgets.ProgressBarColorRanges>): any;
    disabled(arg?: boolean): any;
    height(arg?: string | number): any;
    layout(arg?: string): any;
    max(arg?: string | number): any;
    min(arg?: number | string): any;
    orientation(arg?: string): any;
    rtl(arg?: boolean): any;
    renderText(arg?: any): any;
    showText(arg?: boolean): any;
    template(arg?: string): any;
    theme(arg?: string): any;
    value(arg?: string | number): any;
    width(arg?: string | number): any;
    actualValue(value: number | string): void;
    destroy(): void;
    val(value?: number | string): any;
    onComplete: EventEmitter<{}>;
    onInvalidValue: EventEmitter<{}>;
    onValueChanged: EventEmitter<{}>;
    __wireEvents__(): void;
}
