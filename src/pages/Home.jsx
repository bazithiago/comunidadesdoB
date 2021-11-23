import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import logoOrkut from '../img/logoOrkut.png'


const HomeStyles = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    
    > div {
        width: 80vw;
        height: 60vh;
        gap: 16px;
        display: flex;
        flex-direction: row;
    }

    @media screen and (max-width: 795px) {
        flex-wrap: wrap;
        
        > div {
            margin: 0;
            flex-direction: column;
            height: 100%;
        }
    }

`

const InfoStyles = styled.div`
    flex: 2;
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 40%;
        margin-bottom: 16px;
    }

    a {
        color: blue;
    }

    p + p {
        margin-top: 20px;
        font-size: 0.85rem;
    }

    span {
        font-size: 0.85rem;
        margin-top: 5px;
    }

    @media screen and (max-width: 795px) {
        padding: 32px;
        text-align: center;
    }
`

const FormStyles = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background-color: #dde9f5;
    padding: 40px;
    flex: 1;

    label {
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 5px;
    }

    input {
        margin-bottom: 24px;
        height: 32px;
        border: 0;
        padding: 8px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 36px;
        background-color: #f6f6f4;
        border-radius: 32px;
        border: 1px solid #ccc;
        color: #274d82;
        font-weight: 700;
        font-size: 0.9rem;
        margin-top: 32px;
    }

    span {
        font-size: 0.75rem;
        margin: -5px 0 5px 0;
    }

    @media screen and (max-width: 795px) {
        width: 100%;
        flex-wrap: wrap;
        padding: 5%;
    }
`


export function Home(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    // const [imgURL, setImgURL] = useState('')
    const [community, setCommunity] = useState({ title, description });

    
    const imageUpload = (e) => {
        const file = e.target.files[0];

        const getBase64 = (file) => {
            return new Promise((resolve,reject) => {
               const reader = new FileReader();
               reader.onload = () => resolve(reader.result);
               reader.onerror = error => reject(error);
               reader.readAsDataURL(file);
            });
          }
          

        getBase64(file).then(base64 => {
          localStorage["imgLocal"] = base64;
        });
    };

    useEffect(() => {
        setCommunity({ title, description })
    }, [title, description])

    return (
        <HomeStyles>
            <div>
                <InfoStyles>
                    <img src={logoOrkut} alt="Logo orkut" />
                    <p><strong>Comunidades do</strong> B!</p>
                    <p>Projeto originalmente nascido de <a href='https://twitter.com/pagalanxe/status/1461039166129594368?s=20' target='_blank' rel="noreferrer">uma thread do twitter</a>.</p>
                    <span>Prefira o acesso no computador, com Chrome ou Firefox.</span>
                </InfoStyles>
                <FormStyles>
                    <label htmlFor="title">Título da comunidade</label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    
                    <label htmlFor="description">Descrição da comunidade</label>
                    <input type="textarea" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    
                    {/* <label htmlFor="imgURL">URL da imagem</label>
                    <input type="textarea" name="imgURL" value={imgURL} onChange={(e) => setImgURL(e.target.value)} required />
                    <span>Copiar e colar uma URL válida (com final .jpg ou .png)</span> */}
                    <label htmlFor="image">Upload imagem</label>
                    <span>Dica: prefira imagens verticais</span>
                    <input type="file" onChange={imageUpload}/>


                    
                    <Link 
                        as='a' 
                        to='/community' 
                        state={{ community }}
                    >
                        Criar comunidade
                    </Link>
                
                </FormStyles>
            </div>
            <Footer />
        </HomeStyles>
    )
}