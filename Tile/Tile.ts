import { Colour } from "../Colour";
import { Track } from "./Track";

export class Tile {
    Colour: Colour;
    Income: number;
    Tracks: Track[];
    Name?: string; // eg. Z, Chicago

    Rotate(rotations: number = 1): Tile {
        let rotatedTracks = [...this.Tracks];
        while (0 < rotations--) {
            rotatedTracks = rotatedTracks.map(t => t.Rotate());
        }

        return { ...this as any, Tracks: rotatedTracks };
    }

    AllRotations(): Tile[] {
        return [0, 1,2,3,4,5].map(i => this.Rotate(i));
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
    }

    PossibleUpgradeRotations(upgradeTo: Tile): Tile[] {
        return upgradeTo.AllRotations().filter(t => this.HasSameExits(t));       
    }

    HasSameExits(compareTo: Tile): boolean {
        this.Tracks.every(t => t.HasSameExits(compareTo.Tracks));
    }

    CanUpgradeColour(upgradeTo: Tile): boolean {
        switch (this.Colour) {
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