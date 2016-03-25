// Type definitions for Shapeshift.js
// Project: http://mcpants.github.io/jquery.shapeshift/
// Definitions by: James Burton <https://github.com/jamesburton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/

/// <reference path="../jquery/jquery.d.ts" />

declare namespace Shapeshift {
    interface Options {
        //# The Basics
        selector?: string;  // Default: "*"

        //# Features
        enableDrag?: boolean;  // Default: true
        enableCrossDrop?: boolean;  // Default: true
        enableResize?: boolean;  // Default: true
        enableTrash?: boolean;  // Default: false

        //# Grid Properties
        align?: string;  // Default: "center"
        colWidth?: number;  // Default: null
        columns?: number;  // Default: null
        minColumns?: number;  // Default: 1
        autoHeight?: boolean;  // Default: true
        maxHeight?: number;  // Default: null
        minHeight?: number;  // Default: 100
        gutterX?: number;  // Default: 10
        gutterY?: number;  // Default: 10
        paddingX?: number;  // Default: 10
        paddingY?: number;  // Default: 10

        //# Animation
        animated?: boolean;  // Default: true
        animateOnInit?: boolean;  // Default: false
        animationSpeed?: number;  // Default: 225
        animationThreshold?: number;  // Default: 100

        //# Drag / Drop Options
        dragClone?: boolean;  // Default: false
        deleteClone?: boolean;  // Default: true
        dragRate?: number;  // Default: 100
        dragWhitelist?: string;  // Default: "*"
        crossDropWhitelist?: string;  // Default: "*"
        cutoffStart?: number;  // Default: null
        cutoffEnd?: number;  // Default: null
        handle?: boolean;  // Default: false

        //# Customize CSS
        cloneClass?: string;  // Default: "ss-cloned-child"
        activeClass?: string;  // Default: "ss-active-child"
        draggedClass?: string;  // Default: "ss-dragged-child"
        placeholderClass?: string;  // Default: "ss-placeholder-child"
        originalContainerClass?: string;  // Default: "ss-original-container"
        currentContainerClass?: string;  // Default: "ss-current-container"
        previousContainerClass?: string;  // Default: "ss-previous-container"
    }
}

interface JQuery {
    /**
     * Create a notification positioned relative to the currently selected element.
     */
    shapeshift(): void;
    shapeshift(options?: Shapeshift.Options): void;
}
