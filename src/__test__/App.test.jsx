import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MainComponent from "../components/MainComponent";
import App from "../App";

describe("Is the main Page Correctly Mounting", () => {
    it("mount the title correctly", () => {
        render(<MainComponent />);

        const title = screen.queryByText(/paginetta carucetta/i);
        expect(title).toBeInTheDocument();
    });

    it("find the card description", async () => {
        render(<MainComponent />);

        const button = await screen.findAllByText(/go somewhere/i);
        expect(button).toBeTruthy();
    });
});
