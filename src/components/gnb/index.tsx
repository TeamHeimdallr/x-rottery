import logo from 'assets/images/logo.png';
import { HTMLAttributes, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

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
