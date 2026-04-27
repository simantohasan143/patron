export default function IndexPage() {
  return (
    <>
      {/* Loder Section Start */}
      {/* <div class="preloader">
        <div class="text-center text-primary xy-center position-relative">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
          </div> */}
      {/* Loder Section End */}
      <div id="page_wrapper">
        {/*============================== Header Section Start ==============================*/}
        <header id="header" className="nav-on-banner">
          <div className="main-nav py-3 d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light nav-white nav-primary-hover nav-primary-active">
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/1.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar-content" aria-controls="main-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="main-navbar-content">
                      <ul className="navbar-nav justify-content-center">
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="/index-security.html">Home</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/index.html">Landing Page</a></li>
                            <li><a className="dropdown-item" href="/index-security.html">Security Default</a></li>
                            <li><a className="dropdown-item" href="/index-agency.html">Agency</a></li>
                            <li><a className="dropdown-item" href="/index-corporate.html">Corporate</a></li>
                            <li><a className="dropdown-item" href="/index-business.html">Business</a></li>
                            <li><a className="dropdown-item" href="/index-security-company.html">Security Company</a></li>
                            <li><a className="dropdown-item" href="/index-hosting.html">Hosting</a></li>
                            <li><a className="dropdown-item" href="/index-web-agency.html">Web Agency</a></li>
                            <li><a className="dropdown-item" href="/index-business-advisors.html">Business Advisors</a></li>
                            <li><a className="dropdown-item" href="/index-financing.html">Financing</a></li>
                            <li><a className="dropdown-item" href="/index-consulting.html">Consulting</a></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="/about.html">About</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/about.html">About</a></li>
                            <li><a className="dropdown-item" href="/about-2.html">About2</a></li>
                            <li><a className="dropdown-item" href="/about-3.html">About3</a></li>
                            <li><a className="dropdown-item" href="/our-history.html">Our History</a></li>
                            <li><a className="dropdown-item" href="/our-mission.html">Our Mission</a></li>
                            <li><a className="dropdown-item" href="/our-vision.html">Our Vision</a></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown unicode-megamenu-item-full-width unicode-megamenu-dropdown">
                          <a className="nav-link dropdown-toggle" href="#">Element</a>
                          <div className="dropdown-menu unicode-megamenu-wrapper">
                            <div className="mega-container unicode-megamenu-holder">
                              <div className="row">
                                <div className="col-md-3 col-sm-6">
                                  <ul className="unicode-menu-element unicode-megamenu-list">
                                    <li className="menu-item">
                                      <ul className="unicode-sub-megamenu">
                                        <li className="menu-item"><a className="dropdown-item" href="/element-accordions.html"><span>Accordions</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-achievement.html"><span>Achievement</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-animation.html"><span>Animation</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-blog.html"><span>Blog</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-brand.html"><span>Brand</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-buttons.html"><span>Buttons</span></a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                  <ul className="unicode-menu-element unicode-megamenu-list">
                                    <li className="menu-item">
                                      <ul className="unicode-sub-megamenu">
                                        <li className="menu-item"><a className="dropdown-item" href="/element-contact.html"><span>Contact</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-footer.html"><span>Footer</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-form.html"><span>Form</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-hover-effects.html"><span>Hover Effect</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-newsletter.html"><span>Newsletter</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-photo-gallery.html"><span>Photo Gallery</span></a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                  <ul className="unicode-menu-element unicode-megamenu-list">
                                    <li className="menu-item">
                                      <ul className="unicode-sub-megamenu">
                                        <li className="menu-item"><a className="dropdown-item" href="/element-portfolio.html"><span>Portfolio</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-pricing-table.html"><span>Pricing Table</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-products.html"><span>Products</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-progress-bar.html"><span>Progress Bar</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-sections.html"><span>Sections</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-slider.html"><span>Slider</span></a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                  <ul className="unicode-menu-element unicode-megamenu-list">
                                    <li className="menu-item">
                                      <ul className="unicode-sub-megamenu">
                                        <li className="menu-item"><a className="dropdown-item" href="/element-tab.html"><span>Tab</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-team.html"><span>Team</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-testimonials.html"><span>Testimonial</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-thumb-block.html"><span>Thumbnail Block</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-typography.html"><span>Typography</span></a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#">Pages</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/service.html">Service</a></li>
                            <li><a className="dropdown-item" href="/service-details.html">Service Details</a></li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/pricing.html">Pricing</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/pricing.html">Pricing</a></li>
                                <li><a className="dropdown-item" href="/pricing-extend.html">Pricing Extend</a></li>
                              </ul>
                            </li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/career.html">Career</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/career.html">Career</a></li>
                                <li><a className="dropdown-item" href="/application.html">Application</a></li>
                              </ul>
                            </li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/team.html">Team</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/team.html">Team Member</a></li>
                                <li><a className="dropdown-item" href="/profile-details.html">Member Profile</a></li>
                              </ul>
                            </li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/certification.html">Certificate</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/certification.html">Certification</a></li>
                                <li><a className="dropdown-item" href="/certification-detail.html">Certification Details</a></li>
                              </ul>
                            </li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/general-support.html">Help and Support</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/how-it-work.html">How It Work</a></li>
                                <li><a className="dropdown-item" href="/general-support.html">General Support</a></li>
                                <li><a className="dropdown-item" href="/help-center.html">Help Center</a></li>
                                <li><a className="dropdown-item" href="/support-article-details.html">Support Article</a></li>
                                <li><a className="dropdown-item" href="/terms-and-condition.html">Terms &amp; Condition</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="/testimonial.html">Testimonial</a></li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/gallery.html">Gallery</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/gallery.html">Gallery default</a></li>
                                <li><a className="dropdown-item" href="/gallery-fullwidth.html">Gallery fullwidth</a></li>
                                <li><a className="dropdown-item" href="/gallery-masonry.html">Gallery masonry</a></li>
                                <li><a className="dropdown-item" href="/gallery-detail.html">Gallery Details</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="/quote.html">Quote</a></li>
                            <li><a className="dropdown-item" href="/faq.html">Faq</a></li>
                            <li><a className="dropdown-item" href="/404.html">404 Page</a></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#">Shop</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/shop.html">Shop</a></li>
                            <li><a className="dropdown-item" href="/shop-list.html">Shop List</a></li>
                            <li><a className="dropdown-item" href="/shop-single.html">Shop Single</a></li>
                            <li><a className="dropdown-item" href="/sign-in.html">Sign In</a></li>
                            <li><a className="dropdown-item" href="/sign-up.html">Sign Up</a></li>
                            <li><a className="dropdown-item" href="/cart.html">Cart</a></li>
                            <li><a className="dropdown-item" href="/checkout.html">Checkout</a></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#">News</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/blog.html">News</a></li>
                            <li><a className="dropdown-item" href="/blog-fullwidth-box.html">News Full Box Width</a></li>
                            <li><a className="dropdown-item" href="/blog-fullwidth.html">News Full Width</a></li>
                            <li><a className="dropdown-item" href="/blog-left-sidebar.html">News Left Sidebar</a></li>
                            <li><a className="dropdown-item" href="/blog-right-sidebar.html">News Right Sidebar</a></li>
                            <li><a className="dropdown-item" href="/news-details.html">News Details Right</a></li>
                            <li><a className="dropdown-item" href="/news-details-left-sidebar.html">News Details Left</a></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/contact.html">Contact</a>
                        </li>
                      </ul>
                      <div className="navbar-nav nav-element ms-3 sm-mx-none">
                        <a href="https://themeforest.net/item/patron-security-service-company-html-template/20922705" className="btn btn-primary-filter text-nowrap">Buy Now</a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="header-sticky bg-secondary py-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col">
                  <nav className="navbar navbar-expand-lg navbar-light nav-white nav-primary-hover nav-primary-active">
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/1.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sticky-navbar-content" aria-controls="sticky-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="sticky-navbar-content">
                      <ul className="navbar-nav justify-content-center">
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="/index-security.html">Home</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/index.html">Landing Page</a></li>
                            <li><a className="dropdown-item" href="/index-security.html">Security Default</a></li>
                            <li><a className="dropdown-item" href="/index-agency.html">Agency</a></li>
                            <li><a className="dropdown-item" href="/index-corporate.html">Corporate</a></li>
                            <li><a className="dropdown-item" href="/index-business.html">Business</a></li>
                            <li><a className="dropdown-item" href="/index-security-company.html">Security Company</a></li>
                            <li><a className="dropdown-item" href="/index-hosting.html">Hosting</a></li>
                            <li><a className="dropdown-item" href="/index-web-agency.html">Web Agency</a></li>
                            <li><a className="dropdown-item" href="/index-business-advisors.html">Business Advisors</a></li>
                            <li><a className="dropdown-item" href="/index-financing.html">Financing</a></li>
                            <li><a className="dropdown-item" href="/index-consulting.html">Consulting</a></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#">About</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/about.html">About</a></li>
                            <li><a className="dropdown-item" href="/about-2.html">About2</a></li>
                            <li><a className="dropdown-item" href="/about-3.html">About3</a></li>
                            <li><a className="dropdown-item" href="/our-history.html">Our History</a></li>
                            <li><a className="dropdown-item" href="/our-mission.html">Our Mission</a></li>
                            <li><a className="dropdown-item" href="/our-vision.html">Our Vision</a></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown unicode-megamenu-item-full-width unicode-megamenu-dropdown">
                          <a className="nav-link dropdown-toggle" href="#">Element</a>
                          <div className="dropdown-menu unicode-megamenu-wrapper">
                            <div className="mega-container unicode-megamenu-holder">
                              <div className="row">
                                <div className="col-md-3 col-sm-6">
                                  <ul className="unicode-menu-element unicode-megamenu-list">
                                    <li className="menu-item">
                                      <ul className="unicode-sub-megamenu">
                                        <li className="menu-item"><a className="dropdown-item" href="/element-accordions.html"><span>Accordions</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-achievement.html"><span>Achievement</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-animation.html"><span>Animation</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-blog.html"><span>Blog</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-brand.html"><span>Brand</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-buttons.html"><span>Buttons</span></a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                  <ul className="unicode-menu-element unicode-megamenu-list">
                                    <li className="menu-item">
                                      <ul className="unicode-sub-megamenu">
                                        <li className="menu-item"><a className="dropdown-item" href="/element-contact.html"><span>Contact</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-footer.html"><span>Footer</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-form.html"><span>Form</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-hover-effects.html"><span>Hover Effect</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-newsletter.html"><span>Newsletter</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-photo-gallery.html"><span>Photo Gallery</span></a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                  <ul className="unicode-menu-element unicode-megamenu-list">
                                    <li className="menu-item">
                                      <ul className="unicode-sub-megamenu">
                                        <li className="menu-item"><a className="dropdown-item" href="/element-portfolio.html"><span>Portfolio</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-pricing-table.html"><span>Pricing Table</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-products.html"><span>Products</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-progress-bar.html"><span>Progress Bar</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-sections.html"><span>Sections</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-slider.html"><span>Slider</span></a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                  <ul className="unicode-menu-element unicode-megamenu-list">
                                    <li className="menu-item">
                                      <ul className="unicode-sub-megamenu">
                                        <li className="menu-item"><a className="dropdown-item" href="/element-tab.html"><span>Tab</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-team.html"><span>Team</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-testimonials.html"><span>Testimonial</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-thumb-block.html"><span>Thumbnail Block</span></a></li>
                                        <li className="menu-item"><a className="dropdown-item" href="/element-typography.html"><span>Typography</span></a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#">Pages</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/service.html">Service</a></li>
                            <li><a className="dropdown-item" href="/service-details.html">Service Details</a></li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/pricing.html">Pricing</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/pricing.html">Pricing</a></li>
                                <li><a className="dropdown-item" href="/pricing-extend.html">Pricing Extend</a></li>
                              </ul>
                            </li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/career.html">Career</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/career.html">Career</a></li>
                                <li><a className="dropdown-item" href="/application.html">Application</a></li>
                              </ul>
                            </li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/team.html">Team</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/team.html">Team Member</a></li>
                                <li><a className="dropdown-item" href="/profile-details.html">Member Profile</a></li>
                              </ul>
                            </li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/certification.html">Certificate</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/certification.html">Certification</a></li>
                                <li><a className="dropdown-item" href="/certification-detail.html">Certification Details</a></li>
                              </ul>
                            </li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/general-support.html">Help and Support</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/how-it-work.html">How It Work</a></li>
                                <li><a className="dropdown-item" href="/general-support.html">General Support</a></li>
                                <li><a className="dropdown-item" href="/help-center.html">Help Center</a></li>
                                <li><a className="dropdown-item" href="/support-article-details.html">Support Article</a></li>
                                <li><a className="dropdown-item" href="/terms-and-condition.html">Terms &amp; Condition</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="/testimonial.html">Testimonial</a></li>
                            <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/gallery.html">Gallery</a>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/gallery.html">Gallery default</a></li>
                                <li><a className="dropdown-item" href="/gallery-fullwidth.html">Gallery fullwidth</a></li>
                                <li><a className="dropdown-item" href="/gallery-masonry.html">Gallery masonry</a></li>
                                <li><a className="dropdown-item" href="/gallery-detail.html">Gallery Details</a></li>
                              </ul>
                            </li>
                            <li><a className="dropdown-item" href="/quote.html">Quote</a></li>
                            <li><a className="dropdown-item" href="/faq.html">Faq</a></li>
                            <li><a className="dropdown-item" href="/404.html">404 Page</a></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#">Shop</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/shop.html">Shop</a></li>
                            <li><a className="dropdown-item" href="/shop-list.html">Shop List</a></li>
                            <li><a className="dropdown-item" href="/shop-single.html">Shop Single</a></li>
                            <li><a className="dropdown-item" href="/sign-in.html">Sign In</a></li>
                            <li><a className="dropdown-item" href="/sign-up.html">Sign Up</a></li>
                            <li><a className="dropdown-item" href="/cart.html">Cart</a></li>
                            <li><a className="dropdown-item" href="/checkout.html">Checkout</a></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#">News</a>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/blog.html">News</a></li>
                            <li><a className="dropdown-item" href="/blog-fullwidth-box.html">News Full Box Width</a></li>
                            <li><a className="dropdown-item" href="/blog-fullwidth.html">News Full Width</a></li>
                            <li><a className="dropdown-item" href="/blog-left-sidebar.html">News Left Sidebar</a></li>
                            <li><a className="dropdown-item" href="/blog-right-sidebar.html">News Right Sidebar</a></li>
                            <li><a className="dropdown-item" href="/news-details.html">News Details Right</a></li>
                            <li><a className="dropdown-item" href="/news-details-left-sidebar.html">News Details Left</a></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/contact.html">Contact</a>
                        </li>
                      </ul>
                      <div className="navbar-nav nav-element ms-3 sm-mx-none">
                        <a href="https://themeforest.net/item/patron-security-service-company-html-template/20922705" className="btn btn-primary-filter text-nowrap">Buy Now</a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="header-mobile py-10 bg-default d-lg-none">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12 col-xl-12">
                  <div className="h-100 md-py-10">
                    <div className="nav-leftpush-overlay">
                      <nav className="navbar navbar-expand-lg navbar-light justify-content-between nav-dark nav-primary-hover">
                        <a className="navbar-brand" href="#" rel="home">
                          <img className="mobile-logo" src="/assets/images/logo/2.png" alt="Patron" />
                        </a> <button type="button" className="push-nav-toggle d-lg-none bg-white rounded-0">
                          <span className="navbar-toggler-icon" />
                        </button>
                        <div className="navbar-slide-push transation-this">
                          <div className="login-signup bg-dark d-flex justify-content-between py-10 px-20 align-items-center">
                            <span className="slide-nav-close"><i className="flaticon-cancel flat-mini text-white" /></span>
                          </div>
                          <div className="menu-and-category px-4">
                            <div className="menu-primary-menu-container">
                              <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="/index-security.html">Home</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/index.html">Landing Page</a></li>
                                    <li><a className="dropdown-item" href="/index-security.html">Security Default</a></li>
                                    <li><a className="dropdown-item" href="/index-agency.html">Agency</a></li>
                                    <li><a className="dropdown-item" href="/index-corporate.html">Corporate</a></li>
                                    <li><a className="dropdown-item" href="/index-business.html">Business</a></li>
                                    <li><a className="dropdown-item" href="/index-security-company.html">Security Company</a></li>
                                    <li><a className="dropdown-item" href="/index-hosting.html">Hosting</a></li>
                                    <li><a className="dropdown-item" href="/index-web-agency.html">Web Agency</a></li>
                                    <li><a className="dropdown-item" href="/index-business-advisors.html">Business Advisors</a></li>
                                    <li><a className="dropdown-item" href="/index-financing.html">Financing</a></li>
                                    <li><a className="dropdown-item" href="/index-consulting.html">Consulting</a></li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#">About</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/about.html">About</a></li>
                                    <li><a className="dropdown-item" href="/about-2.html">About2</a></li>
                                    <li><a className="dropdown-item" href="/about-3.html">About3</a></li>
                                    <li><a className="dropdown-item" href="/our-history.html">Our History</a></li>
                                    <li><a className="dropdown-item" href="/our-mission.html">Our Mission</a></li>
                                    <li><a className="dropdown-item" href="/our-vision.html">Our Vision</a></li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown unicode-megamenu-item-full-width unicode-megamenu-dropdown">
                                  <a className="nav-link dropdown-toggle" href="#">Element</a>
                                  <div className="dropdown-menu unicode-megamenu-wrapper">
                                    <div className="mega-container unicode-megamenu-holder">
                                      <div className="row">
                                        <div className="col-md-3 col-sm-6">
                                          <ul className="unicode-menu-element unicode-megamenu-list">
                                            <li className="menu-item">
                                              <ul className="unicode-sub-megamenu">
                                                <li className="menu-item"><a className="dropdown-item" href="/element-accordions.html"><span>Accordions</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-achievement.html"><span>Achievement</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-animation.html"><span>Animation</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-blog.html"><span>Blog</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-brand.html"><span>Brand</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-buttons.html"><span>Buttons</span></a></li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                          <ul className="unicode-menu-element unicode-megamenu-list">
                                            <li className="menu-item">
                                              <ul className="unicode-sub-megamenu">
                                                <li className="menu-item"><a className="dropdown-item" href="/element-contact.html"><span>Contact</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-footer.html"><span>Footer</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-form.html"><span>Form</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-hover-effects.html"><span>Hover Effect</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-newsletter.html"><span>Newsletter</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-photo-gallery.html"><span>Photo Gallery</span></a></li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                          <ul className="unicode-menu-element unicode-megamenu-list">
                                            <li className="menu-item">
                                              <ul className="unicode-sub-megamenu">
                                                <li className="menu-item"><a className="dropdown-item" href="/element-portfolio.html"><span>Portfolio</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-pricing-table.html"><span>Pricing Table</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-products.html"><span>Products</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-progress-bar.html"><span>Progress Bar</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-sections.html"><span>Sections</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-slider.html"><span>Slider</span></a></li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                          <ul className="unicode-menu-element unicode-megamenu-list">
                                            <li className="menu-item">
                                              <ul className="unicode-sub-megamenu">
                                                <li className="menu-item"><a className="dropdown-item" href="/element-tab.html"><span>Tab</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-team.html"><span>Team</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-testimonials.html"><span>Testimonial</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-thumb-block.html"><span>Thumbnail Block</span></a></li>
                                                <li className="menu-item"><a className="dropdown-item" href="/element-typography.html"><span>Typography</span></a></li>
                                              </ul>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#">Pages</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/service.html">Service</a></li>
                                    <li><a className="dropdown-item" href="/service-details.html">Service Details</a></li>
                                    <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/pricing.html">Pricing</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/pricing.html">Pricing</a></li>
                                        <li><a className="dropdown-item" href="/pricing-extend.html">Pricing Extend</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/career.html">Career</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/career.html">Career</a></li>
                                        <li><a className="dropdown-item" href="/application.html">Application</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/team.html">Team</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/team.html">Team Member</a></li>
                                        <li><a className="dropdown-item" href="/profile-details.html">Member Profile</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/certification.html">Certificate</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/certification.html">Certification</a></li>
                                        <li><a className="dropdown-item" href="/certification-detail.html">Certification Details</a></li>
                                      </ul>
                                    </li>
                                    <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/general-support.html">Help and Support</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/how-it-work.html">How It Work</a></li>
                                        <li><a className="dropdown-item" href="/general-support.html">General Support</a></li>
                                        <li><a className="dropdown-item" href="/help-center.html">Help Center</a></li>
                                        <li><a className="dropdown-item" href="/support-article-details.html">Support Article</a></li>
                                        <li><a className="dropdown-item" href="/terms-and-condition.html">Terms &amp; Condition</a></li>
                                      </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="/testimonial.html">Testimonial</a></li>
                                    <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/gallery.html">Gallery</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/gallery.html">Gallery default</a></li>
                                        <li><a className="dropdown-item" href="/gallery-fullwidth.html">Gallery fullwidth</a></li>
                                        <li><a className="dropdown-item" href="/gallery-masonry.html">Gallery masonry</a></li>
                                        <li><a className="dropdown-item" href="/gallery-detail.html">Gallery Details</a></li>
                                      </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="/quote.html">Quote</a></li>
                                    <li><a className="dropdown-item" href="/faq.html">Faq</a></li>
                                    <li><a className="dropdown-item" href="/404.html">404 Page</a></li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#">Shop</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/shop.html">Shop</a></li>
                                    <li><a className="dropdown-item" href="/shop-list.html">Shop List</a></li>
                                    <li><a className="dropdown-item" href="/shop-single.html">Shop Single</a></li>
                                    <li><a className="dropdown-item" href="/sign-in.html">Sign In</a></li>
                                    <li><a className="dropdown-item" href="/sign-up.html">Sign Up</a></li>
                                    <li><a className="dropdown-item" href="/cart.html">Cart</a></li>
                                    <li><a className="dropdown-item" href="/checkout.html">Checkout</a></li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#">News</a>
                                  <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/blog.html">News</a></li>
                                    <li><a className="dropdown-item" href="/blog-fullwidth-box.html">News Full Box Width</a></li>
                                    <li><a className="dropdown-item" href="/blog-fullwidth.html">News Full Width</a></li>
                                    <li><a className="dropdown-item" href="/blog-left-sidebar.html">News Left Sidebar</a></li>
                                    <li><a className="dropdown-item" href="/blog-right-sidebar.html">News Right Sidebar</a></li>
                                    <li><a className="dropdown-item" href="/news-details.html">News Details Right</a></li>
                                    <li><a className="dropdown-item" href="/news-details-left-sidebar.html">News Details Left</a></li>
                                  </ul>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="/contact.html">Contact</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*============================== Header Section End ==============================*/}
        <div className="full-row p-0">
          <div className="container">
            <div id="rev_slider_1068_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="levano4export" data-source="gallery" style={{backgroundColor: 'transparent', padding: 0}}>
              {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
              <div id="rev_slider_1068_1" className="rev_slider fullscreenbanner" style={{display: 'none'}} data-version="5.4.1">
                <ul>
                  {/* SLIDE  */}
                  <li data-index="rs-3010" data-transition="fade" data-slotamount={7} data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={1000} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={1000} data-fsslotamount={7} data-saveperformance="off" data-title="Intro" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                    {/* MAIN IMAGE */}
                    <img src="/assets/images/slider/landing.png" alt data-lazyload="assets/images/slider/landing.png" data-bgposition="center center" data-kenburns="on" data-duration={20000} data-ease="Power1.easeOut" data-scalestart={110} data-scaleend={100} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" className="rev-slidebg" data-no-retina />
                    {/* LAYERS */}
                    {/* LAYER NR. 1 */}
                    <div className="tp-caption tp-resizeme rs-parallaxlevel-3" id="slide-1678-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-250','-250','-250','-250']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;speed&quot;:800,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:650,&quot;ease&quot;:&quot;Back.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:700,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8, borderWidth: 0}}><img src="/assets/images/logo-icon.png" alt width={123} height={144} data-lazyload="assets/images/logo-icon.png" data-no-retina /> </div>
                    {/* LAYER NR. 2 */}
                    <div className="tp-caption Restaurant-Display tp-resizeme" id="slide-3010-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-80','-80','-80','-80']" data-fontsize="['50','40','30','20']" data-lineheight="['60','50','40','30']" data-width="['800','700','600','360']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:500,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5, whiteSpace: 'nowrap', color: '#fff'}}>Multipurpose Corporate &amp; Security Service Template</div>
                    {/* LAYER NR. 3 */}
                    <div className="tp-caption rev-scroll-btn " id="slide-3010-layer-5" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['77','77','77','77']" data-width={35} data-height={55} data-whitespace="nowrap" data-type="button" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:50px;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, minWidth: 35, maxWidth: 55, whiteSpace: 'nowrap', fontWeight: 400, borderColor: 'rgba(255, 255, 255, 1.00)', borderStyle: 'solid', borderWidth: 3, borderRadius: '23px 23px 23px 23px', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer'}}>
                      <span>
                      </span>
                    </div>
                    {/* LAYER NR. 4 */}
                    <div className="tp-caption Restaurant-ScrollDownText" id="slide-3010-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['50','50','30','30']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1900,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8, whiteSpace: 'nowrap'}}>Scroll Down </div>
                  </li>
                </ul>
                <div className="tp-bannertimer tp-bottom" style={{visibility: 'hidden !important'}} />
              </div>
            </div>
            {/* END REVOLUTION SLIDER */}
          </div>
        </div>
        {/*============================== Banner section start ==============================*/}
        <div id="all-demo" className="full-row bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <span className="text-center sub-title fs-18 ordinary-font">A great collection of beautiful website templates for your website. Choose the best suitable template and start customizing it.</span>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Banner section end ==============================*/}
        {/*============================== All demos section start ==============================*/}
        <div className="full-row bg-dark pt-0">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-6">
                <h1 className="text-center text-white mb-4 fw-700">Professional Security and Corporate Demos</h1>
                <div className="text-center d-flex justify-content-center pb-5">
                  <ul className="list-circle d-flex justify-content-center list-color-white gap-4 fw-500">
                    <li>Lifetime Support</li>
                    <li>Easy Customize</li>
                    <li>Free Update</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="multi-demo row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-5">
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="900ms">
                <a target="_blank" href="/index-security.html" className="demo-example transation">
                  <img src="/assets/images/demo/1.png" className="shadow" alt="Image not found!" />
                  <span>Security Default</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="400ms" data-wow-duration="900ms">
                <a target="_blank" href="/index-agency.html" className="demo-example transation">
                  <img src="/assets/images/demo/2.png" className="shadow" alt="Image not found!" />
                  <span>Agency</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="600ms" data-wow-duration="900ms">
                <a target="_blank" href="/index-corporate.html" className="demo-example transation">
                  <img src="/assets/images/demo/3.png" className="shadow" alt="Image not found!" />
                  <span>Corporate</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="800ms" data-wow-duration="900ms">
                <a target="_blank" href="/index-business.html" className="demo-example transation">
                  <img src="/assets/images/demo/4.png" className="shadow" alt="Image not found!" />
                  <span>Business</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="1000ms" data-wow-duration="900ms">
                <a target="_blank" href="/index-security-company.html" className="demo-example transation">
                  <img src="/assets/images/demo/5.png" className="shadow" alt="Image not found!" />
                  <span>Security Company</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="1200ms" data-wow-duration="900ms">
                <a target="_blank" href="/index-hosting.html" className="demo-example transation">
                  <img src="/assets/images/demo/6.png" className="shadow" alt="Image not found!" />
                  <span>Hosting</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="1400ms" data-wow-duration="900ms">
                <a target="_blank" href="/index-web-agency.html" className="demo-example transation">
                  <img src="/assets/images/demo/7.png" className="shadow" alt="Image not found!" />
                  <span>Web Design Agency</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="1600ms" data-wow-duration="900ms">
                <a target="_blank" href="/index-business-advisors.html" className="demo-example transation">
                  <img src="/assets/images/demo/8.png" className="shadow" alt="Image not found!" />
                  <span>Business Advisors</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="1800ms" data-wow-duration="900ms">
                <a target="_blank" href="/index-financing.html" className="demo-example transation">
                  <img src="/assets/images/demo/9.png" className="shadow" alt="Image not found!" />
                  <span>Financing</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="2000ms" data-wow-duration="900ms">
                <a target="_blank" href="/index-consulting.html" className="demo-example transation">
                  <img src="/assets/images/demo/10.png" className="shadow" alt="Image not found!" />
                  <span>Consulting</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*============================== All demos section end ==============================*/}
        {/*============================== Inner pages demos section start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-6">
                <span className="text-center sub-title fs-18 ordinary-font fw-500 d-block mb-4">Important Inner Pages</span>
                <h1 className="text-center fw-700 mb-4">Professional and Important Default Inner Pages</h1>
              </div>
              <div className="col-md-9">
                <span className="d-block fs-18 text-center">Perton specially create for security service company but using it's feature and inner pages we make the multiple category business template.</span>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="multi-demo row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-5">
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="900ms">
                <a target="_blank" href="/about.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/1.png" alt="Image not found!" />
                  <span>About Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="400ms" data-wow-duration="900ms">
                <a target="_blank" href="/about-2.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/2.png" alt="Image not found!" />
                  <span>About Two Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="600ms" data-wow-duration="900ms">
                <a target="_blank" href="/our-history.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/3.png" alt="Image not found!" />
                  <span>Our History</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="800ms" data-wow-duration="900ms">
                <a target="_blank" href="/our-mission.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/4.png" alt="Image not found!" />
                  <span>Our Mission</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="1000ms" data-wow-duration="900ms">
                <a target="_blank" href="/service.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/5.png" alt="Image not found!" />
                  <span>Service Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="1200ms" data-wow-duration="900ms">
                <a target="_blank" href="/service-details.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/6.png" alt="Image not found!" />
                  <span>Service Details</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="1400ms" data-wow-duration="900ms">
                <a target="_blank" href="/pricing.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/7.png" alt="Image not found!" />
                  <span>Pricing Table</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="1600ms" data-wow-duration="900ms">
                <a target="_blank" href="/pricing-extend.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/8.png" alt="Image not found!" />
                  <span>Pricing Customize</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="1800ms" data-wow-duration="900ms">
                <a target="_blank" href="/career.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/9.png" alt="Image not found!" />
                  <span>Career Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="2000ms" data-wow-duration="900ms">
                <a target="_blank" href="/how-it-work.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/10.png" alt="Image not found!" />
                  <span>How It Work</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="2200ms" data-wow-duration="900ms">
                <a target="_blank" href="/general-support.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/11.png" alt="Image not found!" />
                  <span>General Support Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="2400ms" data-wow-duration="900ms">
                <a target="_blank" href="/gallery.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/12.png" alt="Image not found!" />
                  <span>Simple Gallery</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="2600ms" data-wow-duration="900ms">
                <a target="_blank" href="/shop.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/13.png" alt="Image not found!" />
                  <span>Shop Grid Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="2800ms" data-wow-duration="900ms">
                <a target="_blank" href="/shop-list.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/14.png" alt="Image not found!" />
                  <span>Shop List Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="3000ms" data-wow-duration="900ms">
                <a target="_blank" href="/shop-single.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/15.png" alt="Image not found!" />
                  <span>Single Shop</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="3200ms" data-wow-duration="900ms">
                <a target="_blank" href="/blog.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/16.png" alt="Image not found!" />
                  <span>Blog Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="3400ms" data-wow-duration="900ms">
                <a target="_blank" href="/news-details.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/17.png" alt="Image not found!" />
                  <span>Single Blog Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="3600ms" data-wow-duration="900ms">
                <a target="_blank" href="/contact.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/18.png" alt="Image not found!" />
                  <span>Contact Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="3800ms" data-wow-duration="900ms">
                <a target="_blank" href="/testimonial.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/19.png" alt="Image not found!" />
                  <span>Testimonial Page</span>
                </a>
              </div>
              <div className="col wow animate__animated animate__fadeIn" data-wow-delay="4000ms" data-wow-duration="900ms">
                <a target="_blank" href="/gallery-masonry.html" className="demo-example transation">
                  <img className="shadow" src="/assets/images/demo/inner/20.png" alt="Image not found!" />
                  <span>Gallery Masonry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Inner pages demos section end ==============================*/}
        {/*============================== Banner section start ==============================*/}
        <div className="full-row bg-primary py-5">
          <div className="container">
            <div className="row">
              <h2 className="mb-0 text-center text-white fst-italic fw-400">Create your custom template by copy past <span className="underline">Patron</span> source</h2>
            </div>
          </div>
        </div>
        {/*============================== Banner section start ==============================*/}
        {/*============================== Why choose patron section start ==============================*/}
        <div className="full-row bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <span className="text-primary pb-2 tagline d-block text-center">Features</span>
                <h2 className="down-line-primary text-center fw-700 mb-4">Why Choose Patron</h2>
                <span className="d-block text-center mb-5">Below you can see some of the various features that we built into Patron HTML.</span>
              </div>
            </div>
            <div className="row row-cols-md-2 row-cols-1 gy-5">
              <div className="col">
                <h5 className="mb-3">Easy To Customize</h5>
                <p>Patron is very easy to customize. Becuase each section of this template are seperated. Element spacing and alingment has given by speprate class of bootstrap. All the features, section, element, class listed in documentation.</p>
              </div>
              <div className="col">
                <h5 className="mb-3">Lifetime Update</h5>
                <p>Patron is updated regularly with new exciting features and layouts. All future updates are included with your original purchase. Our approch to release new category and element each week.</p>
              </div>
              <div className="col">
                <h5 className="mb-3">Modern and vibrant design</h5>
                <p>Patron is pixel perfect and fully responsive design as per latest web design trends. It's very simple design and each category perfectly match with it's goals. It's comes after lot's of customer research.</p>
              </div>
              <div className="col">
                <h5 className="mb-3">Highly professional coding standard</h5>
                <p>Well commented and structured, easy to understand and customizable code. It's a bootstrap standard template, so don't worry about mountain of coding and make your website slow loading.</p>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Why choose patron section end ==============================*/}
        {/*============================== Template features section start ==============================*/}
        <div className="full-row bg-light pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h2 className="down-line-primary text-center fw-700 mb-4">Template Features</h2>
                <span className="d-block text-center mb-5">In the Beautiful Homex template you can get massive features for your website. So you can easily customize your website. And it's will very professional to look.</span>
              </div>
            </div>
            <div className="row row-cols-md-4 row-cols-1 g-4">
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/28.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3"><a href="https://getbootstrap.com/">Bootstrap4</a></h6>
                  <p>Homex built using bootstrap4 grid system. It's a popular responsive page builder.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/29.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3"><a href="https://layerslider.kreaturamedia.com/?platform=jquery">Layer Slider</a></h6>
                  <p>As a slider we use premium layer slider plugin, it's very easy to customize.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/30.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3"><a href="https://www.flaticon.com/">Flaticon Use</a></h6>
                  <p>Lot's of icon you can create and use from flaticon. You can use any icon as font from here.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/31.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3"><a href="https://fontawesome.com/">FontAwesome</a></h6>
                  <p>We also include font awesome icons. We added the latest version of fontawesome.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/32.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3"><a href="https://www.w3schools.com/html/html5_intro.asp">HTML5</a></h6>
                  <p>Homex source code arrange using html5. Most of the part are use the HTML5 tags.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/33.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3"><a href="https://jquery.com/">jQuery</a></h6>
                  <p>The a have a jQuery control settings and use all the latest version of plugin.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/34.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3"><a href="https://validator.w3.org/">W3School Validate</a></h6>
                  <p>All the template has validate by w3schools. No code error and warning issues.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/35.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3"><a href="https://developers.google.com/speed/pagespeed/insights/">Google Speed Test</a></h6>
                  <p>Good rank and score in google website speed test. It's impress to the client.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/36.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3"><a href="https://search.google.com/test/mobile-friendly">Responsive</a></h6>
                  <p>The template is 100% responsive. It perfectly visible in large to small device.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/37.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3"><a href="https://fonts.google.com/">Google Font</a></h6>
                  <p>As a font we use the google font. Top of the page there include the google font api.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/38.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3">Well Documented</h6>
                  <p>Home is very well ducumented, complete instruction how to setup the template.</p>
                </div>
              </div>
              <div className="col">
                <div className="p-4 bg-white text-center">
                  <span className="d-table mx-auto mb-3" style={{width: 80}}><img src="/assets/images/icon/39.png" alt="real estate template" /></span>
                  <h6 className="text-secondary mb-3">SEO Friendly</h6>
                  <p>The template is very cool for SEO friendly. It's suitable for one page SEO.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Template features section end ==============================*/}
        {/*============================== Footer Section Start ==============================*/}
        <footer className="full-row bg-secondary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h1 className="text-center text-white fst-italic fw-700 mb-5">Start Creating Beautiful Websites Purchase Patron for $17 only!</h1>
                <p className="text-light text-center">100% Fully Responsive - Retina Ready - Google Fonts - Super Fast - Top-Level Support - Customizable - SEO Friendly - All Browser Supported - Light CSS Coding</p>
                <a href="#" className="btn btn-primary d-table mx-auto mt-5">Purchase Now</a>
              </div>
            </div>
          </div>
        </footer>
        {/*============================== Footer Section End ==============================*/}
        {/*============================== Footer Bottom 1 Section Start ==============================*/}
        <div className="full-row bg-dark fs-13 py-4">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="nav-style-1 list-color-white hover-list-color-primary list-font-13 list-mr-20">
                    <ul>
                      <li><a href="/how-it-work.html">How It Work</a></li>
                      <li><a href="/faq.html">FAQ</a></li>
                      <li><a href="#">Trusty and Safty</a></li>
                      <li><a href="#">Payment</a></li>
                      <li><a href="/sign-in.html">My Account</a></li>
                      <li><a href="/general-support.html">General Support</a></li>
                    </ul>
                  </div>
                  <span className="copyright-text text-white">© 2022 All Rights Reserved by <a href="#">Unicoder</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Footer Bottom 1 Section End ==============================*/}
        {/* Scroll to top */}
        <a href="#" className="bg-primary text-white" id="scroll"><i className="fa fa-angle-up" /></a>
        {/* End Scroll To top */}
      </div>
      {/*===============================================================================================*/}
      {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) */}
    </>
  )
}
