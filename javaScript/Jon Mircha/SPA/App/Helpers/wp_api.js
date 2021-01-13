

// https://developer.wordpress.org/rest-api/

const NAME = `redvirtual`,
    DOMAIN = `https://${NAME}.bid`,//Utilizamos .bid por que puse redvirtual
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp-json/v2`,
    POSTS = `${API_WP}/posts?_embed`,
    POST = `${API_WP}/posts`,
    SEARCH = `${API_WP}/search?_embed&search=`;

    export default {
      NAME,
      DOMAIN,
      SITE,
      API_WP,
      POSTS,
      POST,
      SEARCH
    }
