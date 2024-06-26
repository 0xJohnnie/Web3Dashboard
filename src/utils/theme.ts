'use client';

import { Button, createTheme, Divider, rem } from '@mantine/core';

import buttonClass from '@style/Button.module.css';

import {
  _buttonRadius,
  _defaultFontWeight,
  _defaultPrimaryColor,
  _defaultRadius,
} from './constant';

export const theme = createTheme({
  scale: 1,
  fontSizes: {
    xs: rem(14), // 10
    sm: rem(16), // 11
    md: rem(18), // 14
    lg: rem(24), // 16
    xl: rem(36), // 20
  },
  headings: {
    // properties for all headings
    fontWeight: `${_defaultFontWeight}`,
  },

  components: {
    Button: Button.extend({
      defaultProps: {
        style: { fontWeight: _defaultFontWeight },
        radius: _buttonRadius,
      },
    }),

    Divider: Divider.extend({
      defaultProps: {
        style: { margin: 'var(--mantine-spacing-lg)' },
      },
    }),
  },
  fontFamily: 'Roboto, sans-serif',
  primaryColor: _defaultPrimaryColor,
  primaryShade: 8,
  luminanceThreshold: 0.5,
  autoContrast: true,
  cursorType: 'pointer',
  defaultRadius: _defaultRadius,
  activeClassName: buttonClass.buttonDefault,
});
