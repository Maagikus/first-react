import './app-filter.css'
const AppFilter = ()=>{
    return(
        <div className="btn-group">
            <button 
            type="button"
            className="btn btn-light">Все сотрудники</button>
            <button 
            type="button"
            className="btn btn-outline-light">Сотрудники на повышение</button>
            <button 
            type="button"
            className="btn btn-outline-light">З/П ьольше 1000$</button>
        </div>
    )
}
export default AppFilter;