import { db } from '../database/db.ts'
import { useLiveQuery } from 'dexie-react-hooks'

const App = () => {
  const coffees = useLiveQuery(
    () => db.coffees.toArray()
  );
  const addCoffee = async (name) => {
    try {
      // Add the new friend!
      const id = await db.coffees.add({
        name,
      });
    } catch (error) {}
  }

  return (
    <div>
      coffees:
      <ul>
      {coffees?.map((coffee) => {
        return <li key={coffee.id}>{coffee.id}: {coffee.name}</li>
      })}
      </ul>
      <form onSubmit={(event) => {
        event.preventDefault()
        console.log(event)

        const coffeeName = event.target[0].value
        addCoffee(coffeeName)
      }}>
        <input type={'text'} />
        <button type={"submit"}>+ add</button>
      </form>
    </div>
  )
}

export { App }
