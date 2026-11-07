import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { ARTICLES_DATA, getArticleBySlug } from "@/data/articles";

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} — TecAura Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES_DATA.filter((a) => a.id !== article.id).slice(
    0,
    3
  );

  return (
    <div className="bg-[#101018] text-[#F5F5FA] pt-32">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-6 pb-12 border-b border-[#30303B]">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#A5A5B5] hover:text-[#21B8E8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#171721] border border-[#30303B] text-xs font-mono uppercase tracking-wider text-[#21B8E8]">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A5A5B5]">
              <Clock className="w-3.5 h-3.5 text-[#7657FF]" />
              {article.readTime}
            </span>
            <span className="text-xs font-mono text-[#A5A5B5]">
              • {article.publishedAt}
            </span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl text-[#F5F5FA] tracking-tight leading-[1.1]">
            {article.title}
          </h1>

          <p className="text-lg text-[#A5A5B5] leading-relaxed">
            {article.excerpt}
          </p>

          <div className="text-xs font-mono text-[#7657FF]">
            By {article.authorRole}
          </div>
        </div>

        {/* Key Takeaways Box */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#171721] border border-[#7657FF]/40 space-y-4">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#21B8E8]">
            KEY ARCHITECTURAL TAKEAWAYS
          </div>
          <ul className="space-y-2.5">
            {article.keyTakeaways.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm text-[#F5F5FA]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#7657FF] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Sections */}
        <div className="space-y-12">
          {article.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5FA]">
                {section.heading}
              </h2>
              {section.body.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-base text-[#A5A5B5] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {section.codeSnippet && (
                <div className="my-6 rounded-2xl bg-[#0B0B10] border border-[#30303B] overflow-hidden">
                  <div className="px-4 py-2.5 bg-[#171721] border-b border-[#30303B] flex items-center justify-between text-xs font-mono text-[#A5A5B5]">
                    <span className="inline-flex items-center gap-2 text-[#21B8E8]">
                      <Terminal className="w-3.5 h-3.5" />
                      {section.codeSnippet.caption}
                    </span>
                    <span className="uppercase text-[#7657FF]">
                      {section.codeSnippet.language}
                    </span>
                  </div>
                  <pre className="p-5 text-xs sm:text-sm font-mono text-[#F5F5FA] overflow-x-auto leading-relaxed">
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-[#171721] border-t border-b border-[#30303B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5FA]">
              Continue Reading
            </h2>
            <Link
              href="/insights"
              className="text-xs font-mono uppercase tracking-wider text-[#21B8E8] inline-flex items-center gap-1"
            >
              <span>All Articles</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/insights/${rel.slug}`}
                className="p-6 rounded-2xl bg-[#101018] border border-[#30303B] hover:border-[#7657FF] transition-all group space-y-3"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#21B8E8]">
                  {rel.category}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#F5F5FA] group-hover:text-[#21B8E8] transition-colors">
                  {rel.title}
                </h3>
                <p className="text-xs text-[#A5A5B5] line-clamp-2">
                  {rel.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

