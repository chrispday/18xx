import { Company } from "../Company/Company";
import { Tile } from "./Tile";
import { Token } from "../Company/Token";
import { Colour } from "../Colour";
import { Track } from "./Track";
import { HexSide } from "./HexSide";

type TrackPath = {exit: HexSide, track: Track, connected: TrackPath[]};

export function MapTracks(company: Company) {
    const stationTracks = company.Tokens.map(token => token.Station.Track);
    let seen: Track[] = [];
    const tracks = stationTracks.map(track => MapTrackExits(company, track, seen));
} 

function MapTrackExits(company: Company, from: Track, seen: Track[]): TrackPath[] {
    if (seen.some(t => t === from)) {
        return [];
    }
    seen.push(from);

    const exits = from.Exits.AsArray().filter(exit => exit.item).map(exit => exit.side);
    const tiles = exits.map(exit => ({ exit, tile: from.Tile.Neighbours.Sides[exit] })).filter(tile => tile.tile);
    const tracks = tiles.map(tile => ({ exit: tile.exit, track: tile.tile.ConnectedTrack(from) })).filter(track => track.track);

    return tracks.map(t => ({
        exit: t.exit,
        track: t.track,
        connected: MapTrackExits(company, t.track, seen)
    }));
}

export function CanReach(company: Company, reach: Tile): boolean {
    return company.Tokens
        .filter(token => null != token.Station)
        .some(token => TrackCanReachTile(company, token.Station.Track, reach));
}

function TrackCanReachTile(company: Company, track: Track, reach: Tile, seen: Track[] = []): boolean {
    if (seen.some(t => t === track)) {
        return false;
    }
    seen.push(track);
    
    // check if track is on tile we need to reach
    if (track.Tile.Equals(reach)) {
        return true;
    }

    // check if track is stationed out
    if (!track.Station || !track.Station.CanPassThrough(company)) {
        return false;
    }

    const trackExits = track.Exits.AsArray().filter(exit => exit.item).map(exit => exit.side);
    const exitTiles = trackExits.map(exit => ({ exit, tile: track.Tile.Neighbours.Sides[exit] })).filter(tile => null != tile.tile);

    // check if track exit goes to empty hex
    if (exitTiles.some(tile => Colour.Board == tile.tile.Colour && tile.tile.Equals(reach))) {
        return true;
    }

    // check track exit matches tile track
    const connectedTracks = exitTiles.map(tile => tile.tile.Tracks.filter(exitTrack => track.IsConnected(exitTrack)));
    return connectedTracks.some(tracks => tracks.some(t => TrackCanReachTile(company, t, reach, seen)));
}