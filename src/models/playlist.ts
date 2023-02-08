export const localStorageMusicInMyPlaylist =
  localStorage.getItem('Music') !== null
    ? JSON.parse(localStorage.getItem('Music')!)
    : []

export interface PlaylistData {
  id: string
  artists: string[]
  name: string
  songs: InstanceType<typeof localStorageMusicInMyPlaylist>
}
