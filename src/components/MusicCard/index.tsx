import { ContainerMusicCard } from "./styles";

interface MusicCardData {
    imageSrc?: string
    artist?: string
    musicName?: string
    durationMusic?  : number
}

export function MusicCard({ imageSrc, artist, musicName, durationMusic }: MusicCardData) {
    return (
        <ContainerMusicCard>
            <div>
                <img
                    src={imageSrc}
                    alt=""
                />
                <div>
                    <h1>{artist}</h1>
                    <h2>{musicName}</h2>
                </div>
            </div>

            <div>
                <h3>{durationMusic}</h3>

                <h4>Plus Icon</h4>
            </div>
        </ContainerMusicCard>
    )
}