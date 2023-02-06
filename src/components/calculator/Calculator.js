import styles from './calculator.module.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {calculate} from "../../redux/store/calcSlice";

export default function Calculator(){
    const [calc1, setCalc1] = useState('')
    const [calc2, setCalc2] = useState('')

    const dispatch = useDispatch()

    const {result} = useSelector(state => state.calcReducer)

    const plus = () => {
        dispatch(calculate(+calc1 + +calc2))
    }

    const minus = () => {
        dispatch(calculate(calc1 - calc2))
    }

    const multiplication = () => {
        dispatch(calculate(calc1 * calc2))
    }

    const division = () => {
        dispatch(calculate(calc1 / calc2))
    }

    const restart = () => {
        dispatch(calculate(calc1 === '', calc2 === ''))
        setCalc1('')
        setCalc2('')
    }

    return <>
        <h2 className={styles.title}>Calculator REDUX-TOOLKIT</h2>
        <div className={styles.calculatorContainer}>
            <div className={styles.calculatorInputContainer}>
                <input type="number" value={calc1} onChange={(e) => setCalc1(e.target.value)}  className={styles.calculatorInput}/>
                <input type="number" value={calc2} onChange={(e) => setCalc2(e.target.value)} className={styles.calculatorInput}/>
            </div>
            <br/>
            <div className={styles.calcButton}>
                <button onClick={plus} className={styles.calculatorButton}>+</button>
                <button onClick={minus} className={styles.calculatorButton}>-</button>
                <button onClick={multiplication} className={styles.calculatorButton}>*</button>
                <button onClick={division} className={styles.calculatorButton}>/</button>
                <button onClick={restart} >restart</button>
            </div>
            <br/>
            {
                calc1 > 0 || calc2 > 0
                ?
                <>
                    <h2>{result}</h2>
                </>
                :
                <p>Пусто....</p>
            }

        </div>
    </>
}