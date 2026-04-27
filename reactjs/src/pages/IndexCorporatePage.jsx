export default function IndexCorporatePage() {
  return (
    <>
      <div id="page-wrapper">
        {/*============================== Header Section Start ==============================*/}
        <header id="header" className="nav-on-top bg-white">
          <div className="main-nav py-3 d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light nav-dark nav-primary-hover nav-primary-active">
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/2.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar-content" aria-controls="main-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="main-navbar-content">
                      <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link" href="/index-corporate.html">Home</a>
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
                      <div className="navbar-nav nav-element ms-4">
                        <div className="navbar-nav search-pop position-relative">
                          <i className="toggle-icon fas fa-search text-dark" />
                          <div className="search-form shadow-sm bg-white">
                            <form action="#" method="post" className="position-relative">
                              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                              <button className="btn-search my-2 my-sm-0" type="submit"><i className="fas fa-search" /></button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="header-sticky bg-white py-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col">
                  <nav className="navbar navbar-expand-lg navbar-light nav-dark nav-primary-hover nav-primary-active">
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/2.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sticky-navbar-content" aria-controls="sticky-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="sticky-navbar-content">
                      <ul className="navbar-nav justify-content-end">
                        <li className="nav-item dropdown">
                          <a className="nav-link" href="/index-corporate.html">Home</a>
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
                      <div className="navbar-nav nav-element ms-4">
                        <div className="navbar-nav search-pop position-relative">
                          <i className="toggle-icon fas fa-search text-dark" />
                          <div className="search-form shadow-sm bg-white">
                            <form action="#" method="post" className="position-relative">
                              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                              <button className="btn-search my-2 my-sm-0" type="submit"><i className="fas fa-search" /></button>
                            </form>
                          </div>
                        </div>
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
                              <ul className="navbar-nav justify-content-end">
                                <li className="nav-item">
                                  <a className="nav-link" href="/index.html">Home</a>
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
                                        <div className="col-lg-3">
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
                                        <div className="col-lg-3">
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
                                        <div className="col-lg-3">
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
                                        <div className="col-lg-3">
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
                                    <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="/gallery.html">Gallery</a>
                                      <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/gallery.html">Gallery default</a></li>
                                        <li><a className="dropdown-item" href="/gallery-fullwidth.html">Gallery fullwidth</a></li>
                                        <li><a className="dropdown-item" href="/gallery-masonry.html">Gallery masonry</a></li>
                                        <li><a className="dropdown-item" href="/gallery-detail.html">Gallery Details</a></li>
                                      </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="/testimonial.html">Testimonial</a></li>
                                    <li><a className="dropdown-item" href="/service.html">Service</a></li>
                                    <li><a className="dropdown-item" href="/service-details.html">Service Details</a></li>
                                    <li><a className="dropdown-item" href="/quote.html">Quote</a></li>
                                    <li><a className="dropdown-item" href="/faq.html">Faq</a></li>
                                    <li><a className="dropdown-item" href="/404.html">404 Page</a></li>
                                  </ul>
                                </li>
                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="/shop.html">Shop</a>
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
                                  <a className="nav-link dropdown-toggle" href="/blog.html">News</a>
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
        {/*============================== Slider Section Start ==============================*/}
        <div className="full-row p-0">
          <div className="container-fluid p-0">
            <div id="rev_slider_151_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="blur-effect-slider" data-source="gallery" style={{backgroundColor: '#2d3032', padding: 0}}>
              {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
              <div id="rev_slider_151_1" className="rev_slider fullscreenbanner" style={{display: 'none'}} data-version="5.4.1">
                <ul>
                  {/* SLIDE  */}
                  <li data-index="rs-411" data-transition="fadethroughtransparent" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="assets/images/blur1-100x50.jpg" data-rotate={0} data-fstransition="fade" data-fsmasterspeed={1000} data-fsslotamount={7} data-saveperformance="off" data-title="One" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                    {/* MAIN IMAGE */}
                    <img src="/assets/images/slider/6.png" alt data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={6} className="rev-slidebg" data-no-retina />
                    {/* LAYERS */}
                    <div id="rrzt_411" className="rev_row_zone rev_row_zone_middle" style={{zIndex: 9}}>
                      {/* LAYER NR. 1 */}
                      <div className="tp-caption" id="slide-411-layer-14" data-x="['left','left','center','center']" data-hoffset="['100','100','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="row" data-columnbreak={2} data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[100,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 9, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)'}}>
                        {/* LAYER NR. 2 */}
                        <div className="tp-caption  " id="slide-411-layer-15" data-x="['left','left','center','center']" data-hoffset="['100','100','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-columnwidth="100%" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 10, width: '100%'}}>
                          {/* LAYER NR. 3 */}
                          <div className="tp-caption   tp-resizeme  blurslider-gradient" id="slide-411-layer-1" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-fontsize="['70','60','50','40']" data-lineheight="['100','90','80','70']" data-width="none" data-height="none" data-type="text" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+290&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[10,10,10,10]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 11, whiteSpace: 'nowrap', fontSize: 80, lineHeight: 110, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)', display: 'inline-block', fontFamily: 'Russo One'}}>Hi! We Are Business <br />Community.</div>
                          {/* LAYER NR. 4 */}
                          <div className="tp-caption tp-resizeme" id="slide-411-layer-2" data-x="['left','left','center','center']" data-hoffset="['0','50','0','0']" data-y="['top','top','top','top']" data-voffset="['0','430','460','290']" data-fontsize="['20','20','18','18']" data-lineheight="['50','40','50','30']" data-width="['640','360','100%','100%']" data-height="none" data-whitespace="normal" data-type="text" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+490&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[40,40,40,40]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 12, minWidth: 640, maxWidth: 640, whiteSpace: 'normal', fontSize: 30, lineHeight: 50, fontWeight: 300, color: 'rgba(255, 255, 255, 1.00)', display: 'block', fontFamily: 'Roboto'}}>keeping the good parts and taking out the trash.</div>
                          {/* LAYER NR. 5 */}
                          <a className="tp-caption rev-btn  tp-resizeme" href="http://codecanyon.net/item/slider-revolution-responsive-wordpress-plugin/2751380?ref=themepunch&license=regular&open_purchase_for_item_id=2751380&purchasable=source" target="_blank" id="slide-411-layer-13" data-x="['left','left','center','center']" data-hoffset="['0','50','0','0']" data-y="['top','top','top','top']" data-voffset="['0','540','590','400']" data-width="none" data-height="none" data-whitespace="['normal','nowrap','nowrap','nowrap']" data-type="button" data-actions data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+690&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;fb:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[35,35,35,35]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[35,35,35,35]" style={{zIndex: 13, whiteSpace: 'normal', fontSize: 18, lineHeight: 50, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)', display: 'inline-block', fontFamily: 'Roboto', backgroundColor: 'rgba(255, 255, 255, 0)', borderColor: 'rgba(255, 255, 255, 1.00)', borderStyle: 'solid', borderWidth: '2px 2px 2px 2px', borderRadius: '30px 30px 30px 30px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}>Go to Service</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* SLIDE  */}
                  <li data-index="rs-412" data-transition="fadethroughtransparent" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="assets/images/blurbg14-100x50.jpg" data-rotate={0} data-saveperformance="off" data-title="Two" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                    {/* MAIN IMAGE */}
                    <img src="/assets/images/slider/2.png" alt data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={6} className="rev-slidebg" data-no-retina />
                    {/* LAYERS */}
                    <div id="rrzt_412" className="rev_row_zone rev_row_zone_middle" style={{zIndex: 5}}>
                      {/* LAYER NR. 10 */}
                      <div className="tp-caption  " id="slide-412-layer-14" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="row" data-columnbreak={2} data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[100,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)'}}>
                        {/* LAYER NR. 11 */}
                        <div className="tp-caption  " id="slide-412-layer-15" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-columnwidth="100%" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 6, width: '100%'}}>
                          {/* LAYER NR. 12 */}
                          <div className="tp-caption   tp-resizeme  blurslider-gradient" id="slide-412-layer-1" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','230','110']" data-fontsize="['70','60','50','40']" data-lineheight="['100','90','80','70']" data-width="['none','none','none','none']" data-height="none" data-whitespace="['nowrap','nowrap','nowrap','normal']" data-type="text" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+290&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[10,10,10,10]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, whiteSpace: 'nowrap', fontSize: 80, lineHeight: 100, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)', display: 'inline-block', fontFamily: 'Russo One'}}>Advice For Your <br />Business</div>
                          {/* LAYER NR. 13 */}
                          <div className="tp-caption   tp-resizeme" id="slide-412-layer-2" data-x="['left','left','center','center']" data-hoffset="['0','50','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-fontsize="['20','20','18','18']" data-lineheight="['50','40','50','30']" data-width="['640','360','100%','100%']" data-height="none" data-whitespace="normal" data-type="text" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+490&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[40,40,40,40]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8, minWidth: 640, maxWidth: 640, whiteSpace: 'normal', fontSize: 40, lineHeight: 50, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)', display: 'block', fontFamily: 'Roboto'}}>We added many new features in the latest update. </div>
                          {/* LAYER NR. 14 */}
                          <a className="tp-caption rev-btn  tp-resizeme" href="http://codecanyon.net/item/slider-revolution-responsive-wordpress-plugin/2751380?ref=themepunch&license=regular&open_purchase_for_item_id=2751380&purchasable=source" target="_blank" id="slide-412-layer-13" data-x="['left','left','center','center']" data-hoffset="['0','50','0','0']" data-y="['top','top','top','top']" data-voffset="['0','540','590','400']" data-width="none" data-height="none" data-whitespace="['normal','nowrap','nowrap','nowrap']" data-type="button" data-actions data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+690&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;fb:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[35,35,35,35]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[35,35,35,35]" style={{zIndex: 9, whiteSpace: 'normal', fontSize: 18, lineHeight: 50, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)', display: 'inline-block', fontFamily: 'Roboto', backgroundColor: 'rgba(255, 255, 255, 0)', borderColor: 'rgba(255, 255, 255, 1.00)', borderStyle: 'solid', borderWidth: '2px 2px 2px 2px', borderRadius: '30px 30px 30px 30px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}>Go to Service</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* SLIDE  */}
                  <li data-index="rs-413" data-transition="fadethroughtransparent" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="assets/images/blurbg10-100x50.jpg" data-rotate={0} data-saveperformance="off" data-title="Three" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                    {/* MAIN IMAGE */}
                    <img src="/assets/images/slider/7.png" alt data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={6} className="rev-slidebg" data-no-retina />
                    {/* LAYERS */}
                    <div id="rrzt_413" className="rev_row_zone rev_row_zone_middle" style={{zIndex: 5}}>
                      {/* LAYER NR. 19 */}
                      <div className="tp-caption  " id="slide-413-layer-14" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="row" data-columnbreak={2} data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[100,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)'}}>
                        {/* LAYER NR. 20 */}
                        <div className="tp-caption  " id="slide-413-layer-15" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-columnwidth="100%" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 6, width: '100%'}}>
                          {/* LAYER NR. 21 */}
                          <div className="tp-caption   tp-resizeme  blurslider-gradient" id="slide-413-layer-1" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-fontsize="['70','60','50','40']" data-lineheight="['100','90','80','70']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+290&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[10,10,10,10]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, whiteSpace: 'nowrap', fontSize: 80, lineHeight: 100, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)', display: 'inline-block', fontFamily: 'Russo One'}}>Discover Perfect <br />Website.</div>
                          {/* LAYER NR. 22 */}
                          <div className="tp-caption   tp-resizeme" id="slide-413-layer-2" data-x="['left','left','center','center']" data-hoffset="['0','50','0','0']" data-y="['top','top','top','top']" data-voffset="['0','430','460','290']" data-fontsize="['20','20','18','18']" data-lineheight="['50','40','50','30']" data-width="['640','360','100%','100%']" data-height="none" data-whitespace="normal" data-type="text" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+490&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[40,40,40,40]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8, minWidth: 640, maxWidth: 640, whiteSpace: 'normal', fontSize: 40, lineHeight: 50, fontWeight: 300, color: 'rgba(255, 255, 255, 1.00)', display: 'block', fontFamily: 'Roboto'}}>This and many more slider templates are included with each license purchase. </div>
                          {/* LAYER NR. 23 */}
                          <a className="tp-caption rev-btn  tp-resizeme" href="http://codecanyon.net/item/slider-revolution-responsive-wordpress-plugin/2751380?ref=themepunch&license=regular&open_purchase_for_item_id=2751380&purchasable=source" target="_blank" id="slide-413-layer-13" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="['normal','nowrap','nowrap','nowrap']" data-type="button" data-actions data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+690&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;fb:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[35,35,35,35]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[35,35,35,35]" style={{zIndex: 9, whiteSpace: 'normal', fontSize: 16, lineHeight: 50, fontWeight: 500, color: 'rgba(255, 255, 255, 1.00)', display: 'inline-block', fontFamily: 'Roboto', backgroundColor: 'rgba(255, 255, 255, 0)', borderColor: 'rgba(255, 255, 255, 1.00)', borderStyle: 'solid', borderWidth: '2px 2px 2px 2px', borderRadius: '30px 30px 30px 30px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}>Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="tp-static-layers">
                  {/* LAYER NR. 28 */}
                  <div className="tp-caption   tp-static-layer" id="slider-151-layer-29" data-x="['right','right','right','right']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['-50','-50','119','119']" data-width="['260','260','200','70']" data-height="none" data-whitespace="nowrap" data-visibility="['on','on','on','off']" data-type="text" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-startslide={0} data-endslide={2} data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 17, minWidth: 260, maxWidth: 260, whiteSpace: 'nowrap', fontSize: 15, lineHeight: 15, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)', fontFamily: 'Roboto'}}>1
                    <div className="blurslider-line" style={{display: 'inline-block', width: 40, height: 1, background: '#fff', margin: '10px 20px 4px 15px'}} />Business </div>
                  {/* LAYER NR. 29 */}
                  <div className="tp-caption tp-shape tp-shapewrapper tp-static-layer" id="slider-151-layer-22" data-x="['right','right','right','right']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['-50','-50','102','102']" data-width="['300','300','240','30%']" data-height={50} data-whitespace="nowrap" data-visibility="['on','on','on','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-startslide={0} data-endslide={2} data-frames="[{&quot;delay&quot;:&quot;bytrigger&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;bytrigger&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];opacity:1;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-blendmode="overlay" data-lasttriggerstate="reset" style={{zIndex: 18, backgroundColor: 'rgba(0, 0, 0, 0.25)', cursor: 'pointer'}}> </div>
                  {/* LAYER NR. 30 */}
                  <div className="tp-caption tp-shape tp-shapewrapper  tp-static-layer" id="slider-151-layer-21" data-x="['right','right','right','right']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['-50','-50','102','102']" data-width="['300','300','240','30%']" data-height={50} data-whitespace="nowrap" data-visibility="['on','on','on','off']" data-type="shape" data-actions="[{&quot;event&quot;:&quot;mouseenter&quot;,&quot;action&quot;:&quot;startlayer&quot;,&quot;layer&quot;:&quot;slider-151-layer-22&quot;,&quot;delay&quot;:&quot;&quot;},{&quot;event&quot;:&quot;mouseleave&quot;,&quot;action&quot;:&quot;stoplayer&quot;,&quot;layer&quot;:&quot;slider-151-layer-22&quot;,&quot;delay&quot;:&quot;&quot;},{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;jumptoslide&quot;,&quot;slide&quot;:&quot;rs-411&quot;,&quot;delay&quot;:&quot;&quot;}]" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-startslide={0} data-endslide={2} data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);bs:solid;bw:0 0 0 0;&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-blendmode="overlay" style={{zIndex: 19, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer'}}>
                  </div>
                  {/* LAYER NR. 31 */}
                  <div className="tp-caption   tp-static-layer" id="slider-151-layer-28" data-x="['right','right','right','right']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['0','0','68','68']" data-width="['260','260','200','70']" data-height="none" data-whitespace="nowrap" data-visibility="['on','on','on','off']" data-type="text" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-startslide={0} data-endslide={2} data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 20, minWidth: 260, maxWidth: 260, whiteSpace: 'nowrap', fontSize: 15, lineHeight: 15, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)', fontFamily: 'Roboto'}}>2
                    <div className="blurslider-line" style={{display: 'inline-block', width: 40, height: 1, background: '#fff', margin: '10px 20px 4px 15px'}} />Advices </div>
                  {/* LAYER NR. 32 */}
                  <div className="tp-caption tp-shape tp-shapewrapper  tp-static-layer" id="slider-151-layer-24" data-x="['right','right','right','right']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['1','1','51','51']" data-width="['300','300','240','30%']" data-height={50} data-whitespace="nowrap" data-visibility="['on','on','on','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-startslide={0} data-endslide={2} data-frames="[{&quot;delay&quot;:&quot;bytrigger&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;bytrigger&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];opacity:1;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-blendmode="overlay" data-lasttriggerstate="reset" style={{zIndex: 21, backgroundColor: 'rgba(0, 0, 0, 0.25)', cursor: 'pointer'}}> </div>
                  {/* LAYER NR. 33 */}
                  <div className="tp-caption tp-shape tp-shapewrapper  tp-static-layer" id="slider-151-layer-23" data-x="['right','right','right','right']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['1','1','51','51']" data-width="['300','300','240','30%']" data-height={50} data-whitespace="nowrap" data-visibility="['on','on','on','off']" data-type="shape" data-actions="[{&quot;event&quot;:&quot;mouseenter&quot;,&quot;action&quot;:&quot;startlayer&quot;,&quot;layer&quot;:&quot;slider-151-layer-24&quot;,&quot;delay&quot;:&quot;&quot;},{&quot;event&quot;:&quot;mouseleave&quot;,&quot;action&quot;:&quot;stoplayer&quot;,&quot;layer&quot;:&quot;slider-151-layer-24&quot;,&quot;delay&quot;:&quot;&quot;},{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;jumptoslide&quot;,&quot;slide&quot;:&quot;rs-412&quot;,&quot;delay&quot;:&quot;&quot;}]" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-startslide={0} data-endslide={2} data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);bs:solid;bw:0 0 0 0;&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-blendmode="overlay" style={{zIndex: 22, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer'}}>
                  </div>
                  {/* LAYER NR. 34 */}
                  <div className="tp-caption   tp-static-layer" id="slider-151-layer-27" data-x="['right','right','right','right']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['50','50','17','17']" data-width="['260','260','200','70']" data-height="none" data-whitespace="nowrap" data-visibility="['on','on','on','off']" data-type="text" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-startslide={0} data-endslide={2} data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 23, minWidth: 260, maxWidth: 260, whiteSpace: 'nowrap', fontSize: 15, lineHeight: 15, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)', fontFamily: 'Roboto'}}>3
                    <div className="blurslider-line" style={{display: 'inline-block', width: 40, height: 1, background: '#fff', margin: '10px 20px 4px 15px'}} />Get Started </div>
                  {/* LAYER NR. 35 */}
                  <div className="tp-caption tp-shape tp-shapewrapper  tp-static-layer" id="slider-151-layer-26" data-x="['right','right','right','right']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['52','52','0','0']" data-width="['300','300','240','30%']" data-height={50} data-whitespace="nowrap" data-visibility="['on','on','on','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-startslide={0} data-endslide={2} data-frames="[{&quot;delay&quot;:&quot;bytrigger&quot;,&quot;speed&quot;:800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;bytrigger&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];opacity:1;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-blendmode="overlay" data-lasttriggerstate="reset" style={{zIndex: 24, backgroundColor: 'rgba(0, 0, 0, 0.25)', cursor: 'pointer'}}> </div>
                  {/* LAYER NR. 36 */}
                  <div className="tp-caption tp-shape tp-shapewrapper  tp-static-layer" id="slider-151-layer-25" data-x="['right','right','right','right']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','bottom','bottom']" data-voffset="['52','52','0','0']" data-width="['300','300','240','30%']" data-height={50} data-whitespace="nowrap" data-visibility="['on','on','on','off']" data-type="shape" data-actions="[{&quot;event&quot;:&quot;mouseenter&quot;,&quot;action&quot;:&quot;startlayer&quot;,&quot;layer&quot;:&quot;slider-151-layer-26&quot;,&quot;delay&quot;:&quot;&quot;},{&quot;event&quot;:&quot;mouseleave&quot;,&quot;action&quot;:&quot;stoplayer&quot;,&quot;layer&quot;:&quot;slider-151-layer-26&quot;,&quot;delay&quot;:&quot;&quot;},{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;jumptoslide&quot;,&quot;slide&quot;:&quot;rs-413&quot;,&quot;delay&quot;:&quot;&quot;}]" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-startslide={0} data-endslide={2} data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);bs:solid;bw:0 0 0 0;&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-blendmode="overlay" style={{zIndex: 25, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer'}}>
                  </div>
                </div>
                <div className="tp-bannertimer" style={{height: 3, backgroundColor: 'rgba(255, 255, 255, 0.25)'}} />
              </div>
            </div>
            {/* END REVOLUTION SLIDER */}
          </div>
        </div>
        {/*============================== Slider Section End ==============================*/}
        {/*============================== Icon List Thumb 1 Sction Start ==============================*/}
        <div className="full-row bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="tagline text-primary text-center mb-10">What We Offer</span>
                <h2 className="down-line-primary text-secondary text-center mb-30">Our Awesome Services</h2>
                <span className="sub-title fs-18 ordinary-font fw-400 text-general text-center mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</span>
              </div>
            </div>
            <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 g-4">
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-shield flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h4 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Home Security</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-2"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-servers flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h4 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Cloud Security</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-2"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-online-booking flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h4 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Office Security</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-2"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-software flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h4 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Computer Security</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-2"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-security flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h4 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Body Guard</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-2"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-fingerprint-with-crosshair-focus flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h4 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Biometric</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-2"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Icon List Thumb 1 Sction End ==============================*/}
        {/*============================== Why choose us Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-5 d-none d-lg-block">
                <div className="position-relative">
                  <div className="row row-cols-md-2 row-cols-1 g-2">
                    <div className="col">
                      <div className="hover-img-filter">
                        <img src="/assets/images/thumb/square-2.png" alt="image not found!" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="hover-img-filter">
                        <img src="/assets/images/thumb/square-3.png" alt="image not found!" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="hover-img-filter">
                        <img src="/assets/images/thumb/square-4.png" alt="image not found!" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="hover-img-filter">
                        <img src="/assets/images/thumb/square-7.png" alt="image not found!" />
                      </div>
                    </div>
                  </div>
                  <div className="since-year bg-primary p-5 text-center position-absolute xy-center rounded-10">
                    <h3 className="fw-500 text-white">Since <br /> 2012</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ps-5">
                  <div className="row justify-content-start text-start">
                    <div className="col-lg-12">
                      <span className="tagline text-uppercase text-primary mb-10">About Us</span>
                      <h1 className="text-dark text-uppercase mb-30">We are trusted by more than <span className="text-primary">6,800 clients.</span></h1>
                    </div>
                  </div>
                  <div className="row row-cols-1 thumb-style-9 gy-4">
                    <div className="col">
                      <div className="entry-wrapper d-flex flex-row align-items-start text-start transition-all">
                        <div className="entry-thumbnail-wrapper me-3">
                          <div className="post-thumbnail overflow-hidden">
                            <i className="icon flaticon-group flat-30 text-white" />
                          </div>
                        </div>
                        <div className="entry-content-wrapper">
                          <div className="entry-header">
                            <h3 className="entry-title text-uppercase mb-2">Pleasant Consulting</h3>
                          </div>
                          <div className="entry-content">
                            <p>Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum. Ante elementum vivamus integer tent.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="entry-wrapper d-flex flex-row align-items-start text-start transition-all">
                        <div className="entry-thumbnail-wrapper me-3">
                          <div className="post-thumbnail overflow-hidden">
                            <i className="icon flaticon-life-insurance flat-30 text-white" />
                          </div>
                        </div>
                        <div className="entry-content-wrapper">
                          <div className="entry-header">
                            <h3 className="entry-title text-uppercase mb-2">Trusted Services</h3>
                          </div>
                          <div className="entry-content">
                            <p>Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin, lorem is simply free text quis bibendum. Ante elementum vivamus integer tent.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="mt-4">
                        <a href="#" className="btn btn-primary-filter hover-shadow-move-1 text-uppercase">Learn More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Why choose us Section End ==============================*/}
        {/*============================== Skills Section Start ==============================*/}
        <div className="full-row bg-light">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-5">
                <div className="bg-white text-general p-35">
                  <span className="tagline text-primary text-start mb-10">10 Years Of Experience</span>
                  <h3 className="down-line-primary text-secondary text-start mb-30">Our Awesome Skills</h3>
                  <p>Est scelerisque bibendum. Erat netus nunc magnis etiam cubilia ridiculus urna viverra. Eu. Molestie Dignissim. Pharetra lacus fringilla quis vivamus. Aliquet taciti tempor Leo eu nascetur magna inceptos quam magnis, penatibus
                    dignissim.
                  </p>
                  <p>Ridiculus nonummy ligula cras penatibus convallis cum, tellus etiam maecenas conubia. Lorem eros imperdiet per vehicula nec. Nam sociis sit mi Mollis interdum taciti nascetur.</p>
                  <div className="btn-wrap mt-40">
                    <a href="#" className="btn btn-primary-filter rounded-0">Request Quote</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bar-progress progress-hight-3">
                  <div className="row row-cols-1 g-5">
                    <div className="col">
                      <div className="position-relative fact-counter text-secondary">
                        <span className="highlight-font">UI/UX Design</span>
                        <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                          <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={80}>0</span>%</div>
                          <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={80} aria-valuemax={100}> </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative fact-counter text-secondary">
                        <span className="highlight-font">Java Development</span>
                        <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                          <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={51}>0</span>%</div>
                          <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={51} aria-valuemax={100}> </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative fact-counter text-secondary">
                        <span className="highlight-font">CMS Website</span>
                        <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                          <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={72}>0</span>%</div>
                          <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={72} aria-valuemax={100}> </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative fact-counter text-secondary">
                        <span className="highlight-font">Mobile App</span>
                        <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                          <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={90}>0</span>%</div>
                          <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={90} aria-valuemax={100}> </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative fact-counter text-secondary">
                        <span className="highlight-font">Training</span>
                        <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                          <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={70}>0</span>%</div>
                          <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={70} aria-valuemax={100}> </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative fact-counter text-secondary">
                        <span className="highlight-font">Client Satisfaction</span>
                        <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                          <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={70}>0</span>%</div>
                          <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={70} aria-valuemax={100}> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Skills Section End ==============================*/}
        {/*============================== Icon Grid Thumb 1 Sction Start ==============================*/}
        <div className="full-row overlay-secondary paraxify" style={{backgroundImage: 'url(/assets/images/background/2.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row row-cols-lg-3 row-cols-1 gy-5">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center justify-content-start text-center text-white transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-experience flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title text-white mb-4">10 Years of Experience</h4>
                    </div>
                    <div className="entry-content">
                      <p>At interdum varius dictumst. Donec vivamus auctor, metus morbi fames suscipit ligula habitasse fusce aptent, aliquet porta auctor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center justify-content-start text-center text-white transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-experience flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title text-white mb-4">100% Satisfaction</h4>
                    </div>
                    <div className="entry-content">
                      <p>At interdum varius dictumst. Donec vivamus auctor, metus morbi fames suscipit ligula habitasse fusce aptent, aliquet porta auctor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center justify-content-start text-center text-white transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-24-hours flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title text-white mb-4">24/7 Security Service</h4>
                    </div>
                    <div className="entry-content">
                      <p>At interdum varius dictumst. Donec vivamus auctor, metus morbi fames suscipit ligula habitasse fusce aptent, aliquet porta auctor.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Icon Grid Thumb 1 Sction End ==============================*/}
        {/*============================== Photo Gallery 2 Section Start ==============================*/}
        <div className="full-row bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <span className="tagline text-primary text-center mb-10">See Our Experience</span>
                <h2 className="down-line-primary text-secondary text-center mb-30">Photo Gallery</h2>
                <span className="sub-title fs-18 ordinary-font fw-400 text-general text-center mb-50">Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse.</span>
              </div>
            </div>
            <div className="row row-cols-md-3 row-cols-1 g-0 gallery-style-1 transition-all">
              <div className="col">
                <div className="row row-cols-1 g-0">
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail overflow-hidden overlay-primary">
                          <img src="/assets/images/thumb/width-15.png" alt="Image not found !" />
                          <div className="position-absolute xy-center">
                            <div className="overflow-hidden text-center"><a href="/assets/images/thumb/width-15.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                            <div className="text-white text-center overflow-hidden"><a href="/gallery-detail.html" className="second-push-up transation text-white">Interiror design work</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                    <div className="entry-thumbnail-wrapper">
                      <div className="post-thumbnail overflow-hidden overlay-primary">
                        <img src="/assets/images/thumb/height-23.png" alt="Image not found !" />
                        <div className="position-absolute xy-center">
                          <div className="overflow-hidden text-center"><a href="/assets/images/thumb/height-23.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                          <div className="text-white text-center overflow-hidden"><a href="/gallery-detail.html" className="second-push-up transation text-white">Interiror design work</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row row-cols-1 g-0">
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail overflow-hidden overlay-primary">
                          <img src="/assets/images/thumb/height-24.png" alt="Image not found !" />
                          <div className="position-absolute xy-center">
                            <div className="overflow-hidden text-center"><a href="/assets/images/thumb/height-24.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                            <div className="text-white text-center overflow-hidden"><a href="/gallery-detail.html" className="second-push-up transation text-white">Interiror design work</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail overflow-hidden overlay-primary">
                          <img src="/assets/images/thumb/width-16.png" alt="Image not found !" />
                          <div className="position-absolute xy-center">
                            <div className="overflow-hidden text-center"><a href="/assets/images/thumb/width-16.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                            <div className="text-white text-center overflow-hidden"><a href="/gallery-detail.html" className="second-push-up transation text-white">Interiror design work</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row row-cols-1 g-0">
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail overflow-hidden overlay-primary">
                          <img src="/assets/images/thumb/width-17.png" alt="Image not found !" />
                          <div className="position-absolute xy-center">
                            <div className="overflow-hidden text-center"><a href="/assets/images/thumb/width-17.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                            <div className="text-white text-center overflow-hidden"><a href="/gallery-detail.html" className="second-push-up transation text-white">Interiror design work</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail overflow-hidden overlay-primary">
                          <img src="/assets/images/thumb/height-22.png" alt="Image not found !" />
                          <div className="position-absolute xy-center">
                            <div className="overflow-hidden text-center"><a href="/assets/images/thumb/height-22.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                            <div className="text-white text-center overflow-hidden"><a href="/gallery-detail.html" className="second-push-up transation text-white">Interiror design work</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Photo Gallery 2 Section End ==============================*/}
        {/*============================== Testimonial 2 Section Start ==============================*/}
        <div className="full-row overlay-secondary paraxify" style={{backgroundImage: 'url(/assets/images/background/1.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <span className="tagline text-primary text-center mb-10">What Client Says</span>
                <h2 className="down-line text-white text-center mb-30">Our Testimonial</h2>
                <span className="sub-title fs-18 ordinary-font fst-italic text-white text-center mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</span>
              </div>
            </div>
            <div className="row thumbnails entry-wrapper-bg-white owl-mx-4">
              <div className="col-md-12 col-sm-12">
                <div className="3block-carousel owl-carousel owl-nav-disable owl-dot-round owl-dot-bottom-center owl-dot-white owl-dot-active-pill-primary autoplay-off">
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column align-items-center text-center p-4">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail box-80 rounded-circle overflow-hidden">
                          <img src="/assets/images/avatar/1.png" alt="Avatar Image Not Found !" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-4">
                        <div className="entry-header">
                          <h4 className="entry-title mb-0">Astian Flakelar</h4>
                          <div className="mb-4"><span className="rank">CEO Gsm Group</span></div>
                        </div>
                        <div className="entry-content">
                          <p>Tempus varius. Velit sapien consequat egestas. Integer cursus habitasse dictum. Tristique vivamus hymenaeos. Mollis blandit lectus lectus enim sociis consequat. Rhoncus ipsum lectus Nec arcu. Feugiat, arcu quam
                            Ad.
                          </p>
                        </div>
                        <div className="entry-footer">
                          <div className="text-primary mt-4">
                            <span>Thank You</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column align-items-center text-center p-4">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail box-80 rounded-circle overflow-hidden">
                          <img src="/assets/images/avatar/2.png" alt="Avatar Image Not Found !" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-4">
                        <div className="entry-header">
                          <h4 className="entry-title mb-0">Hayden Dallachy</h4>
                          <div className="mb-4"><span className="rank">Human resources</span></div>
                        </div>
                        <div className="entry-content">
                          <p>Tempus varius. Velit sapien consequat egestas. Integer cursus habitasse dictum. Tristique vivamus hymenaeos. Mollis blandit lectus lectus enim sociis consequat. Rhoncus ipsum lectus Nec arcu. Feugiat, arcu quam
                            Ad.
                          </p>
                        </div>
                        <div className="entry-footer">
                          <div className="text-primary mt-4">
                            <span>Thank You</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column align-items-center text-center p-4">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail box-80 rounded-circle overflow-hidden">
                          <img src="/assets/images/avatar/3.png" alt="Avatar Image Not Found !" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-4">
                        <div className="entry-header">
                          <h4 className="entry-title mb-0">Human resources</h4>
                          <div className="mb-4"><span className="rank">Corporate secretary</span></div>
                        </div>
                        <div className="entry-content">
                          <p>Tempus varius. Velit sapien consequat egestas. Integer cursus habitasse dictum. Tristique vivamus hymenaeos. Mollis blandit lectus lectus enim sociis consequat. Rhoncus ipsum lectus Nec arcu. Feugiat, arcu quam
                            Ad.
                          </p>
                        </div>
                        <div className="entry-footer">
                          <div className="text-primary mt-4">
                            <span>Thank You</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column align-items-center text-center p-4">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail box-80 rounded-circle overflow-hidden">
                          <img src="/assets/images/avatar/4.png" alt="Avatar Image Not Found !" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-4">
                        <div className="entry-header">
                          <h4 className="entry-title mb-0">Claudia Harker</h4>
                          <div className="mb-4"><span className="rank">Human resources</span></div>
                        </div>
                        <div className="entry-content">
                          <p>Tempus varius. Velit sapien consequat egestas. Integer cursus habitasse dictum. Tristique vivamus hymenaeos. Mollis blandit lectus lectus enim sociis consequat. Rhoncus ipsum lectus Nec arcu. Feugiat, arcu quam
                            Ad.
                          </p>
                        </div>
                        <div className="entry-footer">
                          <div className="text-primary mt-4">
                            <span>Thank You</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Testimonial 2 Section End ==============================*/}
        {/*============================== Our Recent Post section start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <span className="tagline text-primary text-center mb-10 fw-400">Our Recent Post</span>
                <h2 className="down-line-primary text-secondary text-center mb-50">About Our Company Activities</h2>
              </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-5 blog-style-1 entry-meta-divider-line transition-all">
              <div className="col">
                <article className="entry-wrapper">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden overlay-secondary">
                      <a href="#"><img src="/assets/images/thumb/width-12.png" alt="Image not found !" /></a>
                      <div className="position-absolute xy-center overflow-hidden">
                        <a className="text-white first-push-up font-large" href="/news-details-left-sidebar.html">+</a>
                      </div>
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <div className="entry-meta text-uppercase fs-13">
                        <span className="author-link"><a href="#" className="text-light hover-text-primary">By Robert Haven</a></span>
                        <span className="posted-date"><a href="#" className="text-light hover-text-primary">Dec 25, 2019</a></span>
                      </div>
                      <h5 className="entry-title mb-3 ordinary-font fw-500"><a href="/news-details-left-sidebar.html" className="text-dark hover-text-primary">Our Latest Development Projects by More Efficient Developer</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus nullam tortor.</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col">
                <article className="entry-wrapper">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden overlay-secondary">
                      <a href="#"><img src="/assets/images/thumb/width-13.png" alt="Image not found !" /></a>
                      <div className="position-absolute xy-center overflow-hidden">
                        <a className="text-white first-push-up font-large" href="/news-details-left-sidebar.html">+</a>
                      </div>
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <div className="entry-meta text-uppercase fs-13">
                        <span className="author-link"><a href="#" className="text-light hover-text-primary">By Robert Haven</a></span>
                        <span className="posted-date"><a href="#" className="text-light hover-text-primary">Dec 25, 2019</a></span>
                      </div>
                      <h5 className="entry-title mb-3 ordinary-font fw-500"><a href="/news-details-left-sidebar.html" className="text-dark hover-text-primary">Our Latest Development Projects by More Efficient Developer</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus nullam tortor.</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col">
                <article className="entry-wrapper">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden overlay-secondary">
                      <a href="#"><img src="/assets/images/thumb/width-14.png" alt="Image not found !" /></a>
                      <div className="position-absolute xy-center overflow-hidden">
                        <a className="text-white first-push-up font-large" href="/news-details-left-sidebar.html">+</a>
                      </div>
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <div className="entry-meta text-uppercase fs-13">
                        <span className="author-link"><a href="#" className="text-light hover-text-primary">By Robert Haven</a></span>
                        <span className="posted-date"><a href="#" className="text-light hover-text-primary">Dec 25, 2019</a></span>
                      </div>
                      <h5 className="entry-title mb-3 ordinary-font fw-500"><a href="/news-details-left-sidebar.html" className="text-dark hover-text-primary">Our Latest Development Projects by More Efficient Developer</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus nullam tortor.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Our Recent Post section end ==============================*/}
        {/*============================== Footer 1 Section Start ==============================*/}
        <footer className="full-row bg-footer text-light">
          <div className="container">
            <div className="row row-cols-lg-3 row-cols-1 gy-5 xxs-link-single">
              <div className="col">
                <div className="footer-widget">
                  <div className="footer-logo mb-4">
                    <a href="#"><img src="/assets/images/logo/1.png" alt="Image not found!" /></a>
                  </div>
                  <p>Bibendum nisi, quam varius tristique, dictum lobortis, pellentesque donec purus eu facilisis suspendisse quie integer. Facilisis integer commodo ipsum congue noi adipiscing mi aliquet, fringilla quisque. Rhoncus porttitor feugiat
                    malesuada, luctus. Vel cum quisque id conubia curae; hymenaeos aenean mauris.</p>
                </div>
                <div className="footer-widget">
                  <div className="transparent-social-media-1 list-color-light hover-list-color-primary hyperlink-mr-20">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                    <a href="#"><i className="fab fa-google-plus" /></a>
                    <a href="#"><i className="fab fa-pinterest-p" /></a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-widget widget-link-double">
                  <h4 className="widget-title text-white mb-4">Page Links</h4>
                  <ul>
                    <li><a href="/about.html"><span className="text">About Company</span></a></li>
                    <li><a href="#"><span className="text">Payment System</span></a></li>
                    <li><a href="/terms-and-condition.html"><span className="text">Terms and Conditions</span></a></li>
                    <li><a href="/our-history.html"><span className="text">Company History</span></a></li>
                    <li><a href="#"><span className="text">Consultation</span></a></li>
                    <li><a href="/career.html"><span className="text">Careers</span></a></li>
                    <li><a href="/how-it-work.html"><span className="text">How It Work</span></a></li>
                    <li><a href="#"><span className="text">Event Coverage</span></a></li>
                    <li><a href="#"><span className="text">Emeargency Support</span></a></li>
                    <li><a href="#"><span className="text">Technology Support</span></a></li>
                    <li><a href="#"><span className="text">Guard Supply</span></a></li>
                    <li><a href="#"><span className="text">Trasted Partner</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="footer-widget widget-newsletter">
                  <h4 className="widget-title text-white mb-4">Newslatter</h4>
                  <p>Subscribe to our news and get most important industry news</p>
                  <div className="outline-form-style-1 newsletter-number mt-30">
                    <form className="form-outline square-shape" action="#" method="post">
                      <input type="text" className="form-control input-field bg-light" name="search" placeholder="Email Address" />
                      <button type="submit" name="submit" className="submit bg-primary">Subscribes</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*============================== Footer 1 Section End ==============================*/}
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
      {/* Javascripts */}
      {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) */}
    </>
  )
}
