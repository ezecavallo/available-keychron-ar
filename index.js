import notifier from "node-notifier";
import fetch from "node-fetch";
import { parse } from "node-html-parser";

const PAGE_URL =
  "https://keychron.mitiendanube.com/teclados/low-profile-keyboards/k3/";
const SELECTOR = ".item-actions";

async function main() {
  const response = await fetch(PAGE_URL);
  const page = await response.text();
  var root = parse(page);

  const data = root.querySelectorAll(SELECTOR);
  if (data.length) {
    notifier.notify({
      title: "Keychron K3 Disponible",
      message: `Hay teclados Keychron K3 disponibles`,
    });
  }
}

main();

setInterval(() => {
  main();
}, 1000 * 60 * 60 * 8);
