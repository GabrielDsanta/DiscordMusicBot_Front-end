import { useContext } from "react";
import { PlusCircle } from "phosphor-react";
import { MusicContext } from "../../contexts/MusicContext";
import { MusicCard } from "../MusicCard";
import { ContainerPlaylistCard } from "../PlaylistCard/styles";
import { ContainerContent, CreatePlaylistButton } from "./styles";



export function MyPlaylist() {

    const { musicInMyPlaylist } = useContext(MusicContext)


    return (
        <ContainerContent>
            <CreatePlaylistButton>
                <PlusCircle  weight="fill" size={28} />
                Create Playlist
            </CreatePlaylistButton>

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