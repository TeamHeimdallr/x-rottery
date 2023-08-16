import lottie from 'lottie-web/build/player/lottie_light';
import { ButtonHTMLAttributes, useEffect, useRef } from 'react';
import tw, { styled } from 'twin.macro';

import loading from '~/assets/lottie/loading-dot.json';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
}

export const FilledLargeButton = ({ text, isLoading, ...rest }: Props) => {
  const warpperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!warpperRef.current || !isLoading) return;
    lottie.loadAnimation({
      container: warpperRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loading,
    });

    return () => {
      lottie.destroy();
    };
  }, [warpperRef, isLoading]);

  return (
    <Wrapper isLoading={isLoading} {...rest}>
      <TextWrapper isLoading={isLoading}>{text}</TextWrapper>
      <LottieWrapper ref={warpperRef} />
    </Wrapper>
  );
};

interface ButtonProps {
  isLoading?: boolean;
}
const Wrapper = styled.button<ButtonProps>(({ isLoading }) => [
  tw`
    h-58 px-32 py-16 flex-center relative
    rounded-8 clickable main-gradient text-white
    hover:(text-pink bg-none box-shadow)
  `,
  isLoading && tw`non-clickable bg-none hover:(shadow-none)`,
]);

const TextWrapper = styled.div<ButtonProps>(({ isLoading }) => [
  tw`
    font-b-18
  `,
  isLoading && tw`opacity-0`,
]);
const LottieWrapper = tw.div`
  w-full h-full flex-center absolute absolute-center
`;
