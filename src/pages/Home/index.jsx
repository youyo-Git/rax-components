import { createElement } from 'rax';
import Money from '@/components/Money/index';
import BubbleWrap from '@/components/BubbleWrap';

export default function Home() {
  return (
    <Fragment>
      <Money/ >
      <BubbleWrap/>
    </Fragment>
  );
}
