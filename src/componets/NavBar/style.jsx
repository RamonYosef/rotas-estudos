import styled from "styled-components";

export const Container = styled.div`
  .nav-routes {
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 1rem 2rem;
    font-family: "Poppins", sans-serif;
  }

  .logo {
    font-size: 35px;
  }

  .list-links {
    text-decoration: none;
    list-style: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .link {
    font-weight: 700;
    text-decoration: none;
    color: white;
    transition: all 0.5s;
  }

  .link:hover{
    color: #a9a7a7;
  }
`;
