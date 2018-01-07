import { Station } from "../Station";
import { HexSides } from "../HexSides";

export class Track {
    Exits: HexSides<boolean>;
    Station: Station;

    Rotate(): Track {
        return {
            ...this as any, 
            Exits: this.Exits.Rotate()
        };
    }
}
