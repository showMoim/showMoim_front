
const Timer = ({second}) => {

    
    const secondToMinute = () => {
        const minute = parseInt(second / 60) 
        const s = second % 60
        return minute + " : " + s 
    }



    return <div className="mb-2 text-sm text-red-500">{secondToMinute()}</div>
}

export default Timer;