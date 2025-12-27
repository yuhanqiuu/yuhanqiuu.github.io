import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import { defineConfig, squooshImageService } from 'astro/config';

export default defineConfig({
  site: 'https://yuhanqiuu.github.io',
  base: '/astro-portfolio/',
  output: 'static',
  
  integrations: [tailwind(), mdx(), icon({
    include: {
      mdi: ["*"]
    }
  })],
  image: {
    service: squooshImageService()
  }
});