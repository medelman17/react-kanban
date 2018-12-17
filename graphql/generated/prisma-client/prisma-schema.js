module.exports = {
        typeDefs: /* GraphQL */ `type AggregateTask {
  count: Int!
}

type AggregateTaskList {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createTask(data: TaskCreateInput!): Task!
  updateTask(data: TaskUpdateInput!, where: TaskWhereUniqueInput!): Task
  updateManyTasks(data: TaskUpdateManyMutationInput!, where: TaskWhereInput): BatchPayload!
  upsertTask(where: TaskWhereUniqueInput!, create: TaskCreateInput!, update: TaskUpdateInput!): Task!
  deleteTask(where: TaskWhereUniqueInput!): Task
  deleteManyTasks(where: TaskWhereInput): BatchPayload!
  createTaskList(data: TaskListCreateInput!): TaskList!
  updateTaskList(data: TaskListUpdateInput!, where: TaskListWhereUniqueInput!): TaskList
  updateManyTaskLists(data: TaskListUpdateManyMutationInput!, where: TaskListWhereInput): BatchPayload!
  upsertTaskList(where: TaskListWhereUniqueInput!, create: TaskListCreateInput!, update: TaskListUpdateInput!): TaskList!
  deleteTaskList(where: TaskListWhereUniqueInput!): TaskList
  deleteManyTaskLists(where: TaskListWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  task(where: TaskWhereUniqueInput!): Task
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task]!
  tasksConnection(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskConnection!
  taskList(where: TaskListWhereUniqueInput!): TaskList
  taskLists(where: TaskListWhereInput, orderBy: TaskListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TaskList]!
  taskListsConnection(where: TaskListWhereInput, orderBy: TaskListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaskListConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  task(where: TaskSubscriptionWhereInput): TaskSubscriptionPayload
  taskList(where: TaskListSubscriptionWhereInput): TaskListSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Task {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  taskList: TaskList!
}

type TaskConnection {
  pageInfo: PageInfo!
  edges: [TaskEdge]!
  aggregate: AggregateTask!
}

input TaskCreateInput {
  text: String!
  taskList: TaskListCreateOneWithoutTasksInput!
}

input TaskCreateManyWithoutTaskListInput {
  create: [TaskCreateWithoutTaskListInput!]
  connect: [TaskWhereUniqueInput!]
}

input TaskCreateWithoutTaskListInput {
  text: String!
}

type TaskEdge {
  node: Task!
  cursor: String!
}

type TaskList {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  headerColor: String
  tasks(where: TaskWhereInput, orderBy: TaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Task!]
  user: User!
}

type TaskListConnection {
  pageInfo: PageInfo!
  edges: [TaskListEdge]!
  aggregate: AggregateTaskList!
}

input TaskListCreateInput {
  title: String!
  headerColor: String
  tasks: TaskCreateManyWithoutTaskListInput
  user: UserCreateOneWithoutTaskListsInput!
}

input TaskListCreateManyWithoutUserInput {
  create: [TaskListCreateWithoutUserInput!]
  connect: [TaskListWhereUniqueInput!]
}

input TaskListCreateOneWithoutTasksInput {
  create: TaskListCreateWithoutTasksInput
  connect: TaskListWhereUniqueInput
}

input TaskListCreateWithoutTasksInput {
  title: String!
  headerColor: String
  user: UserCreateOneWithoutTaskListsInput!
}

input TaskListCreateWithoutUserInput {
  title: String!
  headerColor: String
  tasks: TaskCreateManyWithoutTaskListInput
}

type TaskListEdge {
  node: TaskList!
  cursor: String!
}

enum TaskListOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  headerColor_ASC
  headerColor_DESC
}

type TaskListPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  headerColor: String
}

input TaskListScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  headerColor: String
  headerColor_not: String
  headerColor_in: [String!]
  headerColor_not_in: [String!]
  headerColor_lt: String
  headerColor_lte: String
  headerColor_gt: String
  headerColor_gte: String
  headerColor_contains: String
  headerColor_not_contains: String
  headerColor_starts_with: String
  headerColor_not_starts_with: String
  headerColor_ends_with: String
  headerColor_not_ends_with: String
  AND: [TaskListScalarWhereInput!]
  OR: [TaskListScalarWhereInput!]
  NOT: [TaskListScalarWhereInput!]
}

type TaskListSubscriptionPayload {
  mutation: MutationType!
  node: TaskList
  updatedFields: [String!]
  previousValues: TaskListPreviousValues
}

input TaskListSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaskListWhereInput
  AND: [TaskListSubscriptionWhereInput!]
  OR: [TaskListSubscriptionWhereInput!]
  NOT: [TaskListSubscriptionWhereInput!]
}

input TaskListUpdateInput {
  title: String
  headerColor: String
  tasks: TaskUpdateManyWithoutTaskListInput
  user: UserUpdateOneRequiredWithoutTaskListsInput
}

input TaskListUpdateManyDataInput {
  title: String
  headerColor: String
}

input TaskListUpdateManyMutationInput {
  title: String
  headerColor: String
}

input TaskListUpdateManyWithoutUserInput {
  create: [TaskListCreateWithoutUserInput!]
  delete: [TaskListWhereUniqueInput!]
  connect: [TaskListWhereUniqueInput!]
  disconnect: [TaskListWhereUniqueInput!]
  update: [TaskListUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [TaskListUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [TaskListScalarWhereInput!]
  updateMany: [TaskListUpdateManyWithWhereNestedInput!]
}

input TaskListUpdateManyWithWhereNestedInput {
  where: TaskListScalarWhereInput!
  data: TaskListUpdateManyDataInput!
}

input TaskListUpdateOneRequiredWithoutTasksInput {
  create: TaskListCreateWithoutTasksInput
  update: TaskListUpdateWithoutTasksDataInput
  upsert: TaskListUpsertWithoutTasksInput
  connect: TaskListWhereUniqueInput
}

input TaskListUpdateWithoutTasksDataInput {
  title: String
  headerColor: String
  user: UserUpdateOneRequiredWithoutTaskListsInput
}

input TaskListUpdateWithoutUserDataInput {
  title: String
  headerColor: String
  tasks: TaskUpdateManyWithoutTaskListInput
}

input TaskListUpdateWithWhereUniqueWithoutUserInput {
  where: TaskListWhereUniqueInput!
  data: TaskListUpdateWithoutUserDataInput!
}

input TaskListUpsertWithoutTasksInput {
  update: TaskListUpdateWithoutTasksDataInput!
  create: TaskListCreateWithoutTasksInput!
}

input TaskListUpsertWithWhereUniqueWithoutUserInput {
  where: TaskListWhereUniqueInput!
  update: TaskListUpdateWithoutUserDataInput!
  create: TaskListCreateWithoutUserInput!
}

input TaskListWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  headerColor: String
  headerColor_not: String
  headerColor_in: [String!]
  headerColor_not_in: [String!]
  headerColor_lt: String
  headerColor_lte: String
  headerColor_gt: String
  headerColor_gte: String
  headerColor_contains: String
  headerColor_not_contains: String
  headerColor_starts_with: String
  headerColor_not_starts_with: String
  headerColor_ends_with: String
  headerColor_not_ends_with: String
  tasks_every: TaskWhereInput
  tasks_some: TaskWhereInput
  tasks_none: TaskWhereInput
  user: UserWhereInput
  AND: [TaskListWhereInput!]
  OR: [TaskListWhereInput!]
  NOT: [TaskListWhereInput!]
}

input TaskListWhereUniqueInput {
  id: ID
}

enum TaskOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  text_ASC
  text_DESC
}

type TaskPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
}

input TaskScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [TaskScalarWhereInput!]
  OR: [TaskScalarWhereInput!]
  NOT: [TaskScalarWhereInput!]
}

type TaskSubscriptionPayload {
  mutation: MutationType!
  node: Task
  updatedFields: [String!]
  previousValues: TaskPreviousValues
}

input TaskSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TaskWhereInput
  AND: [TaskSubscriptionWhereInput!]
  OR: [TaskSubscriptionWhereInput!]
  NOT: [TaskSubscriptionWhereInput!]
}

input TaskUpdateInput {
  text: String
  taskList: TaskListUpdateOneRequiredWithoutTasksInput
}

input TaskUpdateManyDataInput {
  text: String
}

input TaskUpdateManyMutationInput {
  text: String
}

input TaskUpdateManyWithoutTaskListInput {
  create: [TaskCreateWithoutTaskListInput!]
  delete: [TaskWhereUniqueInput!]
  connect: [TaskWhereUniqueInput!]
  disconnect: [TaskWhereUniqueInput!]
  update: [TaskUpdateWithWhereUniqueWithoutTaskListInput!]
  upsert: [TaskUpsertWithWhereUniqueWithoutTaskListInput!]
  deleteMany: [TaskScalarWhereInput!]
  updateMany: [TaskUpdateManyWithWhereNestedInput!]
}

input TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput!
  data: TaskUpdateManyDataInput!
}

input TaskUpdateWithoutTaskListDataInput {
  text: String
}

input TaskUpdateWithWhereUniqueWithoutTaskListInput {
  where: TaskWhereUniqueInput!
  data: TaskUpdateWithoutTaskListDataInput!
}

input TaskUpsertWithWhereUniqueWithoutTaskListInput {
  where: TaskWhereUniqueInput!
  update: TaskUpdateWithoutTaskListDataInput!
  create: TaskCreateWithoutTaskListInput!
}

input TaskWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  taskList: TaskListWhereInput
  AND: [TaskWhereInput!]
  OR: [TaskWhereInput!]
  NOT: [TaskWhereInput!]
}

input TaskWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  taskLists(where: TaskListWhereInput, orderBy: TaskListOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TaskList!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  taskLists: TaskListCreateManyWithoutUserInput
}

input UserCreateOneWithoutTaskListsInput {
  create: UserCreateWithoutTaskListsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTaskListsInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  taskLists: TaskListUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneRequiredWithoutTaskListsInput {
  create: UserCreateWithoutTaskListsInput
  update: UserUpdateWithoutTaskListsDataInput
  upsert: UserUpsertWithoutTaskListsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTaskListsDataInput {
  name: String
}

input UserUpsertWithoutTaskListsInput {
  update: UserUpdateWithoutTaskListsDataInput!
  create: UserCreateWithoutTaskListsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  taskLists_every: TaskListWhereInput
  taskLists_some: TaskListWhereInput
  taskLists_none: TaskListWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    