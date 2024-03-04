import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}