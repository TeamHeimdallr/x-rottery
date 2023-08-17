import { HTMLAttributes, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw, { css, styled } from 'twin.macro';

import logo from '~/assets/images/Logo.png';

import { FilledMediumButton } from '../buttons';
import { IconXrottery } from '../icons';

interface Props extends HTMLAttributes<HTMLDivElement> {
  address?: string;
  xrpBalance?: string;
  disconnect?: () => void;
}

export const Gnb = ({ address, xrpBalance, disconnect }: Props) => {
  const navigate = useNavigate();
  const [dropdownOpened, dropdownOpen] = useState(false);
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImage src={logo} alt="logo" />
        <IconXrottery width={131} height={30} />
      </LogoWrapper>
      <ButtonWrapper>
        {address && <MypageButton onClick={() => navigate('/mypage')}>My Page</MypageButton>}
        {address ? (
          <DropdownButtonWrapper>
            <DropdownButton>{address}</DropdownButton>
          </DropdownButtonWrapper>
        ) : (
          <FilledMediumButton text={'Connect Wallet'} onClick={() => console.log('connect')} />
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-90 flex justify-between items-center px-20 py-24 bg-transparent
`;

const LogoWrapper = tw.div`
  flex items-center gap-12
`;

const ButtonWrapper = tw.div`
  flex items-center gap-40
`;

const LogoImage = tw.img`
  w-28 h-28
`;

const MypageButton = tw.div`
  w-81 font-b-20 text-center text-white bg-transparent
`;

const DropdownButtonWrapper = styled.div(() => [
  tw`w-148 h-42 font-b-20 flex flex-center p-1`,
  css`
    background: linear-gradient(315deg, #9744ff 0%, #ff36ff 100%);
  `,
]);

const DropdownButton = tw.div`
  w-full h-full text-center text-white bg-gray5
`;
