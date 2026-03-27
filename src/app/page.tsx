"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Clock, ShieldCheck, Factory, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(".hero-label", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.3 })
      .fromTo(".hero-title-1", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(".hero-title-2", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6")
      .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(".hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }, "-=0.5");
  }, { scope: heroRef });

  return (
    <div ref={heroRef}>
      {/* ───── HERO ───── */}
      <section className="relative overflow-hidden bg-brand-primary text-white min-h-[100dvh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-primary/40 z-10" />
          <Image
            src="/img/fractal.webp"
            alt="Background Leopoldina Tintas"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 md:px-16">
          <span className="hero-label block py-1.5 px-4 w-fit rounded-full bg-white/10 backdrop-blur border border-white/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-6">
            Tinta Industrial · Direto da Fábrica
          </span>

          <h1 className="mb-6">
            <span className="hero-title-1 block text-2xl md:text-3xl lg:text-4xl font-sans font-semibold leading-snug text-white/90 tracking-tight">
              Sistemas de pintura industrial com eficácia garantida
            </span>
            <span className="hero-title-2 block text-4xl md:text-6xl lg:text-7xl font-drama italic font-bold text-white leading-none mt-1">
              Sem retrabalho. 
Sem dor de cabeça.
            </span>
          </h1>

          <p className="hero-desc text-sm md:text-base text-gray-200 mb-10 max-w-xl leading-relaxed">
            Soluções em epóxi e revestimentos industriais para pisos e estruturas diversas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 hero-cta">
            <Link href="#orcamento" className="btn-magnetic bg-brand-accent text-brand-dark px-8 py-3.5 text-sm">
              <span>Falar com Consultor Técnico <ArrowRight size={16} /></span>
            </Link>
            <Link href="/produtos" className="btn-magnetic bg-transparent border border-white/20 text-white px-8 py-3.5 text-sm hover:bg-white/5">
              <span>Ver Catálogo de Produtos</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── QUEM SOMOS PREVIEW ───── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-10 items-center">
          <FadeIn direction="up" className="md:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/image-produtos.webp" alt="Produtos Leopoldina Tintas" className="rounded-[2rem] w-full object-cover shadow-lg" />
          </FadeIn>
          <FadeIn delay={0.2} direction="up" className="md:w-1/2">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-3 block">Quem Somos</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 tracking-tight">
              Tintas industriais que resolvem problema de verdade.
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              A Leopoldina Tintas entrega soluções de alto desempenho para pisos, estruturas metálicas e ambientes industriais. Cada produto é pensado para resistência, durabilidade e aplicação prática no dia a dia da obra.

Atendemos construtoras, indústrias e empresas que precisam de resultado com suporte técnico direto e entrega ágil.
            </p>
            <Link href="/quem-somos" className="btn-magnetic bg-brand-primary text-white px-6 py-2.5 text-xs font-bold">
              <span>Saiba Mais <ArrowRight size={14} /></span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ───── DIFERENCIAIS ───── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <FadeIn direction="up">
            <div className="text-center max-w-xl mx-auto mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-3 tracking-tight">
                Soluções para quem não pode errar na obra.
              </h2>
              <p className="text-sm text-gray-500">Quando a pintura falha, o prejuízo vem rápido: retrabalho, parada e custo.
Por isso, entregamos produtos testados, suporte técnico direto e agilidade real — do pedido à aplicação.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.15} className="bg-white p-7 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-brand-accent flex items-center justify-center mb-5"><Clock size={24} /></div>
              <h3 className="text-base font-bold text-brand-primary mb-2">Entrega que acompanha sua obra</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Produção própria no RJ e logística ágil para não travar seu cronograma.</p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-white p-7 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5"><ShieldCheck size={24} /></div>
              <h3 className="text-base font-bold text-brand-primary mb-2">Qualidade comprovada, não prometida</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Produtos testados e aprovados por órgãos técnicos e aplicações reais em campo.</p>
            </FadeIn>
            <FadeIn delay={0.45} className="bg-white p-7 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5"><Factory size={24} /></div>
              <h3 className="text-base font-bold text-brand-primary mb-2">Tecnologia que acompanha a indústria</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Desenvolvemos e aprimoramos constantemente nossos produtos para atender às novas exigências do mercado.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───── PRODUTOS EM DESTAQUE ───── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <FadeIn direction="up" className="mb-14 md:flex md:justify-between md:items-end">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">Encontre a solução ideal</h2>
              <p className="text-sm text-gray-500">Revestimentos desenvolvidos para máxima durabilidade.</p>
            </div>
            <Link href="/produtos" className="hidden md:inline-flex items-center gap-1.5 text-brand-primary text-sm font-semibold hover:text-brand-accent transition-colors link-hover">
              Ver Catálogo Completo <ArrowRight size={16} />
            </Link>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.15} className="group cursor-pointer">
              <div className="bg-gray-50 rounded-[2rem] p-6 mb-5 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image src="/Produtos/Balde 18Litros.png" alt="Tinta Epóxi" width={150} height={150} className="object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-2">Tinta Epóxi (Neopoxi)</h3>
              <ul className="mb-4 space-y-1.5">
                <li className="flex items-start gap-2 text-gray-500 text-sm"><CheckCircle2 size={14} className="text-brand-accent mt-0.5 shrink-0" />Alta resistência para tráfego pesado</li>
                <li className="flex items-start gap-2 text-gray-500 text-sm"><CheckCircle2 size={14} className="text-brand-accent mt-0.5 shrink-0" />Alta resistência química</li>
              </ul>
              <Link href="/produtos#epoxi" className="inline-flex items-center gap-1.5 text-brand-primary text-sm font-semibold group-hover:text-brand-accent transition-colors">Saiba Mais <ArrowRight size={14} /></Link>
            </FadeIn>
            <FadeIn delay={0.3} className="group cursor-pointer">
              <div className="bg-gray-50 rounded-[2rem] p-6 mb-5 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image src="/Produtos/Galão-3-6L.webp" alt="Poliuretano" width={180} height={180} className="object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-2">Tinta Poliuretano (Neothane)</h3>
              <ul className="mb-4 space-y-1.5">
                <li className="flex items-start gap-2 text-gray-500 text-sm"><CheckCircle2 size={14} className="text-brand-accent mt-0.5 shrink-0" />Máxima proteção contra sol e chuva</li>
                <li className="flex items-start gap-2 text-gray-500 text-sm"><CheckCircle2 size={14} className="text-brand-accent mt-0.5 shrink-0" />Ideal para áreas externas</li>
              </ul>
              <Link href="/produtos#pu" className="inline-flex items-center gap-1.5 text-brand-primary text-sm font-semibold group-hover:text-brand-accent transition-colors">Saiba Mais <ArrowRight size={14} /></Link>
            </FadeIn>
            <FadeIn delay={0.45} className="group cursor-pointer">
              <div className="bg-gray-50 rounded-[2rem] p-6 mb-5 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image src="/Produtos/neofire2.webp" alt="Antichamas" width={200} height={200} className="object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-2">Tinta Antichamas (Neofire)</h3>
              <ul className="mb-4 space-y-1.5">
                <li className="flex items-start gap-2 text-gray-500 text-sm"><CheckCircle2 size={14} className="text-brand-accent mt-0.5 shrink-0" />Proteção passiva contra fogo</li>
                <li className="flex items-start gap-2 text-gray-500 text-sm"><CheckCircle2 size={14} className="text-brand-accent mt-0.5 shrink-0" />Certificação técnica</li>
              </ul>
              <Link href="/produtos#neofire" className="inline-flex items-center gap-1.5 text-brand-primary text-sm font-semibold group-hover:text-brand-accent transition-colors">Saiba Mais <ArrowRight size={14} /></Link>
            </FadeIn>
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/produtos" className="btn-magnetic bg-brand-primary text-white px-6 py-3 text-sm"><span>Ver Catálogo Completo</span></Link>
          </div>
        </div>
      </section>

      {/* ───── CTA FINAL (FORMULÁRIO APPER) ───── */}
      <section id="orcamento" className="py-20 bg-brand-primary relative">
        <div className="max-w-6xl mx-auto px-8 md:px-16 relative z-10 mb-20">
          <FadeIn direction="up">
            <div className="bg-white text-brand-dark overflow-hidden flex flex-col md:flex-row shadow-2xl">
              <div className="p-8 md:p-12 md:w-1/2 bg-brand-primary text-white flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Fale agora com o nosso time!</h2>
                <p className="text-white/70 text-sm mb-8 leading-relaxed">
                  Preencha os dados da sua obra e um de nossos especialistas entrará em contato em minutos.
                </p>
                <div className="space-y-3 text-sm text-white/80">
                  {["Atendimento especializado B2B", "Preços direto da fábrica", "Entrega rápida no RJ"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} className="text-brand-accent" />
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-0 md:w-1/2 flex items-stretch">
                <iframe
                  src="https://api.apper.com.br/widget/form/WrTPqpJZ8QcNPCYKUKrh"
                  style={{ width: "100%", height: "650px", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id="popup-WrTPqpJZ8QcNPCYKUKrh"
                  data-layout='{"id":"POPUP"}'
                  data-trigger-type="alwaysShow"
                  data-activation-type="alwaysActivated"
                  data-deactivation-type="neverDeactivate"
                  data-form-name="📥 Form: LP Principal B2B"
                  data-height="650"
                  data-layout-iframe-id="popup-WrTPqpJZ8QcNPCYKUKrh"
                  data-form-id="WrTPqpJZ8QcNPCYKUKrh"
                  title="📥 Form: LP Principal B2B"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
