import { createElement, Component, createRef,render} from 'rax';
import Bubble from '@/components/Bubble'
import styles from './index.module.css'

class BubbleWrap extends Component {
    state = {  }
    wrap = createRef()
    content = ['剑豪1--哈撒给','剑豪2--哦里牙痛','北斗神拳--哦嘛系哇木屋新得一路','佩恩--一袋米扛几楼']
    
    componentDidMount(){
        const {current} = this.wrap;
        let i = 0;

        const timerId = setInterval(()=>{
            render(<Bubble text={this.content[i]}></Bubble>, current)
            i++;
            if(i > this.content.length-1){
                i = 0;
            }
        },4000)
    }

    render() { 
        return ( 
            <div ref={this.wrap} className={styles.bubblewrap}></div>
        );
    }
}
 
export default BubbleWrap;