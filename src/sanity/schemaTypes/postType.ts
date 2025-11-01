import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      publishedAt: 'publishedAt',
      slug: 'slug.current',
    },
    prepare({title, author, media, publishedAt, slug}) {
      const date = publishedAt 
        ? new Date(publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })
        : 'Not published'
      
      const subtitle = author ? `${author} • ${date}` : date
      
      return {
        title: title || 'Untitled Post',
        subtitle: `${subtitle} • /blog/${slug || 'no-slug'}`,
        media,
      }
    },
  },

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of your blog post',
      validation: (Rule) => Rule.required().max(100).warning('Shorter titles are better for SEO'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: '💡 Preview URL: http://localhost:3000/api/draft?secret=YOUR_SECRET&slug=/blog/YOUR-SLUG (configure YOUR_SECRET in .env.local as SANITY_PREVIEW_SECRET)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Cover image for the blog post',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
          validation: (Rule) => Rule.required(),
        })
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
      validation: (Rule) => Rule.max(3).warning('Maximum 3 categories recommended'),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A brief summary of the post (recommended 150-160 characters for SEO)',
      validation: (Rule) => Rule.max(200).warning('Keep it under 160 characters for best SEO results'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When this post should be published',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'The main content of your blog post',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
