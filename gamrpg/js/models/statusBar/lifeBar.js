import StatusBar from "./statusbar.js"


export default class LifeBar extends StatusBar{
  constructor(options){
    super(options)
  }

  #setColorHelper(){
    if(this.relativePercentaje <= 10){
      this.color = 'blue'
      return
    }

    if(!this.color.includes('red')){
      this.color = 'red'
    }
  }

  setInfo(){
    this.#setColorHelper()
    
    super.setInfo()
  }

}
