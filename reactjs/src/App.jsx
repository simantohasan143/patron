import { useCallback, useEffect, useMemo, useState } from 'react'

function App() {
  const availablePages = useMemo(
    () =>
      new Set([
        '404.html',
        'about-2.html',
        'about-3.html',
        'about.html',
        'application.html',
        'blog-fullwidth-box.html',
        'blog-fullwidth.html',
        'blog-left-sidebar.html',
        'blog-right-sidebar.html',
        'blog.html',
        'career.html',
        'cart.html',
        'certification-detail.html',
        'certification.html',
        'checkout.html',
        'contact.html',
        'element-accordions.html',
        'element-achievement.html',
        'element-animation.html',
        'element-blog.html',
        'element-brand.html',
        'element-buttons.html',
        'element-contact.html',
        'element-footer.html',
        'element-form.html',
        'element-hover-effects.html',
        'element-newsletter.html',
        'element-photo-gallery.html',
        'element-portfolio.html',
        'element-pricing-table.html',
        'element-products.html',
        'element-progress-bar.html',
        'element-sections.html',
        'element-slider.html',
        'element-tab.html',
        'element-team.html',
        'element-testimonials.html',
        'element-thumb-block.html',
        'element-typography.html',
        'faq.html',
        'gallery-detail.html',
        'gallery-fullwidth.html',
        'gallery-masonry.html',
        'gallery.html',
        'general-support.html',
        'help-center.html',
        'how-it-work.html',
        'index-agency.html',
        'index-business-advisors.html',
        'index-business.html',
        'index-consulting.html',
        'index-corporate.html',
        'index-financing.html',
        'index-hosting.html',
        'index-security-company.html',
        'index-security.html',
        'index-web-agency.html',
        'index.html',
        'news-details-left-sidebar.html',
        'news-details.html',
        'our-history.html',
        'our-mission.html',
        'our-vision.html',
        'pricing-extend.html',
        'pricing.html',
        'profile-details.html',
        'quote.html',
        'sample.html',
        'section-list.html',
        'section-title.html',
        'service-details.html',
        'service.html',
        'shop-list.html',
        'shop-single.html',
        'shop.html',
        'sign-in.html',
        'sign-up.html',
        'support-article-details.html',
        'team.html',
        'terms-and-condition.html',
        'testimonial.html',
      ]),
    [],
  )

  const getPageFromPath = useCallback(() => {
    const path = window.location.pathname.replace(/^\/+/, '')
    if (path === '') return 'index.html'
    return availablePages.has(path) ? path : null
  }, [availablePages])

  const [page, setPage] = useState(getPageFromPath)

  useEffect(() => {
    const handleNavigation = () => setPage(getPageFromPath())
    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [getPageFromPath])

  if (!page) {
    return (
      <div className="missing-page">
        <h1>Page not found</h1>
        <a href="/">Go to home</a>
      </div>
    )
  }

  return (
    <iframe
      title={page}
      className="legacy-page-frame"
      src={`/legacy/${page}`}
    />
  )
}

export default App
