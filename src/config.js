import parse from 'url-parse';

const PROTOCOL = 'http';

export const config = {
    API_URL: `${PROTOCOL}://cms.foodmart.com.au:5000/api`,
    STORAGE_URL: `${PROTOCOL}://cms.foodmart.com.au:5000/storage/`,
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
    {domain: 'foodmart.com.au', menuItem: 'Restaurants', menuLink: '/restaurants'}
    // TODO: Add other main sites 
]

// Functions

export const getAsset = (filename) => {
    return `${config.STORAGE_URL}${filename}`;
}

export const isMainSite = () => {
    const url = parse(window.location.href, true);
    const mainSite = mainSites.map((site) => {
        if(site.domain === url.hostname) {
            return site;
        }
        return false;
    });

    return mainSite[0];
}