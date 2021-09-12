import { createElement } from 'rax';
import Money from '@/components/Money/index';
import Bubblewrap from '@/components/Bubblewrap';

export default function Home() {
  return (
    <Fragment>
      <Money/ >
      <Bubblewrap/>
    </Fragment>
  );
}
