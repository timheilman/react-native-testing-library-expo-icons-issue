import React from "react";
import { waitFor, render } from "@testing-library/react-native";
import App from "./App";

describe("expo-font isLoaded check", () => {
  it("should render properly", async () => {
    try {
      const { getByPlaceholderText } = render(<App />);

      let input;
      await waitFor(() => {
        input = getByPlaceholderText("Placeholder");
        expect(input).toBeDefined();
      });
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
});
