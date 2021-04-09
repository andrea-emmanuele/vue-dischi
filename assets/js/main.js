new Vue ({
    el: "#root",
    data: {
        albums: null,
        genres: [],
        selectedGenre: null
    },
    methods: {
        getAlbums: (_vue) => {
            axios
                .get("https://flynn.boolean.careers/exercises/api/array/music")
                .then(response => {
                    _vue.albums = response.data.response;
                    _vue.sortAlbums(_vue);
                    _vue.getGenres(_vue);
                });
        },
        sortAlbums: (_vue) => {
            _vue.albums.sort(function (a, b) {
                return b.year - a.year;
            });
        },
        getGenres: (_vue) => {
            _vue.albums.forEach(album => {
                if (!_vue.genres.includes(album.genre))
                    _vue.genres.push(album.genre);
            });

            _vue.genres.sort();
        },
        showAlbum: (album, selectedGenre) => {
            return album.genre === selectedGenre ? true : !selectedGenre ? true : false;
        }
    },
    created() {
        let _vue = this;
        this.getAlbums(_vue);
    }
});