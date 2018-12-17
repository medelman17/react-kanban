// import faker from 'faker';

/**
 * Before GraphQL had been wired up, the function
 * below provided mock data using faker.
 *
 *
 *
 **/

// const COLS = 4;
// const COL_HEADER_COLORS = [
//   '#8E6E95',
//   '#39A59C',
//   '#344759',
//   '#E8741E'
// ];
// const TASK_SENTENCE_MIN = 2;
// const TASK_SENTENCE_MAX = 5;

// function createFakeDataset({
//   columns = COLS,
//   colors = COL_HEADER_COLORS,
//   min = TASK_SENTENCE_MIN,
//   max = TASK_SENTENCE_MAX
// }) {
//   let result;
//   const cols = [...Array(columns).keys()];
//   /*eslint no-unused-vars: off */
//   for (const __ of cols) {
//     const name = faker.name.firstName();
//     result = Object.assign({}, result, {
//       [name]: {
//         headerColor: faker.random.arrayElement(colors),
//         oid: faker.random.uuid(),
//         tasks: [
//           ...Array(
//             faker.random.number({
//               max,
//               min
//             })
//           ).keys()
//         ].map(() => ({
//           id: faker.random.uuid(),
//           text: faker.lorem.sentences(
//             faker.random.number({
//               max,
//               min
//             })
//           )
//         }))
//       }
//     });
//   }
//   return result;
// }

// export default createFakeDataset;
