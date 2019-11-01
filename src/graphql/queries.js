/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAccounts = `query ListAccounts {
  listAccounts {
    items {
      id
      first
      last
      email
      has
      emailList
    }
  }
}
`;
export const getAccount = `query GetAccount($id: String!) {
  getAccount(id: $id) {
    id
    first
    last
    email
    has
    emailList
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
    id
    description
    price
    publishDate
  }
}
`;
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      price
      publishDate
    }
    nextToken
  }
}
`;
