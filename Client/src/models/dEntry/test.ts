import { store, dispatch } from "#src/models/store";
require('chai')
    .use(require('chai-as-promised'))
    .should()
const expect = require('chai').expect

const get_models_dEntry = () => store.getState().models_dEntry;

describe("models_dEntry", () => {
  // beforeEach(() => dispatch({ type: "RESET" }));

  // it("should return the initial state correctly", () => {
  //  expect( get_models_dEntry()).toEqual({ defaultState });
  // });
  // it("test each reducer", () => {
  //   dispatch.models_dEntry.reducerfunction({ stateKey: "expectedvalue" });
  //   expect(get_models_dEntry()).toEqual({
     
  //   });
  // });
})