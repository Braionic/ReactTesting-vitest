import { render, screen } from "@testing-library/react";
import UserList from "../components/UserList";
import { User } from "../entities";
import "@testing-library/jest-dom";

describe("check if list renders and if links are being rendered", () => {
  const users: User[] = [
    { id: 1, name: "novel" },
    { id: 2, name: "Henry" },
  ];

  it('should render no user found', () => {
    const user: User[] = [
        
      ];
    render(<UserList users={user} />)
    const text = screen.getByText(/no user/i)
    expect(text).toBeInTheDocument()
  })
  it("should render the links with the name and check if the link has attribute of the id", () => {
    render(<UserList users={users} />);
    users.forEach((userr) => {
      const link = screen.getByRole("link", { name: userr.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${userr.id}`);
    });
  });
});
