/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */
import styles from "./Loading.module.css"

interface LoadingProps{
    width?:string
}
const Loading:React.FC =({width}:LoadingProps)=>{
    return (<div className={styles.loadingSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>)
}
export default Loading;
