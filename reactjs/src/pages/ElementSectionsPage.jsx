export default function ElementSectionsPage() {
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
                    <h1 className="page-title mb-0">Sections</h1>
                  </div>
                  <nav>
                    <ol className="breadcrumb mb-0 greater-than">
                      <li className="breadcrumb-item"><a href="/index.html" className="text-secondary hover-text-primary">Home</a></li>
                      <li className="breadcrumb-item"><span className="text-secondary">Elements</span></li>
                      <li className="breadcrumb-item"><span style={{color: '#6c757d'}} className="last">Sections</span></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Page Banner 1 Section End ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="image-with-achievement fact-counter">
                  <img src="/assets/images/thumb/square-1.png" alt />
                  <div className="count-wrap">
                    <div className="count wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                      <span className="count-num h1 text-dark fw-400 mb-0 lh-inherit" data-speed={3000} data-stop={2019}>0</span>
                      <div className="text-primary fs-18 pb-2">Award Winner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-row p-0">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div className="col-lg-5">
                <img src="/assets/images/extra/2.png" alt />
              </div>
              <div className="col-lg-6 offset-lg-1">
                <h3 className="down-line mb-3 fw-600">Protect your website with our security features</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className="list-width-full icon-in-list list-icon-3 list-icon-center list-icon-primary list-text-general list-lh-auto list-py-5 mt-4">
                  <ul>
                    <li>Anti spam protection</li>
                    <li>Protect from Ddos injection</li>
                    <li>Malware scanner</li>
                    <li>Free DNS protection</li>
                  </ul>
                </div>
                <div className="mt-5">
                  <a href="#" className="btn btn-outline-primary border-2 rounded-pill">Get Started Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-9">
                <span className="fs-18">Your money always save with us. 30-days monyback guaranteed</span>
                <h4 className="mt-3">Need assistant? Call <a href="#" className="text-primary ordinary-font">(123)456-7890</a> for free consultation.</h4>
              </div>
            </div>
          </div>
        </div>
        {/*============================== About company Section Start ==============================*/}
        <div className="full-row pb-0">
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
        {/*============================== About company Section Start ==============================*/}
        <div className="full-row pb-0">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-6 d-none d-lg-block">
                <div className="position-relative">
                  <img src="/assets/images/extra/9.png" alt="image not found!" />
                </div>
              </div>
              <div className="col-lg-6">
                <span className="tagline text-general mb-10">About Consulte</span>
                <h1 className="text-secondary mb-30 fw-500">Leading <span className="fw-700 text-primary">Financial <br /> Consulting</span> Company</h1>
                <p>Consulte is located in the former rectory of St. Peter’s Episcopal Church. Over our 14 year history, we have treated patients from over 114 different countries in the world. In 2010, we imposed geographical restrictions for the
                  first time. Existing patients were not affected by this change, but new patients are now</p>
                <p>We have compiled an extensive list of other area clinics and health resources, so that when someone calls from outside of our geographical area.</p>
                <div className="d-flex mt-40">
                  <div className="content">
                    <span className="signature display-6">Johone Doe</span>
                    <h5 className="text-primary mb-0">Founder</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== About company Section End ==============================*/}
        {/*============================== Why choose us Section Start ==============================*/}
        <div className="full-row pb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="tagline text-primary text-center mb-10">Let's Know</span>
                <h2 className="down-line text-secondary text-center mb-30">Why Choose Us</h2>
                <span className="sub-title fs-18 ordinary-font fst-italic text-general text-center mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</span>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center gy-5">
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
        {/*============================== Popular Questions Section Start ==============================*/}
        <div className="full-row bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="tagline text-primary text-center mb-10">Need Our Help?</span>
                <h1 className="down-line text-secondary text-center mb-30">Popular Questions</h1>
                <span className="sub-title fs-18 ordinary-font text-center mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</span>
              </div>
            </div>
            <div className="row row-cols-lg-2 row-cols-1 gy-5 accordion right-plus border-style-none">
              <div className="col">
                <div id="accordion-1">
                  <div className="accordion-item bg-light">
                    <h2 className="accordion-header">
                      <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse-1">What is the terms and condition to get a guard?</button>
                    </h2>
                    <div id="collapse-1" className="accordion-collapse collapse show" data-bs-parent="#accordion-1">
                      <div className="accordion-body bg-white">
                        <p>Cubilia suspendisse, sodales Eu odio. Ad sollicitudin Mollis euismod natoque dis arcu vel fusce mattis metus taciti pellentesque netus malesuada. Vulputate nisi taciti netus leo lobortis est at leo. Tellus semper
                          amet cum condimentum lobortis pellentesque suscipit.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-light">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-2">Qualification and experience of the bodyguards?</button>
                    </h2>
                    <div id="collapse-2" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                      <div className="accordion-body bg-white">
                        <p>Cubilia suspendisse, sodales Eu odio. Ad sollicitudin Mollis euismod natoque dis arcu vel fusce mattis metus taciti pellentesque netus malesuada. Vulputate nisi taciti netus leo lobortis est at leo. Tellus semper
                          amet cum condimentum lobortis pellentesque suscipit.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-light">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-3">How soon I can reach to patron and take a part of service?</button>
                    </h2>
                    <div id="collapse-3" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                      <div className="accordion-body bg-white">
                        <p>Cubilia suspendisse, sodales Eu odio. Ad sollicitudin Mollis euismod natoque dis arcu vel fusce mattis metus taciti pellentesque netus malesuada. Vulputate nisi taciti netus leo lobortis est at leo. Tellus semper
                          amet cum condimentum lobortis pellentesque suscipit.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-light">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-4">How do I make the payment and your payment methords?</button>
                    </h2>
                    <div id="collapse-4" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                      <div className="accordion-body bg-white">
                        <p>Cubilia suspendisse, sodales Eu odio. Ad sollicitudin Mollis euismod natoque dis arcu vel fusce mattis metus taciti pellentesque netus malesuada. Vulputate nisi taciti netus leo lobortis est at leo. Tellus semper
                          amet cum condimentum lobortis pellentesque suscipit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <form method="post" action="#">
                  <div className="row g-4">
                    <div className="col-sm-6">
                      <input type="text" className="form-control bg-light" name="name" placeholder="Your Full Name" />
                    </div>
                    <div className="col-sm-6">
                      <input type="text" className="form-control bg-light" name="email" placeholder="Email Address" />
                    </div>
                    <div className="col-sm-12">
                      <input type="text" className="form-control bg-light" name="address" placeholder="Address / Location" />
                    </div>
                    <div className="col-sm-12">
                      <input type="text" className="form-control bg-light" name="question" placeholder="Write Your Question" />
                    </div>
                    <div className="col-sm-12">
                      <textarea className="form-control bg-light" name="message" rows={6} placeholder="Message" defaultValue={""} />
                    </div>
                    <div className="col-sm-12">
                      <button className="btn btn-primary-filter rounded-0" type="submit">Send Question</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Popular Questions Section End ==============================*/}
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
        {/*============================== Banner Section Start ==============================*/}
        <div className="full-row bg-center overlay-secondary paraxify" style={{backgroundImage: 'url(/assets/images/background/3.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7">
                <div className="text-start text-white">
                  <h3 className="down-line text-white mb-4">Getting Assistence Call Our Security Team Any Situation</h3>
                  <p>You can also fill out our online form if you are interested in learning more. We are ready to keep you and your business safe and secure.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-primary-filter rounded-0">Free Consultation</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Banner Section End ==============================*/}
        {/*============================== Banner Section Start ==============================*/}
        <div className="full-row bg-center" style={{backgroundImage: 'url(/assets/images/background/6.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-12">
                <div className="d-flex align-items-center justify-content-between gap-4 text-start text-white">
                  <div>
                    <h3 className="text-white mb-4 fw-500">Book an appoitment quickly? <span className="fw-700">Call us now!</span></h3>
                    <p>We prodive a dedicated support 24/7 for any your question</p>
                  </div>
                  <div className="phone-number h1 text-white">+0962-58-58-258</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Banner Section End ==============================*/}
        {/*============================== Skills Section Start ==============================*/}
        <div className="full-row bg-gray">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-5 col-md-6">
                <div className="bg-white text-general p-35">
                  <span className="tagline text-primary text-start mb-10">10 Years Of Experience</span>
                  <h2 className="down-line text-secondary text-start mb-30">Our Awesome Skills</h2>
                  <p>Est scelerisque bibendum. Erat netus nunc magnis etiam cubilia ridiculus urna viverra. Eu. Molestie Dignissim. Pharetra lacus fringilla quis vivamus. Aliquet taciti tempor Leo eu nascetur magna inceptos quam magnis, penatibus
                    dignissim.
                  </p>
                  <p>Ridiculus nonummy ligula cras penatibus convallis cum, tellus etiam maecenas conubia. Lorem eros imperdiet per vehicula nec. Nam sociis sit mi Mollis interdum taciti nascetur. Lacus proin adipiscing elementum. Nonummy nonummy.
                    Ante sollicitudin at lectus platea magna tempor elit primis cubilia. Tempus dignissim dictum turpis porta.</p>
                  <div className="btn-wrap mt-40">
                    <a href="#" className="btn btn-primary-filter rounded-0">Request Quote</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="fact-counter ">
                  <div className="bar-progress text-secondary position-relative mb-5">
                    <span className="highlight-font">UI/UX Design</span>
                    <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                      <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={80}>0</span>%</div>
                      <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={80} aria-valuemax={100}> </div>
                    </div>
                  </div>
                  <div className="bar-progress text-secondary position-relative mb-5">
                    <span className="highlight-font">Java Development</span>
                    <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                      <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={51}>0</span>%</div>
                      <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={51} aria-valuemax={100}> </div>
                    </div>
                  </div>
                  <div className="bar-progress text-secondary position-relative mb-5">
                    <span className="highlight-font">html Programming</span>
                    <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                      <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={95}>0</span>%</div>
                      <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={95} aria-valuemax={100}> </div>
                    </div>
                  </div>
                  <div className="bar-progress text-secondary position-relative mb-5">
                    <span className="highlight-font">CMS Website</span>
                    <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                      <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={72}>0</span>%</div>
                      <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={72} aria-valuemax={100}> </div>
                    </div>
                  </div>
                  <div className="bar-progress text-secondary position-relative mb-5">
                    <span className="highlight-font">Mobile App</span>
                    <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                      <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={90}>0</span>%</div>
                      <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={90} aria-valuemax={100}> </div>
                    </div>
                  </div>
                  <div className="bar-progress text-secondary position-relative mb-5">
                    <span className="highlight-font">Computer Security</span>
                    <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                      <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={99}>0</span>%</div>
                      <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={99} aria-valuemax={100}> </div>
                    </div>
                  </div>
                  <div className="bar-progress text-secondary position-relative mb-5">
                    <span className="highlight-font">Training</span>
                    <div className="progress bg-white count wow animate__animated animate__fadeIn" data-wow-duration="0ms">
                      <div className="skill-percent highlight-font"><span className="count-num" data-speed={3000} data-stop={70}>0</span>%</div>
                      <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={70} aria-valuemax={100}> </div>
                    </div>
                  </div>
                  <div className="bar-progress text-secondary position-relative mb-5">
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
        {/*============================== Skills Section End ==============================*/}
        {/*============================== Quote Section Start ==============================*/}
        <div className="full-row bg-secondary p-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="bg-white max-md-pt-5">
                  <div className="text-white p-4 bg-primary">
                    <h3 className="text-white mb-2">Request a Quote</h3>
                    <span>Diam dignissim rutrum leo interdum etiam.</span>
                  </div>
                  <div className="quote-form p-4">
                    <form method="post" action="#">
                      <div className="row row-cols-1 g-3">
                        <div className="col">
                          <input type="text" className="form-control bg-light rounded-0" placeholder="Name" />
                        </div>
                        <div className="col">
                          <input type="text" className="form-control bg-light rounded-0" placeholder="Email" />
                        </div>
                        <div className="col">
                          <input type="text" className="form-control bg-light rounded-0" placeholder="Phone Number" />
                        </div>
                        <div className="col">
                          <textarea className="form-control bg-light rounded-0" rows={6} placeholder="Quote Detail" defaultValue={""} />
                        </div>
                        <div className="col">
                          <button className="btn btn-primary mt-20 rounded-0" type="submit" name="submit">Submit Request</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="py-5 px-4 text-white">
                  <h2 className="text-white mb-4">Emeargency Contact for Any Situtation</h2>
                  <span>We Provide Security Services That Matches Your Needs &amp; Your Budget!</span>
                  <div className="h1 max-xxs-fs-25 py-4 text-primary"><span>+1-800-912-8128</span></div>
                  <p>Diam gravida et porta porttitor morbi platea ridiculus risus donec dui libero maecenas Facilisi dolor nunc justo aliquet sociosqu id. Leo vel aliquet lorem etiam duis. Aenean adipiscing pretium purus rhoncus sem mollis. Quis
                    quisque. Taciti litora hymenaeos posuere. Aliquet feugiat pede eros pellentesque libero volutpat sociis suspendisse ac vestibulum. Imperdiet. Fermentum Natoque luctus aliquam amet.</p>
                  <p>Class quisque felis aptent. Nulla lectus ornare duis pede turpis mollis varius fermentum dignissim. Sem diam accumsan, pulvinar diam pede sociis vitae at interdum tempus habitant facilisi Molestie.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Quote Section End ==============================*/}
        {/*============================== Experience Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-5">
                <div className="bg-light text-general p-35">
                  <span className="tagline text-primary pb-2">30 Years Of Experience</span>
                  <h2 className="down-line mb-4">Our History</h2>
                  <p>Diam gravida et porta porttitor morbi platea ridiculus risus donec dui libero maecenas Facilisi dolor nunc justo aliquet sociosqu id. Leo vel aliquet lorem etiam duis. Aenean adipiscing pretium purus rhoncus sem mollis. Quis
                    quisque. Taciti litora hymenaeos posuere. Aliquet feugiat pede eros pellentesque libero volutpat sociis suspendisse ac vestibulum. Imperdiet.</p>
                  <p>Massa dignissim nibh. Sapien rutrum. Gravida faucibus felis etiam nostra nisl est, pulvinar, sagittis dignissim tempor praesent molestie hymenaeos pulvinar tristique montes. Dapibus in. Phasellus fusce ligula ipsum praesent
                    consectetuer nostra.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-primary-filter rounded-0">Request Quote</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">2015</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">Standing Strong Today</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                    <div className="mt-3">
                      <a href="#" className="btn-link fst-italic">Continue...</a>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">2004</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">International Coverage</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                    <div className="mt-3">
                      <a href="#" className="btn-link fst-italic">Continue...</a>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">1997</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">Making Some Rules</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                    <div className="mt-3">
                      <a href="#" className="btn-link fst-italic">Continue...</a>
                    </div>
                  </div>
                </div>
                <div className="vertical-timeline d-flex pb-4">
                  <span className="d-table h5 text-secondary">1990</span>
                  <div className="ps-5">
                    <h5 className="text-secondary mb-3">Birth of The Firm</h5>
                    <p>Ad euismod. Purus mollis suscipit, mattis integer cum accumsan lobortis scelerisque dolor metus torquent curae; luctus. Justo pharetra lorem sociis lectus integer litora libero fames, sapien justo sem</p>
                    <div className="mt-3">
                      <a href="#" className="btn-link fst-italic">Continue...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Experience Section End ==============================*/}
        {/*============================== Service information Section Start ==============================*/}
        <div className="full-row bg-secondary">
          <div className="container">
            <div className="row row-cols-lg-3 row-cols-1 gy-5">
              <div className="col">
                <div className="text-white">
                  <h5 className="mb-4 text-white">Risus nam nostra sociis curabitur inceptos potenti nibh malesuada Auctor habitasse.</h5>
                  <p>Torquent felis lobortis suscipit lacinia arcu a rhoncus ligula parturient risus consequat commodo phasellus enim suscipit posuere.</p>
                  <div className="mt-3">
                    <a href="#" className="btn-link text-primary">Best Offers</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-white">
                  <h5 className="mb-4 text-white">Libero condimentum fringilla proin. Nonummy curabitur. Neque, vehicula phasellus.</h5>
                  <p>Torquent felis lobortis suscipit lacinia arcu a rhoncus ligula parturient risus consequat commodo phasellus enim suscipit posuere.</p>
                  <div className="mt-3">
                    <a href="#" className="btn-link text-primary">Career Information</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="bg-primary text-secondary position-relative p-5 md-my-0" style={{margin: '-120px 0', zIndex: 100}}>
                  <span className="h6">Service Information</span>
                  <h5 className="mb-4">Company &amp; Service Story</h5>
                  <p>Risus turpis pede tempor turpis. Facilisis tellus enim habitant sapien duis euismod Lobortis purus sed tellus pede erat dis auctor fames cum eget et laoreet aenean pede pretium donec penatibus eget to consequat suspendisse.
                    Penatibus aliquet morbi justo phasellus senectus Platea iaculis ridiculus eu ullamcorper.</p>
                  <div className="mt-4">
                    <a href="#" className="btn btn-secondary rounded-0">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Service information Section End ==============================*/}
        {/*============================== Who We Are Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row row-cols-lg-2 row-cols-1 gy-4">
              <div className="col">
                <h4 className="mb-4">Who We Are?</h4>
                <p>Congue molestie elit. Velit phasellus pulvinar citudin. Turpis massa facilisis leo. Donec cras lectus quisque enim fusce mi. Elit Integer pendisse senectus ictum primis. Magna proin aenean quam purus tortor libero habitant elit
                  facilisi Per lentesque interdum sem libero eleifend aliquam consequat conubia leo nullam magnis condimentum ut abitant gravida nibh phasellus consectetuer lobortis orci eu tempus magna ligula. Nonummy tellus commodo tortor
                  curabitur non justo semper parturient sagittis diam mattis, netus integer fusce</p>
              </div>
              <div className="col">
                <h4 className="mb-4">We are ready for all challenges</h4>
                <p>Congue molestie elit. Velit phasellus pulvinar citudin. Turpis massa facilisis leo. Donec cras lectus quisque enim fusce mi. Elit Integer pendisse senectus ictum primis. Magna proin aenean quam purus tortor libero habitant elit
                  facilisi Per lentesque interdum sem libero eleifend aliquam consequat conubia leo nullam magnis condimentum ut abitant gravida nibh phasellus consectetuer lobortis orci eu tempus magna ligula. Nonummy tellus commodo tortor
                  curabitur non justo semper parturient sagittis diam mattis, netus integer fusce</p>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Who We Are Section End ==============================*/}
        {/*============================== Services specility Section Start ==============================*/}
        <div className="full-row p-0">
          <div className="container-fluid p-0">
            <div className="row row-cols-xl-2 row-cols-1 g-0">
              <div className="col">
                <div className="p-5 bg-primary h-100 list-py-5">
                  <h4 className="text-secondary mb-4">Specility of Our Services</h4>
                  <div className="list-width-half min-md icon-in-list list-icon-2 list-icon-center list-icon-secondary list-text-secondary list-lh-auto list-py-5 mt-4">
                    <ul>
                      <li>Master key systems</li>
                      <li>High security cylinders</li>
                      <li>Changing and rekeying locks</li>
                      <li>Keyless entry systems</li>
                      <li>Fast lock out service</li>
                      <li>Installation and repair of locks</li>
                      <li>Window locks</li>
                      <li>Deadlocks &amp; Padlocks</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="p-5 bg-secondary text-white h-100">
                  <h4 className="text-white mb-3">Fast Response Time Guaranteed</h4>
                  <p>Congue molestie elit. Velit phasellus pulvinar citudin. Turpis massa facilisis leo. Donec cras lectus quisque enim fusce mi. Elit Integer pendisse senectus ictum primis. Magna proin aenean quam purus tortor libero habitant
                    elit facilisi Per lentesque interdum sem libero eleifend aliquam consequat conubia.</p>
                  <div className="h4 text-primary w-100 mt-3">Call : 902 - 000 - 99999</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Services specility Section End ==============================*/}
        {/*============================== Our team Section Start ==============================*/}
        <div className="full-row pb-0">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-5">
                <img src="/assets/images/thumb/height-2.png" alt="image not found" />
              </div>
              <div className="col-lg-7">
                <span className="tagline text-secondary text-start mb-1">Our Team</span>
                <h4 className="down-line text-secondary text-start mb-30">Experience &amp; Techinical Power</h4>
                <p>Dui torquent gravida ante hendrerit donec condimentum magna lacus consectetuer a dictum ad eu iaculis, habitasse blandit rhoncus ullamcorper. Curabitur vivamus est. Suscipit quis elit venenatis dapibus mus venenatis lobortis volutpat
                  dis. Dapibus venenatis. Risus fusce. Nulla dictumst sociis feugiat habitasse dignissim class feugiat. Nisi odio integer parturient eu non tortor dignissim sociis faucibus, sit dui class Nascetur aenean montes massa maecenas
                  dolor sed scelerisque velit.</p>
                <p>Congue molestie elit. Velit phasellus pulvinar citudin. Turpis massa facilisis leo. Donec cras lectus quisque enim fusce mi. Elit Integer pendisse senectus ictum primis. Magna proin aenean quam purus tortor libero habitant elit
                  facilisi Per lentesque interdum sem libero eleifend aliquam consequat.</p>
                <div className="list-width-half min-md icon-in-list list-icon-2 list-icon-center list-icon-secondary list-text-secondary list-lh-auto list-py-5 mt-30">
                  <ul>
                    <li>Master key systems</li>
                    <li>High security cylinders</li>
                    <li>Changing and rekeying locks</li>
                    <li>Keyless entry systems</li>
                    <li>Fast lock out service</li>
                    <li>Installation and repair of locks</li>
                    <li>Window locks</li>
                    <li>Deadlocks &amp; Padlocks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Our team Section End ==============================*/}
        {/*============================== Choose Us Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 wow animate__animated animate__fadeIn" data-wow-delay="100ms" data-wow-duration="1000ms">
                <span className="tagline text-uppercase text-primary text-center mb-10">People <i className="fas fa-heart mx-2" /> Us</span>
                <h2 className="text-secondary text-center mb-30">Why they choose us</h2>
                <span className="sub-title fs-15 ordinary-font fst-normal text-general text-center mb-50">Simple. Powerful. Reliable. Faster. Winning Award Support. Hack-free Protection. Better Pricing. And many more features that made many people love us.</span>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-5 offset-lg-1 order-lg-2">
                <div className="md-mb-30">
                  <img src="/assets/images/extra/4.png" alt />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <h3 className="down-line-primary mb-3">Multiple Data Center</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className="list-width-half min-md icon-in-list list-icon-1 list-icon-center list-icon-primary list-lh-auto list-py-5 mt-4">
                  <ul>
                    <li>US server</li>
                    <li>Singapore</li>
                    <li>United Kingdom</li>
                    <li>Australia</li>
                    <li>Indonesia</li>
                    <li>South Africa</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-5">
                <div className="md-mb-30">
                  <img src="/assets/images/extra/5.png" alt />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <h3 className="down-line-extra2 mb-3">Optimized Wordpress</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className="list-width-half min-md icon-in-list list-icon-1 list-icon-center list-icon-extra2 list-lh-auto list-py-5 mt-4">
                  <ul>
                    <li>Wordpress ready in 5 minutes</li>
                    <li>Avg. 0.76s page load time</li>
                    <li>Optimized theme &amp; plugins</li>
                    <li>30 days moneyback uaranteed</li>
                    <li>Scure wordpress</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-5 offset-lg-1 order-lg-2">
                <div className="md-mb-30">
                  <img src="/assets/images/extra/6.png" alt />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <h3 className="down-line-extra1 mb-3">Green Server Technology</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className="list-width-half min-md icon-in-list list-icon-1 list-icon-center list-icon-extra1 list-lh-auto list-py-5 mt-4">
                  <ul>
                    <li>Save energy</li>
                    <li>Reduce C02 Emissions</li>
                    <li>Save our earth</li>
                    <li>Substantially lower electricity costs</li>
                    <li>Save our childern</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="md-mb-30">
                  <img src="/assets/images/extra/7.png" alt />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <h3 className="down-line-extra3 mb-3">Extra Protection for Ultimate Plans</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className="list-width-half min-md icon-in-list list-icon-1 list-icon-center list-icon-extra3 list-lh-auto list-py-5 mt-4">
                  <ul>
                    <li>Malware scan</li>
                    <li>Web application firewall</li>
                    <li>Site covered</li>
                    <li>Wordpress antivirus</li>
                    <li>Blacklist scan</li>
                    <li>Instant alert</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Choose Us Section End ==============================*/}
        <div className="full-row gradient-bg-9">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h1 className="text-white fs-80 fw-100 mb-4">The World's Leading Hosting Company</h1>
                <span className="text-white fs-18 fw-400">We have many awards since 2010.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="full-row overlay-secondary paraxify" style={{backgroundImage: 'url(/assets/images/background/1.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-9">
                <span className="tagline text-white text-center mb-10">We’ve added a new exciting feature in v2.0.</span>
                <h1 className="text-white fs-80 fw-500 mb-5">Do you have any question? Feel free to contact us</h1>
                <div className="custom-btn-group-1 d-flex justify-content-center">
                  <a href="#" className="btn btn-white">Contact Us</a>
                  <a href="#" className="btn btn-outline-white">Work with us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="full-row">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="owl-mx-4">
                  <div className="2block-carousel owl-carousel nav-disable dot-disable autoplay-on">
                    <div className="item">
                      <div className="portfolio-style-1 bg-gray p-50 transition-all">
                        <span className="number">1</span>
                        <h3 className="mb-4"><a href="#">Organizational <br /> design for business</a></h3>
                        <img src="/assets/images/clipart/2.png" alt="Image Not Found !" />
                      </div>
                    </div>
                    <div className="item">
                      <div className="portfolio-style-1 bg-gray p-50 transition-all">
                        <span className="number">2</span>
                        <h3 className="mb-4"><a href="/portfolio-details.html">Solve customer <br />problems in a flash</a></h3>
                        <img src="/assets/images/clipart/2.png" alt="Image Not Found !" />
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
