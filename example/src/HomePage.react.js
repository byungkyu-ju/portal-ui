// @flow

import * as React from "react";

import { Page } from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "./SiteWrapper.react";

(function() {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://ju-insight.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();

function Home() {
  return (
    <SiteWrapper>
      <Page.Content>
        <div id="disqus_thread" />
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
