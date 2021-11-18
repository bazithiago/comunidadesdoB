// import styled from 'styled-components';
import { useLocation } from 'react-router-dom';


// export const FormStyles = styled.form`
//     display: flex;
//     flex-direction: column;
//     width: 20%
// `

export function Community(){
    const location = useLocation();
    const { title, description, imgURL} = location.state.community;
    console.log(location.state)

    return (
        <section>
            <caption>
                <img src="" alt="" />
            </caption>
            <button>Download</button>
            
           {title}<br/>
           {description}<br/>
           {imgURL}<br/>

        </section>

    )
}