import { useState, useEffect } from "react"
import './ListCategory.css';

function ListCategory() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://localhost:44303/api/Cateogry").then(res => res.json()).then(res => {
            setCategories(res);
        });
    }, []);

    function handleAdd() {

    }

    function handleRowClick(event){
        console.log(event);
    }

    return (
        <div className="list-category">

            <button type="submit" onClick={handleAdd} className="btn btn-primary">New</button>
            <br /><br />
            {
                categories &&
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(category =>
                                <tr onClick={()=>handleRowClick(category)}>
                                    <td scope="row">{category.id}</td>
                                    <td>{category.name}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table >
            }
        </div >
    );
}

export default ListCategory;