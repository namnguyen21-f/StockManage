//Card for showing progress and current number of a title
//arg: title, number , icon(optionnal): Material Icon, progress (optionnal), onclick (optionnal)
const ProgressCardBody = ({title,number,icon,progress,onClickHandle}) => {
    return (
        <div key={title} className="card-body" 
            onClick={() => {
                if (onClickHandle) onClickHandle();
            }
        }>
            <div className="card-body__title">
                <div className="d-flex">
                    <h3>{number}</h3>
                    {progress && 
                        (parseInt(progress) >= 0 ? <span className="ml1 inc">+{progress}%</span> : 
                            <span className="ml1 dec">{progress}%</span> )}
                </div>
                <h4>{title}</h4>
            </div>
            {icon && <div className="card-body__icon">
                {icon}   
            </div>}
        </div>
    )
}
// Chart : CanvasChart , title : string ,content : React component for showing the in4
const ChartCard = ({chart, title, content}) => {
    return (
        <div className="card-body">
            {title && <div className="card-body__title">
                {title}
            </div>}
            <div className="card-body__chart">
                {chart}
            </div>
            {content && <div className="card-body__content">
                {content}
            </div>}
        </div>
    )
}

export {ProgressCardBody,ChartCard};