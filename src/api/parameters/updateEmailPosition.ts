export interface UpdateEmailPosition {
  /** The id of the board to update */
  id: Record<string, any>;
  /** Valid values: bottom, top. Determines the position of the email address. */
  value: string;
}