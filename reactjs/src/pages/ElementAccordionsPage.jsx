export default function ElementAccordionsPage() {
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
                    <h1 className="page-title mb-0">Accordions</h1>
                  </div>
                  <nav>
                    <ol className="breadcrumb mb-0 greater-than">
                      <li className="breadcrumb-item"><a href="/index.html" className="text-secondary hover-text-primary">Home</a></li>
                      <li className="breadcrumb-item"><span className="text-secondary">Elements</span></li>
                      <li className="breadcrumb-item"><span style={{color: '#6c757d'}} className="last">Accordions</span></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Page Banner 1 Section End ==============================*/}
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Single Open At A Time</h5>
                  </div>
                </div>
                <div className="row accordion border-style-1">
                  <div className="col">
                    <div id="accordion-1">
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-1">What is html template?</button>
                        </h2>
                        <div id="collapse-1" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-2">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-2" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Single Open At A Time =&gt; One Open First</h5>
                  </div>
                </div>
                <div className="row accordion border-style-1">
                  <div className="col">
                    <div id="accordion-2">
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse-3">What is html template?</button>
                        </h2>
                        <div id="collapse-3" className="accordion-collapse collapse show" data-bs-parent="#accordion-2">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-4">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-4" className="accordion-collapse collapse" data-bs-parent="#accordion-2">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion One Or More Open At A Time</h5>
                  </div>
                </div>
                <div className="row accordion border-style-1">
                  <div className="col">
                    <div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-5">What is html template?</button>
                        </h2>
                        <div id="collapse-5" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-6">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-6" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion One Or More Open At A Time =&gt; One Open First</h5>
                  </div>
                </div>
                <div className="row accordion border-style-1">
                  <div className="col">
                    <div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse-7">What is html template?</button>
                        </h2>
                        <div id="collapse-7" className="accordion-collapse collapse show">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-8">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-8" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Plus Right</h5>
                  </div>
                </div>
                <div className="row accordion right-plus border-style-1">
                  <div className="col">
                    <div id="accordion-14">
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-9">What is html template?</button>
                        </h2>
                        <div id="collapse-9" className="accordion-collapse collapse" data-bs-parent="#accordion-14">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-10">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-10" className="accordion-collapse collapse" data-bs-parent="#accordion-14">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Plus Left</h5>
                  </div>
                </div>
                <div className="row accordion left-plus border-style-1">
                  <div className="col">
                    <div id="accordion-3">
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-11">What is html template?</button>
                        </h2>
                        <div id="collapse-11" className="accordion-collapse collapse" data-bs-parent="#accordion-3">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-12">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-12" className="accordion-collapse collapse" data-bs-parent="#accordion-3">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Custom Icon 1 Right</h5>
                  </div>
                </div>
                <div className="row accordion right-icon-1 border-style-1">
                  <div className="col">
                    <div id="accordion-4">
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-13">What is html template?</button>
                        </h2>
                        <div id="collapse-13" className="accordion-collapse collapse" data-bs-parent="#accordion-4">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-14">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-14" className="accordion-collapse collapse" data-bs-parent="#accordion-4">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Custom Icon 1 Left</h5>
                  </div>
                </div>
                <div className="row accordion left-icon-1 border-style-1">
                  <div className="col">
                    <div id="accordion-5">
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-15">What is html template?</button>
                        </h2>
                        <div id="collapse-15" className="accordion-collapse collapse" data-bs-parent="#accordion-5">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-16">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-16" className="accordion-collapse collapse" data-bs-parent="#accordion-5">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Custom Icon 2 Right</h5>
                  </div>
                </div>
                <div className="row accordion right-icon-2 border-style-1">
                  <div className="col">
                    <div id="accordion-6">
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-17">What is html template?</button>
                        </h2>
                        <div id="collapse-17" className="accordion-collapse collapse" data-bs-parent="#accordion-6">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-18">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-18" className="accordion-collapse collapse" data-bs-parent="#accordion-6">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Custom Icon 2 Left</h5>
                  </div>
                </div>
                <div className="row accordion left-icon-2 border-style-1">
                  <div className="col">
                    <div id="accordion-7">
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-19">What is html template?</button>
                        </h2>
                        <div id="collapse-19" className="accordion-collapse collapse" data-bs-parent="#accordion-7">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-gray">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-20">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-20" className="accordion-collapse collapse" data-bs-parent="#accordion-7">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Border Style 1</h5>
                  </div>
                </div>
                <div className="row accordion right-plus border-style-1">
                  <div className="col">
                    <div id="accordion-8">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-21">What is html template?</button>
                        </h2>
                        <div id="collapse-21" className="accordion-collapse collapse" data-bs-parent="#accordion-8">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-22">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-22" className="accordion-collapse collapse" data-bs-parent="#accordion-8">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Border Style 2</h5>
                  </div>
                </div>
                <div className="row accordion right-plus border-style-2">
                  <div className="col">
                    <div id="accordion-13">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-29">What is html template?</button>
                        </h2>
                        <div id="collapse-29" className="accordion-collapse collapse" data-bs-parent="#accordion-13">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-30">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-30" className="accordion-collapse collapse" data-bs-parent="#accordion-13">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Border Style 3</h5>
                  </div>
                </div>
                <div className="row accordion right-plus border-style-3">
                  <div className="col">
                    <div id="accordion-9">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-23">What is html template?</button>
                        </h2>
                        <div id="collapse-23" className="accordion-collapse collapse" data-bs-parent="#accordion-9">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-24">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-24" className="accordion-collapse collapse" data-bs-parent="#accordion-9">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Border Style 4</h5>
                  </div>
                </div>
                <div className="row accordion right-plus border-style-4">
                  <div className="col">
                    <div id="accordion-10">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-25">What is html template?</button>
                        </h2>
                        <div id="collapse-25" className="accordion-collapse collapse" data-bs-parent="#accordion-10">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-26">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-26" className="accordion-collapse collapse" data-bs-parent="#accordion-10">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion simple</h5>
                  </div>
                </div>
                <div className="row accordion right-plus simple-accordion">
                  <div className="col">
                    <div id="accordion-11">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-27">What is html template?</button>
                        </h2>
                        <div id="collapse-27" className="accordion-collapse collapse" data-bs-parent="#accordion-11">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-28">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-28" className="accordion-collapse collapse" data-bs-parent="#accordion-11">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Shadow</h5>
                  </div>
                </div>
                <div className="row accordion right-plus shadow-accordion">
                  <div className="col">
                    <div id="accordion-12">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-29">What is html template?</button>
                        </h2>
                        <div id="collapse-34" className="accordion-collapse collapse" data-bs-parent="#accordion-12">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-30">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-35" className="accordion-collapse collapse" data-bs-parent="#accordion-12">
                          <div className="accordion-body">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
        <div className="full-row">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="row">
                  <div className="col">
                    <h5 className="mb-3 text-uppercase fw-600">Accordion Only Title Background</h5>
                  </div>
                </div>
                <div className="row accordion right-plus border-style-none">
                  <div className="col">
                    <div id="accordion-15">
                      <div className="accordion-item bg-light">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-31">What is html template?</button>
                        </h2>
                        <div id="collapse-31" className="accordion-collapse collapse" data-bs-parent="#accordion-15">
                          <div className="accordion-body bg-white">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item bg-light">
                        <h2 className="accordion-header">
                          <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-32">How many category avaibable in this template?</button>
                        </h2>
                        <div id="collapse-32" className="accordion-collapse collapse" data-bs-parent="#accordion-15">
                          <div className="accordion-body bg-white">
                            <p>Eget justo aliquam vel rhoncus tortor suscipit. Etiam dis integer. Bibendum inceptos curae. Cras feugiat proin est vestibulum integer tincidunt dapibus quisque Urna. Nibh quisque per tellus dis fringilla
                              fringilla habitasse posuere aliquam quam ornare nibh odio commodo Curabitur. Nectus etiam. Aptent. Libero morbi. Libero nam torquent rhoncus fames eu consequat pulvinar.</p>
                            <p>Fermentum, urna torquent fermentum. Nulla lacus scelerisque penatibus sodales dictum quisque. Est urna vel commodo cubilia pede ipsum etiam. Et ac quis leo bibendum platea Mus nascetur. Potenti eleifend
                              iaculis cras. Consequat erat suscipit Nullam parturient mauris sollicitudin. A massa ad imperdiet neque platea nonummy senectus.</p>
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
