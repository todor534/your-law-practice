import React from "react";
import type { PageSchemaType } from "./types";
export function RenderBlocks({ page }: { page: PageSchemaType }){
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {page.sections.map((s: any, i: number) => {
        switch (s.type) {
          case 'Hero':
            return (
              <section key={i} className="px-6 py-20 text-center bg-gradient-to-b from-white to-neutral-50">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{s.headline}</h1>
                {s.subheadline && <p className="text-neutral-600 max-w-2xl mx-auto mb-6">{s.subheadline}</p>}
                {s.primaryCta && <a href={s.primaryCta.href} className="inline-block px-5 py-3 rounded-xl bg-indigo-600 text-white">{s.primaryCta.label}</a>}
              </section>
            );
          case 'Features':
            return (
              <section key={i} className="px-6 py-14">
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {s.items?.map((it: any, idx: number) => (
                    <div key={idx} className="p-5 rounded-2xl border border-neutral-200">
                      <h3 className="font-semibold mb-2">{it.title}</h3>
                      <p className="text-neutral-600 text-sm">{it.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          case 'Pricing':
            return (
              <section key={i} className="px-6 py-16 bg-neutral-50">
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {s.plans?.map((p: any, idx: number) => (
                    <div key={idx} className="p-6 rounded-2xl border border-neutral-200 bg-white">
                      <div className="text-2xl font-bold">{p.name}</div>
                      <div className="mt-2 text-4xl font-extrabold">{p.price}<span className="text-base font-medium">/{p.period}</span></div>
                      <ul className="mt-4 space-y-1 text-sm text-neutral-700 list-disc list-inside">
                        {p.features?.map((f: any, i2: number) => <li key={i2}>{f}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            );
          case 'FAQ':
            return (
              <section key={i} className="px-6 py-14">
                <div className="max-w-3xl mx-auto divide-y">
                  {s.items?.map((qa: any, idx: number) => (
                    <details key={idx} className="py-4">
                      <summary className="font-medium cursor-pointer">{qa.q}</summary>
                      <p className="text-sm text-neutral-700 mt-2">{qa.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            );
          case 'CTA':
            return (
              <section key={i} className="px-6 py-16 text-center bg-indigo-600 text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">{s.headline}</h2>
                {s.cta && <a href={s.cta.href} className="inline-block px-5 py-3 rounded-xl bg-white text-indigo-700 font-semibold">{s.cta.label}</a>}
              </section>
            );
          case 'Testimonials':
            return (
              <section key={i} className="px-6 py-14 bg-neutral-50">
                <div className="max-w-3xl mx-auto space-y-6">
                  {s.items?.map((t: any, idx: number) => (
                    <blockquote key={idx} className="p-5 rounded-2xl border border-neutral-200 bg-white">
                      <p className="italic">“{t.quote}”</p>
                      <div className="mt-2 text-sm text-neutral-600">— {t.name}</div>
                    </blockquote>
                  ))}
                </div>
              </section>
            );
          case 'LeadCapture':
            return (
              <section key={i} className="px-6 py-14">
                <form className="max-w-md mx-auto flex gap-2">
                  <input className="flex-1 px-4 py-3 rounded-xl border border-neutral-300" placeholder={s.placeholder} />
                  <button className="px-5 py-3 rounded-xl bg-indigo-600 text-white">{s.button}</button>
                </form>
              </section>
            );
          case 'Footer':
            return (
              <footer key={i} className="px-6 py-10 text-center text-sm text-neutral-600 border-t">{s.note}</footer>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
