import { useContext } from 'react'
import { X } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'
import { MusicCard } from '../MusicCard'
import { MusicCardData } from '../../models/music'
import { PlaylistData } from '../../models/playlist'
import { MusicContext } from '../../contexts/MusicContext'
import {
	ContainerButtonRemovePlaylist,
	ContainerPlaylistCard,
	ContainerTitlePlaylist,
} from './styles'

export function PlaylistCard({ id, name, artists, songs }: PlaylistData) {
	const { musicsOnPlaylist, playlistFiltered, CallSetSongsOnPlaylist } =
		useContext(MusicContext)

	function HandleDeletePlaylist() {
		const playlistToBeDeleted = musicsOnPlaylist?.filter(
			(item: PlaylistData) => {
				return item.id !== id
			},
		)

		CallSetSongsOnPlaylist(playlistToBeDeleted!)
	}

	return (
		<ContainerPlaylistCard>
			<ContainerTitlePlaylist>
				<h1>{name}</h1>

				<ContainerButtonRemovePlaylist onClick={HandleDeletePlaylist}>
					<X size={32} />
				</ContainerButtonRemovePlaylist>
			</ContainerTitlePlaylist>

			{playlistFiltered?.songs.length > 0
				? playlistFiltered?.songs.map((item: MusicCardData) => {
					return (
						<MusicCard
							key={uuidv4()}
							pictureUrl={item.pictureUrl}
							artists={item.artists}
							name={item.name}
							duration={item.duration}
						/>
					)
				})
				: songs.map((item: MusicCardData) => {
					return (
						<MusicCard
							id={uuidv4()}
							key={uuidv4()}
							pictureUrl={item.pictureUrl}
							artists={item.artists}
							name={item.name}
							duration={item.duration}
						/>
					)
				})}
		</ContainerPlaylistCard>
	)
}
