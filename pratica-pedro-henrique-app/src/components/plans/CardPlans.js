import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Section = styled.section`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    padding: 40px;
`

export const Price = styled.p`
    margin: 0;
    color: black;
    font-size: 28px;
`

export const PriceAndPerMonth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
`

export const PerMonth = styled.p`
    margin: 0;
    padding: 0;
`

export const Button = styled.button`
    width: 50%;
    margin-top: 30px;
    padding: 20px;
    color: white;
    border-style: none;
    border-radius: 10px;
    background-color: red;
    font-size: 20px;
`

export const ValidP = styled.p`
    color: #2D2E2E;

`

export const InvalidP = styled.p`
    color: #c0c1c1;

`

export const Title = styled.h1`
    color: #3A4F39;

`

export const Color = styled.div`
    width: 35px;
    height: 35px;
    background-color: red;
    color: white;
    margin-bottom: 20px;
    border-radius: 30px;
`