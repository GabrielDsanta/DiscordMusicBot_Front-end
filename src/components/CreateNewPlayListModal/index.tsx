import * as zod from 'zod'
import * as Dialog from '@radix-ui/react-dialog'
import { useContext } from 'react'
import { X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MusicContext } from '../../contexts/MusicContext'
import {
  Overlay,
  Content,
  ButtonClose,
  ButtonSubmit,
  PlaylistCard,
  PlaylistTitle,
  Details,
} from './style'

const newPlaylistNameFormValidationSchema = zod.object({
  playlistName: zod.string().min(1, 'Informe o nome da Playlist'),
})
type NewPlaylistFormData = zod.infer<typeof newPlaylistNameFormValidationSchema>

export function CreateNewPlaylistModal() {
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

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <ButtonClose>
          <X size={22} />
        </ButtonClose>

        <form onSubmit={handleSubmit(handleCreateNewPlaylist)}>
          <label htmlFor="playlistName">Playlist Name</label>
          <input id="playlistName" {...register('playlistName')} />

          <PlaylistCard>
            <PlaylistTitle>
              <span>{playlistName}</span>
            </PlaylistTitle>
            <Details>
              <img src={musicInMyPlaylist[0].pictureUrl} alt="Foto" />
              <span>Musicas:{musicInMyPlaylist.length}</span>
            </Details>
          </PlaylistCard>

          <ButtonSubmit>
            <button type="submit" disabled={isSubmitDisabled}>
              Create
            </button>
          </ButtonSubmit>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
