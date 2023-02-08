import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { MusicCardData } from '../models/music'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { PlaylistData, localStorageMusicInMyPlaylist } from '../models/playlist'

export interface MusicData {
  musicInMyPlaylist: MusicCardData[]
  musicsOnPlaylist: PlaylistData[]
  playlistFiltered: PlaylistData | null
  CallDeletePlaylist: (id: string) => void
  CallSetMusic: (data: MusicCardData) => void
  CallDeleteMusicOnMyPlaylist: (data: string) => void
  CallFilteredSongsOnPlaylist: (data: PlaylistData) => void
}

interface MusicContextProviderProps {
  children: ReactNode
}

export const MusicContext = createContext({} as MusicData)

export function MusicContextProvider({ children }: MusicContextProviderProps) {
  const [musicInMyPlaylist, setMusicInMyPlaylist] = useState<MusicCardData[]>(
    localStorageMusicInMyPlaylist,
  )
  const [musicsOnPlaylist, setMusicsOnPlaylist] = useState<PlaylistData[]>([])
  const [playlistFiltered, setPlaylistFiltered] = useState<PlaylistData | null>(
    null,
  )

  function CallSetMusic(data: MusicCardData) {
    setMusicInMyPlaylist((state) => [...state, data])
  }
  function CallFilteredSongsOnPlaylist(data: PlaylistData) {
    setPlaylistFiltered(data)
  }

  function CallDeleteMusicOnMyPlaylist(data: string) {
    const updatedPlaylist = musicInMyPlaylist.filter((musicToBeDelete) => {
      return data !== musicToBeDelete.name
    })
    setMusicInMyPlaylist(updatedPlaylist)
  }
  function CallDeletePlaylist(id: string) {
    const playlistToBeDeleted = musicsOnPlaylist?.filter((item) => {
      return item.id !== id
    })
    setMusicsOnPlaylist(playlistToBeDeleted)
  }

  useEffect(() => {
    window.localStorage.setItem('Music', JSON.stringify(musicInMyPlaylist))
  }, [musicInMyPlaylist])

  useEffect(() => {
    axios
      .get(
        'http://ec2-54-167-129-32.compute-1.amazonaws.com:3000/playlists/37i9dQZF1DZ06evO0aGty0',
      )
      .then((response) => {
        response.data.id = uuidv4()
        setMusicsOnPlaylist((state) => [...state, response.data])
      })
  }, [])

  return (
    <MusicContext.Provider
      value={{
        musicInMyPlaylist,
        CallSetMusic,
        CallDeleteMusicOnMyPlaylist,
        musicsOnPlaylist,
        CallFilteredSongsOnPlaylist,
        playlistFiltered,

        CallDeletePlaylist,
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}
