"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Task",
    embedded: false
  },
  {
    name: "TaskList",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/michael-edelman-ba8919/kanban-demo/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Task",
    embedded: false
  },
  {
    name: "TaskList",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
