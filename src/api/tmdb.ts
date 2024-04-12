import configuration from "../configuration";

async function get<TBody>(relativeUrl: string): Promise<TBody> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: `Bearer ${configuration.apiToken}`
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGM4Nzg1NTViMWFkMTgxMGE4OGIzZTAzYjQ4YTIwMyIsInN1YiI6IjY2MTdmNGUwN2UxMmYwMDE3Y2YyMjczZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zp79u5VOH2I7lGq0Wgs152lUm3YiiILiHbsOEdaynD0'
    }
  };

  const response = await fetch(
    `${configuration.apiUrl}/3${relativeUrl}`,
    options
  )


  const json: TBody = await response.json();
  return json;
}

export interface MovieDetails {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  backdrop_path?: string;
}

interface PageResponse<TResult> {
  page: number;
  results: TResult[],
}

interface Configuration {
  images: {
    base_url: string;
  };
}

export const client = {
  async getConfiguration() {
    return get<Configuration>("/configuration");
  },
  async getNowPlaying(): Promise<MovieDetails[]> {
    const response = await get<PageResponse<MovieDetails>>("/movie/now_playing?&page=1");

    return response.results;
  },
};
