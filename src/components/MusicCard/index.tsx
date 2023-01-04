import { X } from "phosphor-react";
import { MusicCard } from "../MusicCard";
import { ContainerButtonCloseModal, ContainerButtonSubmit, ContainerForm, ContainerPlaylistCard, ContainerPlaylistTitle, ContainerDetails } from './style';

import * as zod from 'zod'
import Modal from 'react-modal'

import { useForm } from 'react-hook-form'
import { useContext, useState } from "react";
import { MusicContext } from "../../contexts/MusicContext";
import { zodResolver } from '@hookform/resolvers/zod';

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
  }
}
const newPlaylistNameFormValidationSchema = zod.object({
  PlaylistName: zod.string().min(1, 'Informe o nome da Playlist')
})
type NewPlaylistFormData = zod.infer<typeof newPlaylistNameFormValidationSchema>

export function ModalCreatePlaylist({ onOpen, onClose }: ModalProps) {
  const { register, handleSubmit, watch, reset } = useForm<NewPlaylistFormData>({
    resolver: zodResolver(newPlaylistNameFormValidationSchema),
    defaultValues: {
      PlaylistName: ''
    },
  })
  const { musicInMyPlaylist } = useContext(MusicContext)
  const playlistName = watch('PlaylistName')
  const isSubmitDisabled = !playlistName

  function handleCreateNewPlaylist(data: NewPlaylistFormData) {
    console.log(data)
    reset()
  }

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
        <form onSubmit={handleSubmit(handleCreateNewPlaylist)}>
          <label htmlFor="PlaylistName">Playlist Name</label>
          <input
            id="playlistName"
            {...register('PlaylistName')} />


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
            <button type="submit" disabled={isSubmitDisabled} onClick={onClose}>Create</button>
          </ContainerButtonSubmit>
        </form>
      </ContainerForm>

    </Modal>
  )
}