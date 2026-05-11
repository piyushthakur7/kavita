import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ModalProvider } from '@/context/ModalContext';
import './globals.css';

export const metadata = {
  title: 'Kavita Kabira Wellness Clinic | Best Psychologist in Gurgaon',
  description: 'Dr. Kavita Kabira Wellness Clinic offers professional psychotherapy, counseling, and wellness coaching in Gurgaon, Delhi, and online.',
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
