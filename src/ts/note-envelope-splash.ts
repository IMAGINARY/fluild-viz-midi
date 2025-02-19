import Victor from 'victor';

import Note from './note';
import ADSREnvelope from './adsr-envelope';
import { RGBColor, isRGBColor } from './color';
import { splat } from './script';
import config from './config';

export default class NoteEnvelopeSplash {
  static secondsPerRotation = 10;

  readonly note: Note;

  protected angleOffset: number;

  protected color: (t: number) => RGBColor;

  protected lastCoords: Victor;

  constructor(
    midiNote: number,
    midiVelocity: number,
    envelope: ADSREnvelope,
    color: RGBColor | ((t: number) => RGBColor),
  ) {
    this.note = new Note(midiNote, midiVelocity, envelope);
    this.angleOffset =
      (performance.now() * 0.001 * 2 * Math.PI) /
      NoteEnvelopeSplash.secondsPerRotation;

    this.color = isRGBColor(color) ? () => color : color;

    this.lastCoords = this.getPointerCoordinates();
    this.update();
  }

  getInterpolationParameter() {
    const t = this.note.elapsedTime();
    const mappedVelocity = Math.min(
      config.MIDI_VELOCITY_FACTOR * this.note.midiVelocity +
        config.MIDI_VELOCITY_OFFSET,
      127.0,
    );
    const speed = mappedVelocity / 127.0;
    return 1.0 / (-1.0 - speed * t) ** 2.0 + 1.0;
  }

  getPointerCoordinates(): Victor {
    const radius = config.RADIUS;
    const splatRadius = Math.max(0.1, config.SPLAT_RADIUS) * 0.5;
    const center = new Victor(0.5, 0.5);

    const dir = new Victor(1, 0).rotate(
      this.angleOffset + (2 * Math.PI * this.note.midiNote) / 12,
    );
    const start = center
      .clone()
      .add(dir.clone().multiplyScalar(radius - splatRadius));
    const end = center;

    const t = this.getInterpolationParameter();
    const p = start.clone().mix(end, t);
    return p;
  }

  update() {
    const volume = this.note.getVolume();
    const mappedVolume = Math.min(
      config.MIDI_VELOCITY_FACTOR * volume +
        config.MIDI_VELOCITY_OFFSET / 127.0,
      1.0,
    );
    const factor = 100000.0 * volume;
    const p = this.getPointerCoordinates();
    const d = p
      .clone()
      .subtract(this.lastCoords)
      .multiply(new Victor(factor, factor));
    const attenuation = 40.0;
    const color = this.color(this.note.elapsedTime());
    const radius = config.SPLAT_RADIUS * (1.0 - (1.0 - volume) ** 8.0);
    if (radius > 0.0) splat(p.x, p.y, d.x, d.y, color, attenuation, radius);
    this.lastCoords = p;
  }
}
