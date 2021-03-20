const settings = {
    "name": "my-app",
    "state": {
        "frontity": {
            "url": "http://elinterin.com",
            "title": "El Interin",
            "description": "Actualidad y Analisís Internacional"
        }
    },
    "packages": [{
            //"name": "@frontity/mars-theme",
            "name": "el-interin",
            "state": {
                "theme": {
                    "menu": [
                        [
                            "Home",
                            "/"
                        ],
                        [
                            "Actualidad",
                            "/category/actualidad/"
                        ],
                        [
                            "Política",
                            "/category/noticias/politica/"
                        ],
                        [
                            "Economía",
                            "/category/noticias/economia/"
                        ],
                        [
                            "Sociedad",
                            "/category/noticias/sociedad/"
                        ],
                        [
                            "Cultura",
                            "/category/noticias/cultura/"
                        ],
                        [
                            "Catalejo",
                            "/category/catalejo/"
                        ],
                        [
                            "Videos",
                            "/category/Videos/"
                        ],
                        [
                            "Otras voces",
                            "/category/otras-voces/"
                        ],
                        [
                            "About Us",
                            "/jorge-elias-periodista-sobre-el-autor/"
                        ]
                    ],
                    "featured": {
                        "showOnList": false,
                        "showOnPost": false
                    }
                }
            }
        },
        {
            "name": "@frontity/wp-source",
            "state": {
                "source": {
                    //"url": "https://test.frontity.org"
                    //"url": "http://frontity.local"
                    "url": "http://elinterin.com"
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react"
    ]
};

export default settings;