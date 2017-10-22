import { ValidatorFn, ValidationErrors, FormControl } from '@angular/forms'

export function restrictedWords(words: string[]): ValidatorFn {
  const reWords = new RegExp('\\b' + words.join('\\b|\\b') + '\\b', 'g')

  return function(control: FormControl): ValidationErrors {
    if (!words || !words.length) { return null }

    // const invalidWords = words
    //   .map((word) => control.value.includes(word) ? word : null)
    //   .filter((word) => word)
    // return invalidWords.length
    //   ? { restrictedWords: invalidWords.join(', ') }
    //   : null

    if (words && words.length) {
      const invalidWords = []
      let match
      while ((match = reWords.exec(control.value)) !== null) {
        invalidWords.push(match[0])
      }
      return invalidWords.length
        ? { restrictedWords: invalidWords.join(', ')}
        : null
    }
    return null
  }
}