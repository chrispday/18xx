import { Station } from "./Station";
import { HexSides } from "./HexSides";
import { Tile } from "./Tile";

export class Track {
    Exits: HexSides<boolean>;
    Station: Station;
    Tile: Tile;

    constructor() {
        this.Exits = new HexSides<boolean>();
    }

    RotateClockwise(): Track {
        return Object.assign(new Track(), this, { Exits: this.Exits.RotateClockwise() });
    }

    HasSomeExitsSame(compareTo: Track[]): boolean {
        return compareTo.some(t => this.Exits.HasSame(t.Exits));
    }

    IsConnected(track: Track): boolean {
        return this.Exits.AsArray()
            .filter(exit => exit.item)
            .some(exit => this.Exits.HasOpposite(track.Exits, exit.side));
    }
}
