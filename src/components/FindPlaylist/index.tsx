import { ChangeEvent, useContext } from 'react'
import { MagnifyingGlass } from 'phosphor-react'
import { MusicContext } from '../../contexts/MusicContext'
import {
  ContainerButtonFindPlaylist,
  ContainerFindPLaylist,
  InputFindPlaylist,
} from './styles'

export function FindPlaylist() {
  const { inputFilterTextContent, CallSetInputFilterTextContent } =
    useContext(MusicContext)

  function HandleAddText(event: ChangeEvent<HTMLInputElement>) {
    CallSetInputFilterTextContent(event.target.value)
  }
  return (
    <ContainerFindPLaylist>
      <InputFindPlaylist
        type="text"
        onChange={HandleAddText}
        value={inputFilterTextContent}
      />
      <ContainerButtonFindPlaylist>
        <MagnifyingGlass size={28} />
      </ContainerButtonFindPlaylist>
    </ContainerFindPLaylist>
  )
}
