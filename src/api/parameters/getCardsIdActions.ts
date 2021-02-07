export interface GetCardsIdActions {
  /** The ID of the Card */
  id: Record<string, any>;
  /** A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/). */
  filter?: string;
}