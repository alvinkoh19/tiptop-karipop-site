import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CaseStudyPage } from '@/components/case-study-page'
import { caseStudies, getCaseStudy } from '@/lib/site-data'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    return {
      title: 'Case Study Not Found | Tiptop Karipop',
    }
  }

  return {
    title: `${study.title} | Tiptop Karipop`,
    description: study.subtitle,
  }
}

export default async function CaseStudyRoute({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) notFound()

  return <CaseStudyPage study={study} />
}
