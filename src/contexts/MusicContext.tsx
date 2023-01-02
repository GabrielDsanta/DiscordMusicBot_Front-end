import { createContext, ReactNode, useState } from "react"


export interface MusicCardData {
    id?: string
    imageSrc?: string
    artist?: string
    musicName?: string
    minutesDurationMusic?: string
    secondsDurationMusic?: string
    icon?: 'Plus' | 'Delete'
}

export interface MusicData{
    musicInMyPlaylist: MusicCardData[]
    CallSetMusic: (data: MusicCardData) => void
    RemoveMusicOnMyPlaylist: (data: MusicCardData[]) => void
}

interface MusicContextProviderProps{
    children: ReactNode
}

export const MusicContext = createContext({} as MusicData)

export function CoffeContextProvider({ children }: MusicContextProviderProps){
    const [musicInMyPlaylist, setMusicInMyPlaylist] = useState<MusicCardData[]>([])

    function CallSetMusic(data: MusicCardData){
        setMusicInMyPlaylist((state) => [...state, data])
    }

    function RemoveMusicOnMyPlaylist(data: MusicCardData[]){
        setMusicInMyPlaylist(data)
    }
    
    return(
       <MusicContext.Provider 
            value={{ 
                musicInMyPlaylist,
                CallSetMusic,
                RemoveMusicOnMyPlaylist
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}