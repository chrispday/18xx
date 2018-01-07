import { Colour } from "../Colour";
import { Track } from "./Track";

export class Tile {
    Colour: Colour;
    Income: number;
    Tracks: Track[];
    Name?: string; // eg. Z, Chicago

    Rotate(): Tile {
        return {
            ...this as any, 
            Tracks: this.Tracks.map(t => t.Rotate())
        };
    }
    
    CanUpgrade(upgradeTo: Tile): boolean {
        if (!this.CanUpgradeColour(upgradeTo)) {
            return false;
        }

        if ((this.Name || "") !== (upgradeTo.Name || "")) {
            return false;
        }

        if (!this.CanUpgradeForExits(upgradeTo)) {
            return false;
        }
    }

    CanUpgradeForExits(upgradeTo: Tile): boolean {

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