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
                            id={item.id}
                            key={item.id}
                            pictureUrl={item.pictureUrl}
                            artists={item.artists}
                            name={item.name}
                            duration={item.duration}
                            icon="Delete"
                        />
                    )
                })}
            </ContainerPlaylistCard>

        </ContainerContent>
    )
}