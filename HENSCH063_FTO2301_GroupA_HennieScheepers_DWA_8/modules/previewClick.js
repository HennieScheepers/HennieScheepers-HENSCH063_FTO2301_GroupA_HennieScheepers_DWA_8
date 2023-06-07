/**
 * Event handler for when one of the Preview divs are clicked. On fire, this
 * event will take the dataset from the nearest HTML element with the class 'preview'
 * and assign it to variables
 */
const createOverlay = (overlayELement, bookData) => {
  overlayELement.title.innerHTML = `${bookData.title} (${bookData.published})`;
  overlayELement.author.innerHTML = bookData.author;
  overlayELement.img.setAttribute("src", bookData.imageLink);
  overlayELement.description.innerHTML = bookData.description;
};

/**
 * Creates a preview of a book. This works in conjunction with the createOverlay function
 * to display preview of the book
 * @param {Event} event
 * @returns {object}
 */
const createPreview = (event) => {
  const target = event.target.closest(".preview");
  const targetData = target.dataset;
  const date = new Date(targetData.previewPublished);

  return {
    title: targetData.previewTitle,
    author: targetData.previewAuthor,
    description: targetData.previewDescription,
    imageLink: targetData.previewImg,
    published: date.getFullYear(),
  };
};
/**
 * Gets the data of the items provided.
 * @param {Array} array - Takes an array
 */
export const handlePreviewClick = (event) => {
  event.preventDefault();
  const overlayEl = document.querySelector("[data-list-active]");
  const preview = createPreview(event);
  const overlay = {
    title: document.querySelector("[data-list-title]"),
    img: document.querySelector("[data-list-image]"),
    author: document.querySelector("[data-list-subtitle]"),
    description: document.querySelector("[data-list-description]"),
  };
  createOverlay(overlay, preview);
  overlayEl.toggleAttribute("open");
};
