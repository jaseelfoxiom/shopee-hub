import React from 'react'

function Navbar() {
  return (
      <>
      <div className="page-header">
  <div className="header-wrapper row m-0">
    <div className="header-logo-wrapper col-auto p-0">
      <div className="logo-wrapper"><a href="index.html"><img className="img-fluid for-light" src="../assets/images/logo/logo-1.png" alt /><img className="img-fluid for-dark" src="../assets/images/logo/logo.png" alt /></a></div>
      <div className="toggle-sidebar">
        <svg className="sidebar-toggle">
          <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#stroke-animation" />
        </svg>
      </div>
    </div>
    <div className="left-header col-xxl-5 col-xl-6 col-auto box-col-6 horizontal-wrapper p-0">
      <div className="left-menu-header">
        <ul className="app-list">
          <li className="onhover-dropdown">
            <div className="app-menu"> <i data-feather="folder-plus" /></div>
            <ul className="onhover-show-div left-dropdown">
              <li> <a href="file-manager.html">File Manager</a></li>
              <li> <a href="kanban.html"> Kanban board</a></li>
              <li> <a href="social-app.html"> Social App</a></li>
              <li> <a href="bookmark.html"> Bookmark</a></li>
            </ul>
          </li>
        </ul>
        <ul className="header-left">
          <li className="onhover-dropdown"><span className="f-w-500">
              <svg>
                <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-bonus" />
              </svg>Bonus Ui</span>
            <ul className="onhover-show-div left-dropdown">
              <li><a href="scrollable.html">Scrollable</a></li>
              <li><a href="tree.html">Tree view</a></li>
              <li><a href="toasts.html">Toasts</a></li>
              <li><a href="rating.html">Rating</a></li>
              <li><a href="dropzone.html">dropzone</a></li>
              <li><a href="tour.html">Tour</a></li>
              <li><a href="sweet-alert2.html">SweetAlert2</a></li>
              <li><a href="modal-animated.html">Animated Modal</a></li>
              <li><a href="owl-carousel.html">Owl Carousel</a></li>
              <li><a href="ribbons.html">Ribbons</a></li>
              <li><a href="pagination.html">Pagination</a></li>
              <li><a href="breadcrumb.html">Breadcrumb</a></li>
              <li><a href="range-slider.html">Range Slider</a></li>
              <li><a href="image-cropper.html">Image cropper</a></li>
              <li><a href="basic-card.html">Basic Card</a></li>
              <li><a href="creative-card.html">Creative Card</a></li>
              <li><a href="dragable-card.html">Draggable Card</a></li>
              <li><a href="timeline-v-1.html">Timeline</a></li>
            </ul>
          </li>
          <li className="onhover-dropdown"><span className="f-w-500">
              <svg>
                <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-Grid" />
              </svg>Level Menu</span>
            <ul className="onhover-show-div left-dropdown">
              <li><a href="add-products.html">Add Product</a></li>
              <li><a href="product.html">Product</a></li>
              <li><a href="product-page.html">Product page</a></li>
              <li><a href="list-products.html">Product list</a></li>
              <li><a href="payment-details.html">Payment Details</a></li>
              <li><a href="order-history.html">Order History</a></li>
              <li><a href="invoice-template.html">Invoice</a></li>
              <li><a href="cart.html">Cart</a></li>
              <li><a href="list-wish.html">Wishlist</a></li>
              <li><a href="checkout.html">Checkout</a></li>
              <li><a href="pricing.html">Pricing</a></li>
            </ul>
          </li>
          <li className="onhover-dropdown"> <span className="f-w-500">
              <svg>
                <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-Perk-Ui" />
              </svg>Project</span>
            <ul className="onhover-show-div left-dropdown">
              <li><a href="projects.html">Project List</a></li>
              <li><a href="projectcreate.html">Create new</a></li>
            </ul>
          </li>
          <li className="onhover-dropdown p-0"><span className="f-w-500">
              <svg>
                <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-bonus" />
              </svg>Blog</span>
            <ul className="onhover-show-div left-dropdown">
              <li><a href="blog.html">Blog Details</a></li>
              <li><a href="blog-single.html">Blog Single</a></li>
              <li><a href="add-post.html">Add Post</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-right col-xxl-7 col-xl-6 col-auto box-col-6 pull-right right-header p-0 ms-auto">
      <ul className="nav-menus">
        <li className="serchinput">
          <div className="serchbox">
            <svg>
              <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-search" />
            </svg>
          </div>
          <div className="form-group search-form">
            <input type="text" placeholder="Search here..." />
          </div>
        </li>
        <li>
          <div className="form-group w-100">
            <div className="Typeahead Typeahead--twitterUsers">
              <div className="u-posRelative d-flex">
                <svg className="search-bg svg-color me-2">
                  <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-search" />
                </svg>
                <input className="demo-input py-0 Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search Dunzo .." name="q" title />
              </div>
            </div>
          </div>
        </li>
        <li className="onhover-dropdown">
          <div className="notification-box">
            <svg>
              <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-Bell" />
            </svg>
          </div>
          <div className="onhover-show-div notification-dropdown">
            <h6 className="f-18 mb-0 dropdown-title">Notitications                             </h6>
            <ul>
              <li className="b-l-primary bg-light-primary border-4 mt-3">
                <p className="font-primary">Delivery processing <span className="font-primary">10 min.</span></p>
              </li>
              <li className="b-l-secondary bg-light-secondary border-4 mt-3">
                <p className="font-secondary">Order Complete<span className="font-secondary">1 hr</span></p>
              </li>
              <li className="b-l-success bg-light-success border-4 mt-3">
                <p className="font-success">Tickets Generated<span className="font-success">3 hr</span></p>
              </li>
              <li className="b-l-info bg-light-info border-4 mt-3">
                <p className="font-info">Delivery Complete<span className="font-info">6 hr</span></p>
              </li>
              <li><a className="f-w-700" href="private-chat.html">Check all</a></li>
            </ul>
          </div>
        </li>
        <li className="onhover-dropdown">
          <svg>
            <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-star" />
          </svg>
          <div className="onhover-show-div bookmark-flip">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="front">
                  <h6 className="f-18 mb-0 dropdown-title">Bookmark</h6>
                  <ul className="bookmark-dropdown">
                    <li>
                      <div className="row">
                        <div className="col-4 text-center">
                          <div className="bookmark-content">
                            <div className="bookmark-icon"><i data-feather="file-text" /></div><span>Forms</span>
                          </div>
                        </div>
                        <div className="col-4 text-center">
                          <div className="bookmark-content">
                            <div className="bookmark-icon"><i data-feather="user" /></div><span>Profile</span>
                          </div>
                        </div>
                        <div className="col-4 text-center">
                          <div className="bookmark-content">
                            <div className="bookmark-icon"><i data-feather="server" /></div><span>Tables</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="text-center"><a className="flip-btn f-w-700" id="flip-btn" href="javascript:void(0)">Add New Bookmark</a></li>
                  </ul>
                </div>
                <div className="back">
                  <ul>
                    <li>
                      <div className="bookmark-dropdown flip-back-content">
                        <input type="text" placeholder="search..." />
                      </div>
                    </li>
                    <li><a className="f-w-700 d-block flip-back" id="flip-back" href="javascript:void(0)">Back</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="cart-nav onhover-dropdown">
          <div className="cart-box">
            <svg>
              <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-Buy" />
            </svg>
          </div>
          <div className="cart-dropdown onhover-show-div">
            <h6 className="f-18 mb-0 dropdown-title">Cart</h6>
            <ul>
              <li>
                <div className="d-flex"><img className="img-fluid b-r-5 img-60" src="../assets/images/ecommerce/06.jpg" alt />
                  <div className="flex-grow-1"><span>Winter T-shirt</span>
                    <h6>1 X $ 299.00</h6>
                  </div>
                  <div className="close-circle"><a href="#"><i className="fa fa-times" /></a></div>
                </div>
              </li>
              <li>
                <div className="d-flex"><img className="img-fluid b-r-5 img-60" src="../assets/images/ecommerce/02.jpg" alt />
                  <div className="flex-grow-1"><span>Men Shirt</span>
                    <h6>1 X $ 299.00</h6>
                  </div>
                  <div className="close-circle"><a href="#"><i className="fa fa-times" /></a></div>
                </div>
              </li>
              <li className="total">
                <h5 className="mb-0">Subtotal :<span className="f-right">$299.00</span></h5>
              </li>
              <li><a className="view-cart" href="cart.html">View Cart</a><a className="view-checkout f-right" href="checkout.html">Checkout</a></li>
            </ul>
          </div>
        </li>
        <li className="onhover-dropdown">
          <div className="message">
            <svg>
              <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-message" />
            </svg><span className="rounded-pill badge-secondary"> </span>
          </div>
          <div className="onhover-show-div message-dropdown">
            <h6 className="f-18 mb-0 dropdown-title">Message                             </h6>
            <ul>
              <li>
                <div className="d-flex align-items-start">
                  <div className="message-img bg-light-primary"><img src="../assets/images/user/3.jpg" alt /></div>
                  <div className="flex-grow-1">
                    <h5 className="mb-1"><a href="email_inbox.html">Helen Walter</a></h5>
                    <p>Do you want to go see movie?</p>
                  </div>
                  <div className="notification-right"><i data-feather="x" /></div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-start">
                  <div className="message-img bg-light-primary"><img src="../assets/images/user/6.jpg" alt /></div>
                  <div className="flex-grow-1">
                    <h5 className="mb-1"><a href="email_inbox.html">Jason Borne</a></h5>
                    <p>Thank you for rating us.</p>
                  </div>
                  <div className="notification-right"><i data-feather="x" /></div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-start">
                  <div className="message-img bg-light-primary"><img src="../assets/images/user/10.jpg" alt /></div>
                  <div className="flex-grow-1">
                    <h5 className="mb-1"><a href="email_inbox.html">Sarah Loren</a></h5>
                    <p>What`s the project report update?</p>
                  </div>
                  <div className="notification-right"><i data-feather="x" /></div>
                </div>
              </li>
              <li><a className="f-w-700" href="email-application.html">Check all</a></li>
            </ul>
          </div>
        </li>
        <li>
          <div className="mode">
            <svg>
              <use href="https://admin.pixelstrap.net/dunzo/assets/svg/icon-sprite.svg#fill-dark" />
            </svg>
          </div>
        </li>
        <li className="profile-nav onhover-dropdown p-0">
          <div className="d-flex align-items-center profile-media"><img className="b-r-10 img-40" src="../assets/images/dashboard/profile.png" alt />
            <div className="flex-grow-1"><span>Helen Walter</span>
              <p className="mb-0">Admin <i className="middle fa fa-angle-down" /></p>
            </div>
          </div>
          <ul className="profile-dropdown onhover-show-div">
            <li><a href="user-profile.html"><i data-feather="user" /><span>Account </span></a></li>
            <li><a href="email-application.html"><i data-feather="mail" /><span>Inbox</span></a></li>
            <li><a href="task.html"><i data-feather="file-text" /><span>Taskboard</span></a></li>
            <li><a href="edit-profile.html"><i data-feather="settings" /><span>Settings</span></a></li>
            <li><a href="login.html"><i data-feather="log-in"> </i><span>Log in</span></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

      </>
  )
}

export default Navbar

