import { culet } from "@carats/ssr";

export default culet<User>('/profile', () => {
  return {
    id: '1',
    name: 'Alexander Whitmore',
    username: 'awhitmore',
    email: 'a.whitmore@vault.io',
    phone: '+1 (212) 555-0193',
    website: 'whitmore.capital',
  };
});