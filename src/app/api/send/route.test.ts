var mockSend = jest.fn();

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: mockSend,
    },
  })),
}));

const { DELETE, GET, POST, PUT } = require('@/app/api/send/route');

function createPostRequest(
  body: unknown,
  headers: Record<string, string> = {}
): { headers: Headers; json: () => Promise<unknown> } {
  return {
    headers: new Headers(headers),
    json: async () => body,
  };
}

describe('api/send route', () => {
  beforeEach(() => {
    mockSend.mockReset();
  });

  it('returns 200 and sends email for valid payload', async () => {
    mockSend.mockResolvedValue({ error: null });

    const response = await POST(
      createPostRequest(
        {
          name: 'Ana Silva',
          email: 'ana@example.com',
          service: 'automation',
          message: 'I need support with automation for my lead flow.',
        },
        { 'x-forwarded-for': `200.10.10.${Date.now() % 255}` }
      ) as never
    );

    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ message: 'Email sent successfully!' });
    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: ['contact@iurylenon.com'],
        replyTo: 'ana@example.com',
        subject: expect.stringContaining('Ana Silva'),
      })
    );
  });

  it('handles missing IP headers using fallback value', async () => {
    mockSend.mockResolvedValue({ error: null });

    const response = await POST(
      createPostRequest({
        name: 'Ana Silva',
        email: 'ana@example.com',
        service: 'automation',
        message: 'I need support with automation for my lead flow.',
      }) as never
    );

    expect(response.status).toBe(200);
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        html: expect.stringContaining('Security: Sent from IP unknown'),
      })
    );
  });

  it('uses the first IP when x-forwarded-for has multiple addresses', async () => {
    mockSend.mockResolvedValue({ error: null });

    const response = await POST(
      createPostRequest(
        {
          name: 'Ana Silva',
          email: 'ana@example.com',
          service: 'automation',
          message: 'I need support with automation for my lead flow.',
        },
        { 'x-forwarded-for': '210.10.10.1, 10.0.0.1, 10.0.0.2' }
      ) as never
    );

    expect(response.status).toBe(200);
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        html: expect.stringContaining('Security: Sent from IP 210.10.10.1'),
      })
    );
  });

  it('returns 400 for validation errors with field details', async () => {
    const response = await POST(
      createPostRequest(
        {
          name: '1',
          email: 'bad-email',
          service: 'invalid',
          message: 'short',
        },
        { 'x-forwarded-for': `201.10.10.${Date.now() % 255}` }
      ) as never
    );

    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.error).toBe('Validation error');
    expect(body.details).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ field: 'name' }),
        expect.objectContaining({ field: 'email' }),
        expect.objectContaining({ field: 'service' }),
        expect.objectContaining({ field: 'message' }),
      ])
    );
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('returns 400 when JSON parsing fails', async () => {
    const response = await POST(
      {
        headers: new Headers({ 'x-forwarded-for': `202.10.10.${Date.now() % 255}` }),
        json: async () => {
          throw new SyntaxError('Unexpected token');
        },
      } as never
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({ error: 'Invalid JSON format.' });
  });

  it('returns 429 after exceeding rate limit', async () => {
    mockSend.mockResolvedValue({ error: null });
    const ip = `203.10.10.${Date.now() % 255}`;

    for (let index = 0; index < 5; index++) {
      const allowedResponse = await POST(
        createPostRequest(
          {
            name: 'Ana Silva',
            email: 'ana@example.com',
            service: 'automation',
            message: 'I need support with automation for my lead flow.',
          },
          { 'x-forwarded-for': ip }
        ) as never
      );

      expect(allowedResponse.status).toBe(200);
    }

    const blockedResponse = await POST(
      createPostRequest(
        {
          name: 'Ana Silva',
          email: 'ana@example.com',
          service: 'automation',
          message: 'I need support with automation for my lead flow.',
        },
        { 'x-forwarded-for': ip }
      ) as never
    );

    const body = await blockedResponse.json();

    expect(blockedResponse.status).toBe(429);
    expect(body.error).toBe('Too many requests. Please try again later.');
  });

  it('returns 500 when Resend fails', async () => {
    mockSend.mockResolvedValue({ error: { message: 'resend-down' } });

    const response = await POST(
      createPostRequest(
        {
          name: 'Ana Silva',
          email: 'ana@example.com',
          service: 'automation',
          message: 'I need support with automation for my lead flow.',
        },
        { 'x-forwarded-for': `204.10.10.${Date.now() % 255}` }
      ) as never
    );

    expect(response.status).toBe(500);
    await expect(response.json()).resolves.toEqual({
      error: 'Failed to send email. Please try again later.',
    });
  });

  it('returns 405 for non-POST methods', async () => {
    await expect(GET().then((response: Response) => response.status)).resolves.toBe(405);
    await expect(PUT().then((response: Response) => response.status)).resolves.toBe(405);
    await expect(DELETE().then((response: Response) => response.status)).resolves.toBe(405);
  });
});
