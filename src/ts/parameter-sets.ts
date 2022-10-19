import { AnimatableSimulationParameters } from './parameter-animator';

const INITIAL = {
  DENSITY_DISSIPATION: 2,
  VELOCITY_DISSIPATION: 1,
  PRESSURE: 0.8,
  CURL: 4,
  SPLAT_RADIUS: 0.15,
};

const FAST_SWIRLS = {
  DENSITY_DISSIPATION: 1.7001959199780765,
  VELOCITY_DISSIPATION: 0,
  PRESSURE: 0.9544213,
  CURL: 7,
  SPLAT_RADIUS: 0.160406708142084,
};

const CENTERED_ROUND_FAST = {
  DENSITY_DISSIPATION: 0,
  VELOCITY_DISSIPATION: 4,
  PRESSURE: 0,
  CURL: 0,
  SPLAT_RADIUS: 0.215622420274714,
};

const SMALL_PUSHY_SWIRLS = {
  DENSITY_DISSIPATION: 0,
  VELOCITY_DISSIPATION: 0,
  PRESSURE: 0,
  CURL: 0,
  SPLAT_RADIUS: 0.4,
};
const ROUND_FULL = {
  DENSITY_DISSIPATION: 0.12479019661574296,
  VELOCITY_DISSIPATION: 4,
  PRESSURE: 1,
  CURL: 0,
  SPLAT_RADIUS: 0.060346389669110094,
};

const ROUND_THIN = {
  DENSITY_DISSIPATION: 0.12479019661574296,
  VELOCITY_DISSIPATION: 4,
  PRESSURE: 0,
  CURL: 0,
  SPLAT_RADIUS: 0.060346389669110094,
};

const VERY_CURLY_CENTER = {
  DENSITY_DISSIPATION: 4,
  VELOCITY_DISSIPATION: 0,
  PRESSURE: 0,
  CURL: 50,
  SPLAT_RADIUS: 0.21559653738781945,
};

const SMEARY_FAST_NICE = {
  CURL: 1,
  DENSITY_DISSIPATION: 1.0952897643189914,
  PRESSURE: 0.0625681460722641,
  SPLAT_RADIUS: 0.1882926917706907,
  VELOCITY_DISSIPATION: 4,
};

const SMEARY_FULL = {
  CURL: 1,
  DENSITY_DISSIPATION: 0,
  PRESSURE: 0.6033057994991862,
  SPLAT_RADIUS: 0.17347340823017904,
  VELOCITY_DISSIPATION: 4,
};
const SQUID_SWIRLS = {
  CURL: 35,
  DENSITY_DISSIPATION: 1.4311260550975504,
  PRESSURE: 1,
  SPLAT_RADIUS: 0.28290708986751784,
  VELOCITY_DISSIPATION: 4,
};

const parameterSets: AnimatableSimulationParameters[] = [
  INITIAL,
  FAST_SWIRLS,
  CENTERED_ROUND_FAST,
  SMALL_PUSHY_SWIRLS,
  ROUND_FULL,
  ROUND_THIN,
  VERY_CURLY_CENTER,
  SMEARY_FAST_NICE,
  SMEARY_FULL,
  SQUID_SWIRLS,
];

export default parameterSets;
