export default function ElementAchievementPage() {
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
                    <h1 className="page-title mb-0">Achievement</h1>
                  </div>
                  <nav>
                    <ol className="breadcrumb mb-0 greater-than">
                      <li className="breadcrumb-item"><a href="/index.html" className="text-secondary hover-text-primary">Home</a></li>
                      <li className="breadcrumb-item"><span className="text-secondary">Elements</span></li>
                      <li className="breadcrumb-item"><span style={{color: '#6c757d'}} className="last">Achievement</span></li>
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
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h3 className="text-secondary mb-30 text-center down-line">Full Box Grid Counter</h3>
              </div>
            </div>
            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 fact-counter gy-4">
              <div className="col">
                <div className="text-center bg-light h-100 p-30 d-flex flex-column justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 position-relative mb-10">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={3145}>0</span>
                    <h5 className="text-dark mb-0">Best Online Support</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-center bg-light h-100 p-30 d-flex flex-column justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 position-relative mb-10">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={8710}>0</span>
                    <h5 className="text-dark mb-0">Available Products</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-center bg-light h-100 p-30 d-flex flex-column justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 position-relative mb-10">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={1763}>0</span>
                    <h5 className="text-dark mb-0">Register Seller</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-center bg-light h-100 p-30 d-flex flex-column justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 position-relative mb-10">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={9562}>0</span>
                    <h5 className="text-dark mb-0">Customer Feedback</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-lg-12">
                <h3 className="text-secondary mb-30 text-center down-line">Icon Box Grid Counter</h3>
              </div>
            </div>
            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 fact-counter gy-4">
              <div className="col">
                <div className="text-center h-100 d-flex flex-column justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 bg-light position-relative mb-10">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={3145}>0</span>
                    <h5 className="text-dark mb-0">Best Online Support</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-center h-100 d-flex flex-column justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 bg-light position-relative mb-10">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={8710}>0</span>
                    <h5 className="text-dark mb-0">Available Products</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-center h-100 d-flex flex-column justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 bg-light position-relative mb-10">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={1763}>0</span>
                    <h5 className="text-dark mb-0">Register Seller</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-center h-100 d-flex flex-column justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 bg-light position-relative mb-10">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={9562}>0</span>
                    <h5 className="text-dark mb-0">Customer Feedback</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-lg-12">
                <h3 className="text-secondary mb-30 text-center down-line">Full Box List Counter</h3>
              </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 fact-counter gy-4">
              <div className="col">
                <div className="text-start bg-light h-100 p-30 d-flex flex-row justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 position-relative me-20">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={3145}>0</span>
                    <h5 className="text-dark mb-0">Best Online Support</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-start bg-light h-100 p-30 d-flex flex-row justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 position-relative me-20">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={8710}>0</span>
                    <h5 className="text-dark mb-0">Available Products</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-start bg-light h-100 p-30 d-flex flex-row justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 position-relative me-20">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={1763}>0</span>
                    <h5 className="text-dark mb-0">Register Seller</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-lg-12">
                <h3 className="text-secondary mb-30 text-center down-line">Icon Box List Counter</h3>
              </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 fact-counter gy-4">
              <div className="col">
                <div className="text-start h-100 d-flex flex-row justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 bg-light position-relative me-20">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={3145}>0</span>
                    <h5 className="text-dark mb-0">Best Online Support</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-start h-100 d-flex flex-row justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 bg-light position-relative me-20">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={8710}>0</span>
                    <h5 className="text-dark mb-0">Available Products</h5>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-start h-100 d-flex flex-row justify-content-center align-items-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <div className="box-100 bg-light position-relative me-20">
                    <i className="flaticon-business-and-finance flat-60 position-absolute xy-center text-primary" />
                  </div>
                  <div className="counter-content">
                    <span className="count-num d-block text-dark h1" data-speed={3000} data-stop={1763}>0</span>
                    <h5 className="text-dark mb-0">Register Seller</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Achievement 1 section start ==============================*/}
        <div className="full-row overlay-secondary paraxify" style={{backgroundImage: 'url(/assets/images/background/1.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 fact-counter gy-4">
              <div className="col">
                <div className="text-center count wow animate__animated animate__fadeInUp" data-wow-delay="200ms" data-wow-duration="900ms">
                  <span className="count-num text-primary h1" data-speed={3000} data-stop={580}>0</span>
                  <div className="text-white text-center down-line h5 pt-2">Deal Complete</div>
                </div>
              </div>
              <div className="col">
                <div className="text-center count wow animate__animated animate__fadeInUp" data-wow-delay="400ms" data-wow-duration="900ms">
                  <span className="count-num text-primary h1" data-speed={3000} data-stop={1530}>0</span>
                  <div className="text-white text-center down-line h5 pt-2">Provide Security</div>
                </div>
              </div>
              <div className="col">
                <div className="text-center count wow animate__animated animate__fadeInUp" data-wow-delay="600ms" data-wow-duration="900ms">
                  <span className="count-num text-primary h1" data-speed={3000} data-stop={25}>0</span>
                  <div className="text-white text-center down-line h5 pt-2">Satisfied Client</div>
                </div>
              </div>
              <div className="col">
                <div className="text-center count wow animate__animated animate__fadeInUp" data-wow-delay="800ms" data-wow-duration="900ms">
                  <span className="count-num text-primary h1" data-speed={3000} data-stop={2130}>0</span>
                  <div className="text-white text-center down-line h5 pt-2">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Achievement 1 section end ==============================*/}
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
        {/*============================== Achievement 3 Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <span className="tagline text-center text-primary mb-10">About Us</span>
                <h2 className="down-line text-center text-secondary mb-30">Set your goals high, and don't stop till you get there.</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <span className="sub-title fs-18 ordinary-font fw-400 text-center d-table mx-auto mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus quam ultricies eget aliquam imperdiet. Tristique mattis nunc. Lacinia sagittis nec aliquet, mollis habitant pede Faucibus egestas iaculis tellus curae.</span>
              </div>
            </div>
            <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 gy-5 fact-counter">
              <div className="col">
                <div className="count text-center wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                  <span className="count-num h1 text-primary fw-400" data-speed={3000} data-stop={3000}>0</span>
                  <div className="text-general fs-18 pt-2">User</div>
                </div>
              </div>
              <div className="col">
                <div className="count text-center wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                  <span className="count-num h1 text-primary fw-400" data-speed={3000} data-stop={985000}>0</span><span className="text-primary font-large">$</span>
                  <div className="text-general fs-18 pt-2">Earned</div>
                </div>
              </div>
              <div className="col">
                <div className="count text-center wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                  <span className="count-num h1 text-primary fw-400" data-speed={3000} data-stop={2019}>0</span>
                  <div className="text-general fs-18 pt-2">In Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Achievement 3 Section End ==============================*/}
        {/*============================== Achievement 4 Section Start ==============================*/}
        <div className="full-row overlay-secondary paraxify" style={{backgroundImage: 'url(/assets/images/background/1.png)', backgroundRepeat: 'no-repeat'}}>
          <div className="container">
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-5">
              <div className="col">
                <div className="fact-counter achievement-style-1 transition-all">
                  <div className="achievement-wrapper d-flex flex-column align-items-center text-center p-0">
                    <div className="bg-secondary hover-bg-primary hover-radial-out box-100 rounded-circle flex-shrink-0 mb-4">
                      <i className="flaticon-business-and-finance flat-45 position-absolute xy-center text-white hover-text-dark" />
                    </div>
                    <div className="achievement-info">
                      <div className="count wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                        <span className="count-num h1 text-primary fw-400" data-speed={3000} data-stop={5420}>0</span>
                        <div className="text-white fs-18 pt-2">Expert Members</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fact-counter achievement-style-1 transition-all">
                  <div className="achievement-wrapper d-flex flex-column align-items-center text-center p-0">
                    <div className="bg-secondary hover-bg-primary hover-radial-out box-100 rounded-circle flex-shrink-0 mb-4">
                      <i className="icon flaticon-business-and-finance flat-45 position-absolute xy-center text-white hover-text-dark" />
                    </div>
                    <div className="achievement-info">
                      <div className="count wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                        <span className="count-num h1 text-primary fw-400" data-speed={3000} data-stop={985000}>0</span>
                        <div className="text-white fs-18 pt-2">Satisfied Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fact-counter achievement-style-1 transition-all">
                  <div className="achievement-wrapper d-flex flex-column align-items-center text-center p-0">
                    <div className="bg-secondary hover-bg-primary hover-radial-out box-100 rounded-circle flex-shrink-0 mb-4">
                      <i className="icon flaticon-business-and-finance flat-45 position-absolute xy-center text-white hover-text-dark" />
                    </div>
                    <div className="achievement-info">
                      <div className="count wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                        <span className="count-num h1 text-primary fw-400" data-speed={3000} data-stop={2019}>0</span>
                        <div className="text-white fs-18 pt-2">Problem Solve</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="fact-counter achievement-style-1 transition-all">
                  <div className="achievement-wrapper d-flex flex-column align-items-center text-center p-0">
                    <div className="bg-secondary hover-bg-primary hover-radial-out box-100 rounded-circle flex-shrink-0 mb-4">
                      <i className="icon flaticon-business-and-finance flat-45 position-absolute xy-center text-white hover-text-dark" />
                    </div>
                    <div className="achievement-info">
                      <div className="count wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                        <span className="count-num h1 text-primary fw-400" data-speed={3000} data-stop={2019}>0</span>
                        <div className="text-white fs-18 pt-2">Award Winner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Achievement 4 Section End ==============================*/}
        {/*============================== Achievement 5 Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="border rounded-10 border-gray py-50">
                  <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-5">
                    <div className="col">
                      <div className="fact-counter achievement-style-3 transition-all">
                        <div className="achievement-wrapper d-flex flex-column align-items-center text-center p-0">
                          <div className="icon-wrapper flex-shrink-0 mb-3">
                            <i className="fas fa-tasks fa-3x text-primary" />
                          </div>
                          <div className="achievement-info">
                            <div className="count wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                              <span className="count-num h1 text-dark fw-500" data-speed={3000} data-stop={1320}>0</span>
                              <div className="text-general fs-15 fw-500 pt-2">Projects completed</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="fact-counter achievement-style-3 transition-all">
                        <div className="achievement-wrapper d-flex flex-column align-items-center text-center p-0">
                          <div className="icon-wrapper flex-shrink-0 mb-3">
                            <i className="fas fa-user-check fa-3x text-primary" />
                          </div>
                          <div className="achievement-info">
                            <div className="count wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                              <span className="count-num h1 text-dark fw-500" data-speed={3000} data-stop={50}>0</span>
                              <div className="text-general fs-15 fw-500 pt-2">Active clients</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="fact-counter achievement-style-3 transition-all">
                        <div className="achievement-wrapper d-flex flex-column align-items-center text-center p-0">
                          <div className="icon-wrapper flex-shrink-0 mb-3">
                            <i className="fas fa-clipboard-check fa-3x text-primary" />
                          </div>
                          <div className="achievement-info">
                            <div className="count wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                              <span className="count-num h1 text-dark fw-500" data-speed={3000} data-stop={2190}>0</span>
                              <div className="text-general fs-15 fw-500 pt-2">Problem Solve</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="fact-counter achievement-style-3 transition-all">
                        <div className="achievement-wrapper d-flex flex-column align-items-center text-center p-0">
                          <div className="icon-wrapper flex-shrink-0 mb-3">
                            <i className="fas fa-vials fa-3x text-primary" />
                          </div>
                          <div className="achievement-info">
                            <div className="count wow animate__animated animate__fadeIn" data-wow-delay="200ms" data-wow-duration="300ms">
                              <span className="count-num h1 text-dark fw-500" data-speed={3000} data-stop={35}>0</span>
                              <div className="text-general fs-15 fw-500 pt-2">Years of Experience</div>
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
        </div>
        {/*============================== Achievement 5 Section End ==============================*/}
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
