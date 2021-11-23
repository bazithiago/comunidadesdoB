import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { toPng } from 'html-to-image';

import logoOrkut from '../img/logoOrkut.png'
import Footer from './Footer'


const CommunityStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Canvas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color:#d3ddf0;
    padding: 16px;
   
    > div {
        display: flex;
        flex-direction: row;
        gap: 16px;


        > img {
            width: 390px;
            height: 560px;
            border-radius: 10px;
            object-fit: cover;
            background-color: {};
        }

        .CommunityInfos {
            border-radius: 10px;
            background-color: rgb(255, 255, 255);
            padding: 24px 32px;
            width: 700px;

            div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #dbdbdb;
                padding-bottom: 20px;

                > img {
                    width: 100px;
                }
            }

            h1 {
                line-height: 2.5rem;   
                padding: 32px 0;
                font-weight: 900;
                border-bottom: 7px solid #cacaca;
                margin-bottom: 34px;
            }
        }
    }

`
const ButtonsPanel = styled.div`

        button {
            height: 36px;
            padding: 8px 32px;
            background-color: #f6f6f4;
            border-radius: 32px;
            border: 1px solid #ccc;
            color: #274d82;
            font-weight: 700;
            font-size: 0.9rem;
            margin-top: 16px;
        }

        button + button {
            margin-left: 16px;
        }
`



export function Community(){
    const title = localStorage.getItem('title'); 
    const description = localStorage.getItem('description'); 
    const imgLocal = localStorage.getItem('imgLocal');

    const ref = useRef(null);
    const onButtonClick = useCallback(() => {
    if (ref.current === null) {
        return
    }

    toPng(ref.current, { cacheBust: true, })
        .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'comunidade.png'
        link.href = dataUrl
        link.click()
        })
        .catch((err) => {
        console.log(err)
        })
    }, [ref])


    return (
        <CommunityStyles>
            <Canvas ref={ref}>
                <div> 
                    <img src={imgLocal} alt="Imagem" />
                    <div className='CommunityInfos'>
                        <div>
                            <img src={logoOrkut} alt="logo"/>
                            <p><strong>Comunidades do</strong> B!</p>
                        </div>
                        <h1>{title || 'Volte e preencha o campo corretamente'}</h1>
                        <p><strong>Descrição:</strong> {description || 'Volte e preencha o campo corretamente'}</p>
                    </div>
                </div>
                <Footer />
            </Canvas>
            <ButtonsPanel>
                {/* <button><Link as='a' to='/'>Voltar</Link> </button> */}
                <button onClick={onButtonClick}>Download imagem</button> 
            </ButtonsPanel>
        </CommunityStyles>
    )
}
