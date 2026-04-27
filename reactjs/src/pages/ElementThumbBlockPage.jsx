export default function ElementThumbBlockPage() {
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
                    <h1 className="page-title mb-0">Thumbnails Block</h1>
                  </div>
                  <nav>
                    <ol className="breadcrumb mb-0 greater-than">
                      <li className="breadcrumb-item"><a href="/index.html" className="text-secondary hover-text-primary">Home</a></li>
                      <li className="breadcrumb-item"><span className="text-secondary">Elements</span></li>
                      <li className="breadcrumb-item"><span style={{color: '#6c757d'}} className="last">Thumbnails Block</span></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Page Banner 1 Section End ==============================*/}
        {/*============================== Image Grid Thumb 1 Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-5">
              <div className="col">
                <div className="hover-child-effect entry-wrapper-bg-gray">
                  <div className="entry-wrapper d-flex flex-column align-items-start justify-content-start transition-all">
                    <div className="entry-thumbnail-wrapper">
                      <div className="post-thumbnail overflow-hidden hover-img-zoom">
                        <img src="/assets/images/thumb/width-1.png" alt="Image not found !" />
                      </div>
                    </div>
                    <div className="entry-content-wrapper p-20">
                      <div className="entry-header">
                        <h3 className="entry-title mb-3"><a href="#" className="text-secondary hover-text-primary">Our Experience</a></h3>
                      </div>
                      <div className="entry-content">
                        <p>Facilisis ullamcorper tellus integer, aliquet semper sit fermentum duis a ligula adipiscing lacinia ceptos placerat sagittis mus dui mi dis tincidunt viverra.</p>
                      </div>
                      <div className="entry-footer">
                        <div className="mt-3"><a href="#" className="btn-link text-primary btn-hover-downline-1">Read More</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hover-child-effect entry-wrapper-bg-gray">
                  <div className="entry-wrapper d-flex flex-column align-items-start justify-content-start transition-all">
                    <div className="entry-thumbnail-wrapper">
                      <div className="post-thumbnail overflow-hidden hover-img-rotate">
                        <img src="/assets/images/thumb/width-2.png" alt="Image not found !" />
                      </div>
                    </div>
                    <div className="entry-content-wrapper p-20">
                      <div className="entry-header">
                        <h3 className="entry-title mb-3"><a href="#" className="text-secondary hover-text-primary">Patron History</a></h3>
                      </div>
                      <div className="entry-content">
                        <p>Facilisis ullamcorper tellus integer, aliquet semper sit fermentum duis a ligula adipiscing lacinia ceptos placerat sagittis mus dui mi dis tincidunt viverra.</p>
                      </div>
                      <div className="entry-footer">
                        <div className="mt-3"><a href="#" className="btn-link text-primary btn-hover-downline-2">Read More</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="hover-child-effect entry-wrapper-bg-gray">
                  <div className="entry-wrapper d-flex flex-column align-items-start justify-content-start transition-all">
                    <div className="entry-thumbnail-wrapper">
                      <div className="post-thumbnail overflow-hidden hover-img-zoom">
                        <img src="/assets/images/thumb/width-3.png" alt="Image not found !" />
                      </div>
                    </div>
                    <div className="entry-content-wrapper p-20">
                      <div className="entry-header">
                        <h3 className="entry-title mb-3"><a href="#" className="text-secondary hover-text-primary">Our Experience</a></h3>
                      </div>
                      <div className="entry-content">
                        <p>Facilisis ullamcorper tellus integer, aliquet semper sit fermentum duis a ligula adipiscing lacinia ceptos placerat sagittis mus dui mi dis tincidunt viverra.</p>
                      </div>
                      <div className="entry-footer">
                        <div className="mt-3"><a href="#" className="btn-link text-primary">Read More</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Image Grid Thumb 1 Section End ==============================*/}
        {/*============================== Icon Grid Thumb 1 Sction Start ==============================*/}
        <div className="full-row overlay-secondary paraxify" style={{backgroundImage: 'url(/assets/images/background/2.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row row-cols-md-3 row-cols-1 gy-5">
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
        {/*============================== Icon Grid Thumb 1 Sction Start ==============================*/}
        <div className="full-row bg-white">
          <div className="container">
            <div className="row row-cols-md-3 row-cols-1 gy-5">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center justify-content-start text-center transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-experience flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title text-secondary mb-4">10 Years of Experience</h4>
                    </div>
                    <div className="entry-content">
                      <p>At interdum varius dictumst. Donec vivamus auctor, metus morbi fames suscipit ligula habitasse fusce aptent, aliquet porta auctor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center justify-content-start text-center transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-experience flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title text-secondary mb-4">100% Satisfaction</h4>
                    </div>
                    <div className="entry-content">
                      <p>At interdum varius dictumst. Donec vivamus auctor, metus morbi fames suscipit ligula habitasse fusce aptent, aliquet porta auctor.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center justify-content-start text-center transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-24-hours flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title text-secondary mb-4">24/7 Security Service</h4>
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
        {/*============================== Icon Grid Thumb 2 Sction Start ==============================*/}
        <div className="full-row bg-gray">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="tagline text-primary text-center mb-10">What We Offer</span>
                <h2 className="down-line text-secondary text-center mb-30">Our Awesome Services</h2>
                <span className="sub-title fs-18 fw-400 ordinary-font fst-italic text-center mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</span>
              </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-4 entry-wrapper-bg-white">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-lock-1 flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary" href="/service-details.html">Home Security</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Nam aenean nibh fringilla maecenas erdum taciti id, interdum donec aliqua. Convallis et eleifend torquent ac aliquet porta.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-servers flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary" href="/service-details.html">Cloud Security</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Nam aenean nibh fringilla maecenas erdum taciti id, interdum donec aliqua. Convallis et eleifend torquent ac aliquet porta.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-online-booking flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary" href="/service-details.html">Office Security</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Nam aenean nibh fringilla maecenas erdum taciti id, interdum donec aliqua. Convallis et eleifend torquent ac aliquet porta.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-software flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary" href="/service-details.html">Computer Security</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Nam aenean nibh fringilla maecenas erdum taciti id, interdum donec aliqua. Convallis et eleifend torquent ac aliquet porta.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-security flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary" href="/service-details.html">Body Guard</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Nam aenean nibh fringilla maecenas erdum taciti id, interdum donec aliqua. Convallis et eleifend torquent ac aliquet porta.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-3"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Read More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-fingerprint-with-crosshair-focus flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-secondary" href="/service-details.html">Biometric</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Nam aenean nibh fringilla maecenas erdum taciti id, interdum donec aliqua. Convallis et eleifend torquent ac aliquet porta.</p>
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
        {/*============================== Icon Grid Thumb 2 Sction End ==============================*/}
        {/*============================== Icon Grid Thumb 2 Sction Start ==============================*/}
        <div className="full-row bg-gray pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="tagline text-primary text-center mb-10">Our services list</span>
                <h1 className="down-line text-secondary text-center mb-30">What we're offering</h1>
              </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-4 thumb-style-5 entry-wrapper-bg-white">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden box-140">
                      <i className="icon flaticon-fingerprint-with-crosshair-focus flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-dark hover-text-primary" href="/service-details.html">Biometric</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Nam aenean nibh fringilla maecenas erdum taciti id, interdum donec aliqua. Convallis et eleifend torquent ac aliquet porta.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-3"><a className="icon-btn-1 bg-gray text-general hover-text-white" href="#"><i className="icon fas fa-long-arrow-alt-right" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden box-140">
                      <i className="icon flaticon-fingerprint-with-crosshair-focus flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-dark hover-text-primary" href="/service-details.html">Biometric</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Nam aenean nibh fringilla maecenas erdum taciti id, interdum donec aliqua. Convallis et eleifend torquent ac aliquet porta.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-3"><a className="icon-btn-1 bg-gray text-general hover-text-white" href="#"><i className="icon fas fa-long-arrow-alt-right" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center p-40 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden box-140">
                      <i className="icon flaticon-fingerprint-with-crosshair-focus flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h4 className="entry-title mb-4"><a className="text-dark hover-text-primary" href="/service-details.html">Biometric</a></h4>
                    </div>
                    <div className="entry-content">
                      <p>Nam aenean nibh fringilla maecenas erdum taciti id, interdum donec aliqua. Convallis et eleifend torquent ac aliquet porta.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-3"><a className="icon-btn-1 bg-gray text-general hover-text-white" href="#"><i className="icon fas fa-long-arrow-alt-right" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Icon Grid Thumb 2 Sction End ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row row-cols-lg-3">
              <div className="col">
                <div className="scene">
                  <img data-depth="0.2" src="/assets/images/products/1.png" alt="photo" />
                </div>
              </div>
              <div className="col">
                <div className="scene">
                  <img data-depth="0.2" src="/assets/images/products/1.png" alt="photo" />
                </div>
              </div>
              <div className="col">
                <div className="scene">
                  <img data-depth="0.2" src="/assets/images/products/1.png" alt="photo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Icon Grid Thumb 3 Sction Start ==============================*/}
        <div className="full-row bg-white pt-0">
          <div className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-5 thumb-style-4">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden box-140">
                      <i className="icon flaticon-business-and-finance flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h3 className="entry-title text-secondary mb-20">Sequre Payment</h3>
                    </div>
                    <div className="entry-content">
                      <p>Dictum enim lacinia etiam pede. Vitae lacus molestie conubia dolor tristique posuere suspendisse ipsum, at ullamcorper fringilla nunc est duis luctus arcu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden box-140">
                      <i className="icon flaticon-protect flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h3 className="entry-title text-secondary mb-20">Best Data Security</h3>
                    </div>
                    <div className="entry-content">
                      <p>Dictum enim lacinia etiam pede. Vitae lacus molestie conubia dolor tristique posuere suspendisse ipsum, at ullamcorper fringilla nunc est duis luctus arcu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden box-140">
                      <i className="icon flaticon-insurance-1 flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h3 className="entry-title text-secondary mb-20">Qualified Guardst</h3>
                    </div>
                    <div className="entry-content">
                      <p>Dictum enim lacinia etiam pede. Vitae lacus molestie conubia dolor tristique posuere suspendisse ipsum, at ullamcorper fringilla nunc est duis luctus arcu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Icon Grid Thumb 3 Sction End ==============================*/}
        {/*============================== Icon Grid Thumb 4 Sction Start ==============================*/}
        <div className="full-row overlay-secondary paraxify" style={{backgroundImage: 'url(/assets/images/background/4.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-8">
                <h1 className="down-line text-white text-start d-table me-auto mb-30">What We Do</h1>
              </div>
            </div>
            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 gy-4">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start text-white hover-text-white bg-secondary hover-bg-primary hover-rectangle-out p-35">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-lock-1 flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-white" href="/service-details.html">Home Security</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start text-white hover-text-white bg-secondary hover-bg-primary hover-rectangle-out p-35">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-white" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start text-white hover-text-white bg-secondary hover-bg-primary hover-rectangle-out p-35">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-relationship flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-white" href="/service-details.html">Event Security</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary hover-text-white btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="bg-white p-35">
                  <h4 className="my-4 down-line">Let’s See OurAll Services</h4>
                  <a href="/service.html" className="btn btn-primary rounded-0">More Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Icon Grid Thumb 4 Sction End ==============================*/}
        {/*============================== Icon Grid Thumb 7 Sction Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 gy-4 thumb-style-3 entry-wrapper-bg-white">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 g-1 thumb-style-7 entry-wrapper-bg-white mt-5">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-0"><a className="text-dark hover-text-primary" href="#">Share Knowledge</a></h5>
                      <span className="tag">Data Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-0"><a className="text-dark hover-text-primary" href="#">Share Knowledge</a></h5>
                      <span className="tag">Data Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-0"><a className="text-dark hover-text-primary" href="#">Share Knowledge</a></h5>
                      <span className="tag">Data Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-0"><a className="text-dark hover-text-primary" href="#">Share Knowledge</a></h5>
                      <span className="tag">Data Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Icon Grid Thumb 7 Sction End ==============================*/}
        {/*============================== Icon Grid Thumb 8 Sction Start ==============================*/}
        <div className="full-row bg-white pt-0">
          <div className="container">
            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 g-0 thumb-style-8 entry-wrapper-bg-white hoven mt-5">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start art text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="/service-details.html">Private Protection</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-primary btn-hover-downline-1" href="/service-details.html">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Icon Grid Thumb 8 Sction End ==============================*/}
        {/*============================== Icon List Thumb 1 Sction Start ==============================*/}
        <div className="full-row bg-gray">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="tagline text-primary text-center mb-10">What We Offer</span>
                <h1 className="down-line text-secondary text-center mb-30">Our Awesome Services</h1>
                <span className="sub-title fs-18 ordinary-font text-center mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</span>
              </div>
            </div>
            <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 g-4">
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-start text-start bg-gray hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-shield flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Home Security</a></h3>
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
                <div className="entry-wrapper d-flex flex-row align-items-start text-start bg-gray hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-servers flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Cloud Security</a></h3>
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
                <div className="entry-wrapper d-flex flex-row align-items-start text-start bg-gray hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-online-booking flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Office Security</a></h3>
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
                <div className="entry-wrapper d-flex flex-row align-items-start text-start bg-gray hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-software flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Computer Security</a></h3>
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
                <div className="entry-wrapper d-flex flex-row align-items-start text-start bg-gray hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-security flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Body Guard</a></h3>
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
                <div className="entry-wrapper d-flex flex-row align-items-start text-start bg-gray hover-bg-white p-4 transition-all">
                  <div className="entry-thumbnail-wrapper me-3">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-fingerprint-with-crosshair-focus flat-45 text-primary" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/service-details.html">Biometric</a></h3>
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
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4 transition-all">
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
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4 transition-all">
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
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4 transition-all">
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
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4 transition-all">
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
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4 transition-all">
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
                    <div className="entry-wrapper d-flex flex-row align-items-start text-start hover-text-white hover-bg-primary p-4 transition-all">
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
        {/*============================== Our Plan Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 entry-wrapper-bg-white thumb-style-2">
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="me-3"><img src="/assets/images/icon/5.png" alt /></div>
                  <span className="fs-15">Free one year domain</span>
                  <i className="fas fa-check text-primary ms-auto" />
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="me-3"><img src="/assets/images/icon/6.png" alt /></div>
                  <span className="fs-15">Latest cPanel Version</span>
                  <i className="fas fa-check text-primary ms-auto" />
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="me-3"><img src="/assets/images/icon/7.png" alt /></div>
                  <span className="fs-15">Free One Year SSL Certificate</span>
                  <i className="fas fa-check text-primary ms-auto" />
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="me-3"><img src="/assets/images/icon/8.png" alt /></div>
                  <span className="fs-15">Full Root Access</span>
                  <i className="fas fa-check text-primary ms-auto" />
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="me-3"><img src="/assets/images/icon/9.png" alt /></div>
                  <span className="fs-15">SSD Hard Disk Type</span>
                  <i className="fas fa-check text-primary ms-auto" />
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="me-3"><img src="/assets/images/icon/10.png" alt /></div>
                  <span className="fs-15">24/7 Online Support</span>
                  <i className="fas fa-check text-primary ms-auto" />
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="me-3"><img src="/assets/images/icon/11.png" alt /></div>
                  <span className="fs-15">Automatic update</span>
                  <i className="fas fa-check text-primary ms-auto" />
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="me-3"><img src="/assets/images/icon/12.png" alt /></div>
                  <span className="fs-15">Free weekly backup</span>
                  <i className="fas fa-check text-primary ms-auto" />
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="me-3"><img src="/assets/images/icon/13.png" alt /></div>
                  <span className="fs-15">Moneyback guaranteed</span>
                  <i className="fas fa-check text-primary ms-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Our Plan Section End ==============================*/}
        {/*============================== Features Section Start ==============================*/}
        <div className="full-row pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <span className="tagline fw-600 text-uppercase text-primary text-center mb-10">Features</span>
                <h3 className="text-secondary text-center mb-30">What makes our services different?</h3>
                <span className="sub-title fs-15 ordinary-font text-center mb-50">We offer the fastest hardware and software in the industry, easy with the best technical assistance in around the world and trusted by thousands of developers.</span>
              </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 entry-wrapper-bg-white thumb-style-6">
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="entry-thumbnail-wrapper position-relative me-3">
                    <div className="post-thumbnail overflow-hidden box-100">
                      <img src="/assets/images/shape/1.png" alt />
                      <i className="icon flaticon-settings flat-45 text-white xy-center position-absolute" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h5 className="entry-title mb-2"><a className="text-secondary" href="#">Free Setup</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>We will setup your server for free only in 10 mins.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="entry-thumbnail-wrapper position-relative me-3">
                    <div className="post-thumbnail overflow-hidden box-100">
                      <img src="/assets/images/shape/1.png" alt />
                      <i className="icon flaticon-settings flat-45 text-white xy-center position-absolute" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h5 className="entry-title mb-2"><a className="text-secondary" href="#">Faster Performance</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>We will setup your server for free only in 10 mins.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="entry-thumbnail-wrapper position-relative me-3">
                    <div className="post-thumbnail overflow-hidden box-100">
                      <img src="/assets/images/shape/1.png" alt />
                      <i className="icon flaticon-settings flat-45 text-white xy-center position-absolute" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h5 className="entry-title mb-2"><a className="text-secondary" href="#">Better Database</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>We will setup your server for free only in 10 mins.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="entry-thumbnail-wrapper position-relative me-3">
                    <div className="post-thumbnail overflow-hidden box-100">
                      <img src="/assets/images/shape/1.png" alt />
                      <i className="icon flaticon-settings flat-45 text-white xy-center position-absolute" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h5 className="entry-title mb-2"><a className="text-secondary" href="#">Most Secure</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>We will setup your server for free only in 10 mins.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="entry-thumbnail-wrapper position-relative me-3">
                    <div className="post-thumbnail overflow-hidden box-100">
                      <img src="/assets/images/shape/1.png" alt />
                      <i className="icon flaticon-settings flat-45 text-white xy-center position-absolute" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h5 className="entry-title mb-2"><a className="text-secondary" href="#">Weekly Newsletter</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>We will setup your server for free only in 10 mins.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="entry-thumbnail-wrapper position-relative me-3">
                    <div className="post-thumbnail overflow-hidden box-100">
                      <img src="/assets/images/shape/1.png" alt />
                      <i className="icon flaticon-settings flat-45 text-white xy-center position-absolute" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h5 className="entry-title mb-2"><a className="text-secondary" href="#">Daily Backups</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>We will setup your server for free only in 10 mins.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="entry-thumbnail-wrapper position-relative me-3">
                    <div className="post-thumbnail overflow-hidden box-100">
                      <img src="/assets/images/shape/1.png" alt />
                      <i className="icon flaticon-settings flat-45 text-white xy-center position-absolute" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h5 className="entry-title mb-2"><a className="text-secondary" href="#">Free Domain</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>We will setup your server for free only in 10 mins.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="entry-thumbnail-wrapper position-relative me-3">
                    <div className="post-thumbnail overflow-hidden box-100">
                      <img src="/assets/images/shape/1.png" alt />
                      <i className="icon flaticon-settings flat-45 text-white xy-center position-absolute" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h5 className="entry-title mb-2"><a className="text-secondary" href="#">Winning Support 24/7</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>We will setup your server for free only in 10 mins.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-row align-items-center text-start p-3">
                  <div className="entry-thumbnail-wrapper position-relative me-3">
                    <div className="post-thumbnail overflow-hidden box-100">
                      <img src="/assets/images/shape/1.png" alt />
                      <i className="icon flaticon-settings flat-45 text-white xy-center position-absolute" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h5 className="entry-title mb-2"><a className="text-secondary" href="#">Moneyback Guaranteed</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>We will setup your server for free only in 10 mins.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Features Section End ==============================*/}
        {/*============================== Business Section Start ==============================*/}
        <div className="full-row pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <span className="tagline fw-600 text-uppercase text-primary text-center mb-10">Business</span>
                <h3 className="text-secondary text-center mb-30">Need more powerfull hosting?</h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="sub-title fs-16 ordinary-font text-center mb-50">We offer the fastest hardware and software in the industry, easy with the best technical assistance in around the world and trusted by thousands of developers.</span>
              </div>
            </div>
            <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1 g-0 thumb-style-1">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center gradient-bg-6 hover-gradient-bg-1 p-30 transition-this">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <i className="icon flaticon-group flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0 text-uppercase"><a className="text-white" href="#">Ready for gsuite</a></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center gradient-bg-6 hover-gradient-bg-1 p-30 transition-this">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <i className="icon flaticon-folder flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0 text-uppercase"><a className="text-white" href="#">Privacy protected</a></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center gradient-bg-6 hover-gradient-bg-1 p-30 transition-this">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <i className="icon flaticon-network-1 flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0 text-uppercase"><a className="text-white" href="#">Defence Feature</a></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center gradient-bg-6 hover-gradient-bg-1 p-30 transition-this">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <i className="icon flaticon-line-graph flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0 text-uppercase"><a className="text-white" href="#">Mallware scanner</a></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center gradient-bg-6 hover-gradient-bg-1 p-30 transition-this">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <i className="icon flaticon-partner flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0 text-uppercase"><a className="text-white" href="#">High traffic ready</a></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-lg-5 row-cols-md-2 row-cols-1 g-4 mt-5">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center bg-secondary hover-gradient-bg-8 bg-full-from-bottom-right-1 p-30 transition-this">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <i className="icon flaticon-group flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0 text-uppercase"><a className="text-white" href="#">Ready for gsuite</a></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center bg-secondary hover-gradient-bg-8 bg-full-from-bottom-right-1 p-30 transition-this">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <i className="icon flaticon-group flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0 text-uppercase"><a className="text-white" href="#">Ready for gsuite</a></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center bg-secondary hover-gradient-bg-8 bg-full-from-bottom-right-1 p-30 transition-this">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <i className="icon flaticon-group flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0 text-uppercase"><a className="text-white" href="#">Ready for gsuite</a></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center bg-secondary hover-gradient-bg-8 bg-full-from-bottom-right-1 p-30 transition-this">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <i className="icon flaticon-group flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0 text-uppercase"><a className="text-white" href="#">Ready for gsuite</a></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center bg-secondary hover-gradient-bg-8 bg-full-from-bottom-right-1 p-30 transition-this">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <i className="icon flaticon-group flat-45 text-white" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0 text-uppercase"><a className="text-white" href="#">Ready for gsuite</a></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Business Section End ==============================*/}
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
