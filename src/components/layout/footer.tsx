import Link from "next/link";

import { visibleNav } from "@content/navigation";
import { site } from "@content/site";

import { Container } from "./container";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-surface="ink" className="bg-surface border-line border-t py-12">
      <Container width="wide">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="text-fg-secondary mt-3 text-sm">{site.description}</p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-1">
              {visibleNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-fg-body hover:text-fg text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg-body hover:text-fg text-sm transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-line text-fg-secondary mt-10 flex flex-col gap-2 border-t pt-6 text-xs sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <div className="flex gap-5">
            <Link href="/privacidad" className="hover:text-fg transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-fg transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
