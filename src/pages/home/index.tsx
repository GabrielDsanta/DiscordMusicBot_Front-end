import {
  ContainerHome,
  InformationUser,
  UserNumbers,
  UserPlaylist,
  Playlist,
} from './styles'

import { useRecoilValue } from 'recoil'
import { atomUser } from '../../store/atoms'
import { MapPin } from 'phosphor-react'

export function Home() {
  const user = useRecoilValue(atomUser)
  return (
    <ContainerHome>
      <InformationUser>
        <img src={user.img} alt="" width={240} height={240} />
        <h1>{user.name}</h1>
        <span>
          <MapPin size={20} color="#ededed" weight="fill" />
          {user.country}
        </span>
      </InformationUser>
      <UserNumbers>
        <div>
          <p>23423</p>
          <p>Playlists</p>
        </div>
        <div>
          <p>23423</p>
          <p>Followers</p>
        </div>
        <div>
          <p>23423</p>
          <p>Following</p>
        </div>
      </UserNumbers>
      <UserPlaylist>
        <Playlist>
          <div>
            <img
              src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b"
              alt=""
              width={140}
              height={140}
            />
          </div>
          <span>Matue</span>
          <span>Artista</span>
        </Playlist>
        <Playlist>
          <div>
            <img
              src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b"
              alt=""
              width={140}
              height={140}
            />
          </div>
          <span>Matue</span>
          <span>Artista</span>
        </Playlist>
        <Playlist>
          <div>
            <img
              src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b"
              alt=""
              width={140}
              height={140}
            />
          </div>
          <span>Matue</span>
          <span>Artista</span>
        </Playlist>
        <Playlist>
          <div>
            <img
              src="https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b"
              alt=""
              width={140}
              height={140}
            />
          </div>
          <span>Matue</span>
          <span>Artista</span>
        </Playlist>
      </UserPlaylist>
    </ContainerHome>
  )
}
