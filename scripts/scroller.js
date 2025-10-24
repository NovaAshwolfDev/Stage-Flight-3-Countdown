class LetterScroller {
  constructor() {
    this.oldArray = [];
    this.newArray = [];
    this.currentArray = [];
  }

  start(str) {
    str = (str || "").toString();
    this.oldArray = str.split('');
    this.currentArray = [...this.oldArray];
  }

  scrollTo(str) {
    str = (str || "").toString();
    this.newArray = str.split('');

    // pad arrays so lengths match
    const maxLen = Math.max(this.currentArray.length, this.newArray.length);
    while (this.currentArray.length < maxLen) this.currentArray.push(' ');
    while (this.newArray.length < maxLen) this.newArray.push(' ');

    this.animate();
  }

  animate() {
    const stepTime = 50; // ms
    let i = 0;

    const interval = setInterval(() => {
      if (i >= this.newArray.length) {
        clearInterval(interval);
        this.currentArray = [...this.newArray];
        return;
      }

      this.currentArray[i] = this.newArray[i];
      this.render();
      i++;
    }, stepTime);
  }

  render() {
    // put the string in the HTML element
    const el = document.getElementById('counter');
    if (el) {
      el.textContent = this.currentArray.join('');
    }
  }


  scrollFromTo(fromStr, toStr) {
    this.start(fromStr);
    this.scrollTo(toStr);
  }
}
