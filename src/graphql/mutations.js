/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = `mutation CreateAccount($input: CreateAccountInput!) {
  createAccount(input: $input) {
    id
    first
    last
    email
    has
    emailList
  }
}
`;
export const updateAccount = `mutation UpdateAccount($input: UpdateAccountInput!) {
  updateAccount(input: $input) {
    id
    first
    last
    email
    has
    emailList
  }
}
`;
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
    id
    description
    price
    publishDate
  }
}
`;
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
    id
    description
    price
    publishDate
  }
}
`;
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
    id
    description
    price
    publishDate
  }
}
`;
