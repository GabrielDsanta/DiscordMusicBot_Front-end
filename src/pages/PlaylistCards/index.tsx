import * as Dialog from '@radix-ui/react-dialog'

import { useContext } from 'react'
import { MusicContext } from '../../contexts/MusicContext'

import { MyPlaylist } from '../../components/MyPlaylist'
import { FindPlaylist } from '../../components/FindPlaylist'
import { FilterPlaylist } from '../../components/FilterPlaylist'
import { PlaylistCard } from '../../components/PlaylistCard/index'
import { CreateNewPlaylistModal } from '../../components/CreateNewPlayListModal'

import {
  ContainerPlaylistsCards,
  ContainerCreatePlaylist,
  ContainerCards,
  CreatePlaylistButton,
} from './styles'
import { PlusCircle } from 'phosphor-react'
import { useRecoilValue } from 'recoil'
import { atomToken, atomUser } from '../../store/atoms'
import { useNavigate } from 'react-router-dom'

export function PlaylistCards() {
  const navigate = useNavigate()
  const user = useRecoilValue(atomUser)
  const token = useRecoilValue(atomToken)

  if (user === undefined && token === '') {
    navigate('/logout')
  }

  console.log(user, token)

  const { musicsOnPlaylist, musicInMyPlaylist } = useContext(MusicContext)

  const isButtonCreatePlaylistDisable = musicInMyPlaylist.length === 0

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

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <CreatePlaylistButton disabled={isButtonCreatePlaylistDisable}>
              <PlusCircle weight="fill" size={28} />
              Create Playlist
            </CreatePlaylistButton>
          </Dialog.Trigger>

          <CreateNewPlaylistModal />
        </Dialog.Root>

        <FilterPlaylist />
      </ContainerCreatePlaylist>

      <ContainerCards>
        {musicsOnPlaylist.length > 0 &&
          musicsOnPlaylist?.map((item, index) => {
            return (
              <PlaylistCard
                id={item.id}
                key={item.id}
                name={item.name}
                artists={item.artists}
                songs={item.songs}
              />
            )
          })}
        <MyPlaylist />
      </ContainerCards>
    </ContainerPlaylistsCards>
  )
}
