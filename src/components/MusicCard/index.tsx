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

export function MusicCard({
  id,
  name,
  artists,
  duration,
  pictureUrl,
  icon = 'Plus',
}: MusicCardData) {
  const { CallSetMusic, CallDeleteMusicOnMyPlaylist } = useContext(MusicContext)

  if (artists?.length! > 15) {
    let arrayString = artists?.split(' ')
    arrayString = arrayString?.slice(0, 2)
    artists = arrayString?.join(' ')
  }

  if (name?.length! > 15) {
    let arrayString = name?.split(' ')
    arrayString[2]?.length > 10
      ? (arrayString = arrayString?.slice(0, 2))
      : (arrayString = arrayString?.slice(0, 4))
    name = arrayString?.join(' ')
  }

  function HandleAddMusicOnMyPlaylist(e: MouseEvent<HTMLButtonElement>) {
    const newMusicOnMyPlaylist: MusicCardData = {
      pictureUrl,
      artists,
      name,
      duration,
    }

    CallSetMusic(newMusicOnMyPlaylist)
  }

  function HandleRemoveMusicOnMyPlaylist(e: MouseEvent<HTMLButtonElement>) {
    CallDeleteMusicOnMyPlaylist(name)
  }

  return (
    <ContainerMusicCard>
      <ContainerMusicDetails>
        <img height={40} width={40} src={pictureUrl} alt="Foto Do Artista" />

        <div>
          <h2>{name}</h2>
          <h3>{artists}</h3>
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
