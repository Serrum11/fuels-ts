// #region max-outputs
import { Provider } from 'fuels';

import { LOCAL_NETWORK_URL } from '../../../env';

const provider = await Provider.create(LOCAL_NETWORK_URL);

const { maxInputs, maxOutputs } =
  provider.getChain().consensusParameters.txParameters;

// #endregion max-outputs
console.log('Max Inputs', maxInputs);
console.log('Max Outputs', maxOutputs);