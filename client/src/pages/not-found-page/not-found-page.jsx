import React from "react";
import "./not-found-page.css";
import { Button, Layout } from "../../components/";

function notFoundPage() {
  return (
    <main className="mainRedirect">
      <Layout width="full" name="Redirect">
        <h2 className="Redirect__title">Page not found</h2>
        <Button shape="rect" bg="blue" hover="trans" arrow="none" href="/">
          Return home?
        </Button>
      </Layout>
    </main>
  );
}

export default notFoundPage;
