import { HexSide } from "./HexSide";

export class HexSides<T> {
    Sides: { [side in HexSide]: T };

    Rotate(): HexSides<T> {
        return Object.assign(new HexSides<T>(), { ...this.Sides});
    }

    AsArray(): T[] {
        return [
            this.Sides[HexSide.Top], 
            this.Sides[HexSide.LeftTop], 
            this.Sides[HexSide.LeftBottom], 
            this.Sides[HexSide.Bottom], 
            this.Sides[HexSide.RightBottom], 
            this.Sides[HexSide.RightTop]
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

    OppositeEqual(hexSides: HexSides<T>, side: HexSide): boolean {
        switch (side) {
            
        }
    }

    SideEqual(side1: T, side2: T): boolean {
        if (side1 == null && side2 == null) {
            return true;
        }

        return side1 === side2;
    }
}