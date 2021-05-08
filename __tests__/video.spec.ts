import { createMocks } from 'node-mocks-http';
import { prismaMock } from '../test/mockClient';
import video from '../pages/api/video';

describe('video', () => {
  it('should work', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    prismaMock.video.findMany.mockResolvedValueOnce([]);

    await video(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual([]);
  });
});
