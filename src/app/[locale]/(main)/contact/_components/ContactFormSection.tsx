'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { Mail, Linkedin, Github, Loader2, MessageCircle, Zap } from 'lucide-react';
import { Link } from '@/i18n/navigation';

import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormData } from '@/lib/validation';
import { useTranslations } from 'next-intl';

export function ContactFormSection() {
  const t = useTranslations("ContactPage.Form");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = "447926664717";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t('fast_track_whatsapp_msg'))}`;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactFormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        // Specific handling for rate limiting
        if (response.status === 429) {
          toast.error(t("too_many_requests"));
          return;
        }
        
        // Validation errors from backend
        if (response.status === 400 && data.details) {
          data.details.forEach((detail: { field: string; message: string }) => {
            toast.error(`${detail.field}: ${detail.message}`);
          });
          return;
        }
        
        throw new Error(data.error || t("error"));
      }

      toast.success(t("success"));
      form.reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(t("error"));
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SectionWrapper className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        
        {/* Left Column: Fast Track (WhatsApp) & Info */}
        <div className="flex flex-col gap-8">
          
          <div>
            <h2 className="font-heading text-3xl font-bold text-slate-800">{t("title")}</h2>
            <p className="text-lg text-slate-600 mt-4 leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Fast Track (WhatsApp) */}
          <div className="bg-[#000037] p-8 rounded-2xl shadow-lg border border-[#00006F] text-white">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-[#FFD700]" />
              <h3 className="text-2xl font-bold">{t("fast_track_title")}</h3>
            </div>
            <p className="text-slate-300 mb-6">
              {t("fast_track_desc")}
            </p>
            <Button asChild size="lg" className="w-full bg-[#FFD700] text-[#000037] hover:bg-[#CCAC00] font-bold text-lg h-14">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                {t("fast_track_btn")}
              </a>
            </Button>
          </div>

          {/* Other Contacts */}
          <div className="flex flex-col gap-4 pt-4 border-t border-slate-200">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{t("or_reach_out")}</span>
            <a href="mailto:iurylenon@gmail.com" className="flex items-center gap-3 text-lg font-medium text-slate-700 hover:text-[#000037] transition-colors">
              <Mail className="h-6 w-6" />
              contact@iurylenon.com
            </a>
            <div className="flex items-center gap-4 mt-2">
              <Link href="https://linkedin.com/in/iurylenon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-7 w-7 text-slate-400 hover:text-[#000037] transition-colors" />
              </Link>
              <Link href="https://github.com/iurylenonalves" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-7 w-7 text-slate-400 hover:text-[#000037] transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("name_label")}</FormLabel>
                    <FormControl><Input placeholder={t("name_placeholder")} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("email_label")}</FormLabel>
                    <FormControl><Input placeholder={t("email_placeholder")} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("service_label")}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t("service_placeholder")} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="landing-page">{t("services.landing_page")}</SelectItem>
                        <SelectItem value="saas-system">{t("services.saas_system")}</SelectItem>
                        <SelectItem value="automation">{t("services.automation")}</SelectItem>
                        <SelectItem value="infrastructure">{t("services.infrastructure")}</SelectItem>
                        <SelectItem value="audit">{t("services.audit")}</SelectItem>
                        <SelectItem value="other">{t("services.other")}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("message_label")}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t("message_placeholder")} 
                        className="h-32" {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="bg-[#FFD700] text-[#000037] font-bold hover:bg-[#CCAC00] cursor-pointer w-full">
                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : t("submit_btn")}
              </Button>
            </form>
          </Form>
        </div>

      </div>
    </SectionWrapper>
  );
}