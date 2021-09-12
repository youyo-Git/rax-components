import { createElement, render, Component, createRef } from 'rax';

import unmountComponentAtNode from 'rax-unmount-component-at-node';
import Gold from '../Gold';

class Money extends Component {
  constructor(props) {
    super(props);
    this.state = {goldState:[
      {id:1,move:false},
      {id:2,move:false},
      {id:3,move:false},
      {id:4,move:false},
      {id:5,move:false},
      {id:6,move:false}]}
  }

  
  //每200ms更改一次state
  showGold = (event) => {
    const defaultState = [
    {id:1,move:false},
    {id:2,move:false},
    {id:3,move:false},
    {id:4,move:false},
    {id:5,move:false},
    {id:6,move:false}]
    event.target.disabled="disabled"
    let i = 0;
    const timerId = setInterval(() => {
      this.setState(this.state.goldState[i].move=true);
      i++;
      if(i>5){
        clearInterval(timerId);
        setTimeout(()=>{
            this.setState(this.state.goldState=defaultState)
            event.target.disabled=null;
        },2000)
      }
    },200)
  }

  render() {
    const {goldState} = this.state
    return (
      <div id="money-driver">
        <button onClick={this.showGold} >收金币</button>
        <Gold x-for={(item,index) in goldState} key={item.id} activeMove={item.move}></Gold>
      </div>
    )
  }
}
export default Money;
