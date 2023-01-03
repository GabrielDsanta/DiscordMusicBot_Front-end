import { useContext, useState } from "react";
import { MusicContext } from "../../contexts/MusicContext";

import { PlusCircle } from "phosphor-react";
import { MyPlaylist } from "../../components/MyPlaylist";
import { PlaylistCard } from '../../components/PlaylistCard/index'
import { ModalCreatePlaylist } from '../../components/ModalCreatePlayList'
import { ContainerPlaylistsCards, ContainerCards, ContainerCreatePlaylist, CreatePlaylistButton } from "./styles";

export function PlaylistCards() {
    const [openModal, setOpenModal] = useState(false)
    const { musicInMyPlaylist } = useContext(MusicContext)
    const isCreatePlaylistDisabled = musicInMyPlaylist.length === 0
    return (
        <ContainerPlaylistsCards>
            <ContainerCreatePlaylist>
                <CreatePlaylistButton onClick={() => setOpenModal(true)} disabled={isCreatePlaylistDisabled}>
                    <PlusCircle weight="fill" size={28} />
                    Create Playlist
                </CreatePlaylistButton>
            </ContainerCreatePlaylist>

            <ContainerCards>
                <PlaylistCard />
                <MyPlaylist />
            </ContainerCards>

            <ModalCreatePlaylist onOpen={openModal} onClose={() => setOpenModal(false)} />
        </ContainerPlaylistsCards>
    )
}