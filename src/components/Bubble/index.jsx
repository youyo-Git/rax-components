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
