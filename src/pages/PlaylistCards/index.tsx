import { MyPlaylist } from '../../components/MyPlaylist'
import { PlaylistCard } from '../../components/PlaylistCard/index'
import { ModalCreatePlaylist } from '../../components/ModalCreatePlayList'
import { ChangeEvent, useContext, useState } from 'react'
import { FunnelSimple, MagnifyingGlass } from 'phosphor-react'
import {
  MusicCardData,
  MusicContext,
  PlaylistData,
} from '../../contexts/MusicContext'
import {
  ContainerPlaylistsCards,
  ContainerCreatePlaylist,
  ContainerCards,
} from './styles'
import { FindPlaylist } from '../../components/FindPlaylist'
import { CreatePlaylist } from '../../components/CreatePlaylist'
import { FilterPlaylist } from '../../components/FilterPlaylist'

export function PlaylistCards() {
  const [openModal, setOpenModal] = useState(false)

  const {
    musicsOnPlaylist,
    CallFilteredSongsOnPlaylist,
    musicInMyPlaylist,
    inputFilterTextContent,
    CallSetInputFilterTextContent,
  } = useContext(MusicContext)

  // function FilterPlaylist() {
  //   const filteredPlaylist = musicsOnPlaylist?.songs.filter(
  //     (item: MusicCardData) => {
  //       return item.artists
  //         .toLowerCase()
  //         .includes(inputFilterTextContent.toLowerCase())
  //     },
  //   )

  //   const newPlaylist: PlaylistData = {
  //     artists: musicsOnPlaylist?.artists!,
  //     name: musicsOnPlaylist?.name!,
  //     songs: filteredPlaylist!,
  //   }

  //   CallFilteredSongsOnPlaylist(newPlaylist)
  // }

  return (
    <ContainerPlaylistsCards>
      <ContainerCreatePlaylist>
        <FindPlaylist />

        <CreatePlaylist />

        <FilterPlaylist />
      </ContainerCreatePlaylist>

      <ContainerCards>
        {musicsOnPlaylist.length > 0 &&
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
          })}
        <MyPlaylist />
      </ContainerCards>

      <ModalCreatePlaylist
        onOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </ContainerPlaylistsCards>
  )
}
