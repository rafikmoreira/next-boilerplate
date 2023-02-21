import * as S from './styles'

export type Props = {
  title?: string
  description?: string
}

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJs, NextJs e Styled Components'
}: Props) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt={`Imagem de um átomo e ${title} escrito ao lado.`}
      />
      <S.Title>React + TypeScript + SWC</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
