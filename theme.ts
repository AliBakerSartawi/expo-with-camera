// some helpful reset styles for web:

import { TamaguiProvider, createTamagui } from 'tamagui';
// some nice defaults:

import { config } from '@tamagui/config/v2';
// you usually export this from a tamagui.config.ts file:

// this can be as simple as an empty object

export const tamaguiConfig = createTamagui(config);
// this makes typescript properly type everything based on the config

type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
