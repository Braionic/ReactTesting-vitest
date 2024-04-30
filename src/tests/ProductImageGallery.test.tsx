import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../components/ProductImageGallery";
describe("check if there is an image", () => {
  it("doesnt load if there are no images", () => {
    const images: string[] = [];
    const { container } = render(<ProductImageGallery imageUrls={images} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("renders the images", () => {
    const images: string[] = [
      "https://www.sellingantiques.co.uk/photosnew/dealer_vintagewristwatch/dealer_vintagewristwatch_superhighres_1531309916703-1549842351.jpg",
      "https://www.sellingantiques.co.uk/photosnew/dealer_vintagewristwatch/dealer_vintagewristwatch_superhighres_1531309916703-1549842351.jpg",
    ];
    render(<ProductImageGallery imageUrls={images} />);
    const imagesElement = screen.getAllByRole("img");
    expect(imagesElement).toHaveLength(images.length);
    images.forEach((image, index) => {
      expect(imagesElement[index]).toHaveAttribute("src", image)
    });
  });
});
