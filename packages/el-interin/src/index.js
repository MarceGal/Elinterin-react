import Root from "./components"

const myFirstTheme = {
    name: "el-interin",
    roots: {
        theme: Root,
    },
    state: {
        theme: {
            isUrlVisible: true,
        },
    },
    actions: {
        theme: {
            toggleUrl: ({ state }) => {
                state.theme.isUrlVisible = !state.theme.isUrlVisible
            },           
            toggleMobileMenu: ({ state }) => {
                state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
            },
            closeMobileMenu: ({ state }) => {
                state.theme.isMobileMenuOpen = false;
            },
            autoPrefetch: "in-view",
            menu: [],
            isMobileMenuOpen: false,
            featured: {
              showOnList: false,
              showOnPost: false,
            },
        },
    },
}

export default myFirstTheme