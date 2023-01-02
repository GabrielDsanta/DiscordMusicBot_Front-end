import { ContainerPlaylistsCards } from "./styles";
import { PlaylistCard } from '../../components/PlaylistCard/index'
import { MyPlaylist } from "../../components/MyPlaylist";


export function PlaylistCards(){
    return(
        <ContainerPlaylistsCards>
            <PlaylistCard />
            <MyPlaylist />
        </ContainerPlaylistsCards>
    )
}