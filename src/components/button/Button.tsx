import styled from 'styled-components';
import './Button.scss';


const button = styled.button`
background-color: #FF8E00
height: 40px;
padding: 0 10px;
border-radius: 5px;
border: none;
width: 100%;
font-weight: 600;
color: #eee;
cursor: pointer;
`

export default function Button({children, onClick}: {children: any; onClick: any;}) {
    return ( 
        <button className={button} onClick={onClick}>
            {children}
        </button>
     );
}
 