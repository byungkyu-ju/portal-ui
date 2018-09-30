// @flow

import * as React from "react";

import { Page, Grid, Form, Card, Table, Badge } from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";
function CrawlingNewsPage(): React.Node {
  const options = (
    <React.Fragment>
      <Form.Select className="w-auto mr-2">
        <option value="asc">Newest</option>
        <option value="desc">Oldest</option>
      </Form.Select>
      <Form.Input icon="search" placeholder="Search News" />
    </React.Fragment>
  );
  return (
    <SiteWrapper>
      <Page.Content title="Crawled News Data">
        <Page.Header subTitle="1 - 12 of 1713 photos" options={options} />
        <Grid.Row>
          <Grid.Col>
            <Card>
              <Table className="card-table table-vcenter">
                <Table.Body>
                  <Table.Row>
                    <Table.Col>
                      <img
                        alt=""
                        src="https://tabler.github.io/tabler/demo/products/apple-iphone7-special.jpg"
                        className="h-8"
                      />
                    </Table.Col>
                    <Table.Col>
                      Apple iPhone 7 Plus 256GB Red Special Edition
                    </Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      98 reviews
                    </Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      38 offers
                    </Table.Col>
                    <Table.Col className="text-right">
                      <strong>$499</strong>
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>
                      <img
                        alt=""
                        src="https://tabler.github.io/tabler/demo/products/apple-macbook-pro.jpg"
                        className="h-8"
                      />
                    </Table.Col>
                    <Table.Col>
                      Apple MacBook Pro i7 3,1GHz/16/512/Radeon 560 Space Gray{" "}
                      <Badge color="default"> New </Badge>
                    </Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      97 reviews
                    </Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      13 offers
                    </Table.Col>
                    <Table.Col className="text-right">
                      <strong>$1499</strong>
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>
                      <img
                        alt=""
                        src="https://tabler.github.io/tabler/demo/products/apple-iphone7.jpg"
                        className="h-8"
                      />
                    </Table.Col>
                    <Table.Col>Apple iPhone 7 32GB Jet Black</Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      48 reviews{" "}
                    </Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      38 offers
                    </Table.Col>
                    <Table.Col className="text-right">
                      <strong>$499</strong>
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>
                      <img
                        alt=""
                        src="https://tabler.github.io/tabler/demo/products/sony-kd.jpg"
                        className="h-8"
                      />
                    </Table.Col>
                    <Table.Col>
                      Sony KD-49XE7005
                      <Badge color="default"> New </Badge>
                    </Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      54 reviews
                    </Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      14 offers
                    </Table.Col>
                    <Table.Col className="text-right">
                      <strong>$799</strong>
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default CrawlingNewsPage;
