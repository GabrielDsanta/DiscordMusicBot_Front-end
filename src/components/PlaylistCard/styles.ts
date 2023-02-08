import styled from "styled-components";

export const ContainerPlaylistCard = styled.div`
    background: ${(props) => props.theme['gray-800']};
    width: 25rem;
    height: 45rem;
    border-radius: 6px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
    overflow: hidden;
    overflow-y: scroll;

    &&::-webkit-scrollbar{
        width: 2px;
        height: .5rem;
        background-color: transparent;
    }

    &&::-webkit-scrollbar-thumb{
        background-color:  rgba(255, 255, 255, 10%);
        border-radius: 6px;
    }
    

    h1{
        padding: 1rem;
        color: ${(props) => props.theme['white']};

        &:hover{
            cursor: pointer;
            color: ${(props) => props.theme['green-300']};
        }
    }
`

export const ContainerTitlePlaylist = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 25rem;

    h1{
        margin-left: 2.5rem;
    }
`

export const ContainerButtonRemovePlaylist = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    width: 5rem;
    margin-right: -1.5rem;
    color: ${(props) => props.theme['gray-100']};

    &:hover{
        transition: all .3s;
        color:${(props) => props.theme['red-500']};
    }
`