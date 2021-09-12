import { createElement, Component } from 'rax';
import styles from './index.module.css';
class Gold extends Component {

    render() { 
        const {activeMove} = this.props;
        return ( 
            <div className={activeMove?styles.goldanimate:''}></div>
        );
    }
}
 
export default Gold;