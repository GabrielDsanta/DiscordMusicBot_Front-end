import { createContext, ReactNode, useEffect, useState } from "react"
import axios from 'axios'

export interface MusicCardData {
    id?: string
    pictureUrl: string
    artists: string
    name: string
    duration: number
    icon?: 'Plus' | 'Delete'
}
const localData = localStorage.getItem('Music') !== null ? JSON.parse(localStorage.getItem('Music')!) : [];
export interface PlaylistData {
    artists: string[]
    name: string
    songs: InstanceType<typeof localData>
}
export interface MusicData {
    musicInMyPlaylist: MusicCardData[]
    musicsOnPlaylist: PlaylistData | null
    playlistFiltered: PlaylistData | null
    CallSetMusic: (data: MusicCardData) => void
    RemoveMusicOnMyPlaylist: (data: MusicCardData[]) => void
    CallFilteredSongsOnPlaylist: (data: PlaylistData) => void
}

interface MusicContextProviderProps {
    children: ReactNode
}

console.log(localData)
export const MusicContext = createContext({} as MusicData)

export function CoffeContextProvider({ children }: MusicContextProviderProps) {

    const [musicInMyPlaylist, setMusicInMyPlaylist] = useState<MusicCardData[]>(localData)
    const [musicsOnPlaylist, setMusicsOnPlaylist] = useState<PlaylistData | null>(null)
    const [playlistFiltered, setplaylistFiltered] = useState<PlaylistData | null>(null)

    useEffect(() => {
        window.localStorage.setItem('Music', JSON.stringify(musicInMyPlaylist))
    }, [musicInMyPlaylist])

    function CallSetMusic(data: MusicCardData) {
        setMusicInMyPlaylist((state) => [...state, data])
    }

    function RemoveMusicOnMyPlaylist(data: MusicCardData[]) {
        setMusicInMyPlaylist(data)
    }

    function CallFilteredSongsOnPlaylist(data: PlaylistData) {
        setplaylistFiltered(data)
    }

    useEffect(() => {
        axios.get('http://ec2-54-167-129-32.compute-1.amazonaws.com:3000/playlists/37i9dQZF1DZ06evO0aGty0')
            .then(response => {
                setMusicsOnPlaylist(response.data)
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
                playlistFiltered
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}