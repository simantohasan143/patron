export default function ShopSinglePage() {
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
                    <h1 className="page-title mb-0">Shop Single</h1>
                  </div>
                  <nav>
                    <ol className="breadcrumb mb-0 greater-than">
                      <li className="breadcrumb-item"><a href="/index.html" className="text-secondary hover-text-primary">Home</a></li>
                      <li className="breadcrumb-item"><a href="/shop.html" className="text-secondary hover-text-primary">Shop</a></li>
                      <li className="breadcrumb-item"><span style={{color: '#6c757d'}} className="last">Shop Single</span></li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============================== Page Banner 1 Section End ==============================*/}
        <div id="main-content" className="py-7">
          <div className="container">
            <div className="row">
              <div id="primary" className="content-area col-md-12 check-system">
                <div className="single-product-page woocommerce product-gallery-left product type-product status-publish first instock product_cat-blazer has-post-thumbnail featured shipping-taxable purchasable product-type-variable">
                  <div className="row single-product-wrapper">
                    <div className="product-images col-lg-5">
                      <div className="product-images">
                        <div className="images-inner">
                          <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images">
                            <figure className="woocommerce-product-gallery__wrapper">
                              <div className="bg-light">
                                <img id="single-image-zoom" src="/assets/images/products/1.png" alt="Thumb Image" data-zoom-image="assets/images/products/1.png" />
                              </div>
                              <div id="gallery_01" className="product-slide-thumb mt-3">
                                <div className="owl-carousel single-product-gallery owl-dot-disable owl-nav-disable autoplay-off owl-mx-1">
                                  <div className="item">
                                    <a className="active" href="#" data-image="assets/images/products/1.png" data-zoom-image="assets/images/products/1.png">
                                      <img src="/assets/images/products/1.png" alt="Thumb Image" />
                                    </a>
                                  </div>
                                  <div className="item">
                                    <a href="#" data-image="assets/images/products/2.png" data-zoom-image="assets/images/products/2.png">
                                      <img src="/assets/images/products/2.png" alt="Thumb Image" />
                                    </a>
                                  </div>
                                  <div className="item">
                                    <a href="#" data-image="assets/images/products/3.png" data-zoom-image="assets/images/products/3.png">
                                      <img src="/assets/images/products/3.png" alt="Thumb Image" />
                                    </a>
                                  </div>
                                  <div className="item">
                                    <a href="#" data-image="assets/images/products/4.png" data-zoom-image="assets/images/products/4.png">
                                      <img src="/assets/images/products/4.png" alt="Thumb Image" />
                                    </a>
                                  </div>
                                  <div className="item">
                                    <a href="#" data-image="assets/images/products/5.png" data-zoom-image="assets/images/products/5.png">
                                      <img src="/assets/images/products/5.png" alt="Thumb Image" />
                                    </a>
                                  </div>
                                  <div className="item">
                                    <a href="#" data-image="assets/images/products/6.png" data-zoom-image="assets/images/products/6.png">
                                      <img src="/assets/images/products/6.png" alt="Thumb Image" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="summary entry-summary col-lg-7" data-sticky_column>
                      <div className="summary-inner">
                        <h1 className="product_title entry-title">Blazer Leather Coat</h1>
                        <div className="product-navigation-share">
                          <div className="product-share bigbazar-arrow">
                            <div className="unicode-social transition icons-bordered icons-shape-circle icons-size-default bigbazar-social ">
                              <a href="#" rel="external" target="_blank" className="social-facebook">
                                <i className="fab fa-facebook-f" />
                                <span className="social-text">Facebook</span>
                              </a>
                              <a href="#" rel="external" target="_blank" className="social-twitter">
                                <i className="fab fa-twitter" />
                                <span className="social-text">Twitter</span>
                              </a>
                              <a href="#" rel="external" target="_blank" className="social-linkedin">
                                <i className="fab fa-linkedin" />
                                <span className="social-text">LinkedIn</span></a>
                              <a href="#" rel="external" target="_blank" className="social-pinterest">
                                <i className="fab fa-pinterest" />
                                <span className="social-text">Pinterest</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="woocommerce-product-rating">
                          <div className="fancy-star-rating">
                            <div className="rating-wrap">
                              <div className="fancy-rating good">5 <span>★</span></div>
                              <div className="fancy-rating-summery unicode-arrow">
                                <div className="rating-avg-wrap">
                                  <div className="rating-avg">5 ★</div>
                                  <div className="rating-review-count">
                                    <span>2 Ratings</span>
                                  </div>
                                </div>
                                <div className="rating-histogram-wrap">
                                  <div className="rating-histogram">
                                    <div className="rating-bar">
                                      <div className="rating-star">5 ★ </div>
                                      <div className="progress">
                                        <div className="progress-bar good" style={{width: '100%'}} />
                                      </div>
                                      <div className="rating-count">2 </div>
                                    </div>
                                    <div className="rating-bar">
                                      <div className="rating-star">4 ★ </div>
                                      <div className="progress">
                                        <div className="progress-bar good" style={{width: '0%'}} />
                                      </div>
                                      <div className="rating-count zero">0</div>
                                    </div>
                                    <div className="rating-bar">
                                      <div className="rating-star">3 ★ </div>
                                      <div className="progress">
                                        <div className="progress-bar good" style={{width: '0%'}} />
                                      </div>
                                      <div className="rating-count zero">0</div>
                                    </div>
                                    <div className="rating-bar">
                                      <div className="rating-star">2 ★ </div>
                                      <div className="progress">
                                        <div className="progress-bar poor" style={{width: '0%'}} />
                                      </div>
                                      <div className="rating-count zero">0</div>
                                    </div>
                                    <div className="rating-bar">
                                      <div className="rating-star">1 ★ </div>
                                      <div className="progress">
                                        <div className="progress-bar bad" style={{width: '0%'}} />
                                      </div>
                                      <div className="rating-count zero">0</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="rating-counts-wrap">
                              <a href="#reviews" className="unicode-rating-review-link" rel="nofollow">
                                <span className="rating-counts">(2)</span>
                              </a>
                            </div>
                          </div>
                          <a href="#reviews" className="woocommerce-review-link" rel="nofollow">(<span className="count">2</span> customer reviews)</a>
                        </div>
                        <p className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>55.00</bdi>
                          </span> – <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>80.00</bdi>
                          </span>
                        </p>
                        <div className="product-price-discount" />
                        <div className="product-price-summary exclamation-mark open">
                          <i className="fa fa-exclamation" />
                          <div className="price-summary unicode-arrow">
                            <div className="price-summary-content">
                              <ul className="price-summary-list">
                                <li className="regular-price">
                                  <label>Maximum Retail Price<br /><span>(incl. of all taxes)</span></label>
                                  <span>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi><span className="woocommerce-Price-currencySymbol">$</span>80.00</bdi>
                                    </span>
                                  </span>
                                </li>
                                <li className="selling-price">
                                  <label>Selling Price</label>
                                  <span><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>55.00</bdi>
                                    </span>
                                  </span>
                                </li>
                                <li className="total-discount">
                                  <label>Total</label>
                                  <span> <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>55.00</bdi>
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="stock-availability in-stock"><span>In Stock</span></div>
                        <div className="product-offers">
                          <ul className="product-offers-list">
                            <li className="product-offer-item">
                              Special Price Get extra 19% off (price inclusive of discount)
                              <div className="product-term-wrap">
                                <span className="product-term-text unicode-ajax-block" data-id={3127}>T &amp; C</span>
                              </div>
                            </li>
                            <li className="product-offer-item">
                              Bank Offer 10% instant discount on VISA Cards
                              <div className="product-term-wrap">
                                <span className="product-term-text unicode-ajax-block" data-id>T &amp; C</span>
                              </div>
                            </li>
                            <li className="product-offer-item">
                              No cost EMI $49/month. Standard EMI also available
                              <div className="product-term-wrap">
                                <span className="product-term-text unicode-ajax-block" data-id>View Plans</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="product-brands">
                          <a className="brand-image" href="#" title="Envato">
                            <img src="/assets/images/partner/11.png" className="attachment-full size-full" alt="Partner Image !" />
                          </a>
                          <a className="brand-image" href="#" title="Graphicriver">
                            <img src="/assets/images/partner/10.png" className="attachment-full size-full" alt="Partner Image !" />
                          </a>
                          <a className="brand-image" href="#" title="Photodune">
                            <img src="/assets/images/partner/11.png" className="attachment-full size-full" alt="Partner Image !" />
                          </a>
                        </div>
                        <div className="product-services">
                          <span>Services:</span>
                          <ul className="product-services-list">
                            <li className="product-service-item">
                              30 Day Return Policy
                              <div className="product-term-wrap">
                                <span className="product-term-text question-mark unicode-ajax-block" data-id />
                              </div>
                            </li>
                            <li className="product-service-item">
                              Cash on Delivery available
                              <div className="product-term-wrap">
                                <span className="product-term-text question-mark unicode-ajax-block" data-id />
                              </div>
                            </li>
                            <li className="product-service-item">
                              Free Delivery
                              <div className="product-term-wrap">
                                <span className="product-term-text question-mark unicode-ajax-block" data-id />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="woocommerce-product-details__short-description">
                          <span>Highlights:</span>
                          <div className="short-description">
                            <ul>
                              <li>Regular Fit.</li>
                              <li>Full sleeves.</li>
                              <li>70% cotton, 30% polyester.</li>
                              <li>Easy to wear and versatile as Casual.</li>
                              <li>Machine wash, tumble dry.</li>
                            </ul>
                          </div>
                        </div>
                        <form className="variations_form cart unicode-swatches-wrap" action="#" method="post">
                          <table className="variations">
                            <tbody>
                              <tr>
                                <td className="label"><label htmlFor="pa_color">Color</label></td>
                                <td className="value with-swatches">
                                  <div className="unicode-swatches" data-attribute="pa_color">
                                    <span className="swatch-term swatch swatch-color term-blue swatch-square swatch-normal " title="Blue" data-term="blue"><span className="unicode-tooltip" style={{backgroundColor: '#2359e0'}}>Blue</span></span>
                                    <span className="swatch-term swatch swatch-color term-gray swatch-square swatch-normal " title="Gray" data-term="gray"><span className="unicode-tooltip" style={{backgroundColor: '#e2e2e2'}}>Gray</span></span>
                                    <span className="swatch-term swatch swatch-color term-white swatch-square swatch-normal " title="White" data-term="white"><span className="unicode-tooltip" style={{backgroundColor: '#ffffff'}}>White</span></span>
                                  </div>
                                  <div className="variation-selector bigbazar-hidden d-none visibility-hidden">
                                    <select id="pa_color" className name="attribute_pa_color" data-attribute_name="attribute_pa_color" data-show_option_none="yes"><option value>Choose an option</option><option value="blue">Blue</option><option value="gray">Gray</option><option value="white">White</option></select>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="label"><label htmlFor="pa_size">Size</label></td>
                                <td className="value with-swatches">
                                  <div className="unicode-swatches" data-attribute="pa_size">
                                    <span className="swatch-term swatch swatch-label term-l swatch-square swatch-default " title="L" data-term="l"><span>L</span></span>
                                    <span className="swatch-term swatch swatch-label term-m swatch-square swatch-default " title="M" data-term="m"><span>M</span></span>
                                    <span className="swatch-term swatch swatch-label term-xl swatch-square swatch-default " title="XL" data-term="xl"><span>XL</span></span>
                                  </div>
                                  <div className="variation-selector bigbazar-hidden d-none visibility-hidden">
                                    <select id="pa_size" className name="attribute_pa_size" data-attribute_name="attribute_pa_size" data-show_option_none="yes">
                                      <option value>Choose an option</option>
                                      <option value="l">L</option>
                                      <option value="m">M</option>
                                      <option value="xl">XL</option>
                                    </select>
                                  </div>
                                  <a className="reset_variations" href="#">Clear</a> </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="single_variation_wrap">
                            <div className="woocommerce-variation single_variation" />
                            <div className="woocommerce-variation-add-to-cart variations_button">
                              <div className="quantity">
                                <input type="button" defaultValue="-" className="minus quantity-button quantity-down" />
                                <label className="screen-reader-text" htmlFor="quantity_61af486522a43">Blazer Leather Coat quantity</label>
                                <input type="number" id="quantity_61af486522a43" className="input-text qty text" step={1} min={1} max={100} name="quantity" defaultValue={1} title="Qty" />
                                <input type="button" defaultValue="+" className="plus quantity-button quantity-down" />
                              </div>
                              <button type="submit" className="single_add_to_cart_button button alt">Add to cart</button>
                              <input type="hidden" id="unicode_quick_buy_product_1787" defaultValue={1787} />
                              <div id="unicode_quick_buy_container_1787" className="unicode-quick-buy">
                                <button id="unicode_quick_buy_button_1787" className="unicode_quick_buy_button unicode_quick_buy_variable unicode_quick_buy_1787" value="Buy Now" type="button" name="unicode_quick_buy_button" data-product-type="variable" data-unicode-product-id={1787}>Buy Now</button>
                              </div>
                              <input type="hidden" name="add-to-cart" defaultValue={1787} />
                              <input type="hidden" name="product_id" defaultValue={1787} />
                              <input type="hidden" name="variation_id" className="variation_id" defaultValue={0} />
                            </div>
                          </div>
                        </form>
                        <div className="yith-wcwl-add-to-wishlist add-to-wishlist-1787  wishlist-fragment on-first-load" data-fragment-ref={1787} data-fragment-options>
                          {/* ADD TO WISHLIST */}
                          <div className="yith-wcwl-add-button">
                            <a href="#" className="add_to_wishlist single_add_to_wishlist" data-product-id={1787} data-product-type="variable" data-original-product-id={1787} data-title="Add to wishlist" rel="nofollow">
                              <span>Add to wishlist</span>
                            </a>
                          </div>
                          {/* COUNT TEXT */}
                        </div>
                        <a href="#" className="compare button" data-product_id={1787} rel="nofollow">Compare</a>
                        <div className="product_meta">
                          <span className="sku_wrapper">SKU: <span className="sku">N/A</span></span>
                          <span className="posted_in">Category: <a href="#" rel="tag">Blazer</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="woocommerce-tabs wc-tabs-wrapper tabs-layout">
                    <div className="section-head border-bottom mb-4">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#pills1-description">Description</button>
                        </li>
                        <li className="nav-item">
                          <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills1-information">Additional information</button>
                        </li>
                        <li className="nav-item">
                          <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pills1-reviews">Reviews (2)</button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content-wrap">
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="pills1-description">
                          <div className="row">
                            <div className="col-md-6">
                              <h4 className="mb-20">Product Description</h4>
                              <p>Maecenas egestas quam et volutpat bibendum metus vulputate platea eleifend sed Integer dictum ultricies consectetuer nunc vivamus a. Eu mus justo magna lacinia purus sodales scelerisque. Sociosqu pede
                                facilisi. Curae; lacinia id. Sociis pretium gravida auctor mus amet accumsan adipiscing id dignissim, potenti. Curae; massa ridiculus lobortis consectetuer condimentum mollis vulputate hymenaeos
                                tellus egestas auctor dictumst imperdiet curae; quisque ut porta molestie dui duis blandit molestie etiam enim erat sociis lacinia litora phasellus sit. Ipsum Lacinia class enim pharetra interdum
                                potenti tellus parturient. Potenti scelerisque erat facilisi mauris tortor, mattis euismod augue nascetur rutrum augue ipsum tortor cum Porta primis.</p>
                              <h4 className="my-20">Wireless </h4>
                              <p>Praesent lectus facilisi tempor ridiculus arcu pharetra non tellus. Torquent nisl tempor. Magnis mollis lobortis nam, montes ut, consequat sed amet nullam, malesuada nascetur ornare sociosqu magna cum
                                gravida quam tincidunt dapibus tellus felis nibh inceptos netus convallis facilisis torquent. Laoreet pulvinar ut. Fringilla lacus tellus lectus erat hac conubia eget quisque nisi aliquam nibh molestie
                                nisi hymenaeos id phasellus metus duis inceptos arcu hendrerit ligula blandit lectus nisl fermentum sociosqu pretium eros libero.</p>
                            </div>
                            <div className="col-md-6">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <h4 className="text-secondary mb-20">Payment &amp; Shipment:</h4>
                                  <ol>
                                    <li>We accept Alipay, Paypal, Western Union, TT. All major credit cards are accepted through secure payment processor ESCROW.</li>
                                    <li>If you need faster shipping way, We recommend the Aliexpress Standard Shipping .You also can choose the DHL,Fedx.</li>
                                    <li>All the items will be dispatched within 2 business days, to USA、France、United Kingdom need 1-5 weeks ,Canada, Australia Russia and need around 2 to 5 weeks.</li>
                                    <li>Also ,the delay or failure delivery is sometimes caused by the policy of different customs, for example ,the laser pointer is unacceptable in some countries.</li>
                                  </ol>
                                  <h4 className="text-secondary my-20">About FAQ: </h4>
                                  <div className="row accordion left-plus border-style-1">
                                    <div className="col">
                                      <div id="accordion-1">
                                        <div className="accordion-item bg-gray">
                                          <h2 className="accordion-header">
                                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse-1">Website and Mobile App Design</button>
                                          </h2>
                                          <div id="collapse-1" className="accordion-collapse collapse show" data-bs-parent="#accordion-1">
                                            <div className="accordion-body">
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item bg-gray">
                                          <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-2">Motion Graphics and Animation</button>
                                          </h2>
                                          <div id="collapse-2" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                                            <div className="accordion-body">
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="accordion-item bg-gray">
                                          <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapse-3">User Experience and Brand Strategy</button>
                                          </h2>
                                          <div id="collapse-3" className="accordion-collapse collapse" data-bs-parent="#accordion-1">
                                            <div className="accordion-body">
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
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
                        <div className="tab-pane fade" id="pills1-information">
                          <table className="woocommerce-product-attributes shop_attributes">
                            <tbody><tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_color">
                                <th className="woocommerce-product-attributes-item__label">Color</th>
                                <td className="woocommerce-product-attributes-item__value">
                                  <p>Blue, Gray, White</p>
                                </td>
                              </tr>
                              <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_size">
                                <th className="woocommerce-product-attributes-item__label">Size</th>
                                <td className="woocommerce-product-attributes-item__value">
                                  <p>L, M, XL</p>
                                </td>
                              </tr>
                            </tbody></table>
                        </div>
                        <div className="tab-pane fade" id="pills1-reviews">
                          <div id="reviews" className="row woocommerce-Reviews">
                            <div id="comments" className="col-12 col-md-7">
                              <div className="fancy-rating-summery unicode-arrow">
                                <div className="rating-avg-wrap">
                                  <div className="rating-avg">5 ★</div>
                                  <div className="rating-review-count">
                                    <span>2 Ratings</span>
                                  </div>
                                </div>
                                <div className="rating-histogram-wrap">
                                  <div className="rating-histogram">
                                    <div className="rating-bar">
                                      <div className="rating-star">5 ★ </div>
                                      <div className="progress">
                                        <div className="progress-bar good" style={{width: '100%'}} />
                                      </div>
                                      <div className="rating-count">2 </div>
                                    </div>
                                    <div className="rating-bar">
                                      <div className="rating-star">4 ★ </div>
                                      <div className="progress">
                                        <div className="progress-bar good" style={{width: '0%'}} />
                                      </div>
                                      <div className="rating-count zero">0</div>
                                    </div>
                                    <div className="rating-bar">
                                      <div className="rating-star">3 ★ </div>
                                      <div className="progress">
                                        <div className="progress-bar good" style={{width: '0%'}} />
                                      </div>
                                      <div className="rating-count zero">0</div>
                                    </div>
                                    <div className="rating-bar">
                                      <div className="rating-star">2 ★ </div>
                                      <div className="progress">
                                        <div className="progress-bar poor" style={{width: '0%'}} />
                                      </div>
                                      <div className="rating-count zero">0</div>
                                    </div>
                                    <div className="rating-bar">
                                      <div className="rating-star">1 ★ </div>
                                      <div className="progress">
                                        <div className="progress-bar bad" style={{width: '0%'}} />
                                      </div>
                                      <div className="rating-count zero">0</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ol className="commentlist">
                                <li className="review byuser comment-author-admin bypostauthor even thread-even depth-1" id="li-comment-9">
                                  <div id="comment-9" className="comment_container">
                                    <img alt src="/assets/images/avatar/1.png" className="avatar avatar-60 photo" />
                                    <div className="comment-text">
                                      <div className="fancy-star-rating">
                                        <div className="rating-wrap">
                                          <div className="fancy-rating good">5 <span>★</span></div>
                                          <div className="fancy-rating-summery unicode-arrow">
                                            <div className="rating-avg-wrap">
                                              <div className="rating-avg">5 ★</div>
                                              <div className="rating-review-count">
                                                <span>2 Ratings</span>
                                              </div>
                                            </div>
                                            <div className="rating-histogram-wrap">
                                              <div className="rating-histogram">
                                                <div className="rating-bar">
                                                  <div className="rating-star">5 ★ </div>
                                                  <div className="progress">
                                                    <div className="progress-bar good" style={{width: '100%'}} />
                                                  </div>
                                                  <div className="rating-count">2 </div>
                                                </div>
                                                <div className="rating-bar">
                                                  <div className="rating-star">4 ★ </div>
                                                  <div className="progress">
                                                    <div className="progress-bar good" style={{width: '0%'}} />
                                                  </div>
                                                  <div className="rating-count zero">0</div>
                                                </div>
                                                <div className="rating-bar">
                                                  <div className="rating-star">3 ★ </div>
                                                  <div className="progress">
                                                    <div className="progress-bar good" style={{width: '0%'}} />
                                                  </div>
                                                  <div className="rating-count zero">0</div>
                                                </div>
                                                <div className="rating-bar">
                                                  <div className="rating-star">2 ★ </div>
                                                  <div className="progress">
                                                    <div className="progress-bar poor" style={{width: '0%'}} />
                                                  </div>
                                                  <div className="rating-count zero">0</div>
                                                </div>
                                                <div className="rating-bar">
                                                  <div className="rating-star">1 ★ </div>
                                                  <div className="progress">
                                                    <div className="progress-bar bad" style={{width: '0%'}} />
                                                  </div>
                                                  <div className="rating-count zero">0</div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rating-counts-wrap">
                                          <a href="#reviews" className="unicode-rating-review-link" rel="nofollow">
                                            <span className="rating-counts">
                                              (2)							</span>
                                          </a>
                                        </div>
                                      </div>
                                      <p className="meta">
                                        <strong className="woocommerce-review__author">admin </strong>
                                        <span className="woocommerce-review__dash">–</span> <time className="woocommerce-review__published-date" dateTime="2021-11-28T13:42:14+00:00">November 28, 2021</time>
                                      </p>
                                      <div className="description">
                                        <p>Excellent Product, What I’m looking for…..</p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                {/* #comment-## */}
                                <li className="review byuser comment-author-abusayeed345 odd alt thread-odd thread-alt depth-1" id="li-comment-23">
                                  <div id="comment-23" className="comment_container">
                                    <img alt src="https://secure.gravatar.com/avatar/4909543956b41309a6fcc9caa411a4bd?s=60&d=mm&r=g" srcSet="https://secure.gravatar.com/avatar/4909543956b41309a6fcc9caa411a4bd?s=120&d=mm&r=g 2x" className="avatar avatar-60 photo" height={60} width={60} loading="lazy" />
                                    <div className="comment-text">
                                      <div className="fancy-star-rating">
                                        <div className="rating-wrap">
                                          <div className="fancy-rating good">5 <span>★</span></div>
                                          <div className="fancy-rating-summery unicode-arrow">
                                            <div className="rating-avg-wrap">
                                              <div className="rating-avg">5 ★</div>
                                              <div className="rating-review-count">
                                                <span>2 Ratings</span>
                                              </div>
                                            </div>
                                            <div className="rating-histogram-wrap">
                                              <div className="rating-histogram">
                                                <div className="rating-bar">
                                                  <div className="rating-star">5 ★ </div>
                                                  <div className="progress">
                                                    <div className="progress-bar good" style={{width: '100%'}} />
                                                  </div>
                                                  <div className="rating-count">2 </div>
                                                </div>
                                                <div className="rating-bar">
                                                  <div className="rating-star">4 ★ </div>
                                                  <div className="progress">
                                                    <div className="progress-bar good" style={{width: '0%'}} />
                                                  </div>
                                                  <div className="rating-count zero">0</div>
                                                </div>
                                                <div className="rating-bar">
                                                  <div className="rating-star">3 ★ </div>
                                                  <div className="progress">
                                                    <div className="progress-bar good" style={{width: '0%'}} />
                                                  </div>
                                                  <div className="rating-count zero">0</div>
                                                </div>
                                                <div className="rating-bar">
                                                  <div className="rating-star">2 ★ </div>
                                                  <div className="progress">
                                                    <div className="progress-bar poor" style={{width: '0%'}} />
                                                  </div>
                                                  <div className="rating-count zero">0</div>
                                                </div>
                                                <div className="rating-bar">
                                                  <div className="rating-star">1 ★ </div>
                                                  <div className="progress">
                                                    <div className="progress-bar bad" style={{width: '0%'}} />
                                                  </div>
                                                  <div className="rating-count zero">0</div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="rating-counts-wrap">
                                          <a href="#reviews" className="unicode-rating-review-link" rel="nofollow">
                                            <span className="rating-counts">
                                              (2)							</span>
                                          </a>
                                        </div>
                                      </div>
                                      <p className="meta">
                                        <strong className="woocommerce-review__author">abusayeed345 </strong>
                                        <em className="woocommerce-review__verified verified">(verified owner)</em> <span className="woocommerce-review__dash">–</span> <time className="woocommerce-review__published-date" dateTime="2021-12-02T11:44:23+00:00">December 2, 2021</time>
                                      </p>
                                      <div className="description">
                                        <p>Very comfortable for full winter.</p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                {/* #comment-## */}
                              </ol>
                            </div>
                            <div id="review_form_wrapper" className="col-12 col-md-5">
                              <div id="review_form">
                                <div id="respond" className="comment-respond">
                                  <h4 id="reply-title" className="comment-reply-title">Add a review <small><a rel="nofollow" id="cancel-comment-reply-link" href="/default/product/blazer-jins-coat/#respond" style={{display: 'none'}}>Cancel reply</a></small></h4>
                                  <form action="https://bigbazar.unicoderbd.com/default/wp-comments-post.php" method="post" id="commentform" className="comment-form">
                                    <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span></p>
                                    <div className="comment-form-rating fancy-rating"><label htmlFor="rating">Your rating&nbsp;<span className="required">*</span></label><select name="rating" id="rating" required>
                                        <option value>Rate…</option>
                                        <option value={5}>Perfect</option>
                                        <option value={4}>Good</option>
                                        <option value={3}>Average</option>
                                        <option value={2}>Not that bad</option>
                                        <option value={1}>Very poor</option>
                                      </select></div>
                                    <p className="comment-form-comment"><label htmlFor="comment">Your review&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required defaultValue={""} /></p>
                                    <p className="comment-form-author"><label htmlFor="author">Name&nbsp;<span className="required">*</span></label> <input id="author" name="author" type="text" defaultValue size={30} required /></p>
                                    <p className="comment-form-email">
                                      <label htmlFor="email">Email&nbsp;<span className="required">*</span></label>
                                      <input id="email" name="email" type="email" defaultValue size={30} required /></p>
                                    <p className="comment-form-cookies-consent">
                                      <input id="wp-comment-cookies-consent" className="d-none" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" />
                                      <label htmlFor="wp-comment-cookies-consent" className="custom-checkbox-1">Save my name, email, and website in this browser for the next time I comment.</label></p>
                                    <p className="form-submit">
                                      <input name="submit" type="submit" id="submit" className="submit btn btn-primary-filter" defaultValue="Submit" /> <input type="hidden" name="comment_post_ID" defaultValue={1787} id="comment_post_ID" />
                                      <input type="hidden" name="comment_parent" id="comment_parent" defaultValue={0} />
                                    </p>
                                  </form>
                                </div>
                                {/* #respond */}
                              </div>
                            </div>
                            <div className="clear" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-12">
                      <div className="section-head border-bottom d-flex justify-content-between align-items-end mb-3">
                        <div className="d-flex section-head-side-title">
                          <h4 className="font-500 text-dark mb-3">Related Products</h4>
                        </div>
                      </div>
                      <div className="products owl-mx-4 product-style-3 e-img-bg-light transition-all">
                        <div className="5block-carousel owl-carousel owl-dot-disable autoplay-on">
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
                                <div className="hover-area">
                                  <div className="cart-button">
                                    <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                                <div className="hover-area">
                                  <div className="cart-button">
                                    <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                                <div className="hover-area">
                                  <div className="cart-button">
                                    <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                                <div className="hover-area">
                                  <div className="cart-button">
                                    <a href="#" className="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
                    </div>
                  </div>
                </div>
              </div>
              {/* .entry-content-wrapper */}
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
