import styled from "styled-components";

export const HeaderStyle = styled.header`
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2em;

    a {
        font-size: 3rem;
    }
`
export const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    svg {
        cursor: pointer;
        font-size: 1.7rem;
    }

    span {
        background: #ff2626;
        color: #fff;
        width: 1.3rem;
        height: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-bottom: 0.1em;
        font-size: 0.75rem;
        position: absolute;
        top: -20%;
        right: -15%;
        pointer-events: none;
    }
`