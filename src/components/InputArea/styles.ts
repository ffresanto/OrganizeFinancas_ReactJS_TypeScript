import styled from 'styled-components';

export const Container = styled.div`
    background-color: #333333;
    border-radius: 0px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    color: #fff;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    color: #fff;
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 0px solid;
    border-radius: 5px;
    background-color: #555;
`;
export const Select = styled.select`
    color: #fff;
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 0px solid;
    border-radius: 5px;
    background-color: #555;
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 0px solid;
    border-radius: 5px;
    background-color: #6ffc59;
    color: black;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`;