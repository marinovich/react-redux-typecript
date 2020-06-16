import * as React from 'react';

import View from '../../containers/View';
import { AppProps } from './models';

const App: React.FunctionComponent<AppProps> = ({ decrease, increase }) => {
  const onClickDecrease: React.MouseEventHandler = () => {
    decrease();
  };
  const onClickIncrease: React.MouseEventHandler = () => {
    increase();
  };

  return (
    <>
      <View />
      <button type="button" onClick={onClickDecrease}>Decrease</button>
      <button type="button" onClick={onClickIncrease}>Increase</button>
    </>
  );
};

export default App;
