import { Colour } from "../Colour";
import { Track } from "./Track";
import { HexSides } from "./HexSides";

export class Tile {
    Name?: string; // eg. Z, Chicago
    Colour: Colour;
    Income: number;
    Tracks: Track[];

    Row: string;
    Column: string;
    Neighbours: HexSides<Tile>;

    Cost: number;
    ExitCosts: HexSides<number>;

    Equals(tile: Tile) : boolean {
        return this.Row === tile.Row && this.Column === tile.Column; 
    }
    Rotate(rotations: number = 1): Tile {
        let rotatedTracks = [...this.Tracks];
        while (0 < rotations--) {
            rotatedTracks = rotatedTracks.map(t => t.Rotate());
        }

        return Object.assign(new Tile(), this, { Tracks: rotatedTracks });
    }

    AllRotations(): Tile[] {
        return [0,1,2,3,4,5].map(i => this.Rotate(i));
    }
    
    CanUpgrade(upgradeTo: Tile): boolean {
        if (!this.CanUpgradeColour(upgradeTo)) {
            return false;
        }

        if ((this.Name || "") !== (upgradeTo.Name || "")) {
            return false;
        }

        if (0 != this.PossibleUpgradeRotations(upgradeTo).length) {
            return false;
        }

        return true;
    }

    PossibleUpgradeRotations(upgradeTo: Tile): Tile[] {
        return upgradeTo.AllRotations().filter(t => this.HasSameExits(t));       
    }

    HasSameExits(compareTo: Tile): boolean {
        return this.Tracks.every(t => t.HasSameExits(compareTo.Tracks));
    }

    HasSomeExits(compareTo: Tile): boolean {
        return this.Tracks.some(t => t.HasSameExits(compareTo.Tracks));
    }

    CanUpgradeColour(upgradeTo: Tile): boolean {
        switch (this.Colour) {
            case Colour.Board:
                return upgradeTo.Colour === Colour.Yellow;
            case Colour.Yellow:
                return upgradeTo.Colour === Colour.Green;
            case Colour.Green:
                return upgradeTo.Colour === Colour.Brown;
            case Colour.Brown:
                return upgradeTo.Colour === Colour.Grey;
            default:
                return false; 
        }
    }
} 