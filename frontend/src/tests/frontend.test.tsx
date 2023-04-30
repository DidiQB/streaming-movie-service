import { render, screen } from "@testing-library/react";
import FetchMyList from "../components/FetchMyList";

describe("FetchMyList", () => {
  it("renders a list of movies fetched from the server", async () => {
    const mockMovies = [
      {
        imdbid: "tt1234567",
        title: "Test Movie",
        year: "2021",
        poster: "https://example.com/test.jpg",
      },
      {
        imdbid: "tt7654321",
        title: "Another Test Movie",
        year: "2022",
        poster: "https://example.com/another-test.jpg",
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockMovies),
      headers: new Headers(),
      status: 200,
      statusText: "OK",
      type: "basic",
      url: "",
      body: null,
      bodyUsed: false,
      clone: jest.fn(),
      arrayBuffer: jest.fn(),
      blob: jest.fn(),
      formData: jest.fn(),
      text: jest.fn(),
    });

    render(<FetchMyList />);

    // Wait for the component to render with the fetched movies
    const movieCards = await screen.findAllByTestId("movie-card");

    expect(movieCards).toHaveLength(mockMovies.length);
  });
});

