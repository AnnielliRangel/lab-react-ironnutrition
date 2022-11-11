import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox';
import { Row, Divider, Button, Input } from 'antd';
import SearchBar from './Components/SearchBar';
import AddFoodForm from './Components/AddFoodForm';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      {/* Display Add Food component here */}
      {showForm === true && (
        <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />
      )}

      <Button onClick={handleShowForm}>
        {showForm === true ? (
          <span> Hide Form</span>
        ) : (
          <span> Add New Food </span>
        )}{' '}
      </Button>

      {/* Display Search component here */}
      <SearchBar search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {allFoods
          .filter((food) => {
            return (
              food.name.toLocaleUpperCase().includes(search.toLowerCase()) ||
              String(food.calories).includes(search)
            );
          })

          .map((food) => {
            return (
              <FoodBox
                food={food}
                key={food.name}
                allFoods={allFoods}
                setAllFoods={setAllFoods}
              />
            );
          })}
      </Row>
    </div>
  );
}

export default App;
