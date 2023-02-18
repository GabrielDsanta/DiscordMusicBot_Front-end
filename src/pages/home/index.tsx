import {
  ContainerHome,
  InformationUser,
  UserNumbers,
  UserPlaylist,
  Playlist,
} from './styles'
import logo from '../.././assets/image 1.png'
export function Home() {
  return (
    <ContainerHome>
      <InformationUser>
        <img src={logo} alt="" width={240} height={240} />
        <h1>Arthur Rosch</h1>
        <p>Front-end Developer from Mesopotamia</p>
        <span>Rio grande do sul</span>
      </InformationUser>
      <UserNumbers>
        <div>
          <p>23423</p>
          <p>Musica</p>
        </div>
        <div>
          <p>23423</p>
          <p>Musica</p>
        </div>
        <div>
          <p>23423</p>
          <p>Musica</p>
        </div>
        <div>
          <p>23423</p>
          <p>Musica</p>
        </div>
      </UserNumbers>
      <UserPlaylist>
        <Playlist>
          <img src="" alt="" />
        </Playlist>
        <Playlist>
          <img src="" alt="" />
        </Playlist>
        <Playlist>
          <img src="" alt="" />
        </Playlist>
        <Playlist>
          <img src="" alt="" />
        </Playlist>
      </UserPlaylist>
    </ContainerHome>
  )
}
