import React from "react";
import { render, screen, userEvent } from "@/test-utils";

import Accordion from ".";

const mockData = [
  {
    open: true,
    title: "title1",
    content: <p>para1</p>,
  },
  {
    open: false,
    title: "title2",
    content: (
      <>
        <h6 className="h6">heading1</h6>
        <p>para2</p>
        <p>para3</p>
      </>
    ),
  },
];

describe("Accordion", async () => {
  it("loads and displays Accordion", async () => {
    // ARRANGE
    render(
      <div className="accordion-group">
        {mockData.map(i => (
          <Accordion title={i.title}>{i.content}</Accordion>
        ))}
      </div>
    );

    // ASSERT
    expect(screen.getByText("title1")).toBeInTheDocument();
    expect(screen.getByText("para2")).not.toBeVisible();

    // ACT
    await userEvent.click(screen.getByText("title2"));
    // ASSERT
    expect(screen.getByText("para2")).toBeVisible();
    expect(screen.getByText("para1")).not.toBeVisible();
  });
});
