import { clearRateLimitStore, rateLimit } from '@/lib/rate-limit';

describe('rateLimit', () => {
  beforeEach(() => {
    clearRateLimitStore();
  });

  it('allows requests until limit and blocks after limit', () => {
    const id = 'ip-limit-test-1';

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
    const idA = 'ip-a-test-1';
    const idB = 'ip-b-test-1';

    rateLimit(idA, 1, 5000);
    const blockedA = rateLimit(idA, 1, 5000);
    const firstB = rateLimit(idB, 1, 5000);

    expect(blockedA.success).toBe(false);
    expect(firstB.success).toBe(true);
  });

  it('resets after window expires', () => {
    const id = 'ip-reset-test-1';
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
    expect(afterReset.remaining).toBe(0);

    nowSpy.mockRestore();
  });

  it('blocks immediately when limit is zero', () => {
    const result = rateLimit('ip-zero-limit-test', 0, 1000);
    expect(result.success).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it('blocks immediately when limit is negative', () => {
    const result = rateLimit('ip-negative-limit-test', -1, 1000);
    expect(result.success).toBe(false);
    expect(result.remaining).toBe(0);
  });
});
