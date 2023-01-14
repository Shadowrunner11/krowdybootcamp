import LifeBar from "./models/statusBar/lifeBar.js";
import { $ } from "./utils/selectors.js";

const lifeBar = new LifeBar ({
  total: 100,
  HTMLELement: $('.life')
})

lifeBar.setInfo()

$('#decrement5')
  .addEventListener('click', ()=>{
    lifeBar.decrement(5)
    lifeBar.setInfo()
  })

$('#recover5')
  .addEventListener('click', ()=>{
    lifeBar.recover(5)
    lifeBar.setInfo()
  })
