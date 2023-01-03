import { Plus, Trash } from "phosphor-react";
import { MouseEvent, useContext } from "react";
import { MusicCardData, MusicContext } from "../../contexts/MusicContext";
import { ContainerMusicCard, ContainerMusicDetails, ContainerButtonTrash, ContainerButtonPLus } from "./styles";

export function MusicCard({ pictureUrl, artists, name, duration ,icon = 'Plus' }: MusicCardData) {
    const { CallSetMusic, RemoveMusicOnMyPlaylist, musicInMyPlaylist } = useContext(MusicContext)
    if(artists?.length! > 15){
        let arrayString = artists?.split(' ')
        arrayString = arrayString?.slice(0, 2)
        artists = arrayString?.join(' ')
    }

    if(name?.length! > 15){
        let arrayString = name?.split(' ')
        arrayString = arrayString?.slice(0, 4)
        name = arrayString?.join(' ')
    }

    function AddMusicOnMyPlaylist(e: MouseEvent<HTMLButtonElement>){
        const newMusicOnMyPlaylist: MusicCardData = {
            pictureUrl: pictureUrl,
            artists: artists,
            name: name,
            duration: duration,
        }

        CallSetMusic(newMusicOnMyPlaylist)
    }

    function CallRemoveMusicOnMyPlaylist(e: MouseEvent<HTMLButtonElement>) {
        RemoveMusicOnMyPlaylist(musicInMyPlaylist.filter((musicToBeDelete) => {
            return name !== musicToBeDelete.name
        }))
    }


    return (
        <ContainerMusicCard>
            <ContainerMusicDetails>
                <img
                    height={40}
                    width={40}
                    src={pictureUrl}
                    alt="Foto Do Artista"
                />
                
                <div>
                    <h2>{artists}</h2>
                    <h3>{name}</h3>
                </div>
            </ContainerMusicDetails>

            <ContainerMusicDetails>
                <h4>3:20</h4>
                {icon === 'Delete' ? (
                    <ContainerButtonTrash>
                        <button onClick={CallRemoveMusicOnMyPlaylist}>
                            <Trash size={30} />
                        </button>
                    </ContainerButtonTrash>

                ) :
                    <ContainerButtonPLus>
                        <button onClick={AddMusicOnMyPlaylist}>
                            <Plus size={30} weight="duotone" />
                        </button>
                    </ContainerButtonPLus>

                }
            </ContainerMusicDetails>
        </ContainerMusicCard>
    )
}