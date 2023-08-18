import { HTMLAttributes, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw, { css, styled } from 'twin.macro';
import { useOnClickOutside } from 'usehooks-ts';

import { COLOR } from '~/assets/colors';
import logo from '~/assets/images/Logo.png';
import { POPUP_ID } from '~/constants';
import { usePopup } from '~/hooks/pages/use-popup';
import { parseNumberWithComma } from '~/utils/number';
import { truncateAddress } from '~/utils/string';

import { FilledMediumButton } from '../buttons';
import { IconLogout, IconXrottery } from '../icons';

interface Props extends HTMLAttributes<HTMLDivElement> {
  isConnected?: boolean;
  address?: `r${string}`;
  xrpBalance?: string;
  disconnect?: () => void;
}

export const Gnb = ({ isConnected, address, xrpBalance, disconnect }: Props) => {
  const navigate = useNavigate();
  const [dropdownOpened, dropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => dropdownOpen(false));

  const { open } = usePopup(POPUP_ID.CONNECT);

  const handleDisconnect = () => {
    disconnect?.();
    dropdownOpen(false);
  };

  return (
    <Wrapper>
      <LogoWrapper onClick={() => navigate('/')}>
        <LogoImage src={logo} alt="logo" />
        <IconXrottery width={131} height={24} />
      </LogoWrapper>
      <ButtonWrapper>
        {isConnected && <MypageButton onClick={() => navigate('/mypage')}>My Page</MypageButton>}
        {isConnected ? (
          <DropdownButtonWrapper>
            <DropdownButton onClick={() => dropdownOpen(prev => !prev)}>
              <DropdownText>{truncateAddress(address)}</DropdownText>
            </DropdownButton>
            {dropdownOpened && (
              <OpenedDropdown ref={dropdownRef}>
                <OpenedDropdownButton onClick={() => dropdownOpen(prev => !prev)}>
                  <DropdownText>{truncateAddress(address)}</DropdownText>
                </OpenedDropdownButton>
                <OpenedDropdownXrpWrapper>
                  <XrpValue>{parseNumberWithComma(Number(xrpBalance))}</XrpValue>
                  <OpenedDropdownText>XRP</OpenedDropdownText>
                </OpenedDropdownXrpWrapper>
                <OpenedDropdownDisconnect>
                  <IconLogout width={20} height={20} color={COLOR.GRAY2} />
                  <OpenedDropdownText onClick={handleDisconnect}>Disconnect</OpenedDropdownText>
                </OpenedDropdownDisconnect>
              </OpenedDropdown>
            )}
          </DropdownButtonWrapper>
        ) : (
          <FilledMediumButton text={'Connect Wallet'} onClick={open} />
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  absolute top-0 left-0 w-full h-90 flex justify-between items-center px-20 py-24 bg-transparent z-10
`;

const LogoWrapper = tw.div`
  flex items-end h-30 gap-12 clickable
`;

const ButtonWrapper = tw.div`
  flex items-center gap-40
`;

const LogoImage = tw.img`
  w-28 h-28
`;

const MypageButton = tw.div`
  w-81 font-b-20 text-center text-white bg-transparent clickable
`;

const DropdownButtonWrapper = styled.div(() => [
  tw`relative w-148 h-42 font-b-20 flex flex-center p-1 rounded-8`,
  css`
    background: linear-gradient(315deg, #9744ff 0%, #ff36ff 100%);
  `,
]);

const DropdownButton = tw.div`
  w-full h-full text-center bg-gray5 px-23 py-9 rounded-8 clickable
`;

const DropdownText = tw.div`
  font-b-14 text-white
`;

const OpenedDropdown = styled.div(() => [
  tw`w-148 h-114 absolute top-0 flex flex-col items-center rounded-8 z-11 bg-gray4`,
  css`
    box-shadow: 0px 4px 20px 0px #0000004d;
  `,
]);

const OpenedDropdownButton = tw.div`
  h-42 px-24 py-10 rounded-8 clickable text-center
`;

const OpenedDropdownText = tw.div`
  text-gray2 font-r-12
`;

const OpenedDropdownXrpWrapper = tw.div`
  w-124 h-36 flex justify-between items-center
`;

const XrpValue = tw.div`
  text-white font-r-12
`;

const OpenedDropdownDisconnect = tw.div`
  w-85 h-36 flex clickable gap-4 items-center
`;
