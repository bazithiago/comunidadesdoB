import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FormStyles = styled.form`
    display: flex;
    flex-direction: column;
    width: 20%
`

export function Home(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [community, setCommunity] = useState({ title, description, imgURL });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        setCommunity({ title, description, imgURL })
    }, [title, description, imgURL])

    return (
        <FormStyles onSubmit={handleSubmit}>
            <label htmlFor="title">Título da comunidade</label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            
            <label htmlFor="description">Descrição da comunidade</label>
            <input type="textarea" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            
            <label htmlFor="imgURL">URL da imagem</label>
            <input type="textarea" name="imgURL" value={imgURL} onChange={(e) => setImgURL(e.target.value)} required />
            
            <button type="submit">
                <Link to='/community' state={{ community }}>Criar comunidade</Link>
            </button>

        </FormStyles>
    )
}