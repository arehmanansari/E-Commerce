import React from "react";
import { Link } from "react-router-dom";
import "../Styles/DashboardSidebar.css";
import Dashboard from "./Dashboard";

const DashboardSidebar = () => {
  return (
    <div>
      <div className="dashboardsidebar">
        <details>
          <summary>Home</summary>
          <ul>
            <li>
              <Link to={"/"}>E Commerce</Link>
            </li>
            <li>
              <Link to={"/"}>Project Management</Link>
            </li>
            <li>
              <Link to={"/"}>CRM</Link>
            </li>
            <li>
              <Link to={"/"}>Social Feed</Link>
            </li>
          </ul>
        </details>
        <p>Apps</p>
        <details>
          <summary>E Commerce</summary>
          <ul>
            <details>
              <summary>Admin</summary>
              <ul>
                <li>
                  <Link to={"/"}>Add Product</Link>
                </li>
                <li>
                  <Link to={"/"}>Products</Link>
                </li>
                <li>
                  <Link to={"/"}>Customers</Link>
                </li>
                <li>
                  <Link to={"/"}>Customer Details</Link>
                </li>
                <li>
                  <Link to={"/"}>Orders</Link>
                </li>
                <li>
                  <Link to={"/"}>Order Details</Link>
                </li>
                <li>
                  <Link to={"/"}>Refund</Link>
                </li>
              </ul>
            </details>
            <details>
              <summary>Customer</summary>
              <ul>
                <li>
                  <Link to={"/"}>Homepage</Link>
                </li>
                <li>
                  <Link to={"/"}>Product Details</Link>
                </li>
                <li>
                  <Link to={"/"}>Product Filter</Link>
                </li>
                <li>
                  <Link to={"/"}>Cart</Link>
                </li>
                <li>
                  <Link to={"/"}>Checkout</Link>
                </li>
                <li>
                  <Link to={"/"}>Shipping Info</Link>
                </li>
                <li>
                  <Link to={"/"}>Profile</Link>
                </li>
                <li>
                  <Link to={"/"}>Favourite Stores</Link>
                </li>
                <li>
                  <Link to={"/"}>Wishlist</Link>
                </li>
                <li>
                  <Link to={"/"}>Order Tracking</Link>
                </li>
                <li>
                  <Link to={"/"}>Invoice</Link>
                </li>
              </ul>
            </details>
          </ul>
        </details>
        <details>
          <summary>CRM</summary>
          <ul>
            <li>
              <Link to={"/"}>Analytics</Link>
            </li>
            <li>
              <Link to={"/"}>Deals</Link>
            </li>
            <li>
              <Link to={"/"}>Deal Details</Link>
            </li>
            <li>
              <Link to={"/"}>Leads</Link>
            </li>
            <li>
              <Link to={"/"}>Lead Details</Link>
            </li>
            <li>
              <Link to={"/"}>Report</Link>
            </li>
            <li>
              <Link to={"/"}>Report Details</Link>
            </li>
            <li>
              <Link to={"/"}>Add Contact</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Project Management</summary>
          <ul>
            <li>
              <Link to={"/"}>Create New</Link>
            </li>
            <li>
              <Link to={"/"}>Project List View</Link>
            </li>
            <li>
              <Link to={"/"}>Project Card View</Link>
            </li>
            <li>
              <Link to={"/"}>Project Board</Link>
            </li>
            <li>
              <Link to={"/"}>Todo List</Link>
            </li>
            <li>
              <Link to={"/"}>Project Details</Link>
            </li>
          </ul>
        </details>
        <li>
          <Link to={"/chat"}>Chat</Link>
        </li>
        <details>
          <summary>E Mail</summary>
          <ul>
            <li>
              <Link to={"/"}>Inbox</Link>
            </li>
            <li>
              <Link to={"/"}>E Mail Detail</Link>
            </li>
            <li>
              <Link to={"/"}>Compose</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Events</summary>
          <ul>
            <li>
              <Link to={"/"}>Create An Event</Link>
            </li>
            <li>
              <Link to={"/"}>Event Details</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Kanban</summary>
          <ul>
            <li>
              <Link to={"/"}>Kanban</Link>
            </li>
            <li>
              <Link to={"/"}>Boards</Link>
            </li>
            <li>
              <Link to={"/"}>Create Boards</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Social</summary>
          <ul>
            <li>
              <Link to={"/"}>Profile</Link>
            </li>
            <li>
              <Link to={"/"}>Settings</Link>
            </li>
          </ul>
        </details>
        <li>
          <Link to={"/calender"}>Calender</Link>
        </li>
        <p>Pages</p>
        <li>
          <Link to={"/"}>Starter</Link>
        </li>
        <details>
          <summary>FAQ</summary>
          <ul>
            <li>
              <Link to={"/"}>FAQ Accordian</Link>
            </li>
            <li>
              <Link to={"/"}>FAQ Tab</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Landing</summary>
          <ul>
            <li>
              <Link to={"/"}>Default</Link>
            </li>
            <li>
              <Link to={"/"}>Alternate</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Pricing</summary>
          <ul>
            <li>
              <Link to={"/"}>Pricing Column</Link>
            </li>
            <li>
              <Link to={"/"}>Pricing Tab</Link>
            </li>
            <li>
              <Link to={"/"}>Notifications</Link>
            </li>
            <li>
              <Link to={"/"}>Members</Link>
            </li>
            <li>
              <Link to={"/"}>Timeline</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Authentications</summary>
          <ul>
            <details>
              <summary>Simple</summary>
              <ul>
                <li>
                  <Link to={"/"}>Sign In</Link>
                </li>
                <li>
                  <Link to={"/"}>Log In</Link>
                </li>
                <li>
                  <Link to={"/"}>Sign Out</Link>
                </li>
                <li>
                  <Link to={"/"}>Forgot Password</Link>
                </li>
                <li>
                  <Link to={"/"}>Reset Password</Link>
                </li>
                <li>
                  <Link to={"/"}>Lock Screen</Link>
                </li>
                <li>
                  <Link to={"/"}>2FA</Link>
                </li>
              </ul>
            </details>
            <details>
              <summary>Split</summary>
              <ul>
                <li>
                  <Link to={"/"}>Sign In</Link>
                </li>
                <li>
                  <Link to={"/"}>Log In</Link>
                </li>
                <li>
                  <Link to={"/"}>Sign Out</Link>
                </li>
                <li>
                  <Link to={"/"}>Forgot Password</Link>
                </li>
                <li>
                  <Link to={"/"}>Reset Password</Link>
                </li>
                <li>
                  <Link to={"/"}>Lock Screen</Link>
                </li>
                <li>
                  <Link to={"/"}>2FA</Link>
                </li>
              </ul>
            </details>
            <details>
              <summary>Card</summary>
              <ul>
                <li>
                  <Link to={"/"}>Sign In</Link>
                </li>
                <li>
                  <Link to={"/"}>Log In</Link>
                </li>
                <li>
                  <Link to={"/"}>Sign Out</Link>
                </li>
                <li>
                  <Link to={"/"}>Forgot Password</Link>
                </li>
                <li>
                  <Link to={"/"}>Reset Password</Link>
                </li>
                <li>
                  <Link to={"/"}>Lock Screen</Link>
                </li>
                <li>
                  <Link to={"/"}>2FA</Link>
                </li>
              </ul>
            </details>
          </ul>
        </details>
        <details>
          <summary>Layouts</summary>
          <ul>
            <li>
              <Link to={"/"}>Vertical Sidenav</Link>
            </li>
            <li>
              <Link to={"/"}>Dark Mode</Link>
            </li>
            <li>
              <Link to={"/"}>Sidenav Collapse</Link>
            </li>
            <li>
              <Link to={"/"}>Darknav</Link>
            </li>
            <li>
              <Link to={"/"}>Topnav Slim</Link>
            </li>
            <li>
              <Link to={"/"}>Navbar Top Slim</Link>
            </li>
            <li>
              <Link to={"/"}>Navbar Top</Link>
            </li>
            <li>
              <Link to={"/"}>Horizontal Slim</Link>
            </li>
            <li>
              <Link to={"/"}>Combo Nav</Link>
            </li>
            <li>
              <Link to={"/"}>Combo Nav Slim</Link>
            </li>
            <li>
              <Link to={"/"}>Dual Nav</Link>
            </li>
          </ul>
        </details>
        <p>Modules</p>
        <details>
          <summary>Forms</summary>
          <ul>
            <details>
              <summary>Basic</summary>
              <ul>
                <li>
                  <Link to={"/"}>Form Control</Link>
                </li>
                <li>
                  <Link to={"/"}>Input Group</Link>
                </li>
                <li>
                  <Link to={"/"}>Select</Link>
                </li>
                <li>
                  <Link to={"/"}>Checks</Link>
                </li>
                <li>
                  <Link to={"/"}>Range</Link>
                </li>
                <li>
                  <Link to={"/"}>Floating Labels</Link>
                </li>
                <li>
                  <Link to={"/"}>Layout</Link>
                </li>
              </ul>
            </details>
            <details>
              <summary>Advance</summary>
              <ul>
                <li>
                  <Link to={"/"}>Advance Select</Link>
                </li>
                <li>
                  <Link to={"/"}>Data Picker</Link>
                </li>
                <li>
                  <Link to={"/"}>Editor</Link>
                </li>
                <li>
                  <Link to={"/"}>Emoji Button</Link>
                </li>
                <li>
                  <Link to={"/"}>File Uploading</Link>
                </li>
                <li>
                  <Link to={"/"}>Rating Validation</Link>
                </li>
              </ul>
            </details>
            <li>
              <Link to={"/"}>Validation</Link>
            </li>
            <li>
              <Link to={"/"}>Wizard</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Icons</summary>
          <ul>
            <li>
              <Link to={"/"}>Feather</Link>
            </li>
            <li>
              <Link to={"/"}>Font Awesome</Link>
            </li>
            <li>
              <Link to={"/"}>Unicons</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Tables</summary>
          <ul>
            <li>
              <Link to={"/"}>Basic Tables</Link>
            </li>
            <li>
              <Link to={"/"}>Advance Tables</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Charts</summary>
          <ul>
            <li>
              <Link to={"/"}>E Charts</Link>
            </li>
            <li>
              <Link to={"/"}>Gantt Charts</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Components</summary>
          <ul>
            <li>
              <Link to={"/"}>Accordian</Link>
            </li>
            <li>
              <Link to={"/"}>Avatar</Link>
            </li>
            <li>
              <Link to={"/"}>Alerts</Link>
            </li>
            <li>
              <Link to={"/"}>Badge</Link>
            </li>
            <li>
              <Link to={"/"}>BreadCrumb</Link>
            </li>
            <li>
              <Link to={"/"}>Button</Link>
            </li>
            <li>
              <Link to={"/"}>Calender</Link>
            </li>
            <li>
              <Link to={"/"}>Card</Link>
            </li>
            <details>
              <summary>Carousel</summary>
              <ul>
                <li>
                  <Link to={"/"}>Bootstrap</Link>
                </li>
                <li>
                  <Link to={"/"}>Swiper</Link>
                </li>
              </ul>
            </details>
            <li>
              <Link to={"/"}>Collapse</Link>
            </li>
            <li>
              <Link to={"/"}>Dropdown</Link>
            </li>
            <li>
              <Link to={"/"}>List Group</Link>
            </li>
            <li>
              <Link to={"/"}>Count Up</Link>
            </li>
            <li>
              <Link to={"/"}>Draggable</Link>
            </li>
            <li>
              <Link to={"/"}>Modals</Link>
            </li>
            <details>
              <summary>Navs & Tabs</summary>
              <ul>
                <li>
                  <Link to={"/"}>Navs</Link>
                </li>
                <li>
                  <Link to={"/"}>Navbar</Link>
                </li>
                <li>
                  <Link to={"/"}>Tabs</Link>
                </li>
              </ul>
            </details>
            <details>
              <summary>Pictures</summary>
              <ul>
                <li>
                  <Link to={"/"}>Lightbox</Link>
                </li>
              </ul>
            </details>
            <li>
              <Link to={"/"}>Off Canvas</Link>
            </li>
            <li>
              <Link to={"/"}>Progress Bar</Link>
            </li>
            <li>
              <Link to={"/"}>Place Holder</Link>
            </li>
            <li>
              <Link to={"/"}>Pagination</Link>
            </li>
            <li>
              <Link to={"/"}>Popovers</Link>
            </li>
            <li>
              <Link to={"/"}>Spinners</Link>
            </li>
            <li>
              <Link to={"/"}>Toasts</Link>
            </li>
            <li>
              <Link to={"/"}>Tooltips</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Utilities</summary>
          <ul>
            <li>
              <Link to={"/"}>Backgorunds</Link>
            </li>
            <li>
              <Link to={"/"}>Borders</Link>
            </li>
            <li>
              <Link to={"/"}>Colors</Link>
            </li>
            <li>
              <Link to={"/"}>Display</Link>
            </li>
            <li>
              <Link to={"/"}>Grid</Link>
            </li>
            <li>
              <Link to={"/"}>Flex</Link>
            </li>
            <li>
              <Link to={"/"}>Stack</Link>
            </li>
            <li>
              <Link to={"/"}>Float</Link>
            </li>
            <li>
              <Link to={"/"}>Interactions</Link>
            </li>
            <li>
              <Link to={"/"}>Opacity</Link>
            </li>
            <li>
              <Link to={"/"}>Overflow</Link>
            </li>
            <li>
              <Link to={"/"}>Position</Link>
            </li>
            <li>
              <Link to={"/"}>Shadows</Link>
            </li>
            <li>
              <Link to={"/"}>Sizing</Link>
            </li>
            <li>
              <Link to={"/"}>Spacing</Link>
            </li>
            <li>
              <Link to={"/"}>Typography</Link>
            </li>
            <li>
              <Link to={"/"}>Vertical Align</Link>
            </li>
            <li>
              <Link to={"/"}>Visiblity</Link>
            </li>
          </ul>
        </details>
        <li>
          <Link to={"/"}>Widgets</Link>
        </li>
        <p>Documentation</p>
        <li>
          <Link to={"/"}>Getting Started</Link>
        </li>
        <details>
          <summary>Customizations</summary>
          <ul>
            <li>
              <Link to={"/"}>Configurations</Link>
            </li>
            <li>
              <Link to={"/"}>Color</Link>
            </li>
            <li>
              <Link to={"/"}>Styling</Link>
            </li>
            <li>
              <Link to={"/"}>Dark Mode</Link>
            </li>
          </ul>
        </details>
        <li>
          <Link to={"/"}>Design File</Link>
        </li>
        <li>
          <Link to={"/"}>Changelog</Link>
        </li>
        <li>
          <Link to={"/"}>Migrations</Link>
        </li>
        <li>
          <Link to={"/"}>Showcase</Link>
        </li>
        <button
          className="collapse-button"
          onClick={() => {
            document
              .querySelector(".dashboardsidebar")
              .classList.toggle("collapsed");
          }}
        >
          &#9776;
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
