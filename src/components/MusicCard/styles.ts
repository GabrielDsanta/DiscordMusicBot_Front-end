import styled from "styled-components";

export const ContainerMusicCard = styled.div`
    background-color: #202020;
    width: 23rem;
    max-height: 4rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 7rem;
    color: ${(props) => props.theme['gray-100']};
    text-align: left;
    margin-bottom: 1rem;
    padding: .3rem;

    img{
        border-radius: 6px;
        margin-right: .8rem;
    }

    h2{
        font-size: 1rem;
        font-weight: 500;
        width: 5rem;
        white-space: nowrap;
        margin-bottom: .2rem;
    }

    h3{
        font-size: 0.8rem;
        color: rgb(255, 255, 255, 50%);
        font-weight: 400;
        width: 5rem;
        white-space: nowrap
    }

    h4{
        font-size: 0.875rem;
        font-weight: 400;
        margin-right: 1rem;
        margin-left: 2rem;
    }
`

export const ContainerMusicDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    button{
        background: transparent;
        border: none;
        outline: none;
        color: ${(props) => props.theme["gray-100"]};
        cursor: pointer;
    }
`
export const ContainerButtonTrash = styled(BaseButton)`
    button{
        &:hover{
            color: ${(props) => props.theme["red-500"]};
        }
    }
`
export const ContainerButtonPLus = styled(BaseButton)`
 button{
        &:hover{
            color: ${(props) => props.theme["green-500"]};
        }
    }
`