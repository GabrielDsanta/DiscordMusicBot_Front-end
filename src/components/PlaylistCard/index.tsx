import { MusicCard } from "../MusicCard";
import { ContainerPlaylistCard } from "./styles";


export function PlaylistCard(){
    return(
        <ContainerPlaylistCard>
            <h1>New Releases</h1>
            <MusicCard 
                imageSrc="https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=767&q=80"
                artist="Post Malone"
                minutesDurationMusic="3"
                secondsDurationMusic="20"
                musicName="Better Now"
            />
        </ContainerPlaylistCard>
    )
}