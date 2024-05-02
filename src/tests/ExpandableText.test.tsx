import {render, screen } from "@testing-library/react";
import ExpandableText from "../components/ExpandableText";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("check if the expandable text is working", () => {
  it("renders the texts if text is less tha 255", () => {
    const text = "hello";
    render(<ExpandableText text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("renders texts if texts is more than 255", () => {
    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perspiciatis illo nemo tenetur perferendis veniam nihil possimus inventore! Debitis soluta magni eius facere. Fugiat laudantium possimus asperiores exercitationem quis temporibus aperiam animi debitis, ut molestiae consequuntur culpa blanditiis rerum veritatis nulla sint natus suscipit repellat dolorem voluptas. Aliquid eos quo eaque perspiciatis iure deleniti maiores nihil, quidem fugit impedit? Qui ipsam nisi excepturi nobis amet inventore quasi ducimus consectetur adipisci minima expedita architecto at fugiat repellendus, libero eligendi minus nostrum similique blanditiis eaque sit, earum repellat rerum natus. Voluptate quas provident at temporibus saepe aspernatur accusamus quisquam quasi quaerat laudantium.";
    render(<ExpandableText text={text} />);

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
  });

  it("should render a button with show more on it that when clicked show another article with without ... and a show less on the button", async () => {
    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perspiciatis illo nemo tenetur perferendis veniam nihil possimus inventore! Debitis soluta magni eius facere. Fugiat laudantium possimus asperiores exercitationem quis temporibus aperiam animi debitis, ut molestiae consequuntur culpa blanditiis rerum veritatis nulla sint natus suscipit repellat dolorem voluptas. Aliquid eos quo eaque perspiciatis iure deleniti maiores nihil, quidem fugit impedit? Qui ipsam nisi excepturi nobis amet inventore quasi ducimus consectetur adipisci minima expedita architecto at fugiat repellendus, libero eligendi minus nostrum similique blanditiis eaque sit, earum repellat rerum natus. Voluptate quas provident at temporibus saepe aspernatur accusamus quisquam quasi quaerat laudantium.";

    render(<ExpandableText text={text} />);
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /show more/i });
    const article = screen.getByRole("article");

    expect(button).toBeInTheDocument();
    expect(article).toHaveTextContent("...");
    await user.click(button);
    expect(button).toHaveTextContent(/show less/i);
    expect(article).not.toHaveTextContent("...");
  });
});
