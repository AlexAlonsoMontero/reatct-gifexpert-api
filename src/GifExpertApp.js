import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) =>{
        if( categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory 
                onNewCategory = { (value)=>{onAddCategory(value)}}
                currenCategories = { categories }
             />
            <hr />
            <ol>
                {
                    categories.map((category) => {
                        return (
                            <GifGrid 
                                key={ category }
                                category = { category }
                            />
                        )
                    })
                }
            </ol>


        </>

    )
}

export default GifExpertApp