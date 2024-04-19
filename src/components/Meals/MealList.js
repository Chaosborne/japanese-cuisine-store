import styles from './MealList.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Naomi Roll',
    description: 'Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame',
    price: 11.99,
  },
  {
    id: 'm2',
    name: 'Spice in the salmon',
    description: 'Rice, salmon, spice sauce',
    price: 3.99,
  },
  {
    id: 'm3',
    name: 'Eel sushi',
    description: 'Smoked eel, unagi sauce, sesame',
    price: 4.99,
  },
  {
    id: 'm4',
    name: 'Poke Salad with Salmon',
    description: 'Rice, salmon, cucumber, chuka, nori, tuna chips, walnut sauce',
    price: 7.99,
  },
];

const MealList = () => {
  const mealList = DUMMY_MEALS.map(meal => <li key={meal.name}>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <ul>{mealList}</ul>
    </section>
  );
};

export default MealList;
