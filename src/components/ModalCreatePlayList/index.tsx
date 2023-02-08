import * as zod from 'zod'
import Modal from 'react-modal'
import { useContext } from 'react'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MusicContext } from '../../contexts/MusicContext'
import {
  ContainerButtonCloseModal,
  ContainerButtonSubmit,
  ContainerForm,
  ContainerPlaylistCard,
  ContainerPlaylistTitle,
  ContainerDetails,
} from './style'

interface ModalProps {
  onOpen: boolean
  onClose: () => void
}
const customStyles = {
  content: {
    width: '480px',
    height: '380px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%',
    borderRadius: '8px',
    background: '#191919',
  },
}
const newPlaylistNameFormValidationSchema = zod.object({
  playlistName: zod.string().min(1, 'Informe o nome da Playlist'),
})
type NewPlaylistFormData = zod.infer<typeof newPlaylistNameFormValidationSchema>

export function ModalCreatePlaylist({ onOpen, onClose }: ModalProps) {
  const { musicInMyPlaylist } = useContext(MusicContext)
  const { register, handleSubmit, watch, reset } = useForm<NewPlaylistFormData>(
    {
      resolver: zodResolver(newPlaylistNameFormValidationSchema),
      defaultValues: {
        playlistName: '',
      },
    },
  )

  const playlistName = watch('playlistName')
  const isSubmitDisabled = !playlistName

  function handleCreateNewPlaylist(data: NewPlaylistFormData) {
    const newPlaylist = {
      PlaylistName: data.playlistName,
      Songs: musicInMyPlaylist,
    }
    console.log(newPlaylist)
    reset()
  }

  if (!onOpen) return null
  return (
    <Modal isOpen={onOpen} onRequestClose={onClose} style={customStyles}>
      <ContainerButtonCloseModal>
        <button onClick={onClose}>
          <X size={22} />
        </button>
      </ContainerButtonCloseModal>

      <ContainerForm>
        <form onSubmit={handleSubmit(handleCreateNewPlaylist)}>
          <label htmlFor="playlistName">Playlist Name</label>
          <input id="playlistName" {...register('playlistName')} />

          <ContainerPlaylistCard>
            <ContainerPlaylistTitle>
              <span>{playlistName}</span>
            </ContainerPlaylistTitle>
            <ContainerDetails>
              <img src={musicInMyPlaylist[0].pictureUrl} alt="Foto" />
              <span>Musicas:{musicInMyPlaylist.length}</span>
            </ContainerDetails>
          </ContainerPlaylistCard>

          <ContainerButtonSubmit>
            <button type="submit" disabled={isSubmitDisabled}>
              Create
            </button>
          </ContainerButtonSubmit>
        </form>
      </ContainerForm>
    </Modal>
  )
}
