import Logo from '@assets/logo-vtex.png';
import { Container, Image } from './styles';

export function AvatarBrand() {
  return (
    <Container>
      <Image src={Logo} alt="Logo" />
    </Container>
  )
}
