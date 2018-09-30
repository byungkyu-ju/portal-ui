// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import { Site, Nav, Grid, List, Button } from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
|};

const navBarItems: Array<navItem> = [
  { value: "Home", to: "/", icon: "home", LinkComponent: withRouter(NavLink) },
  {
    value: "Projects",
    icon: "box",
    subItems: [
      {
        value: "Crawled News Data",
        to:
          process.env.NODE_ENV === "production"
            ? "juinsight.com/projects/crawlingNews/"
            : "/crawlingNews",
        LinkComponent: withRouter(NavLink),
      },
    ],
  },
  {
    value: "Gallery",
    to: "/gallery",
    icon: "image",
    LinkComponent: withRouter(NavLink),
  },
  {
    icon: "file-text",
    value: "Documentation",
    to:
      process.env.NODE_ENV === "production"
        ? "https://tabler.github.io/tabler-react/documentation"
        : "/documentation",
  },
  {
    value: "Github",
    to: "https://github.com/byungkyu-ju",
    icon: "github",
  },
];

const notificationsObjects = [];

const accountDropdownProps = {
  avatarURL: "./demo/faces/male/25.jpg",
  name: "Byungkyu ju",
  description: "Administrator",
  options: [
    {
      icon: "user",
      value: "Profile",
      to: "/profile",
      LinkComponent: withRouter(NavLink),
    },
    { icon: "github", value: "Github", to: "https://github.com/byungkyu-ju" },
    { icon: "mail", value: "Contact", to: "mailto:noel1227@gmail.com" },
    { isDivider: true },
    { icon: "log-in", value: "sign-in" },
  ],
};

class SiteWrapper extends React.Component<Props, void> {
  render(): React.Node {
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Ju-Insight",
          imageURL: "./demo/brand/tabler.svg",
          navItems: <Nav.Item type="div" className="d-none d-md-flex" />,
          notificationsTray: { notificationsObjects },
          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
        footerProps={{
          links: [],
          note: "",
          copyright: (
            <React.Fragment>
              Copyright © 2018
              <a href="."> Tabler-react</a>. Theme by
              <a
                href="https://codecalm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                codecalm.net
              </a>{" "}
              All rights reserved.
            </React.Fragment>
          ),
          nav: <React.Fragment />,
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
