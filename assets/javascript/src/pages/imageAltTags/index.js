export function imageAltTags() {
    try {
        const OGTITLE = document.querySelector('meta[property="og:title"]');
        if (OGTITLE) {
            let attr = OGTITLE.getAttribute('content');
            let article_level = document.querySelector('.article-level-2');
            let page_title_text = document.querySelector('.page_title-text');
            if (attr) {
                attr = attr.toLowerCase();
                let allImages = document.getElementsByTagName('img');
                Array.from(allImages).forEach(element => {
                    element.getAttribute('alt') ? '' : element.setAttribute('alt', attr);
                    element.getAttribute('title') ? '' : element.setAttribute('title', attr);
                });
                return;
            } else if (article_level) {
                let article_level_content = article_level.textContent;
                article_level_content = article_level_content.toLowerCase();
                let allImages = document.getElementsByTagName('img');
                Array.from(allImages).forEach(element => {
                    element.getAttribute('alt') ? '' : element.setAttribute('alt', article_level_content);
                    element.getAttribute('title') ? '' : element.setAttribute('title', article_level_content);
                });
                return;
            } else if (page_title_text) {
                let page_title_text_content = page_title_text.textContent;
                page_title_text_content = page_title_text_content.toLowerCase();
                let allImages = document.getElementsByTagName('img');
                Array.from(allImages).forEach(element => {
                    element.getAttribute('alt') ? '' : element.setAttribute('alt', page_title_text_content);
                    element.getAttribute('title') ? '' : element.setAttribute('title', page_title_text_content);
                });
                return;
            }
        }
    } catch (e) {
        console.log(e);
    }
}
