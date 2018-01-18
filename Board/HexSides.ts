import { HexSide } from "./HexSide";

export class HexSides<T> {
    Sides: {[side in HexSide]: T };

    Rotate(): HexSides<T> {
        return Object.assign(new HexSides<T>(), { ...this.Sides });
    }

    AsArray(): { side: HexSide, item:T }[] {
        return [
            { side: HexSide.Top, item: this.Sides[HexSide.Top] },
            { side: HexSide.LeftTop, item: this.Sides[HexSide.LeftTop] },
            { side: HexSide.LeftBottom, item: this.Sides[HexSide.LeftBottom] },
            { side: HexSide.Bottom, item: this.Sides[HexSide.Bottom] },
            { side: HexSide.RightBottom, item: this.Sides[HexSide.RightBottom] },
            { side: HexSide.RightTop, item: this.Sides[HexSide.RightTop] }
        ];
    }

    HasSame(item: HexSides<T>): boolean {
        if (!this.SideEqual(this.Sides[HexSide.Top], item.Sides[HexSide.Top])) {
            return false;
        }

        if (!this.SideEqual(this.Sides[HexSide.LeftTop], item.Sides[HexSide.LeftTop])) {
            return false;
        }

        if (!this.SideEqual(this.Sides[HexSide.LeftBottom], item.Sides[HexSide.LeftBottom])) {
            return false;
        }

        if (!this.SideEqual(this.Sides[HexSide.Bottom], item.Sides[HexSide.Bottom])) {
            return false;
        }

        if (!this.SideEqual(this.Sides[HexSide.RightBottom], item.Sides[HexSide.RightBottom])) {
            return false;
        }

        if (!this.SideEqual(this.Sides[HexSide.RightBottom], item.Sides[HexSide.RightBottom])) {
            return false;
        }

        return true;
    }

    HasOpposite(hexSides: HexSides<T>, side: HexSide): boolean {
        switch (side) {
            case HexSide.Top:
                return this.SideEqual(this.Sides[side], hexSides[HexSide.Bottom]);
            case HexSide.RightTop:
                return this.SideEqual(this.Sides[side], hexSides[HexSide.LeftBottom]);
            case HexSide.RightBottom:
                return this.SideEqual(this.Sides[side], hexSides[HexSide.LeftTop]);
            case HexSide.Bottom:
                return this.SideEqual(this.Sides[side], hexSides[HexSide.Top]);
            case HexSide.LeftBottom:
                return this.SideEqual(this.Sides[side], hexSides[HexSide.RightTop]);
            case HexSide.LeftTop:
                return this.SideEqual(this.Sides[side], hexSides[HexSide.RightBottom]);
        }
    }

    SideEqual(side1: T, side2: T): boolean {
        if (side1 == null && side2 == null) {
            return true;
        }

        return side1 === side2;
    }
}