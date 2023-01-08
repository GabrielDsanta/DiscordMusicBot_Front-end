import { useContext } from "react";
import { MusicCardData, MusicContext, PlaylistData } from "../../contexts/MusicContext";
import { MusicCard } from "../MusicCard";
import { ContainerButtonRemovePlaylist, ContainerPlaylistCard, ContainerTitlePlaylist } from "./styles";
import { v4 as uuidv4 } from 'uuid'
import { X } from 'phosphor-react'


export function PlaylistCard({ id, name, artists, songs }: PlaylistData) {
    const { musicsOnPlaylist, playlistFiltered, CallSetSongsOnPlaylist } = useContext(MusicContext)

    function HandleDeltePlaylist(){
        const playlistToBeDeleted = musicsOnPlaylist?.filter((item: PlaylistData) => {
            return item.id !== id
        })

        CallSetSongsOnPlaylist(playlistToBeDeleted!)
    }

    return (
        <ContainerPlaylistCard>
            <ContainerTitlePlaylist>
                <h1>{name}</h1>

                <ContainerButtonRemovePlaylist onClick={HandleDeltePlaylist}>
                    <X size={32} />
                </ContainerButtonRemovePlaylist>
            </ContainerTitlePlaylist>

            {playlistFiltered?.songs.length > 0 ? (playlistFiltered?.songs.map((item: MusicCardData) => {
                return (
                    <div>

                    </div>
                    // <MusicCard
                    //     pictureUrl={item.pictureUrl}
                    //     artists={item.artists}
                    //     name={item.name}
                    //     duration={item.duration}
                    // />
                )
            })): songs.map((item: MusicCardData) => {
                return (
                    <MusicCard
                        id={uuidv4()}
                        key={uuidv4()}
                        pictureUrl={item.pictureUrl}
                        artists={item.artists}
                        name={item.name}
                        duration={item.duration}
                    />
                )
            })}
        </ContainerPlaylistCard>
    )
}