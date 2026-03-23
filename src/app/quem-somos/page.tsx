import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Users, Factory, Shield, FlaskConical, Flame, Droplets, FileCheck, Microscope, Headset } from "lucide-react";
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
                        <p className="text-sm text-gray-300 max-w-lg mx-auto">Excelência e qualidade no que fazemos.</p>
                    </FadeIn>
                </div>
            </section>

            {/* Nossa História */}
            <section className="max-w-6xl mx-auto px-8 md:px-16 py-14">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <FadeIn direction="up" className="md:w-1/2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/img/image-produtos.webp" alt="Fábrica Leopoldina Tintas" className="rounded-[2rem] w-full object-cover shadow-lg" />
                    </FadeIn>
                    <FadeIn delay={0.2} direction="up" className="md:w-1/2">
                        <span className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-3 block">Nossa História</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-4 tracking-tight">
                            Nascemos da ética e da experiência
                        </h2>
                        <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
                            <p>
                                A <strong className="text-brand-primary">Leopoldina Tintas</strong> nasceu em 2011 do anseio de converter ética e experiência em satisfação e qualidade. Fundada em Duque de Caxias — RJ, somos uma <strong className="text-brand-primary">indústria de tintas e revestimentos</strong> com foco em alta performance e proteção anticorrosiva.
                            </p>
                            <p>
                                Desde o início, nossos esforços se voltam inteiramente à produção de uma linha de produtos inovadores, em <strong className="text-brand-primary">desenvolvimento e aprimoramento contínuos</strong>, para atendimento do mercado brasileiro.
                            </p>
                            <p>
                                Fabricamos produtos que atendem às mais rigorosas <strong className="text-brand-primary">normas técnicas da indústria nacional</strong>, incluindo diversas normas Petrobras para revestimentos anticorrosivos.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* O que fazemos */}
            <section className="max-w-6xl mx-auto px-8 md:px-16 py-14">
                <FadeIn direction="up">
                    <div className="text-center mb-12">
                        <span className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-3 block">O Que Fazemos</span>
                        <h2 className="text-2xl font-bold text-brand-primary mb-2">Soluções completas em tintas industriais</h2>
                        <p className="text-sm text-gray-500 max-w-2xl mx-auto">Fabricamos tintas e revestimentos de alta performance para os mais exigentes setores da indústria.</p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: Shield, title: "Revestimentos Anticorrosivos", desc: "Linha completa para preservação de estruturas metálicas, marítimas e industriais, conforme normas Petrobras." },
                        { icon: Factory, title: "Tintas Epóxi", desc: "Pisos, paredes, autonivelantes e antiderrapantes — a linha Neopoxi atende ambientes industriais de alta exigência." },
                        { icon: FlaskConical, title: "Poliuretanos", desc: "Formulados para máxima resistência ao intemperismo: quadras esportivas, fachadas e estruturas expostas." },
                        { icon: Flame, title: "Tintas Intumescentes", desc: "Linha Neofire para proteção passiva contra incêndio em estruturas metálicas." },
                        { icon: Droplets, title: "Diluentes", desc: "Linha Neothinner para limpeza, diluição e acabamento, com formulações específicas para cada aplicação." },
                    ].map((item) => (
                        <FadeIn key={item.title} className="bg-white p-6 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-2xl bg-brand-primary/5 text-brand-primary flex items-center justify-center mb-4">
                                <item.icon size={22} />
                            </div>
                            <h3 className="text-sm font-bold text-brand-primary mb-1">{item.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Diferenciais */}
            <section className="max-w-6xl mx-auto px-8 md:px-16 py-14">
                <FadeIn direction="up">
                    <div className="text-center mb-12">
                        <span className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-3 block">Por Que Nos Escolher</span>
                        <h2 className="text-2xl font-bold text-brand-primary mb-2">Nossos Diferenciais</h2>
                        <p className="text-sm text-gray-500">O que nos torna a escolha certa para sua operação.</p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Factory, title: "Indústria Própria", desc: "Fabricação própria em Duque de Caxias — RJ, com controle total da qualidade." },
                        { icon: FileCheck, title: "Normas Técnicas", desc: "Produtos que atendem normas Petrobras N-2677, N-2680, N-2628 e N-2630." },
                        { icon: Microscope, title: "Laboratório", desc: "Desenvolvimento de cores e formulações sob medida para cada projeto." },
                        { icon: Headset, title: "Suporte Técnico", desc: "Equipe técnica à disposição para especificação correta do produto." },
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
