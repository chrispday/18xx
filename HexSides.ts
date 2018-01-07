export class HexSides<T> {
    Top: T;
    Bottom: T;
    LeftTop: T;
    LeftBottom: T;
    RightTop: T;
    RightBottom: T;

    Rotate(): HexSides<T> {
        return {
            ...this as any,
            Top: this.LeftTop,
            LeftTop: this.LeftBottom,
            LeftBottom: this.Bottom,
            Bottom: this.RightBottom,
            RightBottom: this.RightTop,
            RightTop: this.Top
        };
    }

    HasSame(item: HexSides<T>): boolean {
        if (this.Top !== undefined || this.Top !== null)
    }
}