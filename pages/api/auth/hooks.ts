import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, secret } = JSON.parse(req.body);
    if (secret !== process.env.AUTH0_HOOK_SECRET) {
      throw new Error('No secret');
    }
    const user = prisma.user.create({
      data: {
        email,
        first_name: '',
        last_name: '',
      },
    });

    console.log('created user');
  } catch (error) {
    console.log(error);
  } finally {
    res.json({ received: true });
  }
};
