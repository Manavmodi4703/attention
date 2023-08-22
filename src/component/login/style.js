import { styled } from "styled-components";

const Wrapper = styled.form`

    margin : 100px auto;
    width : 90%;

    input{
        width : 100%;
        border : none;
        margin-top : 10px;
        padding : 10px;
        box-sizing : border-box;
        border-radius : 3px;
        box-shadow : 2px 2px 2px #ccc;
    }
    input[type=button]{
        margin-top : 30px;
        max-width : 150px;
    }
`

export default Wrapper