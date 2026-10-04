import Link from "next/link";

import { visibleNav } from "@content/navigation";

import { Container } from "./container";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

/**
 * El menú móvil usa <details>/<summary>: es un disclosure inline, no un modal,
 * así que funciona con teclado y lectores de pantalla sin JavaScript.
 */
export function Header() {
  return (
    <header
      data-surface="ink"
      className="bg-surface/90 border-line sticky top-0 z-40 border-b backdrop-blur"
    >
      <Container width="wide">
        <div className="flex min-h-16 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-7">
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
            </ul>
          </nav>

          <Button href="/marcas" variant="primary" size="sm" className="hidden md:inline-flex">
            Hablemos
          </Button>

          <details className="group md:hidden">
            <summary
              className="text-fg rounded-control flex size-11 cursor-pointer list-none items-center justify-center marker:hidden"
              aria-label="Abrir menú"
            >
              <span aria-hidden="true" className="relative block h-4 w-6">
                <span className="bg-fg absolute inset-x-0 top-0 h-0.5 transition-transform group-open:top-1/2 group-open:rotate-45" />
                <span className="bg-fg absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transition-opacity group-open:opacity-0" />
                <span className="bg-fg absolute inset-x-0 bottom-0 h-0.5 transition-transform group-open:bottom-1/2 group-open:-rotate-45" />
              </span>
            </summary>

            <div className="bg-surface border-line absolute inset-x-0 top-full border-b px-4 pb-6 shadow-lg">
              <nav aria-label="Principal móvil">
                <ul className="flex flex-col">
                  {visibleNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-fg-body hover:text-fg border-line flex min-h-12 items-center border-b transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button href="/marcas" variant="primary" block className="mt-5">
                Hablemos
              </Button>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
