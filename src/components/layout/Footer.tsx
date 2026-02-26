import { Container } from "@/components/ui/Container";
import { footer } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-32 sm:mt-40 lg:mt-48">
      <Container>
        <div className="border-t border-border pt-6 pb-6">
          <p className="text-muted text-base tracking-[-0.01em]">
            {footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
