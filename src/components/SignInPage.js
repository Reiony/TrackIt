import logoTi from "../img/Logo.png"
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Tela1() {
    return (
        <div>
            <Logo src={logoTi} alt="logo ti" />
            <Form>
                <input placeholder="email" />
                <input placeholder="senha" />
                <button><h3>Entrar</h3></button>
            </Form>
            <Link to={`/cadastro`}>
                <Cadastro>
                    <h3>Não tem uma conta? Cadastre-se!</h3>
                </Cadastro>
            </Link>
        </div>
    )
}

const Logo = styled.img`
    margin: 0 auto;
    margin-top:68px;
    margin-bottom:32px;
    width:180px;
    height:180px;
    display:flex;
    justify-content:center;
    align-items:center;
    box-sizing: border-box;
`

const Form = styled.div`
    width:100%;
    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-left:36px;
        margin-bottom:6px;
        ::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
            
        }
    }
    button{
        background: #52B6FF;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        margin-left:36px;
        border: none;
        h3{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20.976px;
            line-height: 26px;
            text-align: center;

            color: #FFFFFF;


        }
    }
`

const Cadastro = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    margin-top:25px;

    color: #52B6FF;
`