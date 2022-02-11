class Word {
  constructor() {
    this.child = new Map();
    this.word = '';
  }
}

export class AutoCompleteList {
  constructor() {
    this.root = new Word();
  }

  insert(word) {
    let cur = this.root;

    [...word].forEach((str, i) => {
      if (!cur.child.has(str)) cur.child.set(str, new Word());
      if (i < word.length) cur = cur.child.get(str);
    });

    cur.word = word;
  }

  getWordsFromCurrentWord(cur) {
    const resultWords = [];

    const que = [...cur.child.values()];
    if (cur.word) resultWords.push(cur.word);

    while (que.length) {
      const Word = que.shift();

      if (Word.child) que.push(...Word.child.values());
      if (Word.word) resultWords.push(Word.word);
    }

    return resultWords;
  }

  getAllWords() {
    const words = [];

    let que = [...this.root.child];
    if (this.root.word) words.push(this.root.word);

    while (que.length) {
      const [, Word] = que.shift();
      if (Word.word) words.push(Word.word);
      que.push(...Word.child);
    }

    return words;
  }

  getSameWords(targetWord) {
    if (!targetWord) return this.getAllWords();

    targetWord = targetWord.trim().toLowerCase();

    const sameWords = [];

    let cur = this.root;
    let que = [...cur.child];

    while (que.length) {
      const curDepthWords = [];
      const len = que.length;

      for (let j = 0; j < len; j++) {
        const [str, Word] = que.shift();
        const checkSameWords = [];
        let targetWordIdx = 0;

        if (str === targetWord[targetWordIdx]) {
          if (targetWord[targetWordIdx + 1]) {
            checkSameWords.push(...Word.child);
          } else {
            sameWords.push(Word);
          }
        } else {
          curDepthWords.push(...Word.child);
        }

        while (checkSameWords.length) {
          targetWordIdx++;
          const len = checkSameWords.length;

          for (let i = 0; i < len; i++) {
            const [str, Word] = checkSameWords.shift();

            if (str === targetWord[targetWordIdx]) {
              if (!targetWord[targetWordIdx + 1]) sameWords.push(Word);
              checkSameWords.push(...Word.child);
            } else {
              curDepthWords.push(...Word.child);
            }
          }
        }
      }
      que = curDepthWords;
    }

    return sameWords
      .map((sameWord) => this.getWordsFromCurrentWord(sameWord))
      .flat();
  }
}
