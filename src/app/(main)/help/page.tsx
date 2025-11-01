import Link from 'next/link'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#000037] py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            📝 Blog Guide
          </h1>
          <p className="text-xl text-slate-300">
            How to create, edit and manage blog posts
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-12">
          
          {/* Quick Access */}
          <section className="border-l-4 border-[#FFD700] pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Quick Access</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="/studio" 
                target="_blank"
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors"
              >
                <div className="font-semibold text-blue-900">🎨 Sanity Studio</div>
                <div className="text-sm text-blue-700">Create and edit posts</div>
              </a>
              <Link 
                href="/blog" 
                className="bg-green-50 border border-green-200 rounded-lg p-4 hover:bg-green-100 transition-colors"
              >
                <div className="font-semibold text-green-900">📰 Public Blog</div>
                <div className="text-sm text-green-700">View published posts</div>
              </Link>
            </div>
          </section>

          {/* How to Create Posts */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">✍️ How to Create Posts</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">📝 For Draft</h3>
                <ol className="list-decimal list-inside space-y-2 text-yellow-700">
                  <li>Access the <strong>Studio</strong> (link above)</li>
                  <li>Click on <strong>&quot;Blog Post&quot;</strong> → <strong>&quot;+ Create&quot;</strong></li>
                  <li>Fill in: Title, Content, Image</li>
                  <li><strong>DON&apos;T fill</strong> &quot;Published At&quot;</li>
                  <li>Press <strong>Ctrl+S</strong> to save</li>
                </ol>
                <div className="mt-3 text-sm text-yellow-600">
                  ✅ Post saved as draft (only you can see it)
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">🚀 To Publish</h3>
                <ol className="list-decimal list-inside space-y-2 text-green-700">
                  <li>Create the post normally</li>
                  <li><strong>Fill in</strong> the &quot;Published At&quot; field with the current date</li>
                  <li>Press <strong>Ctrl+S</strong> to save</li>
                </ol>
                <div className="mt-3 text-sm text-green-600">
                  ✅ Post published (appears on the blog automatically)
                </div>
              </div>
            </div>
          </section>

          {/* Preview System */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">👁️ Preview System</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">🔍 How to view drafts before publishing</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-blue-700 mb-2"><strong>1. Create the post as draft</strong></p>
                  <p className="text-blue-700 mb-2"><strong>2. Copy the post &quot;slug&quot;</strong> (URL field in Studio)</p>
                  <p className="text-blue-700 mb-2"><strong>3. Use this URL:</strong></p>
                </div>
                
                <div className="bg-blue-100 border border-blue-300 rounded p-3 font-mono text-sm break-all">
                  <span className="text-blue-600">
                    /api/draft?secret=iurylenon-preview-secret-2024&slug=/blog/
                  </span>
                  <span className="bg-yellow-200 px-1">YOUR-SLUG</span>
                </div>
                
                <div className="text-sm text-blue-600">
                  <strong>Example:</strong> If the slug is &quot;my-first-post&quot;, the URL will be:<br/>
                  <code className="bg-blue-100 px-2 py-1 rounded">
                    .../api/draft?secret=iurylenon-preview-secret-2024&slug=/blog/my-first-post
                  </code>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>💡 Tip:</strong> When in preview mode, you&apos;ll see a 
                <span className="bg-yellow-200 px-2 py-1 mx-1 rounded text-sm">yellow banner</span> 
                at the top of posts.
              </p>
            </div>
          </section>

          {/* Useful URLs */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🔗 Useful Links</h2>
            
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <div className="font-semibold">Exit Preview Mode</div>
                  <div className="text-sm text-gray-600">Remove the yellow banner</div>
                </div>
                <a 
                  href="/api/disable-draft"
                  className="bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200 transition-colors"
                >
                  Click here
                </a>
              </div>
            </div>
          </section>

          {/* Workflow */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🔄 Recommended Workflow</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">📝 New Posts</h3>
                  <ol className="text-sm space-y-1 text-purple-700">
                    <li>1. Write in Studio (without date)</li>
                    <li>2. Test in preview</li>
                    <li>3. Make adjustments</li>
                    <li>4. Fill in &quot;Published At&quot;</li>
                    <li>5. Post goes live! 🚀</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold text-pink-800 mb-3">✏️ Existing Posts</h3>
                  <ol className="text-sm space-y-1 text-pink-700">
                    <li>1. Edit in Studio</li>
                    <li>2. Save changes</li>
                    <li>3. Changes are live! ✅</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🆘 If Something Goes Wrong</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800">❓ Post doesn&apos;t appear on blog</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Check if &quot;Published At&quot; is filled in</li>
                  <li>• Wait a few seconds and refresh the page</li>
                  <li>• Confirm you saved the post (Ctrl+S)</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800">❓ Preview doesn&apos;t work</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Check if the slug is correct in the URL</li>
                  <li>• Confirm the post was saved in Studio</li>
                  <li>• Try accessing the post normally first</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              💝 Any questions? Just ask!<br/>
              <span className="text-sm">System working perfectly ✨</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Blog Guide - Help',
  description: 'How to use the blog and preview system',
}
