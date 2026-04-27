// Simple in-memory rate limiter
// For production use, consider using a distributed store like Redis to handle rate limits across multiple instances.

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up old entries every hour
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 60 * 60 * 1000); // 1 hour

// Avoid keeping the Node.js event loop alive only because of cleanup.
if (typeof cleanupInterval.unref === 'function') {
  cleanupInterval.unref();
}

export function rateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000 // 15 minutes
): { success: boolean; remaining: number; resetTime: number } {
  const now = Date.now();

  if (limit <= 0) {
    return { success: false, remaining: 0, resetTime: now + windowMs };
  }

  const entry = rateLimitMap.get(identifier);

  if (!entry || now > entry.resetTime) {
    // New time window
    const resetTime = now + windowMs;
    rateLimitMap.set(identifier, { count: 1, resetTime });
    return { success: true, remaining: limit - 1, resetTime };
  }

  if (entry.count >= limit) {
    // Limit exceeded
    return { success: false, remaining: 0, resetTime: entry.resetTime };
  }

  // Increment counter
  entry.count++;
  rateLimitMap.set(identifier, entry);
  return { success: true, remaining: limit - entry.count, resetTime: entry.resetTime };
}
