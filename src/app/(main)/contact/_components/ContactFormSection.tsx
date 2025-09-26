'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { Mail, Linkedin, Github, Loader2 } from 'lucide-react';
import Link from 'next/link';

import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Schema de validação do formulário com Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      toast.success('Message sent successfully!');
      form.reset();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        
        {/* Coluna da Esquerda: Informações de Contato */}
        <div className="flex flex-col gap-6">
          <h2 className="font-heading text-3xl font-bold text-slate-800">Get in Touch</h2>
          <p className="text-lg text-slate-600">
            I'm currently available for freelance opportunities and open to discussing new projects.
            Feel free to reach out directly or connect with me on social media.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <a href="mailto:iurylenon@gmail.com" className="flex items-center gap-3 text-lg font-medium text-slate-700 hover:text-[#000037]">
              <Mail className="h-6 w-6" />
              iurylenon@gmail.com
            </a>
            <div className="flex items-center gap-4">
              <Link href="https://linkedin.com/in/iurylenon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-8 w-8 text-slate-500 hover:text-[#000037]" />
              </Link>
              <Link href="https://github.com/iurylenonalves" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-8 w-8 text-slate-500 hover:text-[#000037]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Formulário */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl><Input placeholder="Name" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl><Input placeholder="youremail@email.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl><Textarea placeholder="Hi Iury, I'd like to talk about..." className="h-32" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="bg-[#FFD700] text-[#000037] font-bold hover:bg-[#CCAC00] cursor-pointer w-full">
                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>

      </div>
    </SectionWrapper>
  );
}