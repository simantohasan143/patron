export default function ElementFooterPage() {
  return (
    <>
      <div id="page-wrapper">
        {/*============================== Header Section Start ==============================*/}
        <header id="header" className="default-header bg-default nav-initial nav-on-top">
          <div className="top-header d-none d-lg-block py-10 fw-500">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 top-header-col">
                  <ul className="address-menu d-flex text-general gap-4">
                    <li className="d-flex align-items-center gap-1"><i className="fas fa-phone text-primary" /> (+1) 828-376-0532</li>
                    <li className="d-flex align-items-center gap-1"><i className="fas fa-map-marker-alt text-primary" /> 4214 Arlington Avenue Des Arc, Newyouk</li>
                  </ul>
                </div>
                <div className="col-lg-6 d-flex top-header-col justify-content-end align-items-center">
                  <div className="d-flex align-items-center justify-content-end gap-4">
                    <div className="dropdown">
                      <a href="#" className="dropdown-toggle text-general">Help and Support</a>
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
                          <a href="/sign-up.html" className="customer-signinup"><i className="flaticon-user-3 flat-mini me-1" />Register</a>
                        </div>
                      </div>
                      <div className="text-primary">or</div>
                      <div className="my-account position-relative">
                        <div className="my-account-dropdown">
                          <a href="/sign-in.html" className="customer-signinup"><i className="flaticon-user-3 flat-mini me-1" />Sign In</a>
                        </div>
                      </div>
                    </div>
                    <div className="header-cart-1">
                      <a href="#" className="cart has-cart-data top-quantity d-flex gap-1 text-general" title="View Cart">
                        <div className="cart-icon"><i className="flaticon-shopping-cart flat-small text-primary" /> <span className="header-cart-count">(4)</span></div>
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
                  <nav className="navbar navbar-expand-lg navbar-light text-uppercase nav-dark nav-primary-hover nav-primary-active fw-500">
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/2.png" alt="Patron" /></a>
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
                  <nav className="navbar navbar-expand-lg navbar-light text-uppercase nav-dark nav-primary-hover nav-primary-active fw-500">
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/2.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sticky-navbar-content" aria-controls="sticky-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="sticky-navbar-content">
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
        {/*============================== Page Banner 1 Section Start ==============================*/}
        <div id="page-banner" className="page-title bg-light title-text-dark title-large" style={{backgroundImage: 'url("assets/images/background/17.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-column gap-3" style={{padding: '70px 0'}}>
                  <div className="title-wrap">
                    <h1 className="page-title mb-0">Footer</h1>
                  </div>
                  <nav>
                    <ol className="breadcrumb mb-0 greater-than">
                      <li className="breadcrumb-item"><a href="/index.html" className="text-secondary hover-text-primary">Home</a></li>
                      <li className="breadcrumb-item"><span className="text-secondary">Elements</span></li>
                      <li className="breadcrumb-item"><span style={{color: '#6c757d'}} className="last">Footer</span></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Page Banner 1 Section End ==============================*/}
        {/*============================== Footer Section Start ==============================*/}
        <footer className="bg-gray">
          <div className="pt-5 border-top border-primary">
            <div className="container">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-5">
                <div className="col">
                  <div className="footer-widget widget-newsletter">
                    <h3 className="widget-title mb-4">Stay in touch</h3>
                    <div className="inline-form-style-1 newsletter-number">
                      <form className="form-inline square-shape" action="#" method="post">
                        <div className="input-group">
                          <input type="text" className="form-control input-field bg-light" name="search" placeholder="Your e-Mail Address" />
                          <button type="submit" name="submit" className="submit text-white bg-primary">Subscribes</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget widget-newsletter">
                    <h3 className="widget-title mb-4">Stay in touch</h3>
                    <p>Risus commodo congue augue phas ellus morbi hymenaeos ante.</p>
                    <div className="outline-form-style-1 newsletter-number mt-30">
                      <form className="form-outline square-shape" action="#" method="post">
                        <input type="text" className="form-control input-field bg-light" name="search" placeholder="Your e-Mail Address" />
                        <button type="submit" name="submit" className="submit text-white bg-primary">Subscribes</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-5">
                <div className="col">
                  <div className="footer-widget">
                    <div className="footer-logo mb-4">
                      <a href="#"><img src="/assets/images/logo/2.png" alt="Image not found!" /></a>
                    </div>
                    <p>Risus commodo congue augue phas ellus morbi hymenaeos ante.</p>
                    <a href="#" className="btn btn-primary mt-30">Contact Now</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <div className="footer-logo mb-4">
                      <a href="#"><img src="/assets/images/logo/2.png" alt="Image not found!" /></a>
                    </div>
                    <p>Risus commodo congue augue phas ellus morbi hymenaeos ante.</p>
                  </div>
                  <div className="footer-widget">
                    <div className="transparent-social-media-1 hyperlink-mr-20">
                      <a href="#"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fab fa-pinterest-p" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <div className="footer-logo mb-4">
                      <a href="#"><img src="/assets/images/logo/2.png" alt="Image not found!" /></a>
                    </div>
                    <span className="font-21 font-weight-600 text-dark">Got Questions ? Call us 24/7!</span>
                    <div className="font-18 text-dark mt-2">(090) 8001-8588, (090) 874 548</div>
                  </div>
                  <div className="footer-widget">
                    <div className="transparent-social-media-1 hyperlink-mr-20">
                      <a href="#"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fab fa-pinterest-p" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <div className="footer-logo mb-4">
                      <a href="#"><img src="/assets/images/logo/2.png" alt="Image not found!" /></a>
                    </div>
                    <span className="font-18 d-block font-weight-600 mb-10 text-dark">Address :</span>
                    <div className="text-general">Collins Street West, Victoria 8007, <br /> Australia</div>
                  </div>
                  <div className="footer-widget">
                    <div className="transparent-social-media-1 hyperlink-mr-20">
                      <a href="#"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fab fa-pinterest-p" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <div className="footer-logo mb-4">
                      <a href="#"><img src="/assets/images/logo/2.png" alt="Image not found!" /></a>
                    </div>
                    <span className="font-21 font-weight-600 text-dark">Got Questions ? Call us 24/7!</span>
                    <div className="font-18 text-dark mt-2">(090) 8001-8588, (090) 874 548</div>
                    <span className="font-18 d-block font-weight-600 mt-40 mb-10 text-dark">Address :</span>
                    <div className="text-general">Collins Street West, Victoria 8007, <br /> Australia</div>
                  </div>
                  <div className="footer-widget">
                    <div className="transparent-social-media-1 hyperlink-mr-20">
                      <a href="#"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fab fa-pinterest-p" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <div className="footer-logo mb-4">
                      <a href="#"><img src="/assets/images/logo/2.png" alt="Image not found!" /></a>
                    </div>
                    <p>Risus commodo congue augue phas ellus morbi hymenaeos ante.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-5">
                <div className="col">
                  <div className="footer-widget widget-photos-4">
                    <h3 className="widget-title mb-4">Payment Method</h3>
                    <div className="square-payment-method-1 hyperlink-mr-10">
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                    </div>
                  </div>
                  <div className="footer-widget widget-contact">
                    <h3 className="widget-title mb-4">Contact Us1</h3>
                    <ul>
                      <li><i className="icon fas fa-phone" /><span className="text">+1 246-345-0695</span></li>
                      <li><i className="icon fas fa-envelope" /><span className="text">helpline@homex.com</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget widget-photos-4">
                    <h3 className="widget-title mb-4">Payment Method</h3>
                    <div className="circle-payment-method-1 hyperlink-mr-10">
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget widget-photos-4">
                    <h3 className="widget-title mb-4">Payment Method</h3>
                    <div className="payment-method-2 hyperlink-mr-20">
                      <a href="#"><img src="/assets/images/icon/1.png" alt /></a>
                      <a href="#"><img src="/assets/images/icon/2.png" alt /></a>
                      <a href="#"><img src="/assets/images/icon/3.png" alt /></a>
                      <a href="#"><img src="/assets/images/icon/4.png" alt /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-5">
                <div className="col">
                  <div className="footer-widget">
                    <h3 className="widget-title mb-4">Address</h3>
                    <span>123 Street Name, City, England Pintrest street oklar</span>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h3 className="widget-title mb-4">Contact Us2</h3>
                    <span>60, 29th Street, San Francisco, CA 94110, United States of America</span>
                  </div>
                  <div className="mt-4">
                    <h5>Get Support?</h5>
                    <a href="#" className="btn-link">Chat Now</a>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget widget-contact">
                    <h3 className="widget-title mb-4">Contact Us3</h3>
                    <ul>
                      <li><span className="text">Collins Street West, Victoria 8007, Australia</span></li>
                      <li><span className="text">+1 246-345-0695</span></li>
                      <li><span className="text">helpline@homex.com</span></li>
                    </ul>
                  </div>
                  <div className="footer-widget">
                    <div className="transparent-social-media-1 hyperlink-mr-20">
                      <a href="#"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fab fa-pinterest-p" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget widget-contact">
                    <h3 className="widget-title mb-4">Contact Us4</h3>
                    <ul>
                      <li><i className="icon fas fa-map-marker-alt" /><span className="text">Collins Street West, Victoria 8007, Australia</span></li>
                      <li><i className="icon fas fa-phone" /><span className="text">+1 246-345-0695</span></li>
                      <li><i className="icon fas fa-envelope" /><span className="text">helpline@homex.com</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget widget-contact-1">
                    <h3 className="widget-title mb-4">Get In Touch 1</h3>
                    <ul>
                      <li>
                        <h6 className="title">Address :</h6>
                        <span className="text">Collins Street West, Victoria 8007, Australia</span>
                      </li>
                      <li>
                        <h6 className="title">Phone :</h6>
                        <span className="text">+1 246-345-0695</span>
                      </li>
                      <li>
                        <h6 className="title">Email :</h6>
                        <span className="text">helpline@homex.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-5">
                <div className="col">
                  <div className="footer-widget widget-post-1">
                    <h3 className="widget-title mb-4">Recent News</h3>
                    <ul>
                      <li>
                        <div className="post-item">
                          <div className="content">
                            <h6 className="title"><a href="#">How Our Consultation Can Change</a></h6>
                            <span className="date">10 May, 2019</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-item">
                          <div className="content">
                            <h6 className="title"><a href="#">How Our Consultation Can Change</a></h6>
                            <span className="date">10 May, 2019</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-item">
                          <div className="content">
                            <h6 className="title"><a href="#">How Our Consultation Can Change</a></h6>
                            <span className="date">10 May, 2019</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget widget-post-2">
                    <h3 className="widget-title mb-4">Recent News</h3>
                    <ul>
                      <li>
                        <div className="post-item">
                          <div className="image-wrap">
                            <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                          </div>
                          <div className="content">
                            <h6 className="title"><a href="#">How Our Consultation Can Change</a></h6>
                            <span className="date">10 May, 2019</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-item">
                          <div className="image-wrap">
                            <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                          </div>
                          <div className="content">
                            <h6 className="title"><a href="#">How Our Consultation Can Change</a></h6>
                            <span className="date">10 May, 2019</span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="post-item">
                          <div className="image-wrap">
                            <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                          </div>
                          <div className="content">
                            <h6 className="title"><a href="#">How Our Consultation Can Change</a></h6>
                            <span className="date">10 May, 2019</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-5">
                <div className="col">
                  <div className="footer-widget">
                    <h3 className="widget-title mb-4">Address</h3>
                    <span>123 Street Name, City, England Pintrest street oklar</span>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h3 className="widget-title mb-4">Phone</h3>
                    <span>Toll Free (123) 456-7890</span>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h3 className="widget-title mb-4">Email</h3>
                    <span>mail@example.com</span>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h3 className="widget-title mb-4">Working Day/Hours</h3>
                    <span>Mon - Sun / 9:00 AM - 8:00 </span>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h3 className="widget-title mb-4">Office Hours</h3>
                    <ul>
                      <li>Mon - Thur: 8:30a - 5:00p</li>
                      <li> Fri: 8:30a - 12:00p</li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget widget-business-hour-1">
                    <h3 className="widget-title mb-4">Business Hours</h3>
                    <ul>
                      <li><span>Monday - Friday :</span><span>9:00 am - 8:00 pm</span></li>
                      <li><span>Saturday :</span><span>9:00 am - 6:00 pm</span></li>
                      <li><span>Sunday :</span><span>Closed</span></li>
                      <li><span>Working Site :</span><span>7 Days</span></li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h3 className="widget-title mb-4">Appointment</h3>
                    <p>Risus commodo congue augue phas ellus morbi hymenaeos ante.</p>
                    <a href="#" className="btn btn-primary mt-30">Make An Appointment</a>
                  </div>
                </div>
              </div>
              <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gy-5 mt-5">
                <div className="col-lg-4">
                  <div className="footer-widget widget-link-single">
                    <h3 className="widget-title mb-4">Widget Link</h3>
                    <ul>
                      <li><a href="#"><span className="text">About Us</span></a></li>
                      <li><a href="#"><span className="text">Contact Us</span></a></li>
                      <li><a href="#"><span className="text">FAQs</span></a></li>
                      <li><a href="#"><span className="text">Privacy Policy</span></a></li>
                      <li><a href="#"><span className="text">Terms &amp; Conditions</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="footer-widget widget-link-double">
                    <h3 className="widget-title mb-4">Widget Link</h3>
                    <ul>
                      <li><a href="#"><span className="text">About Us</span></a></li>
                      <li><a href="#"><span className="text">Contact Us</span></a></li>
                      <li><a href="#"><span className="text">FAQs</span></a></li>
                      <li><a href="#"><span className="text">Privacy Policy</span></a></li>
                      <li><a href="#"><span className="text">Terms &amp; Conditions</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-widget widget-link-single-with-icon">
                    <h3 className="widget-title mb-4">Widget Link</h3>
                    <ul>
                      <li><a href="#"><i className="icon fas fa-long-arrow-alt-right" /><span className="text">About Us</span></a></li>
                      <li><a href="#"><i className="icon fas fa-long-arrow-alt-right" /><span className="text">Contact Us</span></a></li>
                      <li><a href="#"><i className="icon fas fa-long-arrow-alt-right" /><span className="text">FAQs</span></a></li>
                      <li><a href="#"><i className="icon fas fa-long-arrow-alt-right" /><span className="text">Privacy Policy</span></a></li>
                      <li><a href="#"><i className="icon fas fa-long-arrow-alt-right" /><span className="text">Terms &amp; Conditions</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="footer-widget widget-link-double-with-icon">
                    <h3 className="widget-title mb-4">Widget Link</h3>
                    <ul>
                      <li><a href="#"><i className="icon fas fa-long-arrow-alt-right" /><span className="text">About Us</span></a></li>
                      <li><a href="#"><i className="icon fas fa-long-arrow-alt-right" /><span className="text">Contact Us</span></a></li>
                      <li><a href="#"><i className="icon fas fa-long-arrow-alt-right" /><span className="text">FAQs</span></a></li>
                      <li><a href="#"><i className="icon fas fa-long-arrow-alt-right" /><span className="text">Privacy Policy</span></a></li>
                      <li><a href="#"><i className="icon fas fa-long-arrow-alt-right" /><span className="text">Terms &amp; Conditions</span></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h3 className="widget-title mb-4">Square Media</h3>
                    <div className="social-media-1 hyperlink-mr-15">
                      <a href="#"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fab fa-pinterest-p" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget">
                    <h3 className="widget-title mb-4">Circle Media</h3>
                    <div className="circle-social-media-1 hyperlink-mr-15">
                      <a href="#"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fab fa-pinterest-p" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-5">
                <div className="col">
                  <div className="footer-widget widget-photos-3">
                    <h3 className="widget-title mb-4">Instagram</h3>
                    <ul>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 1"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 2"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 3"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 4"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 5"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 6"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget widget-photos-4">
                    <h3 className="widget-title mb-4">Instagram</h3>
                    <ul>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 1"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 2"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 3"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 4"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 5"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 6"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 7"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 8"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget widget-photos-4">
                    <h3 className="widget-title mb-4">Instagram</h3>
                    <ul>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 1"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 2"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 3"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 4"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 5"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 6"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 7"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 8"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget circle-widget-photos-4">
                    <h3 className="widget-title mb-4">Instagram</h3>
                    <ul>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 1"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 2"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 3"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 4"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 5"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 6"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 7"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/square-1.png" data-fancybox="gallery" data-caption="Caption for single image 8"><img src="/assets/images/thumb/square-1.png" alt /></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-widget circle-widget-photos-4">
                    <h3 className="widget-title mb-4">Instagram</h3>
                    <ul>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 1"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 2"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 3"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 4"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 5"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 6"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 7"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                      <li>
                        <div className="image-wrap">
                          <a href="/assets/images/thumb/width-30.png" data-fancybox="gallery" data-caption="Caption for single image 8"><img src="/assets/images/thumb/width-30.png" alt /></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="nav-style-1 list-mr-20">
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">About </a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
                    <div className="social-media-1 hyperlink-mr-15">
                      <a href="#"><i className="fab fa-facebook-f" /></a>
                      <a href="#"><i className="fab fa-pinterest-p" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="copy-right d-flex flex-wrap justify-content-between align-items-center gap-4">
                    <div className="nav-style-2">
                      <ul>
                        <li><a href="#">Specials</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Special</a></li>
                        <li><a href="#">Discount</a></li>
                        <li><a href="#">Brands</a></li>
                      </ul>
                    </div>
                    <span className="copyright-text">Copyright © 2021 UNICODER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="copy-right d-flex flex-wrap justify-content-between align-items-center gap-4">
                    <div className="square-payment-method-1 hyperlink-mr-10">
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                    </div>
                    <div className="circle-payment-method-1 hyperlink-mr-20">
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                      <a href="#"><img src="/assets/images/thumb/square-1.png" alt /></a>
                    </div>
                    <div className="payment-method-2 hyperlink-mr-20">
                      <a href="#"><img src="/assets/images/icon/1.png" alt /></a>
                      <a href="#"><img src="/assets/images/icon/2.png" alt /></a>
                      <a href="#"><img src="/assets/images/icon/3.png" alt /></a>
                      <a href="#"><img src="/assets/images/icon/4.png" alt /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="copy-right d-flex flex-wrap justify-content-between align-items-center gap-4">
                    <span className="copyright-text max-xs-mb-15">Copyright © 2021 Unicoder</span>
                    <div className="payment-method-2 hyperlink-mr-20">
                      <a href="#"><img src="/assets/images/icon/1.png" alt /></a>
                      <a href="#"><img src="/assets/images/icon/2.png" alt /></a>
                      <a href="#"><img src="/assets/images/icon/3.png" alt /></a>
                      <a href="#"><img src="/assets/images/icon/4.png" alt /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="copy-right d-flex flex-wrap justify-content-between align-items-center gap-4">
                    <span className="copyright-text max-sm-mb-10">Copyright © 2021 Unicoder</span>
                    <div className="nav-style-2">
                      <ul>
                        <li><a href="#">Specials</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Special</a></li>
                        <li><a href="#">Discount</a></li>
                        <li><a href="#">Brands</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="copy-right d-flex flex-wrap justify-content-center align-items-center">
                    <span className="copyright-text max-sm-mb-10">Copyright © 2021 Unicoder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-top border-primary" />
        </footer>
        {/*============================== Footer Section End ==============================*/}
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
                    <li><a href="#"><span className="text">About Company</span></a></li>
                    <li><a href="#"><span className="text">Payment System</span></a></li>
                    <li><a href="#"><span className="text">Terms and Conditions</span></a></li>
                    <li><a href="#"><span className="text">Company History</span></a></li>
                    <li><a href="#"><span className="text">Consultation</span></a></li>
                    <li><a href="#"><span className="text">Careers</span></a></li>
                    <li><a href="#"><span className="text">How It Work</span></a></li>
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
                      <button type="submit" name="submit" className="submit text-white bg-primary">Subscribes</button>
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
                      <li><a href="#">How It Work</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Trusty and Safty</a></li>
                      <li><a href="#">Payment </a></li>
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">Help &amp; Support</a></li>
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
