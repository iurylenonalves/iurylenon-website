import { z } from 'zod';

// Schema shared between frontend and backend
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name must be less than 100 characters." })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { message: "Name contains invalid characters." }),
  
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email is too long." }),

  service: z.enum([
    "landing-page", 
    "saas-system", 
    "automation", 
    "infrastructure", 
    "audit",
    "other"
  ], {
    message: "Please select a valid service option."
  }),
  
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Function to sanitize HTML and prevent XSS
export function sanitizeInput(input: string): string {
  // Decode common encoded angle brackets before stripping tags/patterns.
  const decoded = input
    .replace(/(&lt;|&#x3c;|&#60;)/gi, '<')
    .replace(/(&gt;|&#x3e;|&#62;)/gi, '>');

  return decoded
    .replace(/[<>]/g, '') // Remove < e >
    .replace(/javascript:/gi, '') // Remove javascript:
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim();
}

// Sanitize all form fields
export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email),
    service: data.service,
    message: sanitizeInput(data.message),
  };
}
