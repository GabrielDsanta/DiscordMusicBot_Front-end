import { useContext, useState } from "react";
import { MusicContext } from "../../contexts/MusicContext";

import { PlusCircle } from "phosphor-react";
import { MyPlaylist } from "../../components/MyPlaylist";
import { PlaylistCard } from '../../components/PlaylistCard/index'
import { ModalCreatePlaylist } from '../../components/ModalCreatePlayList'
import { ChangeEvent, useContext, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { MusicContext, PlaylistData } from "../../contexts/MusicContext";

export function PlaylistCards() {
    const [openModal, setOpenModal] = useState(false)
    const [inputFilterTextContent, setInputFilterTextContent] = useState('')
    const { musicsOnPlaylist, CallFilteredSongsOnPlaylist } = useContext(MusicContext)

    function FilterPlaylist(){
        const filteredPlaylist = musicsOnPlaylist?.songs.filter((item) => {
            return item.artists.toLowerCase().includes(inputFilterTextContent.toLowerCase())
        })

        const newPlaylist: PlaylistData = {
            artists: musicsOnPlaylist?.artists!,
            name: musicsOnPlaylist?.name!,
            songs: filteredPlaylist!,
        }

        CallFilteredSongsOnPlaylist(newPlaylist)
    }

    function HandleAddText(event: ChangeEvent<HTMLInputElement>){
        setInputFilterTextContent(event.target.value)
    }

    return (
        <ContainerPlaylistsCards>

            <ContainerCreatePlaylist>
                <input 
                    onBlur={FilterPlaylist} 
                    type="text" 
                    value={inputFilterTextContent}
                    onChange={HandleAddText}
                />

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