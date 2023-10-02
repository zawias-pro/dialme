const App = () => {
  const coffees: unknown[] = []

  return (
    <div>
      coffees:
      {coffees.map((coffee) => {
        return <div />
      })}
      <button>+ add</button>
    </div>
  )
}

export { App }
