import { useState } from 'react'
import { FunnelSimple, MagnifyingGlass } from 'phosphor-react'
import {
  ContainerButtonHandleFilter,
  ContainerFilterButton,
  ContainerFilterOptions,
  ContainerInputFilterArtist,
} from './styles'

export function FilterPlaylist() {
  const [isFilterOptionsOpen, setIsFilterOptionsOpen] = useState(true)

  function HandleOpenFilterOptions() {
    setIsFilterOptionsOpen(!isFilterOptionsOpen)
  }

  return (
    <div>
      <ContainerFilterButton onClick={HandleOpenFilterOptions}>
        <FunnelSimple size={28} />
      </ContainerFilterButton>

      {isFilterOptionsOpen && (
        <ContainerFilterOptions>
          <label htmlFor="">Artista</label>

          <ContainerInputFilterArtist>
            <input type="text" />

            <ContainerButtonHandleFilter>
              <MagnifyingGlass size={20} />
            </ContainerButtonHandleFilter>
          </ContainerInputFilterArtist>
        </ContainerFilterOptions>
      )}
    </div>
  )
}
