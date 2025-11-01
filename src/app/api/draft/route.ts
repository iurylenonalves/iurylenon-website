import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  // 1. Verificação de Origem - PROTEÇÃO CSRF
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const host = request.headers.get('host');
  
  // Permitir requisições do Sanity Studio e do próprio site
  const allowedOrigins = [
    `http://${host}`,
    `https://${host}`,
    'http://localhost:3000',
    'http://localhost:3333', // Sanity Studio local
  ];
  
  // Verificar origin OU referer (algumas ferramentas não enviam origin)
  const sourceUrl = origin || referer;
  if (sourceUrl && !allowedOrigins.some(allowed => sourceUrl.startsWith(allowed))) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized origin' }),
      { 
        status: 403,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  
  const { searchParams } = new URL(request.url)
  
  // Parâmetros possíveis
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const pathname = searchParams.get('pathname')
  
  // Token específico e fixo para preview
  const PREVIEW_SECRET = process.env.SANITY_PREVIEW_SECRET
  
  // Verificar secret
  if (!secret || !PREVIEW_SECRET || secret !== PREVIEW_SECRET) {
    return new Response(JSON.stringify({ 
      error: 'Invalid or missing secret'
    }), { 
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  // Habilitar draft mode
  const draft = await draftMode()
  draft.enable()

  // Determinar caminho de redirecionamento
  let redirectPath = '/'
  
  if (pathname) {
    redirectPath = pathname
  } else if (slug) {
    // Se começar com /, usar como está, senão adicionar /blog/
    redirectPath = slug.startsWith('/') ? slug : `/blog/${slug}`
  }
  
  // Redirecionar
  redirect(redirectPath)
}
