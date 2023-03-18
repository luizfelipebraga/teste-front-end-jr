import Logo from '@assets/logo-vtex.png';
import { Container, Image } from './styles';

export function AvatarBrand() {
  return (
    <Container>
      <Image src={Logo} alt="Logo" width={168.797} height={61.922}/>
    </Container>
  )
}
