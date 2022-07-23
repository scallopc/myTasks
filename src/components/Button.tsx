import styled from "styled-components";

const ButtonStyled = styled.button``;

const Button = styled(ButtonStyled)`
  background-color: ${(props) => props.theme.colors.primary};
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.secundary};
  }
`;

export default function button({
  children,
  onClick,
}: {
  children: any;
  onClick: any;
}) {
  return <Button onClick={onClick}>{children}</Button>;
}
