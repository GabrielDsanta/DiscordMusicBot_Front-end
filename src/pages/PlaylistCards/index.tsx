import { ContainerPlaylistsCards, ContainerCards, ContainerCreatePlaylist, CreatePlaylistButton } from "./styles";
import { PlaylistCard } from '../../components/PlaylistCard/index'
import { MyPlaylist } from "../../components/MyPlaylist";
import { ModalCreatePlaylist } from '../../components/ModalCreatePlayList'
import { useState } from "react";
import { PlusCircle } from "phosphor-react";

export function PlaylistCards() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <ContainerPlaylistsCards>
            <ContainerCreatePlaylist>
                <CreatePlaylistButton onClick={() => setOpenModal(true)}>
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