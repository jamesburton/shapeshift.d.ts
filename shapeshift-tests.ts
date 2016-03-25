/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../shapeshift/shapeshift.d.ts" />

var allOptions : Shapeshift.Options = {
        //# The Basics
        selector: "*",

        //# Features
        enableDrag: true,
        enableCrossDrop: true,
        enableResize: true,
        enableTrash: false,

        //# Grid Properties
        align: "center",
        colWidth: 100,
        columns: 4,
        minColumns: 1,
        autoHeight: true,
        maxHeight: 150,
        minHeight: 100,
        gutterX: 10,
        gutterY: 10,
        paddingX: 10,
        paddingY: 10,

        //# Animation
        animated: true,
        animateOnInit: false,
        animationSpeed: 225,
        animationThreshold: 100,

        //# Drag / Drop Options
        dragClone: false,
        deleteClone: true,
        dragRate: 100,
        dragWhitelist: "*",
        crossDropWhitelist: "*",
        cutoffStart: 3,
        cutoffEnd: 20,
        handle: false,

        //# Customize CSS
        cloneClass: "ss-cloned-child",
        activeClass: "ss-active-child",
        draggedClass: "ss-dragged-child",
        placeholderClass: "ss-placeholder-child",
        originalContainerClass: "ss-original-container",
        currentContainerClass: "ss-current-container",
        previousContainerClass: "ss-previous-container"
};

test_shapeshift();
test_shapeshift(allOptions);
