import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, MockProxy } from 'jest-mock-extended';

import prisma from '../lib/prisma';

jest.mock('../lib/prisma.ts', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));

beforeEach(() => {
  mockReset(prismaMock);
});

export const prismaMock = (prisma as unknown) as MockProxy<PrismaClient>;
