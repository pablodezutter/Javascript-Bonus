const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];

const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};

const parseTitle = title /*argument, parameter*/ => {
  const lowerTitle = title.toLowerCase();//title is just a name
  const wrapped = wrapWithTag(lowerTitle, `li`);
  document.write(wrapped);
};

document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie)); //movie is just a name, movie is title
document.write(`</ol>`);


