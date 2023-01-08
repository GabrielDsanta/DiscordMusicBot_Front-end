
import { MyPlaylist } from "../../components/MyPlaylist";
import { PlaylistCard } from '../../components/PlaylistCard/index'
import { ModalCreatePlaylist } from '../../components/ModalCreatePlayList'
import { ChangeEvent, useContext, useState } from "react";
import { PlusCircle, FunnelSimple, MagnifyingGlass } from "phosphor-react";
import { MusicCardData, MusicContext, PlaylistData } from "../../contexts/MusicContext";
import { ContainerPlaylistsCards, ContainerCreatePlaylist, CreatePlaylistButton, ContainerCards, ContainerFilterButton, ContainerFilterOptions, InputFindPlaylist, ContainerInputFilterArtist, ContainerButtonHandleFilter } from "./styles";

export function PlaylistCards() {
    const [openModal, setOpenModal] = useState(false)
    const [inputFilterTextContent, setInputFilterTextContent] = useState('')
    const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(true)
    const { musicsOnPlaylist, CallFilteredSongsOnPlaylist, musicInMyPlaylist } = useContext(MusicContext)

    const isButtonCreatePlaylistDisable = musicInMyPlaylist.length === 0

    // function FilterPlaylist() {
    //     const filteredPlaylist = musicsOnPlaylist?.songs.filter((item: MusicCardData) => {
    //         return item.artists.toLowerCase().includes(inputFilterTextContent.toLowerCase())
    //     })

    //     const newPlaylist: PlaylistData = {
    //         artists: musicsOnPlaylist?.artists!,
    //         name: musicsOnPlaylist?.name!,
    //         songs: filteredPlaylist!,
    //     }

    //     CallFilteredSongsOnPlaylist(newPlaylist)
    // }

    function HandleAddText(event: ChangeEvent<HTMLInputElement>) {
        setInputFilterTextContent(event.target.value)
    }

    function HandleOpenFilterOptions(){
        setIsFilterOptionsOpen(!isFilterOptionsOpen)
    }

    return (
        <ContainerPlaylistsCards>

            <ContainerCreatePlaylist>
                <InputFindPlaylist
                    type="text"
                    // onBlur={FilterPlaylist}
                    value={inputFilterTextContent}
                    onChange={HandleAddText}
                />

                <CreatePlaylistButton onClick={() => setOpenModal(true)} disabled={isButtonCreatePlaylistDisable}>
                    <PlusCircle weight="fill" size={28} />
                    Create Playlist
                </CreatePlaylistButton>

                <ContainerFilterButton onClick={HandleOpenFilterOptions}>
                    <FunnelSimple size={28} />
                </ContainerFilterButton>

               {isFilterOptionsOpen && (
                 <ContainerFilterOptions>
                    <label htmlFor="">Artista</label>
                    
                    <ContainerInputFilterArtist>
                        <input type="text" />

                        <ContainerButtonHandleFilter>
                            <MagnifyingGlass size={20}/>
                        </ContainerButtonHandleFilter>
                    </ContainerInputFilterArtist>
                 </ContainerFilterOptions>
               )}

            </ContainerCreatePlaylist>

            <ContainerCards>
                {musicsOnPlaylist.length > 0 && (
                    musicsOnPlaylist?.map((item: PlaylistData, index) => {
                        if (index > 0) {
                            return (
                                <PlaylistCard
                                    id={item.id}
                                    key={item.id}
                                    name={item.name}
                                    artists={item.artists}
                                    songs={item.songs}
                                />
                            )
                        }
                    })
                )}
                <MyPlaylist />
            </ContainerCards>

            <ModalCreatePlaylist onOpen={openModal} onClose={() => setOpenModal(false)} />
        </ContainerPlaylistsCards>
    )
}