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