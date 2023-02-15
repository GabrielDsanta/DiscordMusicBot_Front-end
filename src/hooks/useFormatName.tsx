export function useFormatName(name: string) {
  if (name?.length! > 15) {
    let arrayString = name.split(' ')
    arrayString[2]?.length > 10
      ? (arrayString = arrayString?.slice(0, 2))
      : (arrayString = arrayString?.slice(0, 4))
    name = arrayString?.join(' ')
  }
  return name
}
