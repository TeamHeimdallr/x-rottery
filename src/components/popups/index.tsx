import { HTMLAttributes, useRef } from 'react';
import tw, { css, styled } from 'twin.macro';
import { useOnClickOutside } from 'usehooks-ts';

import { COLOR } from '~/assets/colors';
import { usePopup } from '~/hooks/pages/use-popup';

import { FilledMediumButton } from '../buttons';
import { IconCheck } from '../icons';

interface Props extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  text?: string;
}

export const Popup = ({ id, text }: Props) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const { close } = usePopup(id);
  useOnClickOutside(popupRef, close);

  return (
    <Wrapper>
      <PopupWrapper ref={popupRef}>
        <BodyWrapper>
          <IconOuterCircle>
            <IconInnerCircle>
              <IconCheck color={COLOR.WHITE} width={40} height={40} />
            </IconInnerCircle>
          </IconOuterCircle>
          <TextWrapper>{text}</TextWrapper>
        </BodyWrapper>
        <ButtonWrapper>
          <FilledMediumButton text={`Done`} />
        </ButtonWrapper>
      </PopupWrapper>
      <Dim />
    </Wrapper>
  );
};

const Wrapper = tw.div``;

const PopupWrapper = tw.div`
  w-480 fixed flex flex-col bg-gray5 z-11 absolute-center rounded-20 px-48 py-40 gap-40
`;

const BodyWrapper = tw.div`
  flex flex-col items-center gap-20
`;

const IconOuterCircle = styled.div(() => [
  tw`w-84 h-84 p-6 rounded-40 flex flex-center`,
  css`
    background: linear-gradient(315deg, rgba(151, 68, 255, 0.2) 0%, rgba(255, 54, 255, 0.2) 100%);
  `,
]);

const IconInnerCircle = tw.div`
  w-72 h-72 p-16 rounded-40 main-gradient flex flex-center flex flex-center
`;

const Dim = tw.div`
  fixed w-screen h-screen bg-[#000000]/60 z-10 top-0 left-0
`;

const TextWrapper = tw.div`
  flex flex-col w-full items-center text-white font-b-20 text-center
`;

const ButtonWrapper = tw.div`
  flex w-full flex-center h-42
`;
