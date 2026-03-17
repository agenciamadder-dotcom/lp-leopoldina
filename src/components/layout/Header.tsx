"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out w-[92%] max-w-5xl
          ${scrolled
                        ? "bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-lg"
                        : "bg-brand-dark/30 backdrop-blur-md border border-white/10"
                    }
          rounded-full px-6 py-2
        `}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center shrink-0">
                        <Image
                            src={scrolled ? "/Logotipo/Logotipo-Leopoldina-01.webp" : "/Logotipo/Logotipo-Leopoldina-negativo.webp"}
                            alt="Leopoldina Tintas"
                            width={112}
                            height={38}
                            className="object-contain transition-all duration-300"
                            priority
                        />
                    </Link>

                    <nav className={`hidden md:flex gap-6 items-center text-[13px] font-semibold tracking-wide uppercase transition-colors duration-300 ${scrolled ? "text-brand-primary" : "text-white/90"}`}>
                        <Link href="/" className="link-hover hover:text-brand-accent transition-colors">Início</Link>
                        <Link href="/produtos" className="link-hover hover:text-brand-accent transition-colors">Produtos</Link>
                        <Link href="/cores" className="link-hover hover:text-brand-accent transition-colors">Cores</Link>
                        <Link href="/quem-somos" className="link-hover hover:text-brand-accent transition-colors">Quem Somos</Link>
                    </nav>

                    <Link
                        href="/#orcamento"
                        className="hidden md:flex btn-magnetic bg-brand-accent text-brand-dark px-5 py-2 text-xs font-bold uppercase tracking-wide"
                    >
                        <span>Solicitar Orçamento</span>
                    </Link>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? "text-brand-primary" : "text-white"}`}
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </header>

            {mobileOpen && (
                <div className="fixed inset-0 z-30 bg-brand-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-white text-lg font-semibold">
                    <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-brand-accent transition-colors">Início</Link>
                    <Link href="/produtos" onClick={() => setMobileOpen(false)} className="hover:text-brand-accent transition-colors">Produtos</Link>
                    <Link href="/cores" onClick={() => setMobileOpen(false)} className="hover:text-brand-accent transition-colors">Cores</Link>
                    <Link href="/quem-somos" onClick={() => setMobileOpen(false)} className="hover:text-brand-accent transition-colors">Quem Somos</Link>
                    <Link
                        href="/#orcamento"
                        onClick={() => setMobileOpen(false)}
                        className="btn-magnetic bg-brand-accent text-brand-dark px-8 py-3 text-sm font-bold mt-4"
                    >
                        <span>Solicitar Orçamento</span>
                    </Link>
                </div>
            )}
        </>
    );
}
