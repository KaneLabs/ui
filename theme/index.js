import light from './light';
import dark from './dark';
import shared from './shared';

export * from './breadTheme';

const timeOfDay = 'night';

export const theme = (() => {
  if (timeOfDay === 'day') {
    return { ...shared, ...light };
  }

  return { ...shared, ...dark };
})();
