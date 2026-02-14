import { Navbar } from "@/components/shared/navbar";
import { ContactPage } from "@/components/contact/ContactPage";

export default function Contact() {
    return (
        <div className="bg-[#F9FAFD] min-h-screen">
            <Navbar />
            <ContactPage />
        </div>
    );
}

