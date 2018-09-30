// @flow

import * as React from "react";

import { Page, Grid, GalleryCard, Form } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";

import json from "./data/Gallery.Items";
// TODO:Add GalleryCardList component to avoid insert extra className
// TODO:Update Page.Header to additional components

function GalleryPage(): React.Node {
  const options = (
    <React.Fragment>
      <Form.Select className="w-auto mr-2">
        <option value="asc">Newest</option>
        <option value="desc">Oldest</option>
      </Form.Select>
      <Form.Input icon="search" placeholder="Search photo" />
    </React.Fragment>
  );
  return (
    <SiteWrapper>
      <Page.Content />
    </SiteWrapper>
  );
}

export default GalleryPage;
