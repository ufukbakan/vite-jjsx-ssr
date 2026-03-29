import BuildCarats from '@carats/csr';
import facets from './facets.cara';
import './style.css';

BuildCarats(facets).then(carats => carats.clientRender());