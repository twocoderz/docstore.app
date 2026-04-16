import Image from "next/image";
import Link from "next/link";
import { APP_URL, WEB_URL } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer-white text-black">
      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-16 lg:px-8">
        {/* CTA Card */}
        <div className="mx-auto max-w-6xl rounded-32 bg-primary px-6 py-10 sm:px-8 sm:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl text-center lg:text-left">
              <p className="text-sm font-semibold text-blue-100">
                Tes cours toujours avec toi
              </p>
              <h2 className="mt-2 text-3xl font-display font-semibold text-white sm:text-4xl">
                Commence maintenant sur DocStore
              </h2>
              <p className="mt-3 text-sm text-blue-100 sm:text-base">
                Télécharge l&apos;app pour réviser partout, ou ouvre la version
                web en un clic.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
              >
                Telecharger l&apos;app
              </a>
              <a
                href={WEB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                Version web
              </a>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-[1.02]"
            >
              <Image
                src="/images/app-store.svg"
                alt="Telecharger sur App Store"
                width={160}
                height={48}
                className="h-9 w-auto"
              />
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-[1.02]"
            >
              <Image
                src="/images/google-play.svg"
                alt="Telecharger sur Google Play"
                width={160}
                height={48}
                className="h-9 w-auto"
              />
            </a>
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
                  Ce que disent nos utilisateurs
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
