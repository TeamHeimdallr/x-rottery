import tw from 'twin.macro';

import { FilledLargeButton } from '~/components/buttons';

const MainPage = () => {
  return (
    <Wrapper>
      <FilledLargeButton text={'Connect Wallet'} isLoading={true} />
    </Wrapper>
  );
};

const Wrapper = tw.div``;

export default MainPage;
