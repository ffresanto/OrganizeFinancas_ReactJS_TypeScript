import styled from "styled-components";

//export const Modelo = styled.div``;

export const Table = styled.table`
    color: white;
    width: 100%;
    background-color: #333333;
    padding: 20px;
    border-radius: 0px 0px 5px 5px;
    margin-top: 20px;

`;

export const TableHeadColumn = styled.th<{ width?: number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 2px 0;
    text-align: left;
    text-transform: uppercase;
    font-weight: 200;
`;

