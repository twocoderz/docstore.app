"use client";

import Image from "next/image";
import Link from "next/link";
import { APP_URL, WEB_URL } from "@/lib/content";
import { Button } from "./Button";

export default function Footer() {
  const openExternalPage = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative overflow-hidden bg-footer-white text-black">
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-8">
        {/* CTA Card */}
        <div className="rounded-md bg-primary/50 px-6 py-10 sm:px-8 sm:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl text-center lg:text-left">
              <h2 className="mt-2 text-3xl font-display max-w-lg font-semibold text-black sm:text-4xl">
                Commence maintenant sur DocStore
              </h2>
              <p className="mt-3 text-sm text-black sm:text-base">
                Télécharge l&apos;app pour réviser partout, ou ouvre la version
                web en un clic.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  openExternalPage("https://docstore-univ.vercel.app/")
                }
                aria-label="Télécharger l'application via Play Store"
                className="font-medium"
              >
                Télécharger l&apos;app
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  openExternalPage("https://docstore-univ.vercel.app/")
                }
                aria-label="Voir la version web"
                className="font-medium"
              >
                Version web
              </Button>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="mt-16 text-black-100 flex justify-between">
          <div>
            <div className="flex items-center gap-3">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="DocStore"
                  width={28}
                  height={28}
                  className="h-18 w-18"
                  priority
                />
              </Link>
            </div>
            <p className="mt-4 text-sm text-left max-w-100 text-black-100">
              DocStore aide les étudiants et candidats à gagner du temps dans
              leur préparation : moins de recherche, plus de concentration sur
              l&apos;essentiel — apprendre, s&apos;exercer et réussir les
              examens.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Liens rapides</p>
            <ul className="mt-4 space-y-3 text-sm text-black/50">
              <li>
                <Link
                  href="#features"
                  className="hover:text-black transition-colors"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-black transition-colors"
                >
                  Témoignages
                </Link>
              </li>
            </ul>
            <div className="mt-6 space-y-2 text-sm text-black/50">
              <p className="hover:text-black">+228 91 79 61 15</p>
              <p className="hover:text-black">rahim100codeur@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-primary/10 pt-6 text-sm text-black-100">
          <p>© 2026 DocStore. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span className="text-primary border-b border-2 p-3 rounded-full hover:bg-primary hover:text-white hover:border-white cursor-pointer transition-all ease-in">
              Nous suivre
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
