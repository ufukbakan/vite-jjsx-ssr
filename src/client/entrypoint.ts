import { mount, clientRender } from '@carats/csr';
import facets from './facets.cara';

mount(facets);
clientRender(); // comment out this line to render only on server
