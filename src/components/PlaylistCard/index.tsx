import { useContext } from "react";
import { MusicContext } from "../../contexts/MusicContext";
import { MusicCard } from "../MusicCard";
import { ContainerPlaylistCard } from "./styles";


export function PlaylistCard(){
    const { musicsOnPlaylist } = useContext(MusicContext)
    console.log(musicsOnPlaylist)

    return(
        <ContainerPlaylistCard>

            <h1>New Releases</h1>
        </ContainerPlaylistCard>
    )
}