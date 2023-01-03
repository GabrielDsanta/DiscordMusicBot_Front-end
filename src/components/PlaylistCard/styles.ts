import styled from "styled-components";

export const ContainerPlaylistCard = styled.div`
    background-color: #191919;
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
        color: #FFF;
        padding: 1rem;
    }
`