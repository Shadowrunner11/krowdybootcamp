import { validateNumber } from '../../utils/number.js'

export default class StatusBar{
  #total
  #current
  #HTMLElement

  /**
   * 
   * @param {{
   *  HTMLELement: HTMLElement;
   *  color: string;
   *  total: number;
   *  current?: number;
   * }} StatusBarOptions
   */
  constructor({ HTMLELement, total, current }){
    this.#HTMLElement = HTMLELement
    this.#total = validateNumber(total)
    this.#current = validateNumber(current ?? total)
  }

  recover(recoverAmount){
    const newCurrentAmount = validateNumber(recoverAmount) + this.#current

    if(newCurrentAmount > this.#total){
      this.#current = this.#total
  
      return this.#current
    }

    this.#current = newCurrentAmount

    return this.#current
  }

  decrement(decrementAmount){
    const newCurrentAmount = this.#current - validateNumber(decrementAmount)

    if(newCurrentAmount < 0){
      this.#current = 0

      return this.#current
    }

    this.#current = newCurrentAmount

    return this.#current
  }

  setInfo(){
    const label = this.#HTMLElement.firstElementChild

    label.textContent = `${this.#current}`
    label.style.width = `${this.relativePercentaje}%`
  }

  /**
   * @param {string} color
   */
  set color(color){
    //TODO: create validations
    const label = this.#HTMLElement.firstElementChild

    label.style.background = `${color}`
  }

  get color(){
    const label = this.#HTMLElement.firstElementChild

    return label.style.background
  }

  get relativePercentaje(){
    return Math.round(this.#current*100/this.#total)
  }

}

