import React,{useState} from 'react'
import "./Style.css"
import Menu from "./Menu.js";
import MenuCard from './MenuCard';




const Rest = () => {
    const [menuData, setmenuData] = useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((e) => {
            return e.category === category;
        });
        setmenuData(updatedList);
    };

    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => setmenuData(Menu)}>
                        All
                    </button>
                    <button className="btn-group__item"
                    onClick={()=>filterItem("breakfast")}>
                        Breakfast
                    </button>
                    <button className="btn-group__item"
                    onClick={()=>filterItem("lunch")}>
                        Lunch
                    </button>
                    <button className="btn-group__item"
                    onClick={()=>filterItem("snacks")}>
                        Snacks
                    </button>
                    <button className="btn-group__item"
                    onClick={()=>filterItem("dinner")}>
                        Dinner
                    </button>


                </div>
            </nav>
            <MenuCard menuData={menuData} />

        </>
    );
};
    


export default Rest;
