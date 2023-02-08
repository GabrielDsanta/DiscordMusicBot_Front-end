import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { MusicCardData } from '../models/music'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { PlaylistData, localStorageMusicInMyPlaylist } from '../models/playlist'

export interface MusicData {
  musicInMyPlaylist: MusicCardData[]
  musicsOnPlaylist: PlaylistData[]
  playlistFiltered: PlaylistData | null
  CallSetMusic: (data: MusicCardData) => void
  RemoveMusicOnMyPlaylist: (data: string) => void
  CallFilteredSongsOnPlaylist: (data: PlaylistData) => void
  CallSetSongsOnPlaylist: (data: PlaylistData[]) => void
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

  useEffect(() => {
    window.localStorage.setItem('Music', JSON.stringify(musicInMyPlaylist))
  }, [musicInMyPlaylist])

  function CallSetMusic(data: MusicCardData) {
    setMusicInMyPlaylist((state) => [...state, data])
  }

  function RemoveMusicOnMyPlaylist(data: string) {
    const updatedPlaylist = musicInMyPlaylist.filter((musicToBeDelete) => {
      return data !== musicToBeDelete
    })
    setMusicInMyPlaylist(updatedPlaylist)
  }

  function CallFilteredSongsOnPlaylist(data: PlaylistData) {
    setPlaylistFiltered(data)
  }

  function CallSetSongsOnPlaylist(data: PlaylistData[]) {
    data === null
      ? setMusicsOnPlaylist((state) => [...state, data])
      : setMusicsOnPlaylist(data)
  }

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
        RemoveMusicOnMyPlaylist,
        musicsOnPlaylist,
        CallFilteredSongsOnPlaylist,
        playlistFiltered,
        CallSetSongsOnPlaylist,
      }}
    >
      {children}
    </MusicContext.Provider>
  )
}
