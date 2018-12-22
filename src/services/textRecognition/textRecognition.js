export const textRecognitionService = {
  recognize(photo) {
    return new Promise((resolve, reject) => {
      window.Tesseract.recognize( photo, { lang: 'eng' } )
        .then(resolve)
        .catch(reject)
    })
    .then(this.extractFoundWords)
  },

  extractFoundWords(result) {
    return result.words.filter(
      word => 
        word.confidence > 50 
        && word.text.length > 3
      )
    .map(word => word.text);
  }
}
