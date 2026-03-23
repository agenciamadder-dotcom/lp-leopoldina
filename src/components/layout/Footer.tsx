import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-dark text-white pt-14 pb-8">
            <div className="max-w-6xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                {/* Logo & Desc */}
                <div className="col-span-1">
                    <div className="inline-block mb-4">
                        <Image src="/Logotipo/Logotipo-Leopoldina-negativo.webp" alt="Leopoldina Tintas" width={120} height={40} className="object-contain" />
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">
                        Soluções em revestimentos industriais e anticorrosivos de alta performance para todo o Brasil.
                    </p>
                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/leopoldinatintas/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-brand-accent/20 flex items-center justify-center transition-colors">
                            <Facebook size={16} className="text-white" />
                        </a>
                        <a href="https://www.instagram.com/leopoldinatintas/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-brand-accent/20 flex items-center justify-center transition-colors">
                            <Instagram size={16} className="text-white" />
                        </a>
                    </div>
                </div>

                {/* Produtos */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-xs text-brand-accent uppercase tracking-widest">Produtos</h4>
                    <Link href="/produtos#epoxi" className="text-gray-400 hover:text-white text-xs transition-colors link-hover">Linha Epóxi</Link>
                    <Link href="/produtos#pu" className="text-gray-400 hover:text-white text-xs transition-colors link-hover">Linha Poliuretano</Link>
                    <Link href="/produtos#neofire" className="text-gray-400 hover:text-white text-xs transition-colors link-hover">Linha Neofire</Link>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-xs text-brand-accent uppercase tracking-widest">Links</h4>
                    <Link href="/" className="text-gray-400 hover:text-white text-xs transition-colors link-hover">Início</Link>
                    <Link href="/cores" className="text-gray-400 hover:text-white text-xs transition-colors link-hover">Catálogo de Cores</Link>
                    <Link href="/quem-somos" className="text-gray-400 hover:text-white text-xs transition-colors link-hover">Quem Somos</Link>
                    <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-white text-xs transition-colors link-hover">Política de Privacidade</Link>
                </div>

                {/* Contato */}
                <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-xs text-brand-accent uppercase tracking-widest">Contato</h4>
                    <a href="tel:+552133911993" className="text-gray-400 hover:text-white text-xs transition-colors flex items-center gap-2">
                        <Phone size={14} className="shrink-0" /> (21) 3391-1993
                    </a>
                    <a href="mailto:comercial@leopoldinatintas.com.br" className="text-gray-400 hover:text-white text-xs transition-colors flex items-center gap-2">
                        <Mail size={14} className="shrink-0" /> comercial@leopoldinatintas.com.br
                    </a>
                    <a href="https://maps.google.com?q=Avenida+Pistóia+510+Jardim+Gramacho+Duque+de+Caxias" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xs transition-colors flex items-start gap-2">
                        <MapPin size={14} className="shrink-0 mt-0.5" />
                        <span>Av. Pistóia, 510 — Jardim Gramacho<br />Duque de Caxias, RJ — 25055-052</span>
                    </a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-8 md:px-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2">
                <p className="text-gray-500 text-[10px]">© {new Date().getFullYear()} Leopoldina Tintas. Todos os direitos reservados.</p>
                <p className="text-gray-500 text-[10px] flex items-center gap-1">
                    Feito com <Heart size={10} className="text-blue-400 fill-blue-400" /> por{" "}
                    <a href="https://madder.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-semibold">
                        Madder Marketing
                    </a>
                </p>
            </div>
        </footer>
    );
}
