import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: 'dGX4itoDTkcE2hJ09ku3uD26GZYaAmGBtcoM',
  sdkSecret: 'BI5qmH2ePnY4mRBCZgMo8JqF7f8Lj9pnvXQW',
  topic: 'dldl',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: '123',
  signature: '123',
};
