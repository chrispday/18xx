import { Station } from "./Station";
import { HexSides } from "./HexSides";
import { Tile } from "./Tile";

export class Track {
    Exits: HexSides<boolean>;
    Station: Station;
    Tile: Tile;

    Rotate(): Track {
        return Object.assign(new Track(), this, { Exits: this.Exits.Rotate() });
    }

    HasSameExits(compareTo: Track[]): boolean {
        return compareTo.some(t => this.Exits.HasSame(t.Exits));
    }

    IsConnected(track: Track): boolean {
        
    }
}
