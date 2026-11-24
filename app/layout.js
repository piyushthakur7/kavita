import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ModalProvider } from '@/context/ModalContext';
import './globals.css';

export const metadata = {
  title: 'Counseling Therapist and Psychologist | Kavita Kabira',
  description: 'Dr. Kavita Kabira is a counseling therapist and psychologist offering therapy, counseling, and wellness coaching in Gurgaon, Delhi, and online.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ModalProvider>
          <ScrollToTop />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <Toaster />
        </ModalProvider>
      </body>
    </html>
  );
}
