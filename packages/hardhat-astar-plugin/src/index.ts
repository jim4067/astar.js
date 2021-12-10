import { extendEnvironment } from 'hardhat/config';
import { lazyFunction } from 'hardhat/plugins';

import './type-extensions';

extendEnvironment((hre) => {
  hre.astar = lazyFunction(() => require('@astar/sdk-core'));
});
