export default function About3Page() {
  return (
    <>
      <div id="page-wrapper">
        {/*============================== Header Section Start ==============================*/}
        <header id="header" className="nav-on-banner">
          <div className="top-header d-none d-lg-block py-10 bg-transparent font-400">
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
          <div className="header-sticky bg-dark py-10">
            <div className="container">
              <div className="row align-items-center">
                <div className="col">
                  <nav className="navbar navbar-expand-lg navbar-light nav-white nav-primary-hover nav-primary-active">
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/1.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sticky-navbar-content" aria-controls="sticky-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="sticky-navbar-content">
                      <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link" href="/index.html">Home</a>
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
        </header>
        {/*============================== Header Section End ==============================*/}
        {/*============================== Page Banner 1 Section Start ==============================*/}
        <div id="page-banner" className="title-text-dark title-large overlay-secondary" style={{backgroundImage: 'url(/assets/images/background/8.png)', backgroundRepeat: 'repeat', backgroundSize: '100%'}}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-column align-items-center position-relative z-inded-9 gap-3 py-80">
                  <div className="title-wrap">
                    <h1 className="page-title text-white mb-0">About Us</h1>
                  </div>
                  <nav>
                    <ol className="breadcrumb mb-0 greater-than list-color-white">
                      <li className="breadcrumb-item"><a href="/index-security.html" className="text-secondary hover-text-primary">Home</a></li>
                      <li className="breadcrumb-item"><span style={{color: '#a5a5a5'}} className="last">About 2</span></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Page Banner 1 Section End ==============================*/}
        {/*============================== Our Project Section Start ==============================*/}
        <div className="full-row pb-0">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-5 col-md-12">
                <span className="tagline text-primary mb-10">About Us</span>
                <h2 className="text-dark mb-30">We are the winning hosting technology</h2>
                <p>Dis gravida metus. Scelerisque nulla torquent varius aliquam massa etiam. Consequat viv amus taciti aenean netus at metus integer posuere ultrices praesent ullamcorper taciti natoque curabitur.</p>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-6">
                <div className="entry-wrapper d-flex flex-column align-items-center justify-content-start text-center transition-all p-4 shadow-sm">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <img src="/assets/images/icon/15.png" alt />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title text-secondary mb-4">Our Vision</h4>
                    </div>
                    <div className="entry-content">
                      <p>Dis gravida metus. Scelerisque nulla torquent varius aliquam massa etiam. Consequat viv amus taciti aenean.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="entry-wrapper d-flex flex-column align-items-center justify-content-start text-center transition-all p-4 shadow-sm">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <img src="/assets/images/icon/16.png" alt />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title text-secondary mb-4">Our Mission</h4>
                    </div>
                    <div className="entry-content">
                      <p>Dis gravida metus. Scelerisque nulla torquent varius aliquam massa etiam. Consequat viv amus taciti aenean.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gallery-style-1 g-4 mt-50">
              <div className="col-lg-4">
                <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden overlay-primary">
                      <img src="/assets/images/thumb/height-28.png" alt="Image not found !" />
                      <div className="position-absolute xy-center">
                        <div className="overflow-hidden"><a href="/assets/images/thumb/height-28.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex flex-column gap-4">
                  <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                    <div className="entry-thumbnail-wrapper">
                      <div className="post-thumbnail overflow-hidden overlay-primary">
                        <img src="/assets/images/thumb/square-2.png" alt="Image not found !" />
                        <div className="position-absolute xy-center">
                          <div className="overflow-hidden"><a href="/assets/images/thumb/square-2.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                    <div className="entry-thumbnail-wrapper">
                      <div className="post-thumbnail overflow-hidden overlay-primary">
                        <img src="/assets/images/thumb/square-3.png" alt="Image not found !" />
                        <div className="position-absolute xy-center">
                          <div className="overflow-hidden"><a href="/assets/images/thumb/square-3.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden overlay-primary">
                      <img src="/assets/images/thumb/height-29.png" alt="Image not found !" />
                      <div className="position-absolute xy-center">
                        <div className="overflow-hidden"><a href="/assets/images/thumb/height-29.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden overlay-primary">
                      <img src="/assets/images/thumb/width-31.png" alt="Image not found !" />
                      <div className="position-absolute xy-center">
                        <div className="overflow-hidden"><a href="/assets/images/thumb/width-31.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="entry-wrapper d-flex flex-column align-items-center transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden overlay-primary">
                      <img src="/assets/images/thumb/width-32.png" alt="Image not found !" />
                      <div className="position-absolute xy-center">
                        <div className="overflow-hidden"><a href="/assets/images/thumb/width-32.png" className="first-push-up" data-fancybox="images" data-caption="Caption for single image"><span className="flaticon-zoom-in flat-30 text-white" /></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Our Project Section End ==============================*/}
        {/*============================== Our story every year Section Start ==============================*/}
        <div className="full-row pb-0" style={{background: 'url(/assets/images/shape/3.png) no-repeat left bottom / 35%'}}>
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-6">
                <div className="bg-white text-general">
                  <span className="tagline text-primary pb-2">Our story every year</span>
                  <h2 className="text-dark mb-4">We are the winning hosting technology</h2>
                  <p>Dis gravida metus. Scelerisque nulla torquent varius aliquam massa etiam. Consequat viv amus taciti aenean netus at metus integer posuere ultrices praesent ullamcorper taciti natoque curabitur.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">2012</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">International Coverage</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                  </div>
                </div>
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">2013</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">Making Some Rules</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                  </div>
                </div>
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">2015</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">Birth of The Firm</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                  </div>
                </div>
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">2010</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">Standing Strong Today</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                  </div>
                </div>
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">2012</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">International Coverage</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                  </div>
                </div>
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">2013</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">Making Some Rules</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                  </div>
                </div>
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">2015</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">Birth of The Firm</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Our story every year Section End ==============================*/}
        {/*============================== Team Member Section Start ==============================*/}
        <div className="full-row bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 wow animate__ animated animate__fadeIn" data-wow-delay="100ms" data-wow-duration="1000ms">
                <span className="tagline text-uppercase text-primary text-center mb-10 fw-600">Leadership Team</span>
                <h2 className="text-secondary text-center mb-30">Brings company big together</h2>
                <span className="sub-title fs-15 ordinary-font fst-normal text-general text-center mb-40">No success company without amazing people around there. We have hosting heroes who are passionate about technology and using it to drive innovation for hosting services.</span>
              </div>
            </div>
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 team-style-3 entry-wrapper-bg-white justify-content-center">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper position-relative">
                    <div className="post-thumbnail box-100 rounded-circle overflow-hidden">
                      <img src="/assets/images/thumb/height-7.png" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <h6 className="entry-title mb-1"><a className="text-secondary hover-text-primary" href="/profile-details.html">Dylan Nevile</a></h6>
                      <span className="fs-14 text-general">Plugins Expert</span>
                    </div>
                    <div className="entry-content">
                      <div className="transparent-social-media-1 hyperlink-mr-10">
                        <a href="#" style={{color: '#0A8DAE'}}><i className="fab fa-facebook-f" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper position-relative">
                    <div className="post-thumbnail box-100 rounded-circle overflow-hidden">
                      <img src="/assets/images/thumb/height-8.png" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <h6 className="entry-title mb-1"><a className="text-secondary hover-text-primary" href="/profile-details.html">Brianna Stapleton</a></h6>
                      <span className="fs-14 text-general">WordPress Guru</span>
                    </div>
                    <div className="entry-content">
                      <div className="transparent-social-media-1 hyperlink-mr-10">
                        <a href="#" style={{color: '#39BEE1'}}><i className="fab fa-twitter" /></a>
                        <a href="#" style={{color: '#EE1F3B'}}><i className="fab fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper position-relative">
                    <div className="post-thumbnail box-100 rounded-circle overflow-hidden">
                      <img src="/assets/images/thumb/height-9.png" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <h6 className="entry-title mb-1"><a className="text-secondary hover-text-primary" href="/profile-details.html">Flynn Crossley</a></h6>
                      <span className="fs-14 text-general">Themes Expert</span>
                    </div>
                    <div className="entry-content">
                      <div className="transparent-social-media-1 hyperlink-mr-10">
                        <a href="#" style={{color: '#0A8DAE'}}><i className="fab fa-facebook-f" /></a>
                        <a href="#" style={{color: '#39BEE1'}}><i className="fab fa-twitter" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper position-relative">
                    <div className="post-thumbnail box-100 rounded-circle overflow-hidden">
                      <img src="/assets/images/thumb/height-10.png" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <h6 className="entry-title mb-1"><a className="text-secondary hover-text-primary" href="/profile-details.html">Sebastian Flakelar</a></h6>
                      <span className="fs-14 text-general">WordPress Guru</span>
                    </div>
                    <div className="entry-content">
                      <div className="transparent-social-media-1 hyperlink-mr-10">
                        <a href="#" style={{color: '#1389B7'}}><i className="fab fa-linkedin-in" /></a>
                        <a href="#" style={{color: '#EE1F3B'}}><i className="fab fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper position-relative">
                    <div className="post-thumbnail box-100 rounded-circle overflow-hidden">
                      <img src="/assets/images/thumb/height-11.png" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <h6 className="entry-title mb-1"><a className="text-secondary hover-text-primary" href="/profile-details.html">Oliver Young</a></h6>
                      <span className="fs-14 text-general">Plugins Expert</span>
                    </div>
                    <div className="entry-content">
                      <div className="transparent-social-media-1 hyperlink-mr-10">
                        <a href="#" style={{color: '#0A8DAE'}}><i className="fab fa-facebook-f" /></a>
                        <a href="#" style={{color: '#EE4772'}}><i className="fab fa-youtube" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper position-relative">
                    <div className="post-thumbnail box-100 rounded-circle overflow-hidden">
                      <img src="/assets/images/thumb/height-12.png" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <h6 className="entry-title mb-1"><a className="text-secondary hover-text-primary" href="/profile-details.html">Bryan James</a></h6>
                      <span className="fs-14 text-general">Themes Expert</span>
                    </div>
                    <div className="entry-content">
                      <div className="transparent-social-media-1 hyperlink-mr-10">
                        <a href="#" style={{color: '#39BEE1'}}><i className="fab fa-twitter" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper position-relative">
                    <div className="post-thumbnail box-100 rounded-circle overflow-hidden">
                      <img src="/assets/images/thumb/height-13.png" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <h6 className="entry-title mb-1"><a className="text-secondary hover-text-primary" href="/profile-details.html">Dylan Nevile</a></h6>
                      <span className="fs-14 text-general">Plugins Expert</span>
                    </div>
                    <div className="entry-content">
                      <div className="transparent-social-media-1 hyperlink-mr-10">
                        <a href="#" style={{color: '#0A8DAE'}}><i className="fab fa-facebook-f" /></a>
                        <a href="#" style={{color: '#EE1F3B'}}><i className="fab fa-instagram" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper position-relative">
                    <div className="post-thumbnail box-100 rounded-circle overflow-hidden">
                      <img src="/assets/images/thumb/height-14.png" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <h6 className="entry-title mb-1"><a className="text-secondary hover-text-primary" href="/profile-details.html">Brianna Stapleton</a></h6>
                      <span className="fs-14 text-general">WordPress Guru</span>
                    </div>
                    <div className="entry-content">
                      <div className="transparent-social-media-1 hyperlink-mr-10">
                        <a href="#" style={{color: '#39BEE1'}}><i className="fab fa-twitter" /></a>
                        <a href="#" style={{color: '#EE4772'}}><i className="fab fa-youtube" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper position-relative">
                    <div className="post-thumbnail box-100 rounded-circle overflow-hidden">
                      <img src="/assets/images/thumb/height-15.png" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <h6 className="entry-title mb-1"><a className="text-secondary hover-text-primary" href="/profile-details.html">Flynn Crossley</a></h6>
                      <span className="fs-14 text-general">Themes Expert</span>
                    </div>
                    <div className="entry-content">
                      <div className="transparent-social-media-1 hyperlink-mr-10">
                        <a href="#" style={{color: '#0A8DAE'}}><i className="fab fa-facebook-f" /></a>
                        <a href="#" style={{color: '#39BEE1'}}><i className="fab fa-twitter" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper position-relative">
                    <div className="post-thumbnail box-100 rounded-circle overflow-hidden">
                      <img src="/assets/images/thumb/height-16.png" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-3">
                    <div className="entry-header">
                      <h6 className="entry-title mb-1"><a className="text-secondary hover-text-primary" href="/profile-details.html">Sebastian Flakelar</a></h6>
                      <span className="fs-14 text-general">WordPress Guru</span>
                    </div>
                    <div className="entry-content">
                      <div className="transparent-social-media-1 hyperlink-mr-10">
                        <a href="#" style={{color: '#1389B7'}}><i className="fab fa-linkedin-in" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column justify-content-center align-items-center text-center p-40 transition-all">
                  <span className="plus xy-center position-absolute" />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <a href="#" className="btn btn-outline-primary hover-text-primary rounded-pill d-table mx-auto">We're hiring. See our job openings.</a>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Team Member Section End ==============================*/}
        {/*============================== Offices Section Start ==============================*/}
        <div className="full-row gradient-bg-10">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 wow animate__ animated animate__fadeIn" data-wow-delay="100ms" data-wow-duration="1000ms">
                <span className="tagline text-uppercase text-white text-center mb-10 fw-600">Offices</span>
                <h2 className="text-white text-center mb-30">We have offices all over the globe</h2>
                <span className="sub-title fs-15 ordinary-font fst-normal text-white text-center mb-50">No success company without amazing people around there. We have hosting heroes who are passionate about technology and using it to drive innovation for hosting services.</span>
              </div>
            </div>
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-4 justify-content-center entry-wrapper-bg-white">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center rounded-20 p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <img src="/assets/images/icon/23.png" alt="Icon not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary hover-text-primary" href="#">New York</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>20 North Street, 10th floor New York, NY 20021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center rounded-20 p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <img src="/assets/images/icon/22.png" alt="Icon not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary hover-text-primary" href="#">London</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>20 North Street, 10th floor New York, NY 20021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center rounded-20 p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <img src="/assets/images/icon/24.png" alt="Icon not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary hover-text-primary" href="#">Paris</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>20 North Street, 10th floor New York, NY 20021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center rounded-20 p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <img src="/assets/images/icon/19.png" alt="Icon not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary hover-text-primary" href="#">Rome</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>20 North Street, 10th floor New York, NY 20021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center rounded-20 p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <img src="/assets/images/icon/20.png" alt="Icon not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary hover-text-primary" href="#">Athena</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>20 North Street, 10th floor New York, NY 20021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center rounded-20 p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <img src="/assets/images/icon/21.png" alt="Icon not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary hover-text-primary" href="#">Moscow</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>20 North Street, 10th floor New York, NY 20021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center rounded-20 p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <img src="/assets/images/icon/25.png" alt="Icon not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary hover-text-primary" href="#">Washington</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>20 North Street, 10th floor New York, NY 20021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <a href="#" className="btn btn-primary hover-text-primary rounded-pill d-table mx-auto">We're hiring. See our job openings.</a>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Offices Section End ==============================*/}
        {/*============================== Blog Section Start ==============================*/}
        <div className="full-row bg-white pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 wow animate__ animated animate__fadeIn" data-wow-delay="100ms" data-wow-duration="1000ms">
                <span className="tagline text-uppercase text-primary text-center mb-10 fw-600">Blog Post</span>
                <h2 className="text-secondary text-center mb-30">Check out our blog post everyday</h2>
                <span className="sub-title fs-15 ordinary-font fst-normal text-general text-center mb-40">We write blog post weekly. News, idea, tips, and tricks and everything notes that you can found here. Dont forget to subscribe our newsletter</span>
              </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 hover-child-effect blog-style-3 transition-all">
              <div className="col">
                <article className="entry-wrapper">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden hover-img-zoom">
                      <a href="#"><img src="/assets/images/thumb/height-25.png" alt="Image not found !" /></a>
                    </div>
                    <div className="entry-category bg-primary"><span className="cat-links"><a href="#" className="text-white">Web Design</a></span></div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <div className="entry-meta fs-12 mb-3">
                        <span className="author-link text-white"> By:<a className="text-white" href="#" title="Posts by  Xavier Henry" rel="author"> Xavier Henry</a> </span>
                        <span className="posted-date"> <a href="#" className="text-white">April 18, 2021</a> </span>
                      </div>
                      <h5 className="entry-title mb-3 fw-500"><a href="/news-details-left-sidebar.html" className="text-white hover-text-primary">Basic Guide for Freelancer to Reach More Clients</a></h5>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col">
                <article className="entry-wrapper">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden hover-img-zoom">
                      <a href="#"><img src="/assets/images/thumb/height-26.png" alt="Image not found !" /></a>
                    </div>
                    <div className="entry-category bg-warning"><span className="cat-links"><a href="#" className="text-white">Programing</a></span></div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <div className="entry-meta fs-12 mb-3">
                        <span className="author-link text-white"> By:<a className="text-white" href="#" title="Posts by  Xavier Henry" rel="author"> Xavier Henry</a> </span>
                        <span className="posted-date"> <a href="#" className="text-white">June 25, 2021</a> </span>
                      </div>
                      <h5 className="entry-title mb-3 fw-500"><a href="/news-details-left-sidebar.html" className="text-white hover-text-primary">How to setting php.ini file in Linux Server Site</a></h5>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col">
                <article className="entry-wrapper">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden hover-img-zoom">
                      <a href="#"><img src="/assets/images/thumb/height-27.png" alt="Image not found !" /></a>
                    </div>
                    <div className="entry-category bg-info"><span className="cat-links"><a href="#" className="text-white">Mobile</a></span></div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <div className="entry-meta fs-12 mb-3">
                        <span className="author-link text-white"> By:<a className="text-white" href="#" title="Posts by  Xavier Henry" rel="author"> Xavier Henry</a> </span>
                        <span className="posted-date"> <a href="#" className="text-white">August 27, 2021</a> </span>
                      </div>
                      <h5 className="entry-title mb-3 fw-500"><a href="/news-details-left-sidebar.html" className="text-white hover-text-primary">Foundation Basic to Create Responsive Website</a></h5>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Blog Section End ==============================*/}
        {/*============================== Partner Section Start ==============================*/}
        <div className="full-row bg-white pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 wow animate__ animated animate__fadeIn" data-wow-delay="100ms" data-wow-duration="1000ms">
                <h2 className="text-secondary text-center mb-50">Some Great Companies use our services</h2>
              </div>
            </div>
            <div className="row row-cols-xl-4 row-cols-lg-4 row-cols-sm-3 row-cols-1 gy-5">
              <div className="col">
                <a href="#" className="hover-img-upshow overflow-hidden d-table mx-auto">
                  <img src="/assets/images/partner/1.png" alt="partner logo" />
                </a>
              </div>
              <div className="col">
                <a href="#" className="hover-img-upshow overflow-hidden d-table mx-auto">
                  <img src="/assets/images/partner/2.png" alt="partner logo" />
                </a>
              </div>
              <div className="col">
                <a href="#" className="hover-img-upshow overflow-hidden d-table mx-auto">
                  <img src="/assets/images/partner/3.png" alt="partner logo" />
                </a>
              </div>
              <div className="col">
                <a href="#" className="hover-img-upshow overflow-hidden d-table mx-auto">
                  <img src="/assets/images/partner/4.png" alt="partner logo" />
                </a>
              </div>
              <div className="col">
                <a href="#" className="hover-img-upshow overflow-hidden d-table mx-auto">
                  <img src="/assets/images/partner/5.png" alt="partner logo" />
                </a>
              </div>
              <div className="col">
                <a href="#" className="hover-img-upshow overflow-hidden d-table mx-auto">
                  <img src="/assets/images/partner/6.png" alt="partner logo" />
                </a>
              </div>
              <div className="col">
                <a href="#" className="hover-img-upshow overflow-hidden d-table mx-auto">
                  <img src="/assets/images/partner/7.png" alt="partner logo" />
                </a>
              </div>
              <div className="col">
                <a href="#" className="hover-img-upshow overflow-hidden d-table mx-auto">
                  <img src="/assets/images/partner/8.png" alt="partner logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Partner Section End ==============================*/}
        {/*============================== Question Section Start ==============================*/}
        <div className="full-row pb-lg-0">
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col">
                <img className="d-none d-lg-block" src="/assets/images/background/10.png" alt="Image Not Found !" />
                <div className="question-from bg-white p-50 md-py-0 xs-px-30 z-index-9">
                  <h2 className="text-center mb-5">Have question? <br /> We'd love to hear from you.</h2>
                  <form action="#" method="post">
                    <div className="row g-3">
                      <div className="col-sm-12">
                        <label className="required" htmlFor="name">Your Full Name:</label>
                        <input type="text" id="name" className="form-control bg-light rounded-0" name="name" required />
                      </div>
                      <div className="col-sm-6">
                        <label className="required" htmlFor="email">Work Email:</label>
                        <input type="text" id="email" className="form-control bg-light rounded-0" name="email" required />
                      </div>
                      <div className="col-sm-6">
                        <label className="required" htmlFor="number">Phone Number</label>
                        <input type="text" id="number" className="form-control bg-light rounded-0" name="number" required />
                      </div>
                      <div className="col-sm-6">
                        <label className="required" htmlFor="company">Company Name</label>
                        <input type="text" id="company" className="form-control bg-light rounded-0" name="company" required />
                      </div>
                      <div className="col-sm-6">
                        <label className="required" htmlFor="team">Size of your team</label>
                        <input type="text" id="team" className="form-control bg-light rounded-0" name="team" required />
                      </div>
                      <div className="col-sm-12">
                        <label className="required">What are your question</label>
                        <textarea className="form-control bg-light mb-4 rounded-0" name="question" rows={5} required defaultValue={""} />
                      </div>
                      <div className="col-sm-6">
                        <button className="btn btn-dark w-100 rounded-0" name="submit" type="submit"><i className="fas fa-paperclip me-2" />Attach File</button>
                      </div>
                      <div className="col-sm-6">
                        <button className="btn btn-primary w-100 rounded-0" name="submit" type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Question Section End ==============================*/}
        {/* Map Section Start */}
        <div className="full-row p-0">
          <div className="container-fluid">
            <div className="row">
              <div id="map" />
            </div>
          </div>
        </div>
        {/* Map Section End */}
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
    </>
  )
}
