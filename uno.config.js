import { defineConfig, presetUno } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  content: {
    filesystem: ['./src/*.{html,js,ts,jsx,tsx,vue,svelte,astro}']
  },
  presets: [presetUno()],
  transformers: [transformerVariantGroup()]
});
