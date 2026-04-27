export default function IndexBusinessPage() {
  return (
    <>
      <div id="page-wrapper">
        {/*============================== Header Section Start ==============================*/}
        <header id="header" className="nav-on-top">
          <div className="top-header d-none border-bottom d-lg-block py-1 font-400">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 top-header-col">
                  <ul className="address-menu d-flex gap-4">
                    <li className="d-flex align-items-center gap-1"><i className="fas fa-phone text-secondary" /> (+1) 828-376-0532</li>
                    <li className="d-flex align-items-center gap-1"><i className="fas fa-map-marker-alt text-secondary" /> 4214 Arlington Avenue Des Arc, Newyouk</li>
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
                          <a href="#" className="customer-signinup text-general hover-text-primary"><i className="flaticon-user-3 flat-15 me-1" />Register</a>
                        </div>
                      </div>
                      <div className="text-white">or</div>
                      <div className="my-account position-relative">
                        <div className="my-account-dropdown">
                          <a href="#" className="customer-signinup text-general hover-text-primary"><i className="flaticon-user-3 flat-15 me-1" />Sign In</a>
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
                    <a className="navbar-brand" href="/index.html"><img className="nav-logo" src="/assets/images/logo/2.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar-content" aria-controls="main-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="main-navbar-content">
                      <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link" href="/index-business.html">Home</a>
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
                      <div className="navbar-nav nav-element mx-2">
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
                      <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link" href="/index-business.html">Home</a>
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
        <div className="full-row p-0">
          <div id="rev_slider_1058_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="agency" data-source="gallery" style={{backgroundColor: '#222222', padding: 0}}>
            {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
            <div id="rev_slider_1058_1" className="rev_slider fullscreenbanner" style={{display: 'none'}} data-version="5.4.1">
              <ul>
                {/* SLIDE  */}
                <li data-index="rs-2971" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="Power2.easeInOut" data-easeout="default" data-masterspeed={2000} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                  {/* MAIN IMAGE */}
                  <img src="/assets/images/slider/3.png" alt data-bgposition="center center" data-kenburns="on" data-duration={30000} data-ease="Linear.easeNone" data-scalestart={120} data-scaleend={100} data-rotatestart={0} data-rotateend={0} data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax={3} className="rev-slidebg" data-no-retina />
                  {/* LAYERS */}
                  {/* LAYER NR. 1 */}
                  <div className="tp-caption tp-shape tp-shapewrapper " id="slide-2971-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5, backgroundColor: 'rgba(51, 51, 51, 0.15)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0}}>
                  </div>
                  {/* LAYER NR. 2 */}
                  <div className="tp-caption tp-shape tp-shapewrapper " id="slide-2971-layer-19" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:&quot;bytrigger&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;bytrigger&quot;,&quot;speed&quot;:500,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-lasttriggerstate="reset" style={{zIndex: 6, backgroundColor: 'rgba(0, 0, 0, 0.75)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0}}>
                  </div>
                  {/* LAYER NR. 3 */}
                  <div className="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-2971-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-150','-150','-150','-150']" data-width={100} data-height={2} data-whitespace="nowrap" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, backgroundColor: 'rgba(255, 255, 255, 1.00)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0}}>
                  </div>
                  {/* LAYER NR. 4 */}
                  <div className="tp-caption Agency-Title   tp-resizeme" id="slide-2971-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-50','-50','-50','-70']" data-fontsize="['50','50','30','30']" data-lineheight="['70','70','50','50']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1250,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8, whiteSpace: 'nowrap', fontFamily: 'Rubik', color: '#fff', fontWeight: 500, textAlign: 'center'}}>Growup Digital Business and <br />Provide Smart Solutions</div>
                  {/* LAYER NR. 5 */}
                  <div className="tp-caption Agency-SubTitle tp-resizeme" id="slide-2971-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['50','50','50','30']" data-width="['none','none','480','360']" data-height="none" data-whitespace="['nowrap','nowrap','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1500,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 9, whiteSpace: 'nowrap', color: '#fff', fontStyle: 'italic'}}>We have been building picture perfect websites since 2010 </div>
                  {/* LAYER NR. 6 */}
                  <div className="simple-video-play">
                    <a data-fancybox className="tp-caption rev-btn tp-resizeme rounded-circle" href="https://www.youtube.com/watch?v=0HnHUBeIBqU" target="_blank" id="slide-411-layer-13" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['130','130','130','130']" data-width={80} data-height={80} data-whitespace="['normal','nowrap','nowrap','nowrap']" data-type="button" data-actions data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;3000&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;fb:20px;&quot;,&quot;to&quot;:&quot;o:1;fb:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;fb:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;fb:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 13, whiteSpace: 'normal', fontSize: 18, lineHeight: 50, fontWeight: 400, color: 'rgba(255, 255, 255, 1.00)', display: 'inline-block', fontFamily: 'Roboto', borderRadius: '30px 30px 30px 30px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}><i className="flaticon-play-button position-relative xy-center flat-mini rounded-circle text-white bg-primary" /></a>
                  </div>
                </li>
              </ul>
              <div className="tp-bannertimer tp-bottom" style={{visibility: 'hidden !important'}} />
            </div>
          </div>
          {/* END REVOLUTION SLIDER */}
        </div>
        {/*============================== Slider Section End ==============================*/}
        {/*============================== Icon Grid Thumb 1 Sction Start ==============================*/}
        <div className="full-row bg-white">
          <div className="container">
            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-1 gy-5">
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
        <div className="full-row bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <span className="tagline text-primary text-center mb-10">What We Offer</span>
                <h1 className="down-line text-secondary text-center mb-30">Our Awesome Services</h1>
                <span className="sub-title fs-18 fw-400 ordinary-font fst-italic text-center mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</span>
              </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gy-4 entry-wrapper-bg-white">
              <div className="col">
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40">
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
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40">
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
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40">
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
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40">
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
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40">
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
                <div className="entry-wrapper d-flex flex-column align-items-center text-center hover-text-white hover-bg-primary p-40">
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
                <div className="shadow-lg text-general p-35">
                  <span className="tagline text-primary pb-2">30 Years Of Experience</span>
                  <h2 className="down-line-primary mb-4">Our History</h2>
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
        {/*============================== Icon Grid Thumb 3 Sction Start ==============================*/}
        <div className="full-row bg-gray">
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
        {/*============================== Pricing Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <span className="tagline text-primary text-center mb-10">Data Storage</span>
                <h2 className="down-line text-secondary text-center mb-30">Pricing Plan</h2>
                <span className="sub-title fs-18 ordinary-font fst-italic text-center mb-50">Aliquam litora ad sociosqu turpis etiam tempus egestas nulla diam tempus mollis ante ornare consectetuer dictum sodales adipiscing ultricies Elit semper Integer felis lectus.</span>
              </div>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 pricing-style-1">
              <div className="col">
                <div className="pricing-wrapper py-40 text-center bg-gray">
                  <h3 className="mb-4">Basic</h3>
                  <div className="bg-dark text-white p-3 mb-3">$<span className="h2 text-white">29<sup>.99</sup>/</span>Month</div>
                  <ul>
                    <li>5GB Data Storage</li>
                    <li>1 User Only</li>
                    <li>Free Installation</li>
                    <li>24/7 Online Support</li>
                    <li>Automatic Backup</li>
                    <li>100GB Data Transfer</li>
                    <li>1 Database</li>
                  </ul>
                  <div className="mt-30">
                    <a className="btn btn-primary-filter hover-shadow-move-1 rounded-0" href="#">Order Now</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="pricing-wrapper py-40 text-center bg-gray">
                  <h3 className="mb-4">Standard</h3>
                  <div className="bg-dark text-white p-3 mb-3">$<span className="h2 text-white">59<sup>.99</sup>/</span>Month</div>
                  <ul>
                    <li>50GB Data Storage</li>
                    <li>1 User Only</li>
                    <li>Free Installation</li>
                    <li>24/7 Online Support</li>
                    <li>Automatic Backup</li>
                    <li>500GB Data Transfer</li>
                    <li>10 Database</li>
                  </ul>
                  <div className="mt-30">
                    <a className="btn btn-primary-filter hover-shadow-move-1 rounded-0" href="#">Order Now</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="pricing-wrapper py-40 text-center bg-gray">
                  <h3 className="mb-4">Advance</h3>
                  <div className="bg-dark text-white p-3 mb-3">$<span className="h2 text-white">59<sup>.99</sup>/</span>Month</div>
                  <ul>
                    <li>Unlimited Data Storage</li>
                    <li>10 User Only</li>
                    <li>Free Installation</li>
                    <li>24/7 Online Support</li>
                    <li>Automatic Backup</li>
                    <li>Unlimited Data Transfer</li>
                    <li>Unlimited Database</li>
                  </ul>
                  <div className="mt-30">
                    <a className="btn btn-primary-filter hover-shadow-move-1 rounded-0" href="#">Order Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Pricing Section End ==============================*/}
        {/*============================== Banner Section Start ==============================*/}
        <div className="full-row overlay-secondary paraxify" style={{backgroundImage: 'url(/assets/images/background/3.png)', backgroundRepeat: 'no-repeat'}}>
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
                      <div className="entry-meta text-uppercase fs-11">
                        <span className="author-link"><a href="#" className="text-light hover-text-primary">By Robert Haven</a></span>
                        <span className="posted-date"><a href="#" className="text-light hover-text-primary">Dec 25, 2019</a></span>
                      </div>
                      <h5 className="entry-title mb-3 ordinary-font fw-400"><a href="/news-details-left-sidebar.html" className="text-dark hover-text-primary">Our Latest Development Projects by More Efficient Developer</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.</p>
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
                      <div className="entry-meta text-uppercase fs-11">
                        <span className="author-link"><a href="#" className="text-light hover-text-primary">By Robert Haven</a></span>
                        <span className="posted-date"><a href="#" className="text-light hover-text-primary">Dec 25, 2019</a></span>
                      </div>
                      <h5 className="entry-title mb-3 ordinary-font fw-400"><a href="/news-details-left-sidebar.html" className="text-dark hover-text-primary">Our Latest Development Projects by More Efficient Developer</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.</p>
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
                      <div className="entry-meta text-uppercase fs-11">
                        <span className="author-link"><a href="#" className="text-light hover-text-primary">By Robert Haven</a></span>
                        <span className="posted-date"><a href="#" className="text-light hover-text-primary">Dec 25, 2019</a></span>
                      </div>
                      <h5 className="entry-title mb-3 ordinary-font fw-400"><a href="/news-details-left-sidebar.html" className="text-dark hover-text-primary">Our Latest Development Projects by More Efficient Developer</a></h5>
                    </div>
                    <div className="entry-content">
                      <p>Nostra maecenas malesuada vel lobortis sociis mus aliquam tempor etiam ipsum pretium cursus.</p>
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
