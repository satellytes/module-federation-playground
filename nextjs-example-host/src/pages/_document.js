import Document, { Html, Head, Main, NextScript } from 'next/document';
import {ColorSchemeScript} from "@mantine/core";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
          <ColorSchemeScript defaultColorScheme={"dark"} />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;