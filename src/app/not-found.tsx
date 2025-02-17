import { NotFoundPage } from "nextra-theme-docs";

export default function NotFound() {
  return (
    <NotFoundPage content="Signaler une erreur" labels="broken-link">
      <h1>La page n'existe pas ou a été déplacée</h1>
    </NotFoundPage>
  );
}
