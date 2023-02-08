import { useContext } from 'react'
import { PlusCircle } from 'phosphor-react'
import { MusicContext } from '../../contexts/MusicContext'
import { CreatePlaylistButton } from './styles'

export function CreatePlaylist() {
  const { musicInMyPlaylist } = useContext(MusicContext)
  const isButtonCreatePlaylistDisable = musicInMyPlaylist.length === 0

  return (
    <CreatePlaylistButton disabled={isButtonCreatePlaylistDisable}>
      <PlusCircle weight="fill" size={28} />
      Create Playlist
    </CreatePlaylistButton>
  )
}
