export class HexSides<T> {
    Top: T;
    Bottom: T;
    LeftTop: T;
    LeftBottom: T;
    RightTop: T;
    RightBottom: T;

    Rotate(): HexSides<T> {
        return Object.assign(new HexSides<T>(), {
            Top: this.LeftTop,
            LeftTop: this.LeftBottom,
            LeftBottom: this.Bottom,
            Bottom: this.RightBottom,
            RightBottom: this.RightTop,
            RightTop: this.Top
        });
    }

    AsArray() {
        return [this.Top, this.LeftTop, this.LeftBottom, this.Bottom, this.RightBottom, this.RightTop];
    }

    HasSame(item: HexSides<T>): boolean {
        if (!this.SideEqual(this.Top, item.Top)) {
            return false;
        }

        if (!this.SideEqual(this.LeftTop, item.LeftTop)) {
            return false;
        }

        if (!this.SideEqual(this.LeftBottom, item.LeftBottom)) {
            return false;
        }

        if (!this.SideEqual(this.Bottom, item.Bottom)) {
            return false;
        }

        if (!this.SideEqual(this.RightBottom, item.RightBottom)) {
            return false;
        }

        if (!this.SideEqual(this.RightBottom, item.RightBottom)) {
            return false;
        }

        return true;
    }

    SideEqual(side1: T, side2: T): boolean {
        if (side1 == null && side2 == null) {
            return true;
        }

        return side1 === side2;
    }
}