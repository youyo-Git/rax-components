import { createElement, Component,createRef } from 'rax';
import styles from './index.module.css'

class Bubble extends Component {
    
  constructor(props){
    super(props)
    this.state = {
    movea:false,
    moveb:false,
    movec:false,
  }
   
  }
  content = [
    '鸣谢生命有你参与，笑纳我的邀请',
    '青春兵荒马乱，我们潦草地离散',
    '我对你付出的青春 这么多年',
    '我的心事，蒸发成云，再下场雨却舍不得淋湿你',
  ];
  
  bubble = createRef();

  componentDidMount(){
    const {current} = this.bubble
    console.log(current);
    new Promise((rel) => {
      this.setState({movea:true})
      setTimeout(()=>{
        rel()
      },4000)
    }).then(()=>{
      return new Promise((rel)=>{
        this.setState({moveb:true})
        setTimeout(()=>{
          rel()
        },4000)
      })
    }).then(()=>{
        this.setState({movec:true})
      }).catch((error)=>{
      console.log(error)
    })
    
  }

    render() { 

      const {movea,moveb,movec} = this.state;
        return ( 
            <div className={`${movea?styles.movea:''} ${moveb?styles.moveb:''} ${movec?styles.movec:''} ${styles.bubble}`} ref={this.bubble} id={this.props.id}>{this.props.text}</div>
        );
    }
}
 
export default Bubble;
