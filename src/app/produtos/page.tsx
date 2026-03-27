import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Download, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Produtos() {
    const categorias = [
        { id: "epoxi", titulo: "Linha Epóxi (Neopoxi)", descricao: "Alta resistência mecânica, química e durabilidade. Ideal para pisos industriais e ambientes agressivos.", produtos: "Primer Epóxi Anticorrosivo, Tintas para Piso (Brilhante/Semibrilho), Autonivelante, Porcelanato Líquido.", imagem: "/Produtos/neofire2.webp", cor: "bg-blue-50" },
        { id: "pu", titulo: "Linha Tinta Poliuretano (Neothane)", descricao: "Resistência a intempéries (sol/chuva) e retenção de cor/brilho. Ideal para demarcações externas.", produtos: "Acabamentos PU (Brilhante/Acetinado), PU Antipichação, Verniz Incolor.", imagem: "/Produtos/Galão-3-6L.webp", cor: "bg-orange-50" },
        { id: "neofire", titulo: "Linha Neofire (Antichamas)", descricao: "Tinta retardadora de chamas (Intumescente). Proteção passiva contra incêndio com emissão de laudo.", produtos: "Consulte especificações técnicas.", imagem: "/Produtos/neofire2.webp", cor: "bg-red-50" },
        { id: "petrobras", titulo: "Normas Petrobras", descricao: "Tintas fabricadas sob rigorosos padrões da norma Petrobras (industrial e offshore).", produtos: "Normas: N-1195, N-1202, N-2677, N-2680, entre outras.", imagem: "/Produtos/1631338308976.jpeg", cor: "bg-emerald-50" },
        { id: "complementos", titulo: "Diluentes", descricao: "Complementos essenciais para a aplicação perfeita de cada sistema.", produtos: "Diluente para Epóxi, Diluente para Limpeza.", imagem: "/Produtos/diluentes.png", cor: "bg-indigo-50" },
    ];

    return (
        <div className="bg-brand-light min-h-screen pb-20">
            {/* Header */}
            <section className="bg-brand-primary text-white py-32 px-8">
                <div className="max-w-6xl mx-auto md:px-16 text-center">
                    <FadeIn direction="up">
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">Linha Industrial</h1>
                        <p className="text-sm text-gray-300 max-w-lg mx-auto">Conheça nossa linha completa de revestimentos de alto desempenho.</p>
                    </FadeIn>
                </div>
            </section>

            {/* Categorias */}
            <section className="max-w-6xl mx-auto px-8 md:px-16 py-14">
                <div className="grid grid-cols-1 gap-8">
                    {categorias.map((cat, i) => (
                        <FadeIn key={cat.id} delay={i * 0.08} direction="up">
                            <div id={cat.id} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-lg transition-shadow">
                                <div className={`md:w-1/3 ${cat.cor} p-6 flex items-center justify-center min-h-[240px]`}>
                                    <Image src={cat.imagem} alt={cat.titulo} width={200} height={200} className="object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="md:w-2/3 p-7 md:p-10 flex flex-col justify-center">
                                    <h2 className="text-xl font-bold text-brand-primary mb-2">{cat.titulo}</h2>
                                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">{cat.descricao}</p>
                                    <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
                                        <div className="flex items-start gap-2">
                                            <Info className="text-brand-accent shrink-0 mt-0.5" size={16} />
                                            <div>
                                                <h4 className="font-semibold text-brand-primary text-xs mb-0.5">Produtos Principais:</h4>
                                                <p className="text-gray-500 text-xs">{cat.produtos}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Link 
                                        href={`/#orcamento?ref=${cat.id}`}
                                        className="btn-magnetic bg-brand-primary text-white px-6 py-2.5 text-xs font-bold w-fit"
                                    >
                                        <span><Download size={14} /> Solicitar Ficha Técnica e Preço</span>
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-8 md:px-16">
                <FadeIn direction="up">
                    <div className="bg-brand-accent rounded-[2rem] p-10 text-center shadow-xl">
                        <h2 className="text-2xl font-bold text-brand-dark mb-3">Não encontrou o que precisa?</h2>
                        <p className="text-brand-dark/70 text-sm mb-6 max-w-lg mx-auto">Desenvolvemos produtos sob medida para as necessidades da sua planta industrial.</p>
                        <Link href="/#orcamento" className="btn-magnetic bg-brand-dark text-white px-8 py-3 text-sm">
                            <span>Falar com Consultor Técnico <ArrowRight size={16} /></span>
                        </Link>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
