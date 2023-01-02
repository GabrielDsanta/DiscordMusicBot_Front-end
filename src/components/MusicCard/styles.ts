import styled from "styled-components";

export const ContainerMusicCard = styled.div`
    background-color: #202020;
    width: 22rem;
    height: 3.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 7rem;
    color: #FFF;
    text-align: left;

    img{
        border-radius: 6px;
        margin-right: .8rem;
    }

    h2{
        font-size: 1rem;
        font-weight: 500;
    }

    h3{
        font-size: 0.8rem;
        color: rgb(255, 255, 255, 50%);
        font-weight: 400;
    }

    h4{
        font-size: 0.875rem;
        font-weight: 400;
        margin-right: 1rem;
    }
`

export const ContainerMusicDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        background-color: transparent;
        border: none;
        outline: none;
        color: ${props => props.theme["red"]};
        cursor: pointer;
    }
`