export interface GetCardAttachments {
  /** The ID of the Card */
  id: string;
  /** `all` or a comma-separated list of attachment [fields](https://developer.atlassian.com/cloud/trello/guides/rest-api/object-definitions/) */
  fields: string;
  /** Use `cover` to restrict to just the cover attachment */
  filter: string;
}
