export default function ShopListPage() {
  return (
    <>
      <div id="page-wrapper">
        {/*============================== Header Section Start ==============================*/}
        <header id="header" className="default-header nav-initial nav-on-top">
          <div className="top-header d-none d-lg-block py-10 bg-transparent font-400">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="search-header py-20 d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-3 sm-mx-none">
                  <div className="d-flex align-items-center h-100">
                    <a className="navbar-brand" href="#">
                      <img className="nav-logo" src="/assets/images/logo/2.png" alt="Bigbazar" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-9">
                  <div className="header-search product-search-one">
                    <div className="unicode_ajax_search">
                      <form method="get" className="searchform form-inline ajax-search-square search-border-round " action="#">
                        <input type="search" className="form-control search-field" name="s" defaultValue placeholder="I'm Shopping For..." />
                        <div className="select-appearance-none">
                          <select name="product_cat" className="form-control m-0 categories-filter product_cat">
                            <option value>All Categories</option>
                            <option className="level-0" value="bags">Bags</option>
                            <option className="level-0" value="blazer">Blazer</option>
                            <option className="level-0" value="bonsai">Bonsai</option>
                          </select>
                        </div>
                        <button type="submit" name="submit" className="search-submit"><i className="flaticon-search flat-15 text-white" /></button>
                        <input type="hidden" name="post_type" defaultValue="product" />
                      </form>
                      <div className="search-results-wrapper woocommerce">
                        <div className="autocomplete-suggestions" style={{position: 'absolute', display: 'none', maxHeight: 300, zIndex: 9999}} />
                      </div>
                      <div className="trending-search-results" style={{display: 'none'}}>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-3 xs-mx-none">
                  <div className="margin-right-1 d-flex align-items-center justify-content-end h-100">
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
                                <img src="https://bigbazar.unicoderbd.com/default/wp-content/uploads/2021/08/squire-289-300x300.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Image Not found !" /></a>
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
                                <img src="https://bigbazar.unicoderbd.com/default/wp-content/uploads/2021/08/squire-289-300x300.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Image Not found !" /> </a>
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
                  <nav className="navbar navbar-expand-lg navbar-light text-uppercase nav-dark nav-primary-hover nav-primary-active fw-500">
                    <a className="navbar-brand d-none" href="#"><img className="nav-logo" src="/assets/images/logo/2.png" alt="Patron" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar-content" aria-controls="main-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="main-navbar-content">
                      <ul className="navbar-nav justify-content-start">
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
                      <div className="flex-shrink-0 shop-offer-link sm-mx-none">
                        <a href="#">Today's Offer</a>
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
                    <a className="navbar-brand" href="#"><img className="nav-logo" src="/assets/images/logo/2.png" alt="Patron" /></a>
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
                    <h1 className="page-title mb-0">Shop List</h1>
                  </div>
                  <nav>
                    <ol className="breadcrumb mb-0 greater-than">
                      <li className="breadcrumb-item"><a href="/index.html" className="text-secondary hover-text-primary">Home</a></li>
                      <li className="breadcrumb-item"><span style={{color: '#6c757d'}} className="last">Shop List</span></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Page Banner 1 Section End ==============================*/}
        {/*============================== Shop Section Start ==============================*/}
        <div className="full-row">
          <div className="container">
            <div className="row gy-5">
              {/*============================== Sidebar start ==============================*/}
              <div id="secondary" className="widget-area col-lg-3 order-lg-1">
                <div id="sidebar" className="sidebar sidebar-shop">
                  <div className="sidebar-inner">
                    <div id="woocommerce_product_categories-1" className="widget widget-toggle woocommerce widget_product_categories">
                      <h4 className="widget-title down-line-primary">Product categories</h4>
                      <ul className="product-categories">
                        <li className="cat-item"><a href="#">Accessories</a> <span className="float-end">(15)</span></li>
                        <li className="cat-item"><a href="#">Clothing</a> <span className="float-end">(10)</span></li>
                        <li className="cat-item"><a href="#">Hoodies</a> <span className="float-end">(09)</span></li>
                        <li className="cat-item"><a href="#">Home &amp; Kitchen</a> <span className="float-end">(21)</span></li>
                        <li className="cat-item"><a href="#">Sports &amp; Outdoors</a> <span className="float-end">(35)</span></li>
                        <li className="cat-item"><a href="#">Music</a> <span className="float-end">(25)</span></li>
                        <li className="cat-item"><a href="#">Poster</a> <span className="float-end">(17)</span></li>
                        <li className="cat-item"><a href="#">T-Shirt</a> <span className="float-end">50)</span></li>
                        <li className="cat-item"><a href="#">Uncategorized</a> <span className="float-end">(05)</span></li>
                      </ul>
                    </div>
                    <div id="tags-1" className="widget widget_tag_cloud">
                      <h4 className="widget-title down-line-primary">Product Tag</h4>
                      <div className="tagcloud">
                        <ul>
                          <li><a href="#">general</a></li>
                          <li><a href="#">videos</a></li>
                          <li><a href="#">media</a></li>
                          <li><a href="#">web</a></li>
                          <li><a href="#">parallax</a></li>
                          <li><a href="#">ecommerce</a></li>
                          <li><a href="#">t-shirt</a></li>
                          <li><a href="#">women</a></li>
                          <li><a href="#">trade</a></li>
                          <li><a href="#">animation</a></li>
                          <li><a href="#">theme</a></li>
                        </ul>
                      </div>
                    </div>
                    <div id="top-rated-product-1" className="widget widget_top_rated_product">
                      <h4 className="widget-title down-line-primary">Top Rated Product</h4>
                      <ul className="product_list_widget">
                        <li>
                          <a href="#">
                            <img src="/assets/images/products/1.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Product Image ?" />
                            <span className="product-title">Blooth Headphones</span>
                          </a>
                          <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>18.00</bdi></span></ins>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="#">
                            <img src="/assets/images/products/2.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Product Image ?" />
                            <span className="product-title">Red Round-Neck Tshirt</span>
                          </a>
                          <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>9.99</bdi></span></ins>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="#">
                            <img src="/assets/images/products/3.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Product Image ?" />
                            <span className="product-title">Women Skin T-Shirt</span>
                          </a>
                          <del>
                            <span className="woocommerce-Price-amount amount">
                              <bdi><span className="woocommerce-Price-currencySymbol">$</span>17.50</bdi>
                            </span>
                          </del>
                          <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>13.50</bdi></span></ins>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="#">
                            <img src="/assets/images/products/4.png" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Product Image ?" />
                            <span className="product-title">Green Round-Neck Tshirt</span>
                          </a>
                          <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>11.56</bdi></span></ins>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 order-lg-2">
                <div className="row">
                  <div className="col">
                    <div className="products-header d-flex justify-content-between align-items-center py-10 px-20 bg-light mb-30">
                      <div className="products-header-left d-flex align-items-center gap-2">
                        <h6 className="woocommerce-products-header__title page-title">Shop</h6>
                        <p className="woocommerce-result-count">(Showing 1 – 24 products of 29 products)</p>
                      </div>
                      <div className="products-header-right">
                        <div className="product-show select-appearance-general bg-color">
                          <span>Show:</span>
                          <select className="show-number">
                            <option value>6</option>
                            <option value>9</option>
                            <option value>12</option>
                            <option value>24</option>
                            <option value>36</option>
                            <option value>48</option>
                          </select>
                        </div>
                        <form className="woocommerce-ordering" method="get">
                          <div className="select-appearance-general bg-color">
                            <select name="orderby" className="orderby">
                              <option value="menu_order">Default sorting</option>
                              <option value="popularity">Sort by popularity</option>
                              <option value="rating">Sort by average rating</option>
                              <option value="date">Sort by latest</option>
                              <option value="price">Sort by price: low to high</option>
                              <option value="price-desc">Sort by price: high to low</option>
                            </select>
                          </div>
                        </form>
                        <div className="products-view">
                          <a className="grid-view" href="/shop.html"><i className="flaticon-menu-1 flat-15" /></a>
                          <a className="list-view active" href="/shop-list.html"><i className="flaticon-list flat-15" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-1 g-4 product-list product-style-3 e-img-bg-light transition-all">
                  <div className="col">
                    <div className="product type-product">
                      <div className="product-wrapper">
                        <div className="product-image">
                          <span className="on-sale">Sale!</span>
                          <a href="/shop-single.html" className="woocommerce-LoopProduct-link" target="_self"><img src="/assets/images/products/1.png" alt="Image Not Found !" /></a>
                        </div>
                        <div className="product-info">
                          <h3 className="product-title"><a href="/shop-single.html" target="_self">Blooth Headphones</a></h3>
                          <div className="price-wrap">
                            <div className="product-price">
                              <span className="price"><del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>100.00</bdi>
                                  </span>
                                </del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>80.00</bdi></span></ins></span>
                            </div>
                          </div>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                          <p>Vel auctor per sagittis justo laoreet sodales lobortis eleifend nibh nonummy aenean fames leo fames sodales aptent odio mus ad tortor, tincidunt.</p>
                          <div className="hover-area">
                            <div className="cart-button">
                              <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product type-product">
                      <div className="product-wrapper">
                        <div className="product-image">
                          <a href="/shop-single.html" className="woocommerce-LoopProduct-link" target="_self"><img src="/assets/images/products/2.png" alt="Image Not Found !" /></a>
                        </div>
                        <div className="product-info">
                          <h3 className="product-title"><a href="/shop-single.html" target="_self">Premium Quality</a></h3>
                          <div className="price-wrap">
                            <div className="product-price">
                              <span className="price">
                                <ins>
                                  <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>17.99</bdi>
                                  </span>
                                </ins>
                              </span>
                            </div>
                          </div>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                          <p>Vel auctor per sagittis justo laoreet sodales lobortis eleifend nibh nonummy aenean fames leo fames sodales aptent odio mus ad tortor, tincidunt.</p>
                          <div className="hover-area">
                            <div className="cart-button">
                              <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product type-product">
                      <div className="product-wrapper">
                        <div className="product-image">
                          <a href="/shop-single.html" className="woocommerce-LoopProduct-link" target="_self"><img src="/assets/images/products/3.png" alt="Image Not Found !" /></a>
                        </div>
                        <div className="product-info">
                          <h3 className="product-title"><a href="/shop-single.html" target="_self">Women Best T-Shirt</a></h3>
                          <div className="price-wrap">
                            <div className="product-price">
                              <span className="price"><ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>19.99</bdi>
                                  </span>
                                </ins>
                              </span>
                            </div>
                          </div>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                          <p>Vel auctor per sagittis justo laoreet sodales lobortis eleifend nibh nonummy aenean fames leo fames sodales aptent odio mus ad tortor, tincidunt.</p>
                          <div className="hover-area">
                            <div className="cart-button">
                              <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product type-product">
                      <div className="product-wrapper">
                        <div className="product-image">
                          <a href="/shop-single.html" className="woocommerce-LoopProduct-link" target="_self"><img src="/assets/images/products/4.png" alt="Image Not Found !" /></a>
                        </div>
                        <div className="product-info">
                          <h3 className="product-title"><a href="/shop-single.html" target="_self">Green Round-Neck Tshirt</a></h3>
                          <div className="price-wrap">
                            <div className="product-price">
                              <span className="price"><ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>9.99</bdi>
                                  </span>
                                </ins>
                              </span>
                            </div>
                          </div>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                          <p>Vel auctor per sagittis justo laoreet sodales lobortis eleifend nibh nonummy aenean fames leo fames sodales aptent odio mus ad tortor, tincidunt.</p>
                          <div className="hover-area">
                            <div className="cart-button">
                              <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product type-product">
                      <div className="product-wrapper">
                        <div className="product-image">
                          <span className="on-sale">Sale!</span>
                          <a href="/shop-single.html" className="woocommerce-LoopProduct-link" target="_self"><img src="/assets/images/products/5.png" alt="Image Not Found !" /></a>
                        </div>
                        <div className="product-info">
                          <h3 className="product-title"><a href="/shop-single.html" target="_self">Blue Polo Tshirt</a></h3>
                          <div className="price-wrap">
                            <div className="product-price">
                              <span className="price"><ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>12.00</bdi>
                                  </span>
                                </ins>
                              </span>
                            </div>
                          </div>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                          <p>Vel auctor per sagittis justo laoreet sodales lobortis eleifend nibh nonummy aenean fames leo fames sodales aptent odio mus ad tortor, tincidunt.</p>
                          <div className="hover-area">
                            <div className="cart-button">
                              <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product type-product">
                      <div className="product-wrapper">
                        <div className="product-image">
                          <a href="/shop-single.html" className="woocommerce-LoopProduct-link" target="_self"><img src="/assets/images/products/6.png" alt="Image Not Found !" /></a>
                        </div>
                        <div className="product-info">
                          <h3 className="product-title"><a href="/shop-single.html" target="_self">Patent Ninja</a></h3>
                          <div className="price-wrap">
                            <div className="product-price">
                              <span className="price"><ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>13.50</bdi>
                                  </span>
                                </ins>
                              </span>
                            </div>
                          </div>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                          <p>Vel auctor per sagittis justo laoreet sodales lobortis eleifend nibh nonummy aenean fames leo fames sodales aptent odio mus ad tortor, tincidunt.</p>
                          <div className="hover-area">
                            <div className="cart-button">
                              <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product type-product">
                      <div className="product-wrapper">
                        <div className="product-image">
                          <span className="on-sale">Sale!</span>
                          <a href="/shop-single.html" className="woocommerce-LoopProduct-link" target="_self"><img src="/assets/images/products/7.png" alt="Image Not Found !" /></a>
                        </div>
                        <div className="product-info">
                          <h3 className="product-title"><a href="/shop-single.html" target="_self">Ninja Silhouette</a></h3>
                          <div className="price-wrap">
                            <div className="product-price">
                              <span className="price"><ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>13.50</bdi>
                                  </span>
                                </ins>
                              </span>
                            </div>
                          </div>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                          <p>Vel auctor per sagittis justo laoreet sodales lobortis eleifend nibh nonummy aenean fames leo fames sodales aptent odio mus ad tortor, tincidunt.</p>
                          <div className="hover-area">
                            <div className="cart-button">
                              <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product type-product">
                      <div className="product-wrapper">
                        <div className="product-image">
                          <span className="on-sale">Sale!</span>
                          <a href="/shop-single.html" className="woocommerce-LoopProduct-link" target="_self"><img src="/assets/images/products/8.png" alt="Image Not Found !" /></a>
                        </div>
                        <div className="product-info">
                          <h3 className="product-title"><a href="/shop-single.html" target="_self">Men's Black Jaket</a></h3>
                          <div className="price-wrap">
                            <div className="product-price">
                              <span className="price"><del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>100.00</bdi>
                                  </span>
                                </del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>11.49</bdi></span></ins></span>
                            </div>
                          </div>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                          <p>Vel auctor per sagittis justo laoreet sodales lobortis eleifend nibh nonummy aenean fames leo fames sodales aptent odio mus ad tortor, tincidunt.</p>
                          <div className="hover-area">
                            <div className="cart-button">
                              <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="product type-product">
                      <div className="product-wrapper">
                        <div className="product-image">
                          <span className="on-sale">Sale!</span>
                          <a href="/shop-single.html" className="woocommerce-LoopProduct-link" target="_self"><img src="/assets/images/products/9.png" alt="Image Not Found !" /></a>
                        </div>
                        <div className="product-info">
                          <h3 className="product-title"><a href="/shop-single.html" target="_self">Coolcam Wifi IP Camera</a></h3>
                          <div className="price-wrap">
                            <div className="product-price">
                              <span className="price"><del><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>100.00</bdi>
                                  </span>
                                </del> <ins><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>79.00</bdi></span></ins></span>
                            </div>
                          </div>
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good"><span>★★★★★</span></div>
                            </div>
                          </div>
                          <p>Vel auctor per sagittis justo laoreet sodales lobortis eleifend nibh nonummy aenean fames leo fames sodales aptent odio mus ad tortor, tincidunt.</p>
                          <div className="hover-area">
                            <div className="cart-button">
                              <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center mt-5">
                  <div className="col-auto">
                    <div className="navigation-1">
                      <nav aria-label="...">
                        <ul className="pagination">
                          <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                          </li>
                          <li className="page-item"><a className="page-link" href="#">1</a></li>
                          <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">2</a>
                          </li>
                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                          <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                {/*============================== Sidebar start ==============================*/}
              </div>
            </div>
          </div>
        </div>
        {/*============================== Shop Section End ==============================*/}
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
