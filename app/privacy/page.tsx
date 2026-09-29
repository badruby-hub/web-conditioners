import type { Metadata } from "next";
import Privacy from "@/components/pages/Privacy/privacy";


export const metadata: Metadata = {
    title: "Privacy Policy | MODUHAUS",
    description: "How MODUHAUS collects, uses and protects personal data submitted through the website.",
};

export default function Page() {
    return <Privacy/>
}
