import { X } from "phosphor-react";
import { ContainerButtonCloseModal, ContainerButtonSubmit, ContainerForm, ContainerModal, ContainerMusic } from './style';
import { MusicContext } from "../../contexts/MusicContext";
import { useContext } from "react";
import Modal from 'react-modal'
import { MusicCard } from "../MusicCard";

interface ModalProps {
  onOpen: boolean
  onClose: () => void
}

const customStyles = {
  content: {
    width: '480px',
    height: '320px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#191919',
  }
}

export function ModalCreatePlaylist({ onOpen, onClose }: ModalProps) {
  const { musicInMyPlaylist } = useContext(MusicContext)
  if (!onOpen) return null
  return (
    <Modal
      isOpen={onOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
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

    </Modal>
  )
}