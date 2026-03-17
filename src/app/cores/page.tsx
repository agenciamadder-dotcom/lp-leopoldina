import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Beaker } from "lucide-react";
import Link from "next/link";

export default function Cores() {
    interface ColorProps { nome: string; hex: string; codigo: string; textColor?: string; }

    const munsellColors: ColorProps[] = [
        { nome: "Vermelho Segurança", hex: "#E32636", codigo: "5R 4/14" },
        { nome: "Amarelo Petrobras", hex: "#FFD700", codigo: "2.5 Y 8/12", textColor: "text-gray-800" },
        { nome: "Verde Segurança", hex: "#008000", codigo: "10 GY 6/6" },
        { nome: "Azul Segurança", hex: "#005A9C", codigo: "2.5 PB 4/10" },
        { nome: "Cinza Claro", hex: "#B0C4DE", codigo: "N 8", textColor: "text-gray-800" },
        { nome: "Cinza Escuro", hex: "#696969", codigo: "N 3.5" },
    ];

    const ralColors: ColorProps[] = [
        { nome: "Signal Yellow", hex: "#F9A800", codigo: "RAL 1003", textColor: "text-gray-800" },
        { nome: "Flame Red", hex: "#AF2B1E", codigo: "RAL 3000" },
        { nome: "Traffic Blue", hex: "#005A8C", codigo: "RAL 5017" },
        { nome: "Light Grey", hex: "#D3D3D3", codigo: "RAL 7035", textColor: "text-gray-800" },
        { nome: "Jet Black", hex: "#0A0A0A", codigo: "RAL 9005" },
    ];

    const ColorCard = ({ cor, padrao }: { cor: ColorProps; padrao: "Munsell" | "RAL" }) => (
        <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-lg transition-all group">
            <div className="h-36 w-full p-3 flex items-start justify-end rounded-t-[2rem]" style={{ backgroundColor: cor.hex }}>
                <span className={`text-[10px] font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${cor.textColor || "text-white"}`}>
                    {cor.hex}
                </span>
            </div>
            <div className="p-4">
                <p className="text-[10px] font-bold text-gray-400 mb-0.5 uppercase tracking-widest">{padrao} {cor.codigo}</p>
                <h3 className="text-sm font-bold text-brand-primary">{cor.nome}</h3>
            </div>
        </div>
    );

    return (
        <div className="bg-brand-light min-h-screen pb-20">
            <section className="bg-brand-primary text-white py-32 px-8">
                <div className="max-w-6xl mx-auto md:px-16 text-center">
                    <FadeIn direction="up">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">Catálogo de Cores Industrial</h1>
                        <p className="text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
                            Trabalhamos com os padrões Munsell e RAL.
                            <br /><span className="text-brand-accent text-xs mt-2 block font-medium">Atenção: Cores na tela podem variar. Solicite uma amostra física.</span>
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Munsell */}
            <section className="max-w-6xl mx-auto px-8 md:px-16 py-14">
                <FadeIn direction="up">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-brand-primary mb-1 border-l-4 border-brand-accent pl-3">Padrão Munsell</h2>
                        <p className="text-xs text-gray-500 pl-4">Cores normatizadas para segurança e tubulações.</p>
                    </div>
                </FadeIn>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {munsellColors.map((cor, idx) => (
                        <FadeIn key={cor.nome} delay={idx * 0.08}><ColorCard cor={cor} padrao="Munsell" /></FadeIn>
                    ))}
                </div>
            </section>

            {/* RAL */}
            <section className="max-w-6xl mx-auto px-8 md:px-16 py-6">
                <FadeIn direction="up">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-brand-primary mb-1 border-l-4 border-brand-accent pl-3">Padrão RAL</h2>
                        <p className="text-xs text-gray-500 pl-4">Padrão europeu de cores industriais.</p>
                    </div>
                </FadeIn>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {ralColors.map((cor, idx) => (
                        <FadeIn key={cor.nome} delay={idx * 0.08}><ColorCard cor={cor} padrao="RAL" /></FadeIn>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-8 md:px-16 mt-14">
                <FadeIn direction="up">
                    <div className="bg-white rounded-[2rem] p-10 md:p-14 text-center border border-gray-100 flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-brand-primary/5 flex items-center justify-center mb-5">
                            <Beaker size={24} className="text-brand-primary" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-brand-primary mb-3">Precisa de uma cor específica?</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-lg">Nosso laboratório afina a cor exata que sua empresa exige, em qualquer sistema de pintura.</p>
                        <Link href="/#orcamento" className="btn-magnetic bg-brand-primary text-white px-8 py-3 text-sm">
                            <span>Falar com o Laboratório <ArrowRight size={16} /></span>
                        </Link>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
