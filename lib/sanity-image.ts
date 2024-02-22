import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = createImageUrlBuilder(client);

export function imageUrl(src: string) {
  return builder.image(src);
}
