/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
export declare class jqxTreeComponent implements OnChanges {
    attrAnimationShowDuration: number;
    attrAnimationHideDuration: number;
    attrAllowDrag: boolean;
    attrAllowDrop: boolean;
    attrCheckboxes: boolean;
    attrDragStart: (item: any) => boolean;
    attrDragEnd: (dragItem?: any, dropItem?: any, args?: any, dropPosition?: any, tree?: any) => boolean;
    attrDisabled: boolean;
    attrEasing: string;
    attrEnableHover: boolean;
    attrHasThreeStates: boolean;
    attrIncrementalSearch: boolean;
    attrKeyboardNavigation: boolean;
    attrRtl: boolean;
    attrSource: any;
    attrToggleIndicatorSize: number;
    attrToggleMode: any;
    attrTheme: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxTree;
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
    animationShowDuration(arg?: number): any;
    animationHideDuration(arg?: number): any;
    allowDrag(arg?: boolean): any;
    allowDrop(arg?: boolean): any;
    checkboxes(arg?: boolean): any;
    dragStart(arg?: (item: any) => boolean): any;
    dragEnd(arg?: (dragItem?: any, dropItem?: any, args?: any, dropPosition?: any, tree?: any) => boolean): any;
    disabled(arg?: boolean): any;
    easing(arg?: string): any;
    enableHover(arg?: boolean): any;
    height(arg?: number | string): any;
    hasThreeStates(arg?: boolean): any;
    incrementalSearch(arg?: boolean): any;
    keyboardNavigation(arg?: boolean): any;
    rtl(arg?: boolean): any;
    source(arg?: any): any;
    toggleIndicatorSize(arg?: number): any;
    toggleMode(arg?: string): any;
    theme(arg?: string): any;
    width(arg?: string | number): any;
    addBefore(item: any, id: string): void;
    addAfter(item: any, id: string): void;
    addTo(item: any, id: string): void;
    clear(): void;
    checkAll(): void;
    checkItem(item: any, checked: boolean): void;
    collapseAll(): void;
    collapseItem(item: any): void;
    destroy(): void;
    disableItem(item: any): void;
    ensureVisible(item: any): void;
    enableItem(item: any): void;
    enableAll(): void;
    expandAll(): void;
    expandItem(item: any): void;
    focus(): void;
    getCheckedItems(): Array<jqwidgets.TreeItem>;
    getUncheckedItems(): Array<jqwidgets.TreeItem>;
    getItems(): Array<jqwidgets.TreeItem>;
    getItem(element: any): jqwidgets.TreeItem;
    getSelectedItem(): jqwidgets.TreeItem;
    getPrevItem(item: any): jqwidgets.TreeItem;
    getNextItem(item: any): jqwidgets.TreeItem;
    hitTest(left: number, top: number): any;
    removeItem(item: any): void;
    render(): void;
    refresh(): void;
    selectItem(item: any): void;
    uncheckAll(): void;
    uncheckItem(item: any): void;
    updateItem(item: any, newItem: any): void;
    val(value?: string): any;
    onAdded: EventEmitter<{}>;
    onCheckChange: EventEmitter<{}>;
    onCollapse: EventEmitter<{}>;
    onDragStart: EventEmitter<{}>;
    onDragEnd: EventEmitter<{}>;
    onExpand: EventEmitter<{}>;
    onItemClick: EventEmitter<{}>;
    onRemoved: EventEmitter<{}>;
    onSelect: EventEmitter<{}>;
    __wireEvents__(): void;
}