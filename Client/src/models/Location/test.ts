import { store, dispatch } from "#src/models/store";
require('chai')
    .use(require('chai-as-promised'))
    .should()
const expect = require('chai').expect

const get_models_Location = () => store.getState().models_Location;

describe("models_Location", () => {
  // beforeEach(() => dispatch({ type: "RESET" }));

  // it("should return the initial state correctly", () => {
  //  expect( get_models_Location()).toEqual({ defaultState });
  // });
  // it("test each reducer", () => {
  //   dispatch.models_Location.reducerfunction({ stateKey: "expectedvalue" });
  //   expect(get_models_Location()).toEqual({
     
  //   });
  // });
})