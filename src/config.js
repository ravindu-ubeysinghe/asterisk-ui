import parse from 'url-parse';

const PROTOCOL = 'http';

export const config = {
    API_URL: `${PROTOCOL}://api.foodmart.com.au:8080/api`,
    STORAGE_URL: `${PROTOCOL}://api.foodmart.com.au:8080/storage/`,
}

export const constants = {
    GENERIC_SERVER_ERROR: 'We\'re terribly sorry, but something has gone wrong. Please try again later.',
    GENERIC_PLACEHOLDER: 'Coming Soon!',
}

export const pageIDS = {
    HOME: 'home',
    ABOUT: 'about',
    CONTACT: 'contact',
}

export const componentIDS = {
    CAROUSEL: 'carousel',
    BANNER: 'banner',
}

export const mainSites = [
    'foodmart.com.au'
]

// Functions

export const getAsset = (filename) => {
    return `${config.STORAGE_URL}${filename}`;
}

export const isMainSite = () => {
    const url = parse(window.location.href, true);
    return mainSites.includes(url.hostname);
}