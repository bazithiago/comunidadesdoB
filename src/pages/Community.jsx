import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { toPng } from 'html-to-image';
import { useLocation } from 'react-router-dom';
import logoOrkut from '../img/logoOrkut.png'

const CommunityStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Canvas = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
   
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

const Footer = styled.footer`
    width: 100%;
    background-color: #b7cbea;
    color: #333;
    text-align: center;
    padding: 4px 32px;
    font-size: 0.9rem;
    margin-bottom: 32px;

    a {
       color: blue;
    }
`


export function Community(){
    const location = useLocation();
    const { title, description, imgURL} = location.state.community;

    const ref = useRef(null)
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

    // const ImgStyle = {
    //     backgroundImage: `url(${imgURL})`,
    //     width: '390px',
    //     height: '560px',
    //     borderRadius: '10px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundPosition: 'center center',
    // }

    return (
        <CommunityStyles>
            <Canvas ref={ref}>
                <div> 
                    <img src={imgURL} alt="Imagem" />
                    <div className='CommunityInfos'>
                        <div>
                            <img src={logoOrkut} alt="logo"/>
                            <p><strong>Comunidades do</strong> B!</p>
                        </div>
                        <h1>{title}</h1>
                        <p><strong>Descrição:</strong> {description}</p>
                    </div>
                </div>
                <Footer>
                    Criação e layout: <a href='https://twitter.com/pagalanxe' target='_blank' rel="noreferrer">Bruno Predolin</a>   |   App por <a href='https://thiagovieira.dev' target='_blank' rel="noreferrer">thiagovieira.dev</a>
                </Footer>
            </Canvas>

            <button onClick={onButtonClick}>Download</button> 
        </CommunityStyles>
    )
}