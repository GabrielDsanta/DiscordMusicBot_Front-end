import { X } from "phosphor-react";
import { ContainerModal, ContainerForm, ContainerButtonCloseModal, ContainerMusic, ContainerButtonSubmit } from './style';
import { MusicCard } from '../MusicCard'
import { MusicContext } from "../../contexts/MusicContext";
import { useContext } from "react";
interface ModalProps {
  onOpen: boolean
  onClose: () => void
}
export function ModalCreatePlaylist({ onOpen, onClose }: ModalProps) {
  if (!onOpen) return null
  const { musicInMyPlaylist } = useContext(MusicContext)
  return (
    <ContainerModal >
      <ContainerButtonCloseModal>
        <button onClick={onClose}>
          <X size={22} />
        </button>
      </ContainerButtonCloseModal>
      <ContainerForm>
        <form action="">
          <label htmlFor="PlaylistName">Playlist Name</label>
          <input id="PlaylistName" type="text" />
        </form>
        <ContainerMusic>
          {musicInMyPlaylist.map((item) => {
            return (
              <MusicCard
                id={item.id}
                imageSrc={item.imageSrc}
                artist={item.artist}
                minutesDurationMusic={item.minutesDurationMusic}
                secondsDurationMusic={item.secondsDurationMusic}
                musicName={item.musicName}
                icon="Delete"
              />
            )
          })}
        </ContainerMusic>
        <ContainerButtonSubmit>
          <button type="submit">Create</button>
        </ContainerButtonSubmit>
      </ContainerForm>
    </ContainerModal>
  )
}