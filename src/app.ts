import { chdir } from "process";
chdir(import.meta.dirname);
export default import('./server/entrypoint')