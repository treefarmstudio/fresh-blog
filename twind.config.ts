import { Options } from '$fresh/plugins/twind.ts';
import * as colors from 'twind/colors';

export default {
  selfURL: import.meta.url,
  setup: {
    theme: {
      colors: {
        yellow: colors.yellow,
        transparent: 'transparent',
      },
    },
  },
} as Options;
