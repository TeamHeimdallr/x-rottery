import { useState } from 'react';
import tw from 'twin.macro';

import { COLOR } from '~/assets/colors';

import { IconCancle } from '../icons';

export const CancleButton = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Wrapper onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <IconCancle color={isHover ? COLOR.GRAY1 : COLOR.GRAY2} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-40 h-40 flex-center clickable rounded-full
  bg-gray5
  hover:(bg-gray4)
`;
