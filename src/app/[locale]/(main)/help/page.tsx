import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'HelpPage' });
  return {
    title: `${t('title')} - Help`,
    description: t('subtitle'),
  };
}

export default function HelpPage() {
  const t = useTranslations('HelpPage');

  return (
    <div className="min-h-screen bg-[#000037] py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-slate-300">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-12">
          
          {/* Quick Access */}
          <section className="border-l-4 border-[#FFD700] pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('quick_access_title')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="/studio" 
                target="_blank"
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-blue-900">{t('sanity_studio')}</div>
                <div className="text-sm text-blue-700">{t('sanity_studio_desc')}</div>
              </a>
              <Link 
                href="/blog" 
                className="bg-green-50 border border-green-200 rounded-lg p-4 hover:bg-green-100 transition-colors"
              >
                <div className="font-semibold text-green-900">{t('public_blog')}</div>
                <div className="text-sm text-green-700">{t('public_blog_desc')}</div>
              </Link>
            </div>
          </section>

          {/* How to Create Posts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('create_posts_title')}</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">{t('for_draft_title')}</h3>
                <ol className="list-decimal list-inside space-y-2 text-yellow-700">
                  <li>{t.rich('for_draft_l1', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('for_draft_l2', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t('for_draft_l3')}</li>
                  <li>{t.rich('for_draft_l4', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('for_draft_l5', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                </ol>
                <div className="mt-3 text-sm text-yellow-600">
                  {t('for_draft_success')}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">{t('to_publish_title')}</h3>
                <ol className="list-decimal list-inside space-y-2 text-green-700">
                  <li>{t('to_publish_l1')}</li>
                  <li>{t.rich('to_publish_l2', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                  <li>{t.rich('to_publish_l3', { strong: (chunks) => <strong>{chunks}</strong> })}</li>
                </ol>
                <div className="mt-3 text-sm text-green-600">
                  {t('to_publish_success')}
                </div>
              </div>
            </div>
          </section>

          {/* Preview System */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('preview_system_title')}</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">{t('preview_how_to')}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-blue-700 mb-2">{t.rich('preview_step1', { strong: (chunks) => <strong>{chunks}</strong> })}</p>
                  <p className="text-blue-700 mb-2">{t.rich('preview_step2', { strong: (chunks) => <strong>{chunks}</strong> })}</p>
                  <p className="text-blue-700 mb-2">{t.rich('preview_step3', { strong: (chunks) => <strong>{chunks}</strong> })}</p>
                </div>
                
                <div className="bg-blue-100 border border-blue-300 rounded p-3 font-mono text-sm break-all">
                  <span className="text-blue-600">
                    /api/draft?secret=iurylenon-preview-secret-2024&slug=/blog/
                  </span>
                  <span className="bg-yellow-200 px-1">YOUR-SLUG</span>
                </div>
                
                <div className="text-sm text-blue-600">
                  {t.rich('preview_example', { strong: (chunks) => <strong>{chunks}</strong> })}<br/>
                  <code className="bg-blue-100 px-2 py-1 rounded">
                    .../api/draft?secret=iurylenon-preview-secret-2024&slug=/blog/my-first-post
                  </code>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700">
                {t.rich('preview_tip', {
                  strong: (chunks) => <strong>{chunks}</strong>,
                  span: (chunks) => <span className="bg-yellow-200 px-2 py-1 mx-1 rounded text-sm">{chunks}</span>
                })}
              </p>
            </div>
          </section>

          {/* Useful URLs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('useful_links_title')}</h2>
            
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-semibold">{t('exit_preview')}</div>
                  <div className="text-sm text-gray-600">{t('exit_preview_desc')}</div>
                </div>
                <a 
                  href="/api/disable-draft"
                  className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition-colors"
                >
                  {t('click_here')}
                </a>
              </div>
            </div>
          </section>

          {/* Workflow */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('workflow_title')}</h2>
            
            <div className="bg-linear-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">{t('new_posts_title')}</h3>
                  <ol className="text-sm space-y-1 text-purple-700">
                    <li>{t('new_posts_l1')}</li>
                    <li>{t('new_posts_l2')}</li>
                    <li>{t('new_posts_l3')}</li>
                    <li>{t('new_posts_l4')}</li>
                    <li>{t('new_posts_l5')}</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold text-pink-800 mb-3">{t('existing_posts_title')}</h3>
                  <ol className="text-sm space-y-1 text-pink-700">
                    <li>{t('existing_posts_l1')}</li>
                    <li>{t('existing_posts_l2')}</li>
                    <li>{t('existing_posts_l3')}</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('troubleshooting_title')}</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800">{t('trouble_post_missing')}</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>{t('trouble_post_missing_l1')}</li>
                  <li>{t('trouble_post_missing_l2')}</li>
                  <li>{t('trouble_post_missing_l3')}</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800">{t('trouble_preview_broken')}</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>{t('trouble_preview_broken_l1')}</li>
                  <li>{t('trouble_preview_broken_l2')}</li>
                  <li>{t('trouble_preview_broken_l3')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              {t('footer_msg')}<br/>
              <span className="text-sm">{t('footer_status')}</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
