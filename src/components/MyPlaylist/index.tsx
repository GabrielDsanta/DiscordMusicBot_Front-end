import { useContext } from "react";
import { MusicContext } from "../../contexts/MusicContext";
import { MusicCard } from "../MusicCard";
import { ContainerPlaylistCard } from "../PlaylistCard/styles";
import { ContainerContent } from "./styles";



export function MyPlaylist() {

    const { musicInMyPlaylist } = useContext(MusicContext)


    return (
        <ContainerContent>
            <ContainerPlaylistCard>
                <h1>My Playlist</h1>
                {musicInMyPlaylist.map((item) => {
                    return (
                        <MusicCard
                            imageSrc={item.imageSrc}
                            artist={item.artist}
                            minutesDurationMusic={item.minutesDurationMusic}
                            secondsDurationMusic={item.secondsDurationMusic}
                            musicName={item.musicName}
                            icon="Delete"
                        />
                    )
                })}
            </ContainerPlaylistCard>

        </ContainerContent>
    )
}