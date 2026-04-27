export default function IndexFinancingPage() {
  return (
    <>
      <div id="page-wrapper">
        {/*============================== Header Section Start ==============================*/}
        <header id="header" className="nav-on-banner">
          <div className="top-header d-none d-lg-block py-10 bg-primary font-400">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 top-header-col">
                  <ul className="address-menu d-flex flex-nowrap text-white gap-4">
                    <li className="d-flex align-items-center gap-1"><i className="fas fa-phone" /> (+1) 828-376-0532</li>
                    <li className="d-flex align-items-center gap-1"><i className="fas fa-envelope" /> Info@patron.com</li>
                    <li className="d-flex align-items-center gap-1"><i className="far fa-clock" /> Mon - Sat: 8.00 - 17.00, Sunday Closed</li>
                  </ul>
                </div>
                <div className="col-lg-5 d-flex top-header-col justify-content-end align-items-center">
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
                          <a href="#" className="customer-signinup text-white"><i className="flaticon-user-3 flat-15 me-1" />Register or Sign In</a>
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
                  <nav className="navbar navbar-expand-lg navbar-light nav-dark nav-primary-hover nav-primary-active">
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/9.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar-content" aria-controls="main-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="main-navbar-content">
                      <ul className="navbar-nav justify-content-center">
                        <li className="nav-item">
                          <a className="nav-link" href="/index-financing.html">Home</a>
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
                      <div className="navbar-nav nav-element mx-4">
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
                      <div className="header-cart-2">
                        <a href="#" className="cart has-cart-data top-quantity d-flex gap-1 text-dark" title="View Cart">
                          <div className="cart-icon"><i className="flaticon-shopping-cart-1 flat-small text-dark" /> <span className="header-cart-count">2</span></div>
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
                              <a href="#" className="button wc-forward">View cart</a>
                              <a href="#" className="button checkout wc-forward">Checkout</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="header-sticky bg-white py-10">
            <div className="container">
              <div className="row align-items-center">
                <div className="col">
                  <nav className="navbar navbar-expand-lg navbar-light nav-dark nav-primary-hover nav-primary-active">
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/9.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sticky-navbar-content" aria-controls="sticky-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="sticky-navbar-content">
                      <ul className="navbar-nav justify-content-center">
                        <li className="nav-item">
                          <a className="nav-link" href="/index-security.html">Home</a>
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
                      <div className="navbar-nav nav-element mx-4">
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
                      <div className="header-cart-2">
                        <a href="#" className="cart has-cart-data top-quantity d-flex gap-1 text-dark" title="View Cart">
                          <div className="cart-icon"><i className="flaticon-shopping-cart-1 flat-small text-dark" /> <span className="header-cart-count">2</span></div>
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
                              <a href="#" className="button wc-forward">View cart</a>
                              <a href="#" className="button checkout wc-forward">Checkout</a>
                            </div>
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
          <div id="rev_slider_1058_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="agency" data-source="gallery" style={{backgroundColor: '#222222', padding: 0}}>
            {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
            <div id="rev_slider_1058_1" className="rev_slider fullscreenbanner" style={{display: 'none'}} data-version="5.4.1">
              <ul>
                {/* SLIDE  */}
                <li data-index="rs-2971" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="default" data-masterspeed={2000} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                  {/* MAIN IMAGE */}
                  <img src="/assets/images/slider/12.png" alt data-bgposition="center center" data-kenburns="on" data-duration={30000} data-ease="Linear.easeNone" data-scalestart={120} data-scaleend={100} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax={3} className="rev-slidebg" data-no-retina />
                  {/* LAYERS */}
                  {/* LAYER NR. 4 */}
                  <div className="tp-caption Agency-SubTitle tp-resizeme" id="slide-2971-layer-5" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-180','-180','-180','-150']" data-width="['600','500','400','300']" data-height="none" data-whitespace="['nowrap','nowrap','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:30px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[50,0,0,0]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 9, whiteSpace: 'nowrap', fontFamily: '"Barlow"', letterSpacing: 3, textTransform: 'uppercase', fontSize: 18, color: '#1d1e20'}}>Welcome to Patron Web Agency</div>
                  {/* LAYER NR. 5 */}
                  <div className="tp-caption Agency-Title tp-resizeme" id="slide-2971-layer-1" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-50','-50']" data-fontsize="['80','60','40','30']" data-lineheight="['100','80','60','50']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[45,0,0,0]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8, whiteSpace: 'nowrap', fontFamily: '"Barlow"', color: '#1d1e20', fontWeight: 500, textAlign: 'left'}}>Do <span style={{color: '#2c724f', fontWeight: 700}}>invest</span> in business<br />get consultation?</div>
                  {/* LAYER NR. 5 */}
                  <div className="tp-caption Agency-Title tp-resizeme" id="slide-2971-layer-2" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['120','120','120','90']" data-fontsize="['18','18','18','18']" data-lineheight="['30','30','30','30']" data-width="['600','500','450','360']" data-height="none" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:3000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[50,0,0,0]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8, whiteSpace: 'nowrap', fontFamily: '"Barlow"', color: '#1d1e20', fontWeight: 500, textAlign: 'left'}}>Faucibus orci luctus - ut pharetra augue. Nullam non sapien quam. Nullam egestas, elit a viverra malesuada. Wondering ipsum dolor sit amet?</div>
                  {/* LAYER NR. 6 */}
                  <a data-fancybox className="tp-caption rev-btn tp-resizeme bg-primary" href="https://www.youtube.com/watch?v=0HnHUBeIBqU" target="_blank" id="slide-411-layer-2" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['220','220','220','220']" data-width="none" data-height="none" data-whitespace="['nowrap','nowrap','nowrap','nowrap']" data-type="button" data-actions data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;4500&quot;,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;fb:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[50,0,0,0]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[35,35,35,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[35,35,35,25]" style={{zIndex: 7, whiteSpace: 'normal', fontSize: 15, borderRadius: 30, lineHeight: 60, fontWeight: 500, color: '#fff', display: 'inline-block', fontFamily: 'Barlow', textTransform: 'uppercase', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}>Discover More</a>
                </li>
                <li data-index="rs-2970" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="default" data-masterspeed={2000} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                  {/* MAIN IMAGE */}
                  <img src="/assets/images/slider/13.png" alt data-bgposition="center center" data-kenburns="on" data-duration={30000} data-ease="Linear.easeNone" data-scalestart={120} data-scaleend={100} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax={3} className="rev-slidebg" data-no-retina />
                  {/* LAYERS */}
                  {/* LAYER NR. 4 */}
                  <div className="tp-caption Agency-SubTitle tp-resizeme" id="slide-2971-layer-6" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-180','-180','-180','-150']" data-width="['600','500','400','300']" data-height="none" data-whitespace="['nowrap','nowrap','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:30px;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[50,0,0,0]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 9, whiteSpace: 'nowrap', fontFamily: '"Barlow"', letterSpacing: 3, textTransform: 'uppercase', fontSize: 18, color: '#1d1e20'}}>Welcome to Patron Web Agency</div>
                  {/* LAYER NR. 5 */}
                  <div className="tp-caption Agency-Title tp-resizeme" id="slide-2971-layer-3" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-50','-50']" data-fontsize="['80','60','40','30']" data-lineheight="['100','80','60','50']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[45,0,0,0]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8, whiteSpace: 'nowrap', fontFamily: '"Barlow"', color: '#1d1e20', fontWeight: 500, textAlign: 'left'}}>Do <span style={{color: '#2c724f', fontWeight: 700}}>invest</span> in business<br />get consultation?</div>
                  {/* LAYER NR. 5 */}
                  <div className="tp-caption Agency-Title tp-resizeme" id="slide-2971-layer-4" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['120','120','120','90']" data-fontsize="['18','18','18','18']" data-lineheight="['30','30','30','30']" data-width="['600','500','450','360']" data-height="none" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:3000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[50,0,0,0]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8, whiteSpace: 'nowrap', fontFamily: '"Barlow"', color: '#1d1e20', fontWeight: 500, textAlign: 'left'}}>Faucibus orci luctus - ut pharetra augue. Nullam non sapien quam. Nullam egestas, elit a viverra malesuada. Wondering ipsum dolor sit amet?</div>
                  {/* LAYER NR. 6 */}
                  <a data-fancybox className="tp-caption rev-btn tp-resizeme bg-primary" href="https://www.youtube.com/watch?v=0HnHUBeIBqU" target="_blank" id="slide-411-layer-3" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['220','220','220','220']" data-width="none" data-height="none" data-whitespace="['nowrap','nowrap','nowrap','nowrap']" data-type="button" data-actions data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;4500&quot;,&quot;speed&quot;:2500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;fb:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[50,0,0,0]" data-textalign="['left','left','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[35,35,35,25]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[35,35,35,25]" style={{zIndex: 7, whiteSpace: 'normal', fontSize: 15, borderRadius: 30, lineHeight: 60, fontWeight: 500, color: '#fff', display: 'inline-block', fontFamily: 'Barlow', textTransform: 'uppercase', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}>Discover More</a>
                </li>
              </ul>
              <div className="tp-bannertimer tp-bottom" style={{visibility: 'hidden !important'}} />
            </div>
          </div>
          {/* END REVOLUTION SLIDER */}
        </div>
        {/*============================== Slider Section End ==============================*/}
        {/*============================== Banner Section Start ==============================*/}
        <div className="full-row bg-center py-5" style={{backgroundImage: 'url(/assets/images/background/6.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-12">
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 text-start text-white">
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
        {/*============================== About company Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-6 d-none d-lg-block">
                <div className="position-relative">
                  <img src="/assets/images/extra/9.png" alt="image not found!" />
                </div>
              </div>
              <div className="col-lg-6">
                <span className="tagline text-general mb-10 text-uppercase">About Consulte</span>
                <h1 className="text-secondary mb-30 fw-500">Leading <span className="fw-700 text-primary">Financial <br /> Consulting</span> Company</h1>
                <p>Consulte is located in the former rectory of St. Peter’s Episcopal Church. Over our 14 year history, we have treated patients from over 114 different countries in the world. In 2010, we imposed geographical restrictions for the
                  first time. Existing patients were not affected by this change, but new patients are now</p>
                <p>We have compiled an extensive list of other area clinics and health resources, so that when someone calls from outside of our geographical area.</p>
                <div className="d-flex mt-40">
                  <div className="content">
                    <span className="signature display-6">Johone Doe</span>
                    <h5 className="text-dark mb-0">Founder</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== About company Section End ==============================*/}
        <div className="full-row p-0">
          <div className="container">
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
          </div>
        </div>
        {/*============================== Icon Grid Thumb Section Start ==============================*/}
        <div className="full-row bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <span className="tagline text-general mb-10 text-uppercase">our services</span>
                <h1 className="text-secondary mb-40 fw-500"><span className="fw-700 text-primary">Best Solutions</span> For Your Business</h1>
              </div>
            </div>
            <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 g-0 thumb-style-8 entry-wrapper-bg-white hoven">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-insurance-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="#">Strategy</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-dark btn-hover-downline-1" href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-business-and-finance flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="#">Financial</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-dark btn-hover-downline-1" href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-life-insurance flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="#">Insurance</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-dark btn-hover-downline-1" href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-real-estate flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="#">Estate</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-dark btn-hover-downline-1" href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-partner flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="#">Audit &amp; Evaluation</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-dark btn-hover-downline-1" href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-money-bag flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="#">Taxes &amp; Efficiency</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-dark btn-hover-downline-1" href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-online-booking flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="#">Consumer Market</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-dark btn-hover-downline-1" href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-start text-start p-35 transition-all">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <i className="icon flaticon-security-1 flat-45 text-dark" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper pt-20">
                    <div className="entry-header">
                      <h5 className="entry-title mb-3"><a className="text-dark hover-text-primary" href="#">Logistic</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Donec et platea maecenas iaculis purus consequat et to posuere volutpat.</p>
                    </div>
                    <div className="entry-footer">
                      <div className="mt-4"><a className="btn-link text-dark btn-hover-downline-1" href="#">Learn More</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Icon Grid Thumb Section End ==============================*/}
        {/*============================== Latest Projects Section Start ==============================*/}
        <div className="full-row bg-white pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <span className="tagline text-general mb-10 text-uppercase">Latest Projects</span>
                <h1 className="text-secondary mb-40 fw-500">See Our <span className="fw-700 text-primary">Successful Businesses</span></h1>
              </div>
              <div className="col-lg-3">
                <div className="d-flex h-100 align-items-center justify-content-end">
                  <a className="btn-link text-dark hover-text-primary btn-hover-downline-1 text-uppercase" href="#">All Cases <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row g-1 gallery-style-2 hover-img-grayscale-0 transition-all">
              <div className="col-lg-6">
                <div className="row g-1">
                  <div className="col-lg-6">
                    <div className="entry-wrapper d-flex flex-column align-items-center position-relative text-start">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail">
                          <img src="/assets/images/thumb/2.webp" alt="Image not found !" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper">
                        <div className="entry-header">
                          <h6 className="entry-title mb-0"><a className="text-secondary hover-text-primary" href="/gallery-detail.html">Binifox Busines</a></h6>
                          <span className="fs-12">Busines, Agency</span>
                        </div>
                        <div className="entry-content">
                          <a href="/assets/images/thumb/2.webp" data-fancybox data-caption="Caption for single image"><i className="far fa-plus-square" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="entry-wrapper d-flex flex-column align-items-center position-relative text-start">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail">
                          <img src="/assets/images/thumb/3.webp" alt="Image not found !" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper">
                        <div className="entry-header">
                          <h6 className="entry-title mb-0"><a className="text-secondary hover-text-primary" href="/gallery-detail.html">Binifox Busines</a></h6>
                          <span className="fs-12">Busines, Agency</span>
                        </div>
                        <div className="entry-content">
                          <a href="/assets/images/thumb/3.webp" data-fancybox data-caption="Caption for single image"><i className="far fa-plus-square" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="entry-wrapper d-flex flex-column align-items-center position-relative text-start">
                      <div className="entry-thumbnail-wrapper">
                        <div className="post-thumbnail">
                          <img src="/assets/images/thumb/4.webp" alt="Image not found !" />
                        </div>
                      </div>
                      <div className="entry-content-wrapper">
                        <div className="entry-header">
                          <h6 className="entry-title mb-0"><a className="text-secondary hover-text-primary" href="/gallery-detail.html">Binifox Busines</a></h6>
                          <span className="fs-12">Busines, Agency</span>
                        </div>
                        <div className="entry-content">
                          <a href="/assets/images/thumb/4.webp" data-fancybox data-caption="Caption for single image"><i className="far fa-plus-square" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="entry-wrapper d-flex flex-column align-items-center position-relative text-start">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail">
                      <img src="/assets/images/thumb/1.webp" alt="Image not found !" />
                    </div>
                  </div>
                  <div className="entry-content-wrapper">
                    <div className="entry-header">
                      <h6 className="entry-title mb-0"><a className="text-secondary hover-text-primary" href="/gallery-detail.html">Binifox Busines</a></h6>
                      <span className="fs-12">Busines, Agency</span>
                    </div>
                    <div className="entry-content">
                      <a href="/assets/images/thumb/1.webp" data-fancybox data-caption="Caption for single image"><i className="far fa-plus-square" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Latest Projects Section End ==============================*/}
        {/*============================== testimonials Section Start ==============================*/}
        <div className="full-row bg-white pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <span className="tagline text-general mb-10 text-uppercase">Testimonials</span>
                <h1 className="text-secondary mb-40 fw-500"><span className="fw-700 text-primary">+2,500 Clients</span> Love Us</h1>
              </div>
            </div>
            <div className="row row-cols-1">
              <div className="col">
                <div className="owl-mx-4">
                  <div className="testimonial-style-5 owl-nav-custom-1 position-relative">
                    <div className="2block-carousel owl-carousel owl-dot-disable owl-nav-icon-1">
                      <div className="item">
                        <div className="entry-wrapper d-flex flex-column align-items-center text-start p-30">
                          <div className="entry-content-wrapper">
                            <div className="quote-icon d-flex justify-content-end"><i className="flaticon-text-quotes flat-45 text-primary" /></div>
                            <div className="entry-header">
                              <h5 className="entry-title text-dark mb-0">Dorothy R. Molina</h5>
                              <div className="text-general mb-0"><span className="rank">Industrial engineer</span></div>
                            </div>
                            <div className="entry-content">
                              <div className="w-100 separate-line mb-4" />
                              <p>Elit aptent magna commodo lobortis et quisque nibh ligula vestibulum odio sagittis. Aliquet mauris, nisl tellus ornare nostra curae; volutpat massa, primis dignissim etiam dapibus quis atibus ut volutpat
                                aptent.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="entry-wrapper d-flex flex-column align-items-center text-start p-30">
                          <div className="entry-content-wrapper">
                            <div className="quote-icon d-flex justify-content-end"><i className="flaticon-text-quotes flat-45 text-primary" /></div>
                            <div className="entry-header">
                              <h5 className="entry-title text-dark mb-0">Dorothy R. Molina</h5>
                              <div className="text-general mb-0"><span className="rank">Industrial engineer</span></div>
                            </div>
                            <div className="entry-content">
                              <div className="w-100 separate-line mb-4" />
                              <p>Elit aptent magna commodo lobortis et quisque nibh ligula vestibulum odio sagittis. Aliquet mauris, nisl tellus ornare nostra curae; volutpat massa, primis dignissim etiam dapibus quis atibus ut volutpat
                                aptent.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="entry-wrapper d-flex flex-column align-items-center text-start p-30">
                          <div className="entry-content-wrapper">
                            <div className="quote-icon d-flex justify-content-end"><i className="flaticon-text-quotes flat-45 text-primary" /></div>
                            <div className="entry-header">
                              <h5 className="entry-title text-dark mb-0">Dorothy R. Molina</h5>
                              <div className="text-general mb-0"><span className="rank">Industrial engineer</span></div>
                            </div>
                            <div className="entry-content">
                              <div className="w-100 separate-line mb-4" />
                              <p>Elit aptent magna commodo lobortis et quisque nibh ligula vestibulum odio sagittis. Aliquet mauris, nisl tellus ornare nostra curae; volutpat massa, primis dignissim etiam dapibus quis atibus ut volutpat
                                aptent.
                              </p>
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
        {/*============================== testimonials Section End ==============================*/}
        {/*============================== Partner Section Start ==============================*/}
        <div className="full-row bg-white">
          <div className="container">
            <div className="row mt-5">
              <div className="col-12">
                <div className="4block-carousel owl-carousel owl-nav-disable owl-dot-disable autoplay-on">
                  <div className="item">
                    <a href="#" className="hover-img-upshow overflow-hidden d-inline-block">
                      <img src="/assets/images/partner/1.png" alt="partner logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" className="hover-img-upshow overflow-hidden d-inline-block">
                      <img src="/assets/images/partner/2.png" alt="partner logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" className="hover-img-upshow overflow-hidden d-inline-block">
                      <img src="/assets/images/partner/3.png" alt="partner logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" className="hover-img-upshow overflow-hidden d-inline-block">
                      <img src="/assets/images/partner/4.png" alt="partner logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" className="hover-img-upshow overflow-hidden d-inline-block">
                      <img src="/assets/images/partner/5.png" alt="partner logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" className="hover-img-upshow overflow-hidden d-inline-block">
                      <img src="/assets/images/partner/6.png" alt="partner logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" className="hover-img-upshow overflow-hidden d-inline-block">
                      <img src="/assets/images/partner/7.png" alt="partner logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#" className="hover-img-upshow overflow-hidden d-inline-block">
                      <img src="/assets/images/partner/8.png" alt="partner logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Partner Section End ==============================*/}
        {/*============================== Quote Section Start ==============================*/}
        <div className="full-row bg-gray">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-5">
                <div className="bg-white p-40 max-md-pt-5 border border-primary">
                  <h2 className="text-primary mb-4">Free Consulation</h2>
                  <div className="quote-form">
                    <form method="post" action="#">
                      <div className="row row-cols-1 g-3">
                        <div className="col">
                          <label htmlFor="full-name" className="text-uppercase text-dark w-100">Full Name</label>
                          <input type="text" id="full-name" className="form-control border-bottom border-bottom-gray rounded-0 px-0" placeholder="Name" />
                        </div>
                        <div className="col">
                          <label htmlFor="phone-number" className="text-uppercase text-dark w-100">Phone number</label>
                          <input type="text" id="phone-number" className="form-control border-bottom border-bottom-gray rounded-0 px-0" placeholder="Enter your phone number" />
                        </div>
                        <div className="col">
                          <label htmlFor="select-topic" className="text-uppercase text-dark w-100">Topics</label>
                          <div className="select-appearance-general">
                            <select id="select-topic" className="form-control border-bottom border-bottom-gray rounded-0 px-0">
                              <option>Choose topic</option>
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                              <option>04</option>
                            </select>
                          </div>
                        </div>
                        <div className="col">
                          <label htmlFor="message" className="text-uppercase text-dark w-100">Message</label>
                          <textarea id="message" className="form-control border-bottom border-bottom-gray rounded-0 px-0" rows={6} placeholder="Write Your Message" defaultValue={""} />
                        </div>
                        <div className="col">
                          <button className="btn btn-primary-filter mt-20 rounded-0 w-100 text-uppercase fs-16" type="submit" name="submit">Submit Your Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="row">
                  <div className="col-lg-9">
                    <span className="tagline text-general mb-10 text-uppercase">why choose us</span>
                    <h1 className="text-secondary mb-50 fw-500"><span className="fw-700 text-primary">Your Successful</span> Is Our Reputation</h1>
                  </div>
                </div>
                <div className="row row-cols-1 g-4">
                  <div className="col">
                    <h3 className="fw-600 mb-3">Strong Martket Analysis</h3>
                    <p className="fs-16">Tasks, docs, and files integrate with Arado’s chat to close the gaps between feedback and action.</p>
                  </div>
                  <div className="col">
                    <h3 className="fw-600 mb-3">Experience &amp; Percision</h3>
                    <p className="fs-16">Tasks, docs, and files integrate with Arado’s chat to close the gaps between feedback and action.</p>
                  </div>
                  <div className="col">
                    <h3 className="fw-600 mb-3">Experts About Business</h3>
                    <p className="fs-16">Tasks, docs, and files integrate with Arado’s chat to close the gaps between feedback and action.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Quote Section End ==============================*/}
        {/*============================== Our Team Section End ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <span className="tagline text-general mb-10 text-uppercase">Latest Projects</span>
                <h1 className="text-secondary mb-40 fw-500">See Our <span className="fw-700 text-primary">Successful Businesses</span></h1>
              </div>
              <div className="col-lg-3">
                <div className="d-flex h-100 align-items-center justify-content-end">
                  <a className="btn-link text-dark hover-text-primary btn-hover-downline-1 text-uppercase" href="#">All Experts  <i className="fas fa-arrow-right" /></a>
                </div>
              </div>
            </div>
            <div className="row thumbnails team-style-2 owl-mx-4">
              <div className="col-lg-12">
                <div className="owl-carousel 4block-carousel owl-nav-disable autoplay-off owl-dot-bottom-center owl-dot-round owl-dot-active-pill-primary">
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column justify-content-center text-center transition-all">
                      <div className="entry-thumbnail-wrapper position-relative">
                        <div className="post-thumbnail">
                          <img src="/assets/images/thumb/height-7.png" alt="Image not found !" />
                          <div className="transparent-social-media-1 list-color-white hover-list-color-white hyperlink-mr-20 bg-primary px-20 py-1 position-absolute">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                            <a href="#"><i className="fab fa-google-plus" /></a>
                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-20">
                        <div className="entry-header">
                          <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/profile-details.html">Dylan Nevile</a></h3>
                          <span className="h5">( Apartment Manager )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column justify-content-center text-center transition-all">
                      <div className="entry-thumbnail-wrapper position-relative">
                        <div className="post-thumbnail">
                          <img src="/assets/images/thumb/height-8.png" alt="Image not found !" />
                          <div className="transparent-social-media-1 list-color-white hover-list-color-white hyperlink-mr-20 bg-primary px-20 py-1 position-absolute">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                            <a href="#"><i className="fab fa-google-plus" /></a>
                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-20">
                        <div className="entry-header">
                          <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/profile-details.html">Brianna Stapleton</a></h3>
                          <span className="h5">( Apartment Manager )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column justify-content-center text-center transition-all">
                      <div className="entry-thumbnail-wrapper position-relative">
                        <div className="post-thumbnail">
                          <img src="/assets/images/thumb/height-9.png" alt="Image not found !" />
                          <div className="transparent-social-media-1 list-color-white hover-list-color-white hyperlink-mr-20 bg-primary px-20 py-1 position-absolute">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                            <a href="#"><i className="fab fa-google-plus" /></a>
                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-20">
                        <div className="entry-header">
                          <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/profile-details.html">Flynn Crossley</a></h3>
                          <span className="h5">( Apartment Manager )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column justify-content-center text-center transition-all">
                      <div className="entry-thumbnail-wrapper position-relative">
                        <div className="post-thumbnail">
                          <img src="/assets/images/thumb/height-10.png" alt="Image not found !" />
                          <div className="transparent-social-media-1 list-color-white hover-list-color-white hyperlink-mr-20 bg-primary px-20 py-1 position-absolute">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                            <a href="#"><i className="fab fa-google-plus" /></a>
                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-20">
                        <div className="entry-header">
                          <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/profile-details.html">Sebastian Flakelar</a></h3>
                          <span className="h5">( Apartment Manager )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="entry-wrapper d-flex flex-column justify-content-center text-center transition-all">
                      <div className="entry-thumbnail-wrapper position-relative">
                        <div className="post-thumbnail">
                          <img src="/assets/images/thumb/height-11.png" alt="Image not found !" />
                          <div className="transparent-social-media-1 list-color-white hover-list-color-white hyperlink-mr-20 bg-primary px-20 py-1 position-absolute">
                            <a href="#"><i className="fab fa-facebook-f" /></a>
                            <a href="#"><i className="fab fa-twitter" /></a>
                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                            <a href="#"><i className="fab fa-google-plus" /></a>
                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="entry-content-wrapper pt-20">
                        <div className="entry-header">
                          <h3 className="entry-title mb-2"><a className="text-secondary hover-text-primary" href="/profile-details.html">Hayden Riordan</a></h3>
                          <span className="h5">( Apartment Manager )</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Our Team Section End ==============================*/}
        {/*============================== Our Blog Section Start ==============================*/}
        <div className="full-row bg-gray">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <span className="tagline text-general mb-10 text-uppercase text-center">Our Blog</span>
                <h1 className="text-secondary mb-40 fw-500 text-center"><span className="fw-700 text-primary">Latest</span> From Our Press</h1>
              </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 g-lg-0 entry-wrapper-bg-white hover-entry-wrapper-bg-primary entry-content-center blog-style-5 entry-meta-divider-line transition-all">
              <div className="col">
                <article className="entry-wrapper hover-text-white">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <a href="/news-details-left-sidebar.html"><img src="/assets/images/thumb/width-12.png" alt="Image not found !" /></a>
                    </div>
                  </div>
                  <div className="entry-content-wrapper p-5">
                    <div className="entry-header">
                      <div className="entry-category"><span className="cat-links"><a href="#">Business</a></span></div>
                      <div className="entry-meta text-uppercase fs-11">
                        <span className="posted-date"><a href="#" className="text-light">Nov 25, 2021</a></span>
                      </div>
                      <h5 className="entry-title mb-3 ordinary-font fw-500"><a href="/news-details-left-sidebar.html" className="text-dark">Problems About <br /> Social Insurance For <br /> Truck Drivers</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus nullam tortor.</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col">
                <article className="entry-wrapper hover-text-white">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <a href="/news-details-left-sidebar.html"><img src="/assets/images/thumb/width-13.png" alt="Image not found !" /></a>
                    </div>
                  </div>
                  <div className="entry-content-wrapper p-5">
                    <div className="entry-header">
                      <div className="entry-category"><span className="cat-links"><a href="#">bank &amp; finance</a></span></div>
                      <div className="entry-meta text-uppercase fs-11">
                        <span className="posted-date"><a href="#" className="text-light">Oct 18, 2021</a></span>
                      </div>
                      <h5 className="entry-title mb-3 ordinary-font fw-500"><a href="/news-details-left-sidebar.html" className="text-dark">Problems About <br /> Social Insurance For <br /> Truck Drivers</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus nullam tortor.</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col">
                <article className="entry-wrapper hover-text-white">
                  <div className="entry-thumbnail-wrapper">
                    <div className="post-thumbnail overflow-hidden">
                      <a href="#"><img src="/assets/images/thumb/width-14.png" alt="Image not found !" /></a>
                    </div>
                  </div>
                  <div className="entry-content-wrapper p-5">
                    <div className="entry-header">
                      <div className="entry-category"><span className="cat-links"><a href="#">tips &amp; tricks</a></span></div>
                      <div className="entry-meta text-uppercase fs-11">
                        <span className="posted-date"><a href="#" className="text-light">May 25, 2021</a></span>
                      </div>
                      <h5 className="entry-title mb-3 ordinary-font fw-500"><a href="/news-details-left-sidebar.html" className="text-dark">Problems About <br /> Social Insurance For <br /> Truck Drivers</a></h5>
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
        {/*============================== Our Blog Section End ==============================*/}
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
                    <a href="/index.html"><img src="/assets/images/logo/1.png" alt="Image not found!" /></a>
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
      {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) */}
      {/* use for map style */}
    </>
  )
}
