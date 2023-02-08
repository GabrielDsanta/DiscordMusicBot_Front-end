import { useContext } from 'react'
import { MusicCard } from '../MusicCard'
import { ContainerContent } from './styles'
import { MusicContext } from '../../contexts/MusicContext'
import { ContainerPlaylistCard } from '../PlaylistCard/styles'

export function MyPlaylist() {
  const { musicInMyPlaylist } = useContext(MusicContext)
  return (
    <ContainerContent>
      <ContainerPlaylistCard>
        <h1>My Playlist</h1>
        {musicInMyPlaylist.map((item) => {
          return (
            <MusicCard
              id={item.id}
              key={item.id}
              pictureUrl={item.pictureUrl}
              artists={item.artists}
              name={item.name}
              duration={item.duration}
              icon="Delete"
            />
          )
        })}
      </ContainerPlaylistCard>
    </ContainerContent>
  )
}
