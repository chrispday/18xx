import { Company } from "../Company/Company";
import { Tile } from "./Tile";
import { Token } from "../Company/Token";
import { Colour } from "../Colour";
import { Track } from "./Track";

export function CanReach(company: Company, reach: Tile): boolean {
    return company.Tokens
        .filter(token => null != token.Station)
        .some(token => TrackCanReachTile(company, token.Station.Track, reach));
}

function TrackCanReachTile(company: Company, track: Track, reach: Tile, seen: Track[] = []): boolean {
    seen.push(track);
    
    if (track.Tile.Equals(reach)) {
        return true;
    }
}