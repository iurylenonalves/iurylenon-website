// Simple in-memory rate limiter
// Para produção, considere usar Upstash Redis ou Vercel KV

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Limpar entradas antigas a cada hora
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 60 * 60 * 1000); // 1 hora

export function rateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 15 * 60 * 1000 // 15 minutos
): { success: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  if (!entry || now > entry.resetTime) {
    // Nova janela de tempo
    const resetTime = now + windowMs;
    rateLimitMap.set(identifier, { count: 1, resetTime });
    return { success: true, remaining: limit - 1, resetTime };
  }

  if (entry.count >= limit) {
    // Limite excedido
    return { success: false, remaining: 0, resetTime: entry.resetTime };
  }

  // Incrementar contador
  entry.count++;
  rateLimitMap.set(identifier, entry);
  return { success: true, remaining: limit - entry.count, resetTime: entry.resetTime };
}
