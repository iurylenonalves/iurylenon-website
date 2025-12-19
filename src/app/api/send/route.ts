import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { contactFormSchema, sanitizeContactForm } from '@/lib/validation';
import { ZodError } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  return 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    // Rate Limiting - 5 requests every 15 minutes per IP
    const clientIp = getClientIp(request);
    const rateLimitResult = rateLimit(clientIp, 5, 15 * 60 * 1000);
    
    if (!rateLimitResult.success) {
      const resetDate = new Date(rateLimitResult.resetTime);
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          resetAt: resetDate.toISOString()
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': resetDate.toISOString(),
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
          }
        }
      );
    }

    // Parse and validate JSON
    const body = await request.json();

    // Validation with Zod
    const validatedData = contactFormSchema.parse(body);

    // Data sanitization
    const sanitizedData = sanitizeContactForm(validatedData);

    // Send email
    const { error } = await resend.emails.send({
      from: 'Iury Lenon Tech Solutions <contact@iurylenon.com>',
      to: ['contact@iurylenon.com'],
      subject: `New Lead: ${sanitizedData.name} - ${sanitizedData.service.toUpperCase()}`,
      replyTo: sanitizedData.email,
      html: `
        <div style="font-family: sans-serif; font-size: 16px; color: #333;">
          <h2 style="color: #000;">🚀 New Business Inquiry</h2>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
          <p><strong>Interested in:</strong> ${sanitizedData.service}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${sanitizedData.message.replace(/\n/g, '<br>')}
          </div>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Security: Sent from IP ${clientIp}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': String(rateLimitResult.remaining),
          'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
        }
      }
    );

  } catch (err: unknown) {
    // Validation error handling
    if (err instanceof ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation error',
          details: err.issues.map((issue) => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      );
    }

    // JSON parsing error
    if (err instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid JSON format.' },
        { status: 400 }
      );
    }

    // Other errors
    console.error('Unexpected error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Block other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { 'Allow': 'POST' } }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { 'Allow': 'POST' } }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { 'Allow': 'POST' } }
  );
}
