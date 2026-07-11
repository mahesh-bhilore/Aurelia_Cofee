import { Suspense } from 'react'
import { PageShell } from '@/components/page-shell'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { CollectionSection } from '@/components/sections/collection-section'
import { BrewingSection } from '@/components/sections/brewing-section'
import { WhyChooseSection } from '@/components/sections/why-choose-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { GallerySection } from '@/components/sections/gallery-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FooterSection } from '@/components/sections/footer-section'

export default function App() {
  return (
    <Suspense fallback={null}>
      <PageShell>
        <main id="top" className="overflow-x-hidden bg-ebony text-pearl">
          <HeroSection />
          <AboutSection />
          <CollectionSection />
          <BrewingSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <GallerySection />
          <ContactSection />
          <FooterSection />
        </main>
      </PageShell>
    </Suspense>
  )
}
