const spinner2 = function() {
  const spinner = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
  let delay = 100;
  for (let sym of spinner) {
    setTimeout(() => {
      process.stdout.write(sym);
    }, delay);
    delay += 200;
  }
}
spinner2();