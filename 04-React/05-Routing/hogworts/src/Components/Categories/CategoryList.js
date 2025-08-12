import React from 'react';
import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
    console.log(categories.slice(2).map(category => (category)));
    return (
        <div className="category-list">
            {/* add link to each of these */}
            <Link to={`/wiki/${categories[0].routeLink}`}>
                <CategoryCard key={categories[0].id} id="potions" categoryData={categories[0]} />
            </Link>
            <Link to={`/wiki/${categories[1].routeLink}`}>
                <CategoryCard key={categories[1].id} id="charms" categoryData={categories[1]} />
            </Link>

            {categories.slice(2).map(category => (
                // <Link to={`/wiki/${category.routeLink}`}>
                    <CategoryCard key={category.id} categoryData={category} />
                // </Link>
            ))}
        </div>
    );
}

export default CategoryList;
