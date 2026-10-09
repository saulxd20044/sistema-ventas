import { Metadata } from "next"
import { Suspense } from "react";
import SectionInformation from "./components/SectionInformation";
import SectionForm from "./components/SectionForm";

export const metadata: Metadata = {
  title: "Iniciar sesión",
};
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0d0f] text-white antialiased">
      <main className="min-h-screen flex">
        <SectionInformation />
        {/* SectionForm usa useSearchParams(): Next exige un Suspense para el build de producción */}
        <Suspense>
          <SectionForm />
        </Suspense>
      </main>
    </div>
  );
}
