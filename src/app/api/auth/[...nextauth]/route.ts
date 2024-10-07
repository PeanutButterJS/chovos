/* import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const options = {
  clientId: '276321684558-9mse6d8gjr2gkdq4sff5g99sjn038pv8.apps.googleusercontent.com',
  clientSecret: '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'
};

export const GET = NextAuth({
  providers: [Google(options)]
});
export const POST = NextAuth({
  providers: [Google(options)]
});
 */

import { handlers } from '../../../../../auth';
export const { GET, POST } = handlers;
