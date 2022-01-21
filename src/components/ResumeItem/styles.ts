import styled from "styled-components";

//export const Modelo = styled.div``;

export const Container = styled.div`
    color: #fff;
    flex: 1;
`;

export const Title = styled.div`
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Info = styled.div < {color?: string }>`
    text-align: center;
    color: ${props => props.color ?? '#fff'}
`;
