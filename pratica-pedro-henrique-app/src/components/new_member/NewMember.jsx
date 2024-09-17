import * as S from './NewMember.js'

export default function NewMember({ title, price }) {
  return (
    <>
    <S.Section>

        <S.Title>{title}</S.Title>

        <S.Container>
          <img src="https://media.istockphoto.com/id/496603666/pt/vetorial/%C3%ADcone-plana-verifica%C3%A7%C3%A3o.jpg?s=612x612&w=0&k=20&c=59xwMZUHiaI53N1ouEYGjVsdbanq4iXqiU_MppilZ7M=" alt="OK" width="20px" height="20px" />
          <S.ValidP>PNG templates</S.ValidP>
        </S.Container>

        <S.Container>
          <img src="https://d29fhpw069ctt2.cloudfront.net/clipart/108105/preview/TzeenieWheenie_red_green_OK_not_OK_Icons_1_preview_82d0.png" alt="Not Ok" width="15px" height="15px"/>
          <S.InvalidP>Figma responsive components</S.InvalidP>
        </S.Container>

        <S.Container>
                    <img src="https://d29fhpw069ctt2.cloudfront.net/clipart/108105/preview/TzeenieWheenie_red_green_OK_not_OK_Icons_1_preview_82d0.png" alt="Not Ok" width="15px" height="15px"/>
          <S.InvalidP>Constant updates</S.InvalidP>
        </S.Container>

        <S.Container>
                    <img src="https://d29fhpw069ctt2.cloudfront.net/clipart/108105/preview/TzeenieWheenie_red_green_OK_not_OK_Icons_1_preview_82d0.png" alt="Not Ok" width="15px" height="15px"/>
          <S.InvalidP>Custom templates</S.InvalidP>
        </S.Container>

      <S.PriceAndPerMonth>
        <S.Price>${price}</S.Price>
        <S.PerMonth>Per month</S.PerMonth>
      </S.PriceAndPerMonth>

      <S.Button>Try now</S.Button>

  </S.Section>
    </>
  )
}