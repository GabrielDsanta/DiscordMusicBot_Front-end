import { MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, useContext } from 'react'
import { MusicContext } from '../../contexts/MusicContext'
import {
  ContainerButtonFindPlaylist,
  ContainerFindPLaylist,
  InputFindPlaylist,
} from './styles'

interface FindPlaylistProps {
  addText: (event: ChangeEvent<HTMLInputElement>) => void
}
export function FindPlaylist({ addText }: FindPlaylistProps) {
  const { inputFilterTextContent } = useContext(MusicContext)
  return (
    <ContainerFindPLaylist>
      <InputFindPlaylist
        type="text"
        onChange={addText}
        value={inputFilterTextContent}
      />
      <ContainerButtonFindPlaylist>
        <MagnifyingGlass size={28} />
      </ContainerButtonFindPlaylist>
    </ContainerFindPLaylist>
  )
}
