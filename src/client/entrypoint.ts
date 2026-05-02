import { mount, clientRender } from '@carats/csr';
import facets from './facets';

mount(facets);
clientRender(); // comment out this line to render only on server
