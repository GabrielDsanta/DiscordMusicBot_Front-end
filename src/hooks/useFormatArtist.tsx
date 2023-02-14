export function useFormatArtist(artist: string) {
  if (artist?.length! > 15) {
    let arrayString = artist.split(' ')
    arrayString = arrayString?.slice(0, 2)
    artist = arrayString?.join(' ')
  }
  return artist
}
