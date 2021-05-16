import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const { email, secret } = req.body;
    if (secret !== process.env.AUTH0_HOOK_SECRET) {
      throw new Error('No secret');
    }
    const user = await prisma.user.create({
      data: {
        email,
        first_name: '',
        last_name: '',
      },
    });

    if (user) {
      console.log('created user');
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  } finally {
    res.json({ received: true });
  }
};
