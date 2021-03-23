import arrow from "./assets/desktop/icon-arrow-up.svg"
export default function MoreInfo(props){

    return(
        <div className="expand-control">
            <h6>more</h6>
            <button onClick={() => props.setExpanded(expanded => !expanded)}>
                <img src={arrow}/>
            </button>
        </div>
    )
}