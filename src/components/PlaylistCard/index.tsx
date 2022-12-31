import { MusicCard } from "../MusicCard";
import { ContainerPlaylistCard } from "./styles";


export function PlaylistCard(){
    return(
        <ContainerPlaylistCard>
            <h1>New Releases</h1>
            <MusicCard />
        </ContainerPlaylistCard>
    )
}