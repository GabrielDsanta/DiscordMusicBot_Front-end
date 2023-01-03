import { createContext, ReactNode, useEffect, useState } from "react"
import axios from 'axios'

export interface MusicCardData {
    id?: string
    imageSrc?: string
    artist?: string
    musicName?: string
    minutesDurationMusic?: string
    secondsDurationMusic?: string
    icon?: 'Plus' | 'Delete'
    name?: string
}

export interface MusicData{
    musicInMyPlaylist: MusicCardData[]
    musicsOnPlaylist: MusicCardData[]
    CallSetMusic: (data: MusicCardData) => void
    
    RemoveMusicOnMyPlaylist: (data: MusicCardData[]) => void
}

interface MusicContextProviderProps{
    children: ReactNode
}

export const MusicContext = createContext({} as MusicData)

export function CoffeContextProvider({ children }: MusicContextProviderProps){
    const [musicInMyPlaylist, setMusicInMyPlaylist] = useState<MusicCardData[]>([])
    const [musicsOnPlaylist, setMusicsOnPlaylist] = useState<MusicCardData[]>([])

    function CallSetMusic(data: MusicCardData){
        setMusicInMyPlaylist((state) => [...state, data])
    }

    function RemoveMusicOnMyPlaylist(data: MusicCardData[]){
        setMusicInMyPlaylist(data)
    }

    useEffect(() => {
        axios.get('http://ec2-54-167-129-32.compute-1.amazonaws.com:3000/playlists/37i9dQZF1DZ06evO0aGty0')
            .then(response => {
                setMusicsOnPlaylist(response.data)
            })
    }, [])
    
    return(
       <MusicContext.Provider 
            value={{ 
                musicInMyPlaylist,
                CallSetMusic,
                RemoveMusicOnMyPlaylist,
                musicsOnPlaylist,
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}