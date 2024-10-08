import { Container } from "./styles";

export function Input({icon: Icon, ...rest}) {
  return(
    <Container >
    
    {Icon && <Icon size={20} />} {/*Se tiver Icon, mostre, senão não*/}
    <input {...rest} />

    </Container>
  )
} 