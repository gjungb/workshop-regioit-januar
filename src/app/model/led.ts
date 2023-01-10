/**
 * Eine bunte Birne, die z.B. auf einem Raspi angezeigt werden kann
 * @link {}
 */
export interface Led {
  /**
   * Der 0-basierte Index in einer Liste...
   */
  index: number;
  /**
   * Die Farbe als valider CSS-String
   */
  color: string;
  /**
   * @todo
   */
  blinking?: boolean;
}

/**
 * Type Alias
 */
export type Leds = Led[];
