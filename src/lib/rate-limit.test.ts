import { rateLimit } from '@/lib/rate-limit';

describe('rateLimit', () => {
  it('allows requests until limit and blocks after limit', () => {
    const id = `ip-limit-${Date.now()}`;

    const first = rateLimit(id, 2, 1000);
    const second = rateLimit(id, 2, 1000);
    const third = rateLimit(id, 2, 1000);

    expect(first).toMatchObject({ success: true, remaining: 1 });
    expect(second).toMatchObject({ success: true, remaining: 0 });
    expect(third).toMatchObject({ success: false, remaining: 0 });
    expect(first.resetTime).toBe(second.resetTime);
    expect(second.resetTime).toBe(third.resetTime);
  });

  it('tracks identifiers independently', () => {
    const idA = `ip-a-${Date.now()}`;
    const idB = `ip-b-${Date.now()}`;

    rateLimit(idA, 1, 5000);
    const blockedA = rateLimit(idA, 1, 5000);
    const firstB = rateLimit(idB, 1, 5000);

    expect(blockedA.success).toBe(false);
    expect(firstB.success).toBe(true);
  });

  it('resets after window expires', () => {
    const id = `ip-reset-${Date.now()}`;
    const nowSpy = jest.spyOn(Date, 'now');

    nowSpy.mockReturnValue(1_000);
    const first = rateLimit(id, 1, 500);

    nowSpy.mockReturnValue(1_200);
    const blocked = rateLimit(id, 1, 500);

    nowSpy.mockReturnValue(1_600);
    const afterReset = rateLimit(id, 1, 500);

    expect(first.success).toBe(true);
    expect(blocked.success).toBe(false);
    expect(afterReset.success).toBe(true);

    nowSpy.mockRestore();
  });
});
