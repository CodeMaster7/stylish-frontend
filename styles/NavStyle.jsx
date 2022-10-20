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
    }
`