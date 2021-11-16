import {InitStateType, moviesReducer, setMovies, setSearchText, setSorting} from './movies-reducer'

let startState: InitStateType;
const data = [
    {adult: false,
        backdrop_path: "/u5Fp9GBy9W8fqkuGfLBuuoJf57Z.jpg",
        genre_ids:  [12, 28, 53],
        id: 370172,
        original_language: "en",
        original_title: "No Time to Die",
        overview: "Bond has left",
        popularity: 4549.752,
        poster_path: "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
        release_date: "2021-09-29",
        title: "No Time to Die",
        video: false,
        vote_average: 7.6,
        vote_count: 1718
    },
    {adult: false,
        backdrop_path: "/efuPybo8V8KTYGslQphO74LRvm0.jpg",
        genre_ids: [878, 28, 12],
        id: 580489,
        original_language: "en",
        original_title: "Venom: Let There Be Carnage",
        overview: "After finding a host body",
        popularity: 4523.175,
        poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        release_date: "2021-09-30",
        title: "Venom: Let There Be Carnage",
        video: false,
        vote_average: 6.8,
        vote_count: 1897}
]

beforeEach(() => {
    startState = {
        movies: [],
        sortDirection: 'idle',
        searchText: '',
    }
})

test('2 movies should be added', () => {

    const endState = moviesReducer(startState, setMovies(data))
    expect(endState.movies.length).toBe(2);
})

test('Second movie title should be "Venom: Let There Be Carnage"', () => {

    const endState = moviesReducer(startState, setMovies(data))
    expect(endState.movies[1].title).toBe("Venom: Let There Be Carnage");
})
test('Sorting direction should change to "down"', () => {

    const endState = moviesReducer(startState, setSorting('down'))
    expect(endState.sortDirection).toBe("down");
})
test('Sorting direction should change to "up"', () => {

    const endState = moviesReducer(startState, setSorting('up'))
    expect(endState.sortDirection).toBe("up");
})
test('Input text for a search should change', () => {

    const endState = moviesReducer(startState, setSearchText('stsrthrth'))
    expect(endState.searchText).not.toBe(0);
})
test('Input text for a search should be "Hire me"', () => {

    const endState = moviesReducer(startState, setSearchText('Hire me'))
    expect(endState.searchText).toBe('Hire me');
})

