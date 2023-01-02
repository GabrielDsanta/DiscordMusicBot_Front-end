import { Plus, Trash } from "phosphor-react";
import { MouseEvent, useContext } from "react";
import { MusicCardData, MusicContext } from "../../contexts/MusicContext";
import { ContainerMusicCard, ContainerMusicDetails } from "./styles";

export function MusicCard({ imageSrc, artist, musicName, minutesDurationMusic, secondsDurationMusic, icon = 'Plus' }: MusicCardData) {
    const { CallSetMusic, RemoveMusicOnMyPlaylist, musicInMyPlaylist } = useContext(MusicContext)

    function AddMusicOnMyPlaylist(e: MouseEvent<HTMLButtonElement>){
        const newMusicOnMyPlaylist: MusicCardData = {
            imageSrc: imageSrc,
            artist: artist,
            musicName: musicName,
            minutesDurationMusic: '3',
            secondsDurationMusic: '20'
        }

        CallSetMusic(newMusicOnMyPlaylist)
    }

    function CallRemoveMusicOnMyPlaylist(e: MouseEvent<HTMLButtonElement>){
        RemoveMusicOnMyPlaylist(musicInMyPlaylist.filter((musicToBeDelete) => {
            return musicName !== musicToBeDelete.musicName
        }))
    }


    return (
        <ContainerMusicCard>
            <ContainerMusicDetails>
                <img
                    height={40}
                    width={42}
                    src={imageSrc}
                    alt="Foto Do Artista"
                />
                <div>
                    <h2>{artist}</h2>
                    <h3>{musicName}</h3>
                </div>
            </ContainerMusicDetails>

            <ContainerMusicDetails>
                <h4>{minutesDurationMusic}:{secondsDurationMusic}</h4>
                {icon === 'Delete' ? (
                    <button onClick={CallRemoveMusicOnMyPlaylist}>
                        <Trash size={30} color="#ce4853" />
                    </button>
                ):
                    <button onClick={AddMusicOnMyPlaylist}>
                        <Plus size={30} color="white" weight="duotone" />
                    </button>
                }
            </ContainerMusicDetails>
        </ContainerMusicCard>
    )
}