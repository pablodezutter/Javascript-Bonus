let playingMovies = [
    `Notti Magiche`,
    `Emma Peeters`,
    `Yomeddine`,
    `The Wild Pear Tree`,
    `Aladdin - Originele versie`,
    `Gloria Bell`,
    `Green Book`,
    `The Favourite`,
    `Vox Lux`,
    `High Life`,
    `Nous Finirons Ensemble`,
    `Aladdin - Vlaamse versie`,
    `Casper & Emma maken theater`
];

 // console.log(playingMovies);
 document.write(`<h1>Current playing movies</h1>`);
 document.write(`<br>`);
 document.write(`<ol>`);
  for (let i = 0; i < playingMovies.length; i++) {
    // console.log(i);
      document.write(`<li>${playingMovies[i]}</li>`);
  };
  document.write(`</ol>`);











