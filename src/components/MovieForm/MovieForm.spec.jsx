import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MovieForm } from "./MovieForm";

describe("MovieForm", () => {
  it("renders the form with all inputs and buttons", () => {
    render(<MovieForm onSubmit={vi.fn()} />);
    expect(screen.getByText(/add movie/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/release date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/movie url/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rating/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/genre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/runtime/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/overview/i)).toBeInTheDocument();
    expect(screen.getByText(/reset/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  it("triggers onSubmit callback with form data", () => {
    const handleSubmit = vi.fn();
    render(<MovieForm onSubmit={handleSubmit} />);
    fireEvent.input(screen.getByLabelText(/title/i), { target: { value: "Inception" } });
    fireEvent.input(screen.getByLabelText(/release date/i), { target: { value: "2010-07-16" } });
    fireEvent.input(screen.getByLabelText(/movie url/i), { target: { value: "https://inception.com" } });
    fireEvent.input(screen.getByLabelText(/rating/i), { target: { value: "8.8" } });
    fireEvent.change(screen.getByLabelText(/genre/i), { target: { value: "Sci-Fi" } });
    fireEvent.input(screen.getByLabelText(/runtime/i), { target: { value: "148" } });
    fireEvent.input(screen.getByLabelText(/overview/i), { target: { value: "A mind-bending thriller." } });
    fireEvent.submit(screen.getByRole("form"));
    expect(handleSubmit).toHaveBeenCalledWith({
      title: "Inception",
      releaseDate: "2010-07-16",
      movieUrl: "https://inception.com",
      rating: "8.8",
      genre: "Sci-Fi",
      runtime: "148",
      overview: "A mind-bending thriller.",
    });
  });

  it("resets the form fields when reset button is clicked", () => {
    render(<MovieForm onSubmit={vi.fn()} />);
    fireEvent.input(screen.getByLabelText(/title/i), { target: { value: "Inception" } });
    fireEvent.input(screen.getByLabelText(/release date/i), { target: { value: "2010-07-16" } });
    fireEvent.input(screen.getByLabelText(/movie url/i), { target: { value: "https://inception.com" } });
    fireEvent.input(screen.getByLabelText(/rating/i), { target: { value: "8.8" } });
    fireEvent.change(screen.getByLabelText(/genre/i), { target: { value: "Sci-Fi" } });
    fireEvent.input(screen.getByLabelText(/runtime/i), { target: { value: "148" } });
    fireEvent.input(screen.getByLabelText(/overview/i), { target: { value: "A mind-bending thriller." } });
    fireEvent.click(screen.getByText(/reset/i));
    expect(screen.getByLabelText(/title/i).value).toBe("");
    expect(screen.getByLabelText(/release date/i).value).toBe("");
    expect(screen.getByLabelText(/movie url/i).value).toBe("");
    expect(screen.getByLabelText(/rating/i).value).toBe("");
    expect(screen.getByLabelText(/genre/i).value).toBe("");
    expect(screen.getByLabelText(/runtime/i).value).toBe("");
    expect(screen.getByLabelText(/overview/i).value).toBe("");
  });
});