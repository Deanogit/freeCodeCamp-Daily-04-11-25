// Image Search
// On November 4th, 2001, Google launched its image search, allowing people to find images using search terms. In this challenge, you will imitate the image search.

// Given an array of image names and a search term, return an array of image names containing the search term.

// Ignore the case when matching the search terms.
// Return the images in the same order they appear in the input array.

// function imageSearch(images, term) {
//   console.log(images, term);
//   const arr = [];

//   for (let i = 0; i < images.length; i++) {
//     if (images[i].toLowerCase().includes(term.toLowerCase())) {
//       arr.push(images[i]);
//     }
//   }
//   return arr;
// }

function imageSearch(images, term) {
  const lowerTerm = term.toLowerCase();
  return images.filter((img) => img.toLowerCase().includes(lowerTerm));
}
