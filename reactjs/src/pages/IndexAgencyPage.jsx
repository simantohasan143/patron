export default function IndexAgencyPage() {
  return (
    <>
      <div id="page-wrapper">
        {/*============================== Header Section Start ==============================*/}
        <header id="header" className="nav-on-banner">
          <div className="top-header d-none d-lg-block py-1 bg-transparent font-400">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 top-header-col">
                  <ul className="address-menu d-flex text-white gap-4">
                    <li className="d-flex align-items-center gap-1"><i className="fas fa-phone text-white" /> (+1) 828-376-0532</li>
                    <li className="d-flex align-items-center gap-1"><i className="fas fa-map-marker-alt text-white" /> 4214 Arlington Avenue Des Arc, Newyouk</li>
                  </ul>
                </div>
                <div className="col-lg-6 d-flex top-header-col justify-content-end align-items-center">
                  <div className="d-flex align-items-center justify-content-end gap-4">
                    <div className="dropdown">
                      <a href="#" className="dropdown-toggle text-white">Help and Support</a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/how-it-work.html">How It Work</a></li>
                        <li><a className="dropdown-item" href="/general-support.html">General Support</a></li>
                        <li><a className="dropdown-item" href="/help-center.html">Help Center</a></li>
                        <li><a className="dropdown-item" href="/support-article-details.html">Support Article</a></li>
                      </ul>
                    </div>
                    <div className="d-flex gap-1">
                      <div className="registration position-relative">
                        <div className="my-account-dropdown">
                          <a href="#" className="customer-signinup text-white hover-text-primary"><i className="flaticon-user-3 flat-15 me-1" />Register</a>
                        </div>
                      </div>
                      <div className="text-white">or</div>
                      <div className="my-account position-relative">
                        <div className="my-account-dropdown">
                          <a href="#" className="customer-signinup text-white hover-text-primary"><i className="flaticon-user-3 flat-15 me-1" />Sign In</a>
                        </div>
                      </div>
                    </div>
                    <div className="header-cart-1">
                      <a href="#" className="cart has-cart-data top-quantity d-flex gap-1 text-white" title="View Cart">
                        <div className="cart-icon"><i className="flaticon-shopping-cart flat-small text-white" /> <span className="header-cart-count">(4)</span></div>
                        <div className="cart-wrap">
                          <div className="cart-text">Cart</div>
                          <span className="header-cart-total d-none">
                            <span className="woocommerce-Price-amount amount">
                              <bdi><span className="woocommerce-Price-currencySymbol">$</span>260.00</bdi>
                            </span>
                          </span>
                        </div>
                      </a>
                      <div className="cart-popup transition-this">
                        <div className="widget_shopping_cart_content">
                          <ul className="cart_list woocommerce-mini-cart product_list_widget">
                            <li className="woocommerce-mini-cart-item mini_cart_item">
                              <a href="#" className="remove remove_from_cart_button" aria-label="Remove this item" data-product_id={2675} data-cart_item_key="a8aa681aaa4588a8dbd3b42b26d59a1a" data-product_sku>×</a>
                              <a className="mini_cart_item_image product-image bg-light" href="#">
                                <img src="/assets/images/products/1.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Image Not found !" /></a>
                              <a className="product-name" href="#">Women Side Bags</a>
                              <div className="variation">
                                <span>Vendor:</span>
                                <span><a href="#" rel="tag">Bags</a></span>
                              </div>
                              <div className="cart-item-quantity">
                                2 × <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>22.00</bdi>
                                </span>
                              </div>
                            </li>
                            <li className="woocommerce-mini-cart-item mini_cart_item">
                              <a href="#" className="remove remove_from_cart_button" aria-label="Remove this item" data-product_id={2673} data-cart_item_key="88fee0421317424e4469f33a48f50cb0" data-product_sku>×</a>
                              <a className="mini_cart_item_image product-image bg-light" href="#">
                                <img src="/assets/images/products/2.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Image Not found !" /> </a>
                              <a className="product-name" href="#">Lamp</a>
                              <div className="variation">
                                <span>Vendor:</span>
                                <span><a href="#" rel="tag">Lamp Shade</a></span>
                              </div>
                              <div className="cart-item-quantity">
                                2 × <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>108.00</bdi>
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="total-cart justify-content-between">
                            <strong>Subtotal:</strong> <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>260.00</bdi>
                            </span>
                          </div>
                          <div className="woocommerce-mini-cart__buttons buttons">
                            <a href="/cart.html" className="button wc-forward">View cart</a>
                            <a href="/checkout.html" className="button checkout wc-forward">Checkout</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-nav py-2 d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light text-uppercase nav-white nav-dark-hover nav-secondary-active">
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/logo-agency-white.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar-content" aria-controls="main-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="main-navbar-content">
                      <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link" href="/index-agency.html">Home</a>
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
                          <i className="toggle-icon fas fa-search text-white" />
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
          <div className="header-sticky bg-secondary py-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col">
                  <nav className="navbar navbar-expand-lg navbar-light text-uppercase nav-white nav-primary-hover nav-primary-active">
                    <a className="navbar-brand" href="/index-agency.html"><img className="nav-logo" src="/assets/images/logo/1.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sticky-navbar-content" aria-controls="sticky-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="sticky-navbar-content">
                      <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link" href="/index-agency.html">Home</a>
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
                          <i className="toggle-icon fas fa-search text-white" />
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
        <div className="full-row p-0" style={{backgroundImage: 'url("assets/images/slider/14.png")', backgroundSize: 'cover', backgroundPosition: 'bottom center'}}>
          <div className="container-fluid p-0">
            <div id="rev_slider_24_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="website-intro" data-source="gallery" style={{padding: 0}}>
              {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
              <div id="rev_slider_24_1" className="rev_slider fullscreenbanner tiny_bullet_slider" style={{display: 'none'}} data-version="5.4.1">
                <ul>
                  <li data-index="rs-67" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={600} data-rotate={0} data-saveperformance="off">
                    {/* LAYER NR. 15 */}
                    <div className="tp-caption tp-resizeme" id="slide-67-layer-2" data-x="['center','center','center','center']" data-hoffset="['1','1','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']" data-fontsize="['80','80','60','40']" data-lineheight="['90','90','70','50']" data-width="['none','none','481','360']" data-height="none" data-whitespace="['nowrap','nowrap','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 19, whiteSpace: 'nowrap', fontSize: 90, lineHeight: 90, fontWeight: 500, color: '#ffffff', letterSpacing: '-5px', fontFamily: 'Nova Square'}}>making your<br /> ideas possible. </div>
                    {/* LAYER NR. 16 */}
                    <div className="tp-caption   tp-resizeme" id="slide-67-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['90','90','60','30']" data-fontsize="['18','18','18','18']" data-lineheight="['35','35','35','30']" data-width="['680','580','480','360']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 20, minWidth: 480, maxWidth: 480, whiteSpace: 'normal', fontSize: 18, lineHeight: 35, fontWeight: 400, color: '#ffffff', letterSpacing: 0, fontFamily: 'Jost'}}>Digital business is changing the way organizations use and think about technology, moving technology from a supporting player.</div>
                    {/* LAYER NR. 17 */}
                    <a className="tp-caption rev-btn  tp-resizeme" href="#" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['200','200','160','120']" data-width={250} data-height="none" data-whitespace="nowrap" data-type="button" data-actions data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;fb:0;&quot;,&quot;style&quot;:&quot;c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[50,50,50,50]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[50,50,50,50]" style={{zIndex: 21, minWidth: 200, maxWidth: 200, whiteSpace: 'nowrap', fontSize: 17, lineHeight: 60, fontWeight: 400, color: 'rgba(255,255,255,1)', letterSpacing: 2, fontFamily: 'Jost', backgroundColor: '#181a1d', borderRadius: '30px 30px 30px 30px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}>GET STARTED </a>
                  </li>
                  {/* SLIDE  */}
                  <li data-index="rs-66" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={600}>
                    {/* LAYER NR. 32 */}
                    <div className="tp-caption   tp-resizeme" id="slide-66-layer-2" data-x="['center','center','center','center']" data-hoffset="['1','1','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']" data-fontsize="['80','80','60','40']" data-lineheight="['90','90','70','50']" data-width="['none','none','481','360']" data-height="none" data-whitespace="['nowrap','nowrap','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 19, whiteSpace: 'nowrap', fontSize: 90, lineHeight: 90, fontWeight: 500, color: '#ffffff', letterSpacing: '-5px', fontFamily: 'Nova Square'}}>best agencies choose <br />their clients</div>
                    {/* LAYER NR. 33 */}
                    <div className="tp-caption   tp-resizeme" id="slide-66-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['90','90','60','30']" data-fontsize="['18','18','18','18']" data-lineheight="['35','35','35','30']" data-width="['680','580','480','360']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 20, minWidth: 480, maxWidth: 480, whiteSpace: 'normal', fontSize: 18, lineHeight: 35, fontWeight: 400, color: '#ffffff', letterSpacing: 0, fontFamily: 'Jost'}}>Digital business is changing the way organizations use and think about technology, moving technology from a supporting player.</div>
                    {/* LAYER NR. 34 */}
                    <a className="tp-caption rev-btn  tp-resizeme" href="#" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['200','200','160','120']" data-width={250} data-height="none" data-whitespace="nowrap" data-type="button" data-actions data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;fb:0;&quot;,&quot;style&quot;:&quot;c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[50,50,50,50]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[50,50,50,50]" style={{zIndex: 21, minWidth: 200, maxWidth: 200, whiteSpace: 'nowrap', fontSize: 17, lineHeight: 60, fontWeight: 400, color: 'rgba(255,255,255,1)', letterSpacing: 2, fontFamily: 'Jost', backgroundColor: '#181a1d', borderRadius: '30px 30px 30px 30px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}>GET STARTED</a>
                  </li>
                  {/* SLIDE  */}
                  <li data-index="rs-68" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={600}>
                    {/* LAYER NR. 49 */}
                    <div className="tp-caption   tp-resizeme" id="slide-68-layer-2" data-x="['center','center','center','center']" data-hoffset="['1','1','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-70','-70','-70','-70']" data-fontsize="['80','80','60','40']" data-lineheight="['90','90','70','50']" data-width="['none','none','481','360']" data-height="none" data-whitespace="['nowrap','nowrap','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 19, whiteSpace: 'nowrap', fontSize: 90, lineHeight: 90, fontWeight: 500, color: '#ffffff', letterSpacing: '-5px', fontFamily: 'Nova Square'}}>experience the<br /> revolution
                    </div>
                    {/* LAYER NR. 50 */}
                    <div className="tp-caption   tp-resizeme" id="slide-68-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['90','90','60','30']" data-fontsize="['18','18','18','18']" data-lineheight="['35','35','35','30']" data-width="['680','580','480','360']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 20, minWidth: 480, maxWidth: 480, whiteSpace: 'normal', fontSize: 18, lineHeight: 35, fontWeight: 400, color: '#ffffff', letterSpacing: 0, fontFamily: 'Jost'}}>Digital business is changing the way organizations use and think about technology, moving technology from a supporting player.</div>
                    {/* LAYER NR. 51 */}
                    <a className="tp-caption rev-btn  tp-resizeme" href="#" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['200','200','160','120']" data-width={250} data-height="none" data-whitespace="nowrap" data-type="button" data-actions data-responsive_offset="on" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;sX:0.9;sY:0.9;opacity:0;fb:20px;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;fb:0;&quot;,&quot;style&quot;:&quot;c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[50,50,50,50]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[50,50,50,50]" style={{zIndex: 21, minWidth: 200, maxWidth: 200, whiteSpace: 'nowrap', fontSize: 17, lineHeight: 60, fontWeight: 400, color: 'rgba(255,255,255,1)', letterSpacing: 2, fontFamily: 'Jost', backgroundColor: '#181a1d', borderRadius: '30px 30px 30px 30px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}>GET STARTED</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* END REVOLUTION SLIDER */}
          </div>
        </div>
        {/*============================== Slider Section End ==============================*/}
        {/*============================== About company Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-4 d-none d-lg-block">
                <div className="position-relative">
                  <img src="/assets/images/thumb/height-2.png" alt="image not found!" />
                  <img className="position-absolute" src="/assets/images/thumb/height-3.png" alt="image not found!" style={{width: 370, right: '-150px', top: 100}} />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-2 col-md-12">
                <span className="tagline text-primary mb-10">About Our Company</span>
                <h2 className="down-line text-secondary mb-30 ">We Have 15 Years of Experience on People Self Dependence Training</h2>
                <p>Nascetur eleifend curabitur bibendum bibendum auctor tellus magna aenean condimentum erat. Auctor libero Tristique maecenas elit sit nostra est turpis ridiculus nulla parturient potenti sem taciti felis auctor turpis eget feugiat
                  torquent leo conubia interdum, neque senectus ornare massa. Pellentesque montes vitae taciti porta sociosqu cras suscipit sapien dapibus eget.</p>
                <q className="highlight-font d-block fs-18 text-secondary mt-30">Quisque quis platea sed. Facilisi erat nisi sodales lacinia phasellus diam ullamcorper habitasse, lacus mi. Urna porttitor. Laoreet nullam tempor nascetur proin libero ac turpis molestie torquent sagittis Duis diam viverra tristique.</q>
                <div className="d-flex mt-40">
                  <div className="image-wrap box-50 rounded-circle me-3">
                    <img src="/assets/images/avatar/1.png" alt="Avatar Image !" />
                  </div>
                  <div className="content">
                    <h5 className="text-primary mb-0">Johone Doe</h5>
                    <span>Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== About company Section End ==============================*/}
        {/*============================== Our Offer Section Start ==============================*/}
        <div className="full-row bg-secondary p-0" style={{marginTop: 130}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="bg-dark text-light p-35" style={{marginTop: '-50px'}}>
                  <span className="tagline text-primary mb-10">What We Offer</span>
                  <h2 className="down-line text-white mb-30 ">Our Services</h2>
                  <p>Est scelerisque bibendum. Erat netus nunc magnis etiam cubilia ridiculus urna viverra. Eu. Molestie Dignissim. Pharetra lacus fringilla quis vivamus. Aliquet taciti tempor Leo eu nascetur magna inceptos quam magnis, penatibus
                    dignissim.
                  </p>
                  <p>Ridiculus nonummy ligula cras penatibus convallis cum, tellus etiam maecenas conubia. Lorem eros imperdiet per vehicula nec. Nam sociis sit mi Mollis interdum taciti nascetur. Lacus proin adipiscing elementum. Nonummy nonummy.
                    Ante sollicitudin at lectus platea magna tempor elit primis cubilia. Tempus dignissim dictum turpis porta.</p>
                  <a href="#" className="btn btn-primary rounded-0 mt-40">Request Quote</a>
                </div>
              </div>
              <div className="col-lg-8 py-8">
                <div className="row row-cols-md-2 row-cols-1 gy-4 entry-wrapper-bg-white">
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4">
                      <div className="entry-thumbnail-wrapper me-3">
                        <div className="post-thumbnail overflow-hidden">
                          <i className="icon flaticon-lock-1 flat-45 text-primary" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper">
                        <div className="entry-header">
                          <h4 className="entry-title mb-3"><a className="text-secondary" href="/service-details.html">Home Security</a></h4>
                        </div>
                        <div className="entry-content">
                          <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                        </div>
                        <div className="entry-footer">
                          <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4">
                      <div className="entry-thumbnail-wrapper me-3">
                        <div className="post-thumbnail overflow-hidden">
                          <i className="icon flaticon-servers flat-45 text-primary" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper">
                        <div className="entry-header">
                          <h4 className="entry-title mb-3"><a className="text-secondary" href="/service-details.html">Cloud Security</a></h4>
                        </div>
                        <div className="entry-content">
                          <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                        </div>
                        <div className="entry-footer">
                          <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4">
                      <div className="entry-thumbnail-wrapper me-3">
                        <div className="post-thumbnail overflow-hidden">
                          <i className="icon flaticon-online-booking flat-45 text-primary" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper">
                        <div className="entry-header">
                          <h4 className="entry-title mb-3"><a className="text-secondary" href="/service-details.html">Office Security</a></h4>
                        </div>
                        <div className="entry-content">
                          <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                        </div>
                        <div className="entry-footer">
                          <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4">
                      <div className="entry-thumbnail-wrapper me-3">
                        <div className="post-thumbnail overflow-hidden">
                          <i className="icon flaticon-software flat-45 text-primary" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper">
                        <div className="entry-header">
                          <h4 className="entry-title mb-3"><a className="text-secondary" href="/service-details.html">Computer Security</a></h4>
                        </div>
                        <div className="entry-content">
                          <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                        </div>
                        <div className="entry-footer">
                          <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4">
                      <div className="entry-thumbnail-wrapper me-3">
                        <div className="post-thumbnail overflow-hidden">
                          <i className="icon flaticon-security flat-45 text-primary" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper">
                        <div className="entry-header">
                          <h4 className="entry-title mb-3"><a className="text-secondary" href="/service-details.html">Body Guard</a></h4>
                        </div>
                        <div className="entry-content">
                          <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                        </div>
                        <div className="entry-footer">
                          <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4">
                      <div className="entry-thumbnail-wrapper me-3">
                        <div className="post-thumbnail overflow-hidden">
                          <i className="icon flaticon-fingerprint-with-crosshair-focus flat-45 text-primary" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper">
                        <div className="entry-header">
                          <h4 className="entry-title mb-3"><a className="text-secondary" href="/service-details.html">Biometric</a></h4>
                        </div>
                        <div className="entry-content">
                          <p>Habitant dictum metus rhoncus vitae ac ad litora etiam. Ante elementum vivamus integer tent.</p>
                        </div>
                        <div className="entry-footer">
                          <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Our Offer Section End ==============================*/}
        {/*============================== Why choose us Section Start ==============================*/}
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="tagline text-primary text-center mb-10">Let's Know</span>
                <h2 className="down-line-primary text-secondary text-center mb-30">Why Choose Us</h2>
                <span className="sub-title fs-18 ordinary-font fst-italic text-general text-center mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</span>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row gy-5 justify-content-center">
              <div className="col-xxl-3 col-lg-6 text-end pt-xxl-5">
                <div className="d-flex mb-30">
                  <div className="pe-3">
                    <h4 className="mb-3"><a href="#">100% Organic Product</a></h4>
                    <p>Donec iaculis suspendisse taciti erat fermentum nunc mauris semper auctor. Purus justo aliquam placerat proin dapibus nibh montes morbi faucibus senectus elementum rhoncus platea nec enim senectus ad bibendum cursus vestibulum.</p>
                  </div>
                  <span className="d-table text-primary mt-2 far fa-circle" />
                </div>
                <div className="d-flex mb-30">
                  <div className="pe-3">
                    <h4 className="mb-3"><a href="#">Effective Treatment and Tips</a></h4>
                    <p>Donec iaculis suspendisse taciti erat fermentum nunc mauris semper auctor. Purus justo aliquam placerat proin dapibus nibh montes morbi faucibus senectus elementum rhoncus platea nec enim senectus ad bibendum cursus vestibulum.</p>
                  </div>
                  <span className="d-table text-primary mt-2 far fa-circle" />
                </div>
                <div className="d-flex mb-30">
                  <div className="pe-3">
                    <h4 className="mb-3"><a href="#">Modern Technology</a></h4>
                    <p>Donec iaculis suspendisse taciti erat fermentum nunc mauris semper auctor. Purus justo aliquam placerat proin dapibus nibh montes morbi faucibus senectus elementum rhoncus platea nec enim senectus ad bibendum cursus vestibulum.</p>
                  </div>
                  <span className="d-table text-primary mt-2 far fa-circle" />
                </div>
              </div>
              <div className="col-xxl-3 d-none d-xxl-block">
                <img src="/assets/images/thumb/height-4.png" alt="Security Man !" />
              </div>
              <div className="col-xxl-3 col-lg-6 text-start pt-xxl-5">
                <div className="d-flex mb-30">
                  <span className="d-table text-primary mt-2 far fa-circle" />
                  <div className="ps-3">
                    <h4 className="mb-3"><a href="#">Save Monety and Time</a></h4>
                    <p>Donec iaculis suspendisse taciti erat fermentum nunc mauris semper auctor. Purus justo aliquam placerat proin dapibus nibh montes morbi faucibus senectus elementum rhoncus platea nec enim senectus ad bibendum cursus vestibulum.</p>
                  </div>
                </div>
                <div className="d-flex mb-30">
                  <span className="d-table text-primary mt-2 far fa-circle" />
                  <div className="ps-3">
                    <h4 className="mb-3"><a href="#">Yearly Membership</a></h4>
                    <p>Donec iaculis suspendisse taciti erat fermentum nunc mauris semper auctor. Purus justo aliquam placerat proin dapibus nibh montes morbi faucibus senectus elementum rhoncus platea nec enim senectus ad bibendum cursus vestibulum.</p>
                  </div>
                </div>
                <div className="d-flex mb-30">
                  <span className="d-table text-primary mt-2 far fa-circle" />
                  <div className="ps-3">
                    <h4 className="mb-3"><a href="#">Get Our Special Product</a></h4>
                    <p>Donec iaculis suspendisse taciti erat fermentum nunc mauris semper auctor. Purus justo aliquam placerat proin dapibus nibh montes morbi faucibus senectus elementum rhoncus platea nec enim senectus ad bibendum cursus vestibulum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Why choose us Section End ==============================*/}
        {/*============================== Achievement 2 Section Start ==============================*/}
        <div className="full-row bg-dark">
          <div className="container">
            <div className="row row-cols-xl-4 row-cols-sm-2 row-cols-1 gy-5 fact-counter achievement-style-2">
              <div className="col">
                <div className="count wow animate__animated animate__fadeInRight" data-wow-delay="200ms" data-wow-duration="900ms">
                  <span className="count-num text-primary h2" data-speed={3000} data-stop={2300}>0</span>
                  <div className="h4 position-absolute text-white bg-dark y-center">Happy<br />Clients</div>
                </div>
              </div>
              <div className="col">
                <div className="count wow animate__animated animate__fadeInRight" data-wow-delay="400ms" data-wow-duration="900ms">
                  <span className="count-num text-primary h2" data-speed={3000} data-stop={300}>0</span>
                  <div className="h4 position-absolute text-white bg-dark y-center">Qualified<br />Employee</div>
                </div>
              </div>
              <div className="col">
                <div className="count wow animate__animated animate__fadeInRight" data-wow-delay="600ms" data-wow-duration="900ms">
                  <span className="count-num text-primary h2" data-speed={3000} data-stop={2100}>0</span>
                  <div className="h4 position-absolute text-white bg-dark y-center">Deal<br />Assigned</div>
                </div>
              </div>
              <div className="col">
                <div className="count wow animate__animated animate__fadeInRight" data-wow-delay="800ms" data-wow-duration="900ms">
                  <span className="count-num text-primary h2" data-speed={3000} data-stop={20}>0</span>
                  <div className="h4 position-absolute text-white bg-dark y-center">Years of<br />Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Achievement 2 Section End ==============================*/}
        {/*============================== Team 1 Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="tagline text-primary text-center mb-10">Our Experience</span>
                <h2 className="down-line-primary text-secondary text-center mb-30">Team Leaders</h2>
                <span className="sub-title fs-18 ordinary-font fst-italic text-general text-center mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</span>
              </div>
            </div>
            <div className="row team-style-1 owl-mx-4">
              <div className="col-lg-12">
                <div className="owl-carousel 4block-carousel owl-nav-disable autoplay-on owl-dot-bottom-center owl-dot-round owl-dot-active-pill-primary">
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column align-items-center text-center transition-all">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail overflow-hidden overlay-primary">
                          <img src="/assets/images/thumb/height-7.png" alt="Image not found !" />
                          <div className="position-absolute xy-center w-100 p-4">
                            <h6 className="text-center overflow-hidden"><a className="text-white first-push-up" href="/profile-details.html">Dylan Nevile</a></h6>
                            <div className="text-white text-center overflow-hidden"><span className="second-push-up">( Apartment Manager )</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-20">
                        <div className="entry-header">
                          <h5 className="entry-title mb-0"><a className="text-secondary hover-text-primary" href="/profile-details.html">Dylan Nevile</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column align-items-center text-center transition-all">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail overflow-hidden overlay-primary">
                          <img src="/assets/images/thumb/height-8.png" alt="Image not found !" />
                          <div className="position-absolute xy-center w-100 p-4">
                            <h6 className="text-center overflow-hidden"><a className="text-white first-push-up" href="/profile-details.html">Brianna Stapleton</a></h6>
                            <div className="text-white text-center overflow-hidden"><span className="second-push-up">( Apartment Manager )</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-20">
                        <div className="entry-header">
                          <h5 className="entry-title mb-0"><a className="text-secondary hover-text-primary" href="/profile-details.html">Brianna Stapleton</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column align-items-center text-center transition-all">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail overflow-hidden overlay-primary">
                          <img src="/assets/images/thumb/height-9.png" alt="Image not found !" />
                          <div className="position-absolute xy-center w-100 p-4">
                            <h6 className="text-center overflow-hidden"><a className="text-white first-push-up" href="/profile-details.html">Flynn Crossley</a></h6>
                            <div className="text-white text-center overflow-hidden"><span className="second-push-up">( Apartment Manager )</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-20">
                        <div className="entry-header">
                          <h5 className="entry-title mb-0"><a className="text-secondary hover-text-primary" href="/profile-details.html">Flynn Crossley</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column align-items-center text-center transition-all">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail overflow-hidden overlay-primary">
                          <img src="/assets/images/thumb/height-10.png" alt="Image not found !" />
                          <div className="position-absolute xy-center w-100 p-4">
                            <h6 className="text-center overflow-hidden"><a className="text-white first-push-up" href="/profile-details.html">Sebastian Flakelar</a></h6>
                            <div className="text-white text-center overflow-hidden"><span className="second-push-up">( Apartment Manager )</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-20">
                        <div className="entry-header">
                          <h5 className="entry-title mb-0"><a className="text-secondary hover-text-primary" href="/profile-details.html">Sebastian Flakelar</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column align-items-center text-center transition-all">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail overflow-hidden overlay-primary">
                          <img src="/assets/images/thumb/height-11.png" alt="Image not found !" />
                          <div className="position-absolute xy-center w-100 p-4">
                            <h6 className="text-center overflow-hidden"><a className="text-white first-push-up" href="/profile-details.html">Hayden Riordan</a></h6>
                            <div className="text-white text-center overflow-hidden"><span className="second-push-up">( Apartment Manager )</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-20">
                        <div className="entry-header">
                          <h5 className="entry-title mb-0"><a className="text-secondary hover-text-primary" href="/profile-details.html">Hayden Riordan</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Team 1 Section End ==============================*/}
        {/*============================== Banner Section Start ==============================*/}
        <div className="full-row overlay-primary paraxify" style={{backgroundImage: 'url(/assets/images/background/3.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center text-white">
                  <h1 className="text-white mb-4">"We Provide Most Effective and Trusted Security Service"</h1>
                  <p>You can call us on (+1) 870-256-2346 to discuss your security requirement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Banner Section End ==============================*/}
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
                      <div className="entry-meta text-uppercase fs-12">
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
                      <div className="entry-meta text-uppercase fs-12">
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
                      <div className="entry-meta text-uppercase fs-12">
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
