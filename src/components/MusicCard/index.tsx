import { Plus, Trash } from 'phosphor-react'
import { MouseEvent, useContext } from 'react'
import { MusicCardData } from '../../models/music'
import { MusicContext } from '../../contexts/MusicContext'
import {
  ContainerButtonPLus,
  ContainerButtonTrash,
  ContainerMusicCard,
  ContainerMusicDetails,
} from './styles'
import { useFormatArtist } from '../../hooks/useFormatArtist'
import { useFormatName } from '../../hooks/useFormatName'

export function MusicCard({
  id,
  name,
  artists,
  duration,
  pictureUrl,
  icon = 'Plus',
}: MusicCardData) {
  const { CallSetMusic, CallDeleteMusicOnMyPlaylist } = useContext(MusicContext)

  const nameFormat = useFormatName(name)
  const artistsFormat = useFormatArtist(artists)

  function HandleAddMusicOnMyPlaylist(e: MouseEvent<HTMLButtonElement>) {
    CallSetMusic({ pictureUrl, artists, name, duration })
  }

  function HandleRemoveMusicOnMyPlaylist(e: MouseEvent<HTMLButtonElement>) {
    CallDeleteMusicOnMyPlaylist(name)
  }

  return (
    <ContainerMusicCard>
      <ContainerMusicDetails>
        <img height={40} width={40} src={pictureUrl} alt="Foto Do Artista" />

        <div>
          <h2>{nameFormat}</h2>
          <h3>{artistsFormat}</h3>
        </div>
      </ContainerMusicDetails>

      <ContainerMusicDetails>
        <h4>3:20</h4>
        {icon === 'Delete' ? (
          <ContainerButtonTrash onClick={HandleRemoveMusicOnMyPlaylist}>
            <Trash size={30} />
          </ContainerButtonTrash>
        ) : (
          <ContainerButtonPLus onClick={HandleAddMusicOnMyPlaylist}>
            <Plus size={30} weight="duotone" />
          </ContainerButtonPLus>
        )}
      </ContainerMusicDetails>
    </ContainerMusicCard>
  )
}
