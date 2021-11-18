import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { toPng } from 'html-to-image';
import { useLocation } from 'react-router-dom';


export const Image = styled.div`
    background-color: green;
    width: 300px;
    color: white
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
            link.download = 'my-image-name.png'
            link.href = dataUrl
            link.click()
        })
        .catch((err) => {
            console.log(err)
        })
    }, [ref])


    return (
        <>
            <Image ref={ref}>
                <h1>Título da comunidade: {title}</h1>
                <p>{description}</p>
                <img src={imgURL} alt="Imagem" />
            </Image>
            <button onClick={onButtonClick}>Download</button> 
        </>
    )
}