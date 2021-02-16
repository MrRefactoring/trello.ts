export interface GetCardStickers {
  /** The ID of the Card */
  id: string;
  /** `all` or a comma-separated list of sticker [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  fields?: string;
  body?: {};
}
