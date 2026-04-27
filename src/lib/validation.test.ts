import {
  contactFormSchema,
  sanitizeContactForm,
  sanitizeInput,
} from '@/lib/validation';

describe('contactFormSchema', () => {
  it('accepts and returns parsed data for a valid payload', () => {
    const payload = {
      name: 'Iury Lenon',
      email: 'iury@example.com',
      service: 'automation',
      message: 'I need help automating my lead qualification flow.',
    };

    const result = contactFormSchema.safeParse(payload);

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual(payload);
    }
  });

  it('rejects invalid payload with field-level issues', () => {
    const result = contactFormSchema.safeParse({
      name: '1',
      email: 'invalid-email',
      service: 'unknown-service',
      message: 'short',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      const fields = result.error.issues.map((issue) => issue.path.join('.'));
      expect(fields).toEqual(expect.arrayContaining(['name', 'email', 'service', 'message']));
    }
  });

  it('rejects empty strings and oversized input', () => {
    const result = contactFormSchema.safeParse({
      name: '',
      email: 'a'.repeat(250) + '@example.com',
      service: 'automation',
      message: '',
    });

    expect(result.success).toBe(false);
  });

  it('rejects null and undefined payload', () => {
    expect(contactFormSchema.safeParse(null).success).toBe(false);
    expect(contactFormSchema.safeParse(undefined).success).toBe(false);
  });
});

describe('sanitizeInput', () => {
  it('removes dangerous HTML-related patterns', () => {
    const dirty = '<img src=x onerror=alert(1)> javascript:alert(1) Hello';
    const sanitized = sanitizeInput(dirty);

    expect(sanitized).not.toContain('<');
    expect(sanitized).not.toContain('>');
    expect(sanitized.toLowerCase()).not.toContain('javascript:');
    expect(sanitized.toLowerCase()).not.toContain('onerror=');
  });

  it('handles mixed casing in javascript protocol and events', () => {
    const dirty = 'JaVaScRiPt:alert(1) oNcLiCk=doBadThing()';
    const sanitized = sanitizeInput(dirty);

    expect(sanitized.toLowerCase()).not.toContain('javascript:');
    expect(sanitized.toLowerCase()).not.toContain('onclick=');
  });

  it('sanitizes encoded and quoted script patterns', () => {
    const dirty = '\"\'><script>alert(1)</script> &#x3C;script&#x3E;boom&#x3C;/script&#x3E;';
    const sanitized = sanitizeInput(dirty);

    expect(sanitized).not.toContain('<');
    expect(sanitized).not.toContain('>');
    expect(sanitized).not.toContain('&#x3C;');
    expect(sanitized).not.toContain('&#x3E;');
    expect(sanitized.toLowerCase()).not.toContain('javascript:');
  });

  it('is idempotent when applied multiple times', () => {
    const dirty = '<a onclick=run()>javascript:hello</a>';
    const once = sanitizeInput(dirty);
    const twice = sanitizeInput(once);

    expect(twice).toBe(once);
  });

  it('handles long strings without truncation', () => {
    const long = 'a'.repeat(10_000);
    expect(sanitizeInput(long)).toHaveLength(10_000);
  });

  it('trims whitespace and preserves safe text', () => {
    expect(sanitizeInput('   hello world   ')).toBe('hello world');
    expect(sanitizeInput('Olá mundo seguro')).toBe('Olá mundo seguro');
  });
});

describe('sanitizeContactForm', () => {
  it('sanitizes user-controlled fields while preserving service', () => {
    const result = sanitizeContactForm({
      name: ' <b>Iury</b> ',
      email: ' iury@example.com ',
      service: 'saas-system',
      message: 'Hey <script>alert(1)</script> world',
    });

    expect(result.service).toBe('saas-system');
    expect(result.email).toBe('iury@example.com');
    expect(result.name).not.toContain('<');
    expect(result.name).not.toContain('>');
    expect(result.message).not.toContain('<');
    expect(result.message).not.toContain('>');
  });

  it('does not mutate original payload', () => {
    const payload = {
      name: ' <b>Iury</b> ',
      email: ' iury@example.com ',
      service: 'saas-system' as const,
      message: 'Hey <script>alert(1)</script> world',
    };
    const copy = { ...payload };

    sanitizeContactForm(payload);

    expect(payload).toEqual(copy);
  });
});
