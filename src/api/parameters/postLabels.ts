export interface PostLabels {
  /** Name for the label */
  name: string;
  /** The color for the label. */
  color: Record<string, any>;
  /** The ID of the Board to create the Label on. */
  idBoard: string;
}