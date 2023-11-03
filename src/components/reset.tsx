
import Answer_module from './Answer.module.scss';
import App_module from '../App.module.scss';
import Classnames from 'classnames';
import Reset_module from './reset.module.scss';
import Question_module from './Question.module.scss'; type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
}

function Reset(props: Props) {
    return (
        <div>
            <h1 className={Classnames(Question_module.question, Reset_module.h1)}>You scored: {(props.correctQuestions / props.totalQuestions) * 100}%</h1>
            <button onClick={props.onPress} className={Classnames(Answer_module.answer, App_module['next-btn'], Reset_module['reset-btn'])}>Press to Try Again</button>
        </div>);
}

export default Reset;