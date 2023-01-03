import { useContext } from "react";
import { MusicContext } from "../../contexts/MusicContext";
import { MusicCard } from "../MusicCard";
import { ContainerPlaylistCard } from "./styles";


export function PlaylistCard(){
    const { musicsOnPlaylist, playlistFiltered } = useContext(MusicContext)

    return(
        <ContainerPlaylistCard>
            <h1>{musicsOnPlaylist?.name}</h1>

            {playlistFiltered?.songs.length! === 0 && musicsOnPlaylist?.songs.map((item) => {
                return(
                    <MusicCard 
                        key={item.id}
                        pictureUrl={item.pictureUrl}
                        artists={item.artists}
                        name={item.name}
                        duration={item.duration}
                    />
                )
            })}

            {playlistFiltered?.songs.length! > 0 && (playlistFiltered?.songs.map((item) => {
                return(
                    <MusicCard 
                        key={item.id}
                        pictureUrl={item.pictureUrl}
                        artists={item.artists}
                        name={item.name}
                        duration={item.duration}
                    />
                )
            }))}
        </ContainerPlaylistCard>
    )
}