import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Makloub",
    description: "The most delicious Makloub in Tunisia",
    price: 8.99,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "An Italian specialty!",
    price: 12.5,
  },
  {
    id: "m3",
    name: "Chapati",
    description: "More delicious than Chapati Hay El Mileha!",
    price: 4.99,
  },
  {
    id: "m4",
    name: "Libanais",
    description: "The upgraded version of the Lebanese specialty!",
    price: 9.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
