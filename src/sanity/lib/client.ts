import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Cliente público (sem token) - para conteúdo publicado
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Desabilitado para ISR e revalidação
})

// Cliente com token (para drafts) - só no servidor
export const clientWithToken = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: 'previewDrafts', // Permite visualizar drafts
})
