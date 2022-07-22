import styled from 'styled-components';


const Button = styled.button`
background-color:${props => props.theme.colors.primary};
height: 40px;
padding: 0 10px;
border-radius: 5px;
border: none;
width: 100%;
font-weight: 600;
color:${props => props.theme.colors.text};
cursor: pointer;
`

export default function button({children, onClick}: {children: any; onClick: any;}) {
    return ( 
        <Button onClick={onClick}>
            {children}
        </Button>
     );
}
 
