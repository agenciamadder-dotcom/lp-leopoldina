import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Award, Truck, Users, Beaker } from "lucide-react";
import Link from "next/link";

export default function QuemSomos() {
    return (
        <div className="bg-brand-light min-h-screen pb-20">
            {/* Header */}
            <section className="bg-brand-primary text-white py-32 px-8 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/image-produtos.webp" alt="" className="w-full h-full object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-brand-primary/50" />
                </div>
                <div className="max-w-6xl mx-auto md:px-16 text-center relative z-10">
                    <FadeIn direction="up">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">Quem Somos</h1>
                        <p className="text-sm text-gray-300 max-w-lg mx-auto">Tradição, tecnologia e compromisso com a indústria brasileira.</p>
                    </FadeIn>
                </div>
            </section>

            {/* Sobre */}
            <section className="max-w-6xl mx-auto px-8 md:px-16 py-14">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <FadeIn direction="up" className="md:w-1/2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/img/image-produtos.webp" alt="Produtos Leopoldina Tintas" className="rounded-[2rem] w-full object-cover shadow-lg" />
                    </FadeIn>
                    <FadeIn delay={0.2} direction="up" className="md:w-1/2">
                        <span className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-3 block">Nossa História</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 tracking-tight">
                            Mais de 70 anos protegendo a indústria brasileira
                        </h2>
                        <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
                            <p>
                                A <strong className="text-brand-primary">Leopoldina Tintas</strong> é uma fábrica de tintas industriais de alta performance, localizada em Duque de Caxias, Rio de Janeiro. Desde a sua fundação, nos dedicamos a fornecer soluções de revestimento que protegem estruturas, equipamentos e instalações em todo o Brasil.
                            </p>
                            <p>
                                Nossos produtos atendem às mais rigorosas normas técnicas, incluindo especificações Petrobras, Corpo de Bombeiros e Vigilância Sanitária. Combinamos tradição industrial com tecnologia de ponta para garantir que cada lata de tinta entregue o máximo de desempenho.
                            </p>
                            <p>
                                Com logística própria e atendimento técnico especializado, somos o parceiro ideal para engenheiros, compradores industriais e grandes aplicadores que não podem parar.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Valores */}
            <section className="max-w-6xl mx-auto px-8 md:px-16 py-14">
                <FadeIn direction="up">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-brand-primary mb-2">Nossos Diferenciais</h2>
                        <p className="text-sm text-gray-500">O que nos torna a escolha certa para sua operação.</p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Award, title: "Certificações", desc: "Laudos técnicos e certificações para todas as normas aplicáveis." },
                        { icon: Truck, title: "Logística Própria", desc: "Entrega ágil em todo o Estado do Rio de Janeiro." },
                        { icon: Beaker, title: "Laboratório", desc: "Desenvolvimento de cores e formulações sob medida." },
                        { icon: Users, title: "Suporte Técnico", desc: "Engenheiros à disposição para especificação correta do produto." },
                    ].map((item) => (
                        <FadeIn key={item.title} className="bg-white p-6 rounded-[2rem] border border-gray-100 text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mx-auto mb-4">
                                <item.icon size={22} />
                            </div>
                            <h3 className="text-sm font-bold text-brand-primary mb-1">{item.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-8 md:px-16 mt-6">
                <FadeIn direction="up">
                    <div className="bg-brand-accent rounded-[2rem] p-10 text-center shadow-xl">
                        <h2 className="text-2xl font-bold text-brand-dark mb-3">Vamos trabalhar juntos?</h2>
                        <p className="text-brand-dark/70 text-sm mb-6 max-w-lg mx-auto">Entre em contato com nosso time comercial e descubra como podemos atender sua operação.</p>
                        <Link href="/#orcamento" className="btn-magnetic bg-brand-dark text-white px-8 py-3 text-sm">
                            <span>Solicitar Orçamento <ArrowRight size={16} /></span>
                        </Link>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
