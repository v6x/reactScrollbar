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

  class ScrollArea extends React.Component<ScrollAreaProps, ScrollAreaStates> {}

  export = ScrollArea;
}
