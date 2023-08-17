import { HTMLAttributes, useRef } from 'react';
import tw, { css, styled } from 'twin.macro';
import { useOnClickOutside } from 'usehooks-ts';

import { COLOR } from '~/assets/colors';
import { usePopup } from '~/hooks/pages/use-popup';

import { FilledMediumButton } from '../buttons';
import { CancelButton } from '../buttons/cancel-button';
import { IconCheck, IconWallet } from '../icons';
import { TextField } from '../text-field';

interface Props extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  text?: string;
  type?: 'success' | 'connect';
}

export const Popup = ({ id, text, type }: Props) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const { close } = usePopup(id);
  useOnClickOutside(popupRef, close);

  return (
    <Wrapper>
      <PopupWrapper ref={popupRef} type={type}>
        {type === 'connect' && (
          <ConnectWrapper>
            <ConnectTitleWrapper>
              <Title>Connect XRP wallet</Title>
              <IconWrapper onClick={close}>
                <CancelButton />
              </IconWrapper>
            </ConnectTitleWrapper>
            <TextField placeholder="Enter your private key" />
          </ConnectWrapper>
        )}
        {type === 'success' && (
          <SuccessWrapper>
            <IconOuterCircle>
              <IconInnerCircle>
                <IconCheck color={COLOR.WHITE} width={40} height={40} />
              </IconInnerCircle>
            </IconOuterCircle>
            <TextWrapper>{text}</TextWrapper>
          </SuccessWrapper>
        )}
        <ButtonWrapper>
          <FilledMediumButton text={type === 'success' ? `Done` : 'Connect'} onClick={close} />
          {type === 'connect' && (
            <CreateWalletWrapper onClick={() => console.log('create wallet')}>
              <IconWallet color={COLOR.GRAY2} width={20} height={20} />
              <CreateWalletText>Create a new Wallet</CreateWalletText>
            </CreateWalletWrapper>
          )}
        </ButtonWrapper>
      </PopupWrapper>
      <Dim />
    </Wrapper>
  );
};

const Wrapper = tw.div``;

interface PopupWrapperProps {
  type?: 'success' | 'connect';
}

const PopupWrapper = styled.div<PopupWrapperProps>(({ type }) => [
  tw`w-480 fixed flex flex-col bg-gray5 z-11 absolute-center rounded-20`,
  type === 'success' ? tw`px-48 py-40 gap-40` : tw`p-20 gap-32`,
]);

const ConnectWrapper = tw.div`
  flex flex-col gap-20
`;

const ConnectTitleWrapper = tw.div`
  flex w-full h-40 items-center justify-between
`;

const Title = tw.div`
  font-b-18 text-white
`;

const IconWrapper = tw.div`
  flex flex-center clickable
`;

const SuccessWrapper = tw.div`
  flex flex-col items-center gap-24
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
  flex flex-col w-full flex-center gap-16
`;

const CreateWalletWrapper = tw.div`
  flex gap-4 clickable
`;

const CreateWalletText = tw.div`
  font-r-12 text-gray2 text-center
`;
