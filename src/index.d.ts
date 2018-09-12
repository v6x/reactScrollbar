declare module 'react-scrollbar' {
  interface ScrollAreaProps extends React.Props<ScrollArea> {
    className?: string;
    style?: React.CSSProperties;
    speed?: number;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    vertical?: boolean;
    verticalContainerStyle?: React.CSSProperties;
    verticalScrollbarStyle?: React.CSSProperties;
    horizontal?: boolean;
    horizontalContainerStyle?: React.CSSProperties;
    horizontalScrollbarStyle?: React.CSSProperties;
    onScroll?: (
      value: {
        leftPosition: number;
        topPosition: number;
        containerHeight: number;
        containerWidth: number;
        realHeight: number;
        realWidth: number;
      },
    ) => void;
    contentWindow?: any;
    ownerDocument?: any;
    smoothScrolling?: boolean;
    minScrollSize?: number;
    swapWheelAxes?: boolean;
    stopScrollPropagation?: boolean;
    focusableTabIndex?: number;

    onUpdate?: () => void;
    onMouseUp?: () => void;
    onMouseDown?: () => void;
    onTouch?: () => void;
    preventWheel?: boolean;
    verticalScrollbarClassName?: string;
    verticalScrollbarContainerClassName?: string;
    horizontalScrollbarClassName?: string;
    horizontalScrollbarContainerClassName?: string;
    middleChildren?: () => void;
  }

  interface ScrollAreaStates {
    topPosition: number;
    leftPosition: number;
    realHeight: number;
    containerHeight: number;
    realWidth: number;
    containerWidth: number;
    cursor: string;
  }

  interface ScrollAreaController {
    refresh: () => void;
    scrollTop: () => void;
    scrollBottom: () => void;
    scrollYTo: (position: number) => void;
    scrollLeft: () => void;
    scrollRight: () => void;
    scrollXTo: (position: number) => void;
  }

  class ScrollArea extends React.Component<ScrollAreaProps, ScrollAreaStates> {
    public scrollArea: ScrollAreaController;
    public mousePressing: boolean;
    public touching: boolean;

    public setSizesToState: () => void;
    public scrollTop: () => void;
    public scrollBottom: () => void;
    public scrollYTo: (position: number) => void;
    public scrollLeft: () => void;
    public scrollRight: () => void;
    public scrollXTo: (position: number) => void;

    public preventGrabbing: () => void;
    public resumeGrabbing: () => void;
  }

  export = ScrollArea;
}
